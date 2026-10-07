import { Link } from "@tanstack/react-router";
import { Mail, MapPin, PawPrint, Phone } from "lucide-react";
import { clinic, navLinks } from "@/lib/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card/70">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-2xl gradient-hero text-primary-foreground">
              <PawPrint className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold">{clinic.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Compassionate veterinary care, modern treatment, and complete wellness services for the
            pets who make your family whole.
          </p>
          <div className="mt-5 flex gap-3">
            {clinic.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide">Visit us</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {clinic.address}
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${clinic.phone.replace(/\s/g, "")}`}>{clinic.phone}</a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${clinic.email}`} className="min-w-0 break-all">
                {clinic.email}
              </a>
            </li>
          </ul>
          <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
            {clinic.hours.map((h) => (
              <li key={h.day}>
                <span className="font-medium text-foreground">{h.day}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All details on this site are placeholders
            and easy to edit.
          </p>
          <p>Online information does not replace professional veterinary consultation.</p>
        </div>
      </div>
    </footer>
  );
}
