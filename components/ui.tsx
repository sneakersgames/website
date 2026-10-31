import Image from "next/image";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export function Arrow({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  );
}

export function ButtonLink({ children, className = "", variant = "purple", external = false, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: "purple" | "lime" | "outline"; external?: boolean }) {
  return (
    <a className={`button button-${variant} ${className}`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...props}>
      <span>{children}</span>
      <Arrow diagonal={external} />
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" aria-label="SneakersGames home" className={`wordmark${footer ? " wordmark-footer" : ""}`}>
      <Image src="/sneakersgames-logo.jpeg" width={2752} height={1536} alt="SneakersGames" loading={footer ? "lazy" : "eager"} fetchPriority={footer ? "auto" : "high"} sizes={footer ? "136px" : "160px"} />
    </a>
  );
}

export function SectionLabel({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return <p className={`section-label${light ? " section-label-light" : ""}`}><span>{number}</span>{children}</p>;
}
