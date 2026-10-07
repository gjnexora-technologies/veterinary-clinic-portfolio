import { Link } from "@tanstack/react-router";
import { CalendarHeart, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5 sm:p-3">
        <a
          href={`tel:${clinic.phone.replace(/\s/g, "")}`}
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-input bg-card px-2 text-xs font-medium min-[375px]:text-sm"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <Link
          to="/contact"
          className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full gradient-hero px-2 text-xs font-medium text-primary-foreground shadow-soft min-[375px]:text-sm"
        >
          <CalendarHeart className="size-4" aria-hidden="true" />
          <span className="min-[375px]:hidden">Book</span>
          <span className="hidden min-[375px]:inline">Book Appointment</span>
        </Link>
      </div>
    </div>
  );
}
