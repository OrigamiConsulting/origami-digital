import { type ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
  hover?: boolean;
}

export function Card({ className = "", children, hover = false }: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl overflow-hidden bg-white",
        "transition-all duration-300 ease-out",
        hover
          ? "hover:-translate-y-1 hover:shadow-xl shadow-md cursor-pointer"
          : "shadow-md",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

interface CardSectionProps {
  className?: string;
  children: ReactNode;
}

export function CardHeader({ className = "", children }: CardSectionProps) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>;
}

export function CardContent({ className = "", children }: CardSectionProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }: CardSectionProps) {
  return (
    <div className={`p-6 pt-0 mt-auto ${className}`}>{children}</div>
  );
}
