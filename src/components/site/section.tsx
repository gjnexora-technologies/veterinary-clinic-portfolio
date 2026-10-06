import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-pretty text-muted-foreground md:text-lg">{text}</p> : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "soft" | "cream";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "soft" && "gradient-soft",
        tone === "cream" && "bg-cream",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
