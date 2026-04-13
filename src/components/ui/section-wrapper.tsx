import { type ReactNode } from "react";

interface SectionWrapperProps {
  className?: string;
  children: ReactNode;
  dark?: boolean;
  id?: string;
}

export function SectionWrapper({
  className = "",
  children,
  dark = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={[
        "py-20 md:py-28 lg:py-32 px-4",
        dark
          ? "bg-[#1E1E1E] text-white"
          : "bg-white text-[#1E1E1E]",
        className,
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
