#!/usr/bin/env node
/**
 * Fetch all contacts from Brevo list #3 (Origami Digital Leads) and flag
 * spam candidates. Writes a report to marketing/brevo-spam-report.json.
 *
 * Does NOT delete anything — pair with brevo-spam-delete.mjs once the
 * report has been reviewed.
 *
 * Usage:  node scripts/brevo-spam-report.mjs
 */

import fs from 'node:fs/promises'
import path from 'node:path'

const API = 'https://api.brevo.com/v3'
const LIST_ID = 3
const PAGE_LIMIT = 50

async function loadEnv() {
  const envPath = path.resolve('.env.local')
  const content = await fs.readFile(envPath, 'utf8')
  for (const line of content.split('\n')) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.+)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2]
  }
}

async function fetchAllContacts(apiKey) {
  const contacts = []
  let offset = 0
  while (true) {
    const url = `${API}/contacts/lists/${LIST_ID}/contacts?limit=${PAGE_LIMIT}&offset=${offset}`
    const res = await fetch(url, {
      headers: { 'api-key': apiKey, accept: 'application/json' },
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`Brevo API ${res.status}: ${text}`)
    }
    const data = await res.json()
    const batch = data.contacts || []
    contacts.push(...batch)
    if (batch.length < PAGE_LIMIT) break
    offset += PAGE_LIMIT
    if (offset > 5000) break // safety cap
  }
  return contacts
}

const SPAM_KEYWORDS = [
  'guest post', 'backlink', 'link building', 'link exchange',
  'seo services', 'boost your ranking', 'first page of google',
  'rank higher', 'web hosting offer', 'bitcoin', 'crypto investment',
  'forex', 'binary options', 'casino', 'gambling', 'dating site',
  'hot singles', 'write an article', 'sponsored post',
]

function hasCyrillicOrCJK(s) {
  return /[\u0400-\u04FF\u4E00-\u9FFF\u3040-\u30FF]/.test(s || '')
}

function isSpam(contact) {
  const email = (contact.email || '').toLowerCase()
  const attrs = contact.attributes || {}
  const first = (attrs.FIRSTNAME || '').toLowerCase()
  const last = (attrs.LASTNAME || '').toLowerCase()
  const full = `${first} ${last}`.trim()
  const reasons = []

  // 1. Name looks like gibberish (random letters)
  if (first && first.length >= 8 && /^[a-z]+$/.test(first) && !/[aeiou]{1,2}/.test(first)) {
    reasons.push('name_no_vowels')
  }
  // 2. Name is all caps or all lowercase with 10+ chars (common bot pattern)
  if (first && first === first.toUpperCase() && first.length >= 10 && /^[A-Z]+$/.test(attrs.FIRSTNAME || '')) {
    reasons.push('name_all_caps')
  }
  // 3. Cyrillic or CJK in name
  if (hasCyrillicOrCJK(first) || hasCyrillicOrCJK(last)) {
    reasons.push('non_latin_name')
  }
  // 4. Email local-part is random-looking (no dot, no separator, 10+ chars)
  const localPart = email.split('@')[0] || ''
  if (localPart.length >= 12 && /^[a-z0-9]+$/.test(localPart) && !localPart.includes('.')) {
    // Check if it's likely random (too many consonants in a row)
    if (/[bcdfghjklmnpqrstvwxz]{5,}/.test(localPart)) {
      reasons.push('random_email_local')
    }
  }
  // 5. Name contains URL
  if (/https?:\/\/|www\./.test(full)) {
    reasons.push('url_in_name')
  }
  // 6. Name contains @ symbol
  if (full.includes('@')) {
    reasons.push('at_in_name')
  }
  // 7. Spam keywords in name or attributes
  const searchable = [full, attrs.SERVICE_INTEREST, attrs.LEAD_SOURCE, attrs.BUDGET]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
  for (const kw of SPAM_KEYWORDS) {
    if (searchable.includes(kw)) {
      reasons.push(`keyword:${kw}`)
      break
    }
  }
  // 8. First name is numeric or symbol-heavy
  if (first && /^[0-9\W]+$/.test(first)) {
    reasons.push('name_numeric')
  }
  // 9. Extremely long first name (>40 chars)
  if (first.length > 40) {
    reasons.push('name_too_long')
  }

  return reasons
}

async function main() {
  await loadEnv()
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) throw new Error('BREVO_API_KEY not set')

  console.log('Fetching contacts from Brevo list #3...')
  const contacts = await fetchAllContacts(apiKey)
  console.log(`Fetched ${contacts.length} contacts`)

  const spam = []
  const clean = []
  for (const c of contacts) {
    const reasons = isSpam(c)
    if (reasons.length > 0) {
      spam.push({
        id: c.id,
        email: c.email,
        firstName: c.attributes?.FIRSTNAME,
        lastName: c.attributes?.LASTNAME,
        source: c.attributes?.LEAD_SOURCE,
        service: c.attributes?.SERVICE_INTEREST,
        createdAt: c.createdAt,
        reasons,
      })
    } else {
      clean.push({
        id: c.id,
        email: c.email,
        firstName: c.attributes?.FIRSTNAME,
      })
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    total: contacts.length,
    spamCount: spam.length,
    cleanCount: clean.length,
    spam,
    clean,
  }

  await fs.mkdir('marketing', { recursive: true })
  await fs.writeFile(
    'marketing/brevo-spam-report.json',
    JSON.stringify(report, null, 2)
  )

  console.log('')
  console.log(`Total contacts:   ${contacts.length}`)
  console.log(`Flagged as spam:  ${spam.length}`)
  console.log(`Clean contacts:   ${clean.length}`)
  console.log('')
  console.log('Report written to marketing/brevo-spam-report.json')
  if (spam.length > 0) {
    console.log('')
    console.log('Sample spam candidates:')
    for (const s of spam.slice(0, 10)) {
      console.log(`  - ${s.email} (${s.firstName || ''} ${s.lastName || ''}) — ${s.reasons.join(', ')}`)
    }
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
