import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, PawPrint, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic, navLinks } from "@/lib/clinic";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-soft"
            : "bg-background/60 backdrop-blur-md",
        )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className="container-page flex h-16 items-center justify-between gap-2 py-2 sm:h-18 sm:gap-4 sm:py-3">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 sm:gap-2.5"
            aria-label={`${clinic.name} home`}
          >
            <span className="grid size-10 place-items-center rounded-2xl gradient-hero text-primary-foreground shadow-soft">
              <PawPrint className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block truncate font-display text-sm font-semibold tracking-tight sm:text-base">
                {clinic.name}
              </span>
              <span className="block truncate text-[11px] text-muted-foreground sm:text-xs">
                {clinic.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground",
                  pathname === link.to && "bg-secondary text-secondary-foreground",
                )}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" className="hidden sm:inline-flex">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] overflow-hidden xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-foreground/30 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(86%,24rem)] flex-col gap-1 overflow-y-auto bg-card p-6 pt-8 shadow-lift transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="font-display text-lg font-semibold">Menu</span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X />
            </Button>
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary",
                pathname === link.to && "bg-secondary text-secondary-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="lg" className="mt-4">
            <Link to="/contact">Book Appointment</Link>
          </Button>
          <a
            href={`tel:${clinic.phone.replace(/\s/g, "")}`}
            className="mt-3 text-center text-sm text-muted-foreground"
          >
            Call {clinic.phone}
          </a>
        </nav>
      </div>
    </>
  );
}
