import { Link } from "@tanstack/react-router";
import { CalendarHeart, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${clinic.phone.replace(/\s/g, "")}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-input bg-card text-sm font-medium"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <Link
          to="/contact"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full gradient-hero text-sm font-medium text-primary-foreground shadow-soft"
        >
          <CalendarHeart className="size-4" aria-hidden="true" />
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
