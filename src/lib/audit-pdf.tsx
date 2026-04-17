/**
 * Audit report PDF renderer.
 *
 * Consumes the AuditResult produced by `src/lib/audit-report.ts` and renders
 * a branded PDF as a Buffer ready to attach to an email or write to disk.
 *
 * Style follows the same brand tokens used in the lead-magnet checklist so
 * the two assets feel like a family.
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from '@react-pdf/renderer'
import type { AuditResult, AuditFinding } from './audit-report'

const COLORS = {
  bgDark: '#141414',
  bgCard: '#1E1E1E',
  accentBlue: '#0A8FBF',
  accentTeal: '#297373',
  coral: '#EF6351',
  white: '#FFFFFF',
  textLight: '#B0B0B0',
  textMuted: '#8A8A8A',
  border: '#2A2A2A',
  lightBg: '#F5F5F5',
  textDark: '#1E1E1E',
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.white,
    padding: 0,
    fontFamily: 'Helvetica',
    color: COLORS.textDark,
  },
  cover: {
    backgroundColor: COLORS.bgDark,
    color: COLORS.white,
    padding: 48,
    minHeight: 320,
  },
  eyebrow: {
    fontSize: 10,
    color: COLORS.accentBlue,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  h1: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
    color: COLORS.white,
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.textLight,
    marginBottom: 24,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 24,
    borderTop: `1pt solid ${COLORS.border}`,
    paddingTop: 16,
  },
  metaBlock: { flexDirection: 'column' },
  metaLabel: { fontSize: 8, color: COLORS.textMuted, textTransform: 'uppercase' },
  metaValue: { fontSize: 11, color: COLORS.white, marginTop: 2 },

  body: { padding: 40 },
  h2: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    marginTop: 24,
    marginBottom: 8,
    color: COLORS.textDark,
  },
  h3: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginTop: 12,
    marginBottom: 4,
    color: COLORS.textDark,
  },
  p: { fontSize: 10.5, lineHeight: 1.5, color: COLORS.textDark, marginBottom: 8 },
  muted: { fontSize: 9, color: COLORS.textMuted, lineHeight: 1.5, marginBottom: 8 },

  scoreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  scoreCard: {
    width: '23%',
    padding: 12,
    backgroundColor: COLORS.lightBg,
    borderRadius: 6,
    borderLeft: `3pt solid ${COLORS.accentBlue}`,
  },
  scoreLabel: { fontSize: 8, color: COLORS.textMuted, textTransform: 'uppercase' },
  scoreValue: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.textDark,
    marginTop: 2,
  },
  scoreUnit: { fontSize: 9, color: COLORS.textMuted, marginTop: -4 },

  finding: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: COLORS.lightBg,
    borderRadius: 4,
    borderLeft: `3pt solid ${COLORS.coral}`,
  },
  findingP2: { borderLeft: `3pt solid ${COLORS.accentBlue}` },
  findingP3: { borderLeft: `3pt solid ${COLORS.accentTeal}` },
  priorityTag: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  tagP1: { color: COLORS.coral },
  tagP2: { color: COLORS.accentBlue },
  tagP3: { color: COLORS.accentTeal },
  findingTitle: {
    fontSize: 11.5,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
    color: COLORS.textDark,
  },
  findingDetail: { fontSize: 10, lineHeight: 1.45, color: COLORS.textDark, marginBottom: 4 },
  findingAction: { fontSize: 9.5, lineHeight: 1.45, color: COLORS.accentTeal },

  footer: {
    marginTop: 32,
    paddingTop: 16,
    borderTop: `1pt solid ${COLORS.border}`,
  },
  ctaBox: {
    padding: 20,
    backgroundColor: COLORS.bgDark,
    borderRadius: 6,
    marginTop: 20,
  },
  ctaTitle: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: COLORS.white, marginBottom: 6 },
  ctaBody: { fontSize: 10, color: COLORS.textLight, lineHeight: 1.5, marginBottom: 8 },
  ctaLink: { fontSize: 10, color: COLORS.accentBlue },
})

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function priorityLabel(p: 1 | 2 | 3): string {
  return p === 1 ? 'Top priority' : p === 2 ? 'Recommended' : 'Nice to have'
}

function findingStyle(p: 1 | 2 | 3) {
  if (p === 2) return [styles.finding, styles.findingP2]
  if (p === 3) return [styles.finding, styles.findingP3]
  return [styles.finding]
}

function tagStyle(p: 1 | 2 | 3) {
  if (p === 2) return [styles.priorityTag, styles.tagP2]
  if (p === 3) return [styles.priorityTag, styles.tagP3]
  return [styles.priorityTag, styles.tagP1]
}

function FindingRow({ f }: { f: AuditFinding }) {
  return (
    <View style={findingStyle(f.priority)} wrap={false}>
      <Text style={tagStyle(f.priority)}>{priorityLabel(f.priority)} · {f.category.replace('-', ' ')}</Text>
      <Text style={styles.findingTitle}>{f.title}</Text>
      <Text style={styles.findingDetail}>{f.detail}</Text>
      {f.action ? <Text style={styles.findingAction}>→ {f.action}</Text> : null}
    </View>
  )
}

function ScoreCard({ label, value, suffix }: { label: string; value: number | null | undefined; suffix?: string }) {
  return (
    <View style={styles.scoreCard}>
      <Text style={styles.scoreLabel}>{label}</Text>
      <Text style={styles.scoreValue}>{value ?? '—'}</Text>
      {suffix ? <Text style={styles.scoreUnit}>{suffix}</Text> : null}
    </View>
  )
}

function AuditDocument({ result }: { result: AuditResult }) {
  const lh = result.lighthouse
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.cover}>
          <Text style={styles.eyebrow}>Website Audit Report</Text>
          <Text style={styles.h1}>{result.host}</Text>
          <Text style={styles.subtitle}>Prepared by Origami Digital · {formatDate(result.generatedAt)}</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaBlock}>
              <Text style={styles.metaLabel}>URL audited</Text>
              <Text style={styles.metaValue}>{result.url}</Text>
            </View>
            <View style={styles.metaBlock}>
              <Text style={styles.metaLabel}>Findings</Text>
              <Text style={styles.metaValue}>{result.findings.length} items</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          {lh ? (
            <>
              <Text style={styles.h2}>Mobile performance scorecard</Text>
              <Text style={styles.muted}>
                Lighthouse scores (out of 100) via Google PageSpeed Insights, run against the mobile experience.
              </Text>
              <View style={styles.scoreGrid}>
                <ScoreCard label="Performance" value={lh.performance} />
                <ScoreCard label="Accessibility" value={lh.accessibility} />
                <ScoreCard label="Best Practices" value={lh.bestPractices} />
                <ScoreCard label="SEO" value={lh.seo} />
              </View>
              <View style={styles.scoreGrid}>
                <ScoreCard
                  label="LCP"
                  value={lh.lcpMs !== null ? Math.round(lh.lcpMs / 100) / 10 : null}
                  suffix={lh.lcpMs !== null ? 'seconds (target <2.5s)' : undefined}
                />
                <ScoreCard
                  label="CLS"
                  value={lh.clsScore !== null ? Math.round((lh.clsScore ?? 0) * 1000) / 1000 : null}
                  suffix="layout shift (target <0.1)"
                />
                <ScoreCard
                  label="INP"
                  value={lh.inpMs}
                  suffix={lh.inpMs !== null ? 'ms (target <200ms)' : undefined}
                />
              </View>
            </>
          ) : (
            <>
              <Text style={styles.h2}>Mobile performance scorecard</Text>
              <Text style={styles.muted}>
                Lighthouse data was not available for this audit. The recommendations below are based on page-content signals only.
              </Text>
            </>
          )}

          <Text style={styles.h2}>Findings, ranked by impact</Text>
          {result.findings.length === 0 ? (
            <Text style={styles.p}>
              No critical issues detected. This is rare and a good sign — your site is already covering the fundamentals.
              Book a deeper review if you want targeted recommendations for growth.
            </Text>
          ) : (
            result.findings.map((f, i) => <FindingRow key={i} f={f} />)
          )}

          <View style={styles.ctaBox}>
            <Text style={styles.ctaTitle}>Want us to implement these fixes?</Text>
            <Text style={styles.ctaBody}>
              We offer implementation packages starting from the single biggest wins in this report. No retainers,
              no long-term lock-in — we fix what moves the needle and hand it back to you.
            </Text>
            <Text style={styles.ctaLink}>Book a no-obligation call · origami-digital.co.za/contact</Text>
          </View>

          {result.notes.length > 0 ? (
            <View style={styles.footer}>
              <Text style={styles.h3}>Notes</Text>
              {result.notes.map((n, i) => (
                <Text style={styles.muted} key={i}>· {n}</Text>
              ))}
            </View>
          ) : null}

          <View style={styles.footer}>
            <Text style={styles.muted}>
              This report is a starting point. Every finding above has a recommended action; the top-priority items are
              the ones we'd tackle first on your behalf. Questions? Reply to the email this was attached to —
              that inbox is monitored by a human.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export async function renderAuditPdf(result: AuditResult): Promise<Buffer> {
  return await renderToBuffer(<AuditDocument result={result} />)
}
