import { createFileRoute } from "@tanstack/react-router";
import { AppointmentForm, CallToActionBand, ContactBookingHeading, ContactDetails, ContactMap, PageIntro, Section } from "@/components/site/blocks";
import { images } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book an Appointment | Riverdale Veterinary Clinic" },
      { name: "description", content: "Contact Riverdale Veterinary Clinic, view opening hours, or prepare an appointment request for your pet." },
      { property: "og:title", content: "Contact Riverdale Veterinary Clinic" },
      { property: "og:description", content: "Get in touch, find the clinic, and request your pet's next visit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Let's talk" title="Your pet deserves the best care." text="Tell us a little about your companion. We'll help you find a time and the right next step." image={images.ownerDog} alt="Pet owner sharing a happy moment with her dog" />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <ContactDetails />
          <div><ContactBookingHeading /><AppointmentForm /></div>
        </div>
      </Section>
      <Section tone="soft">
        <div className="mb-7">
          <h2 className="font-display text-2xl font-semibold">Find your way to us</h2>
          <p className="mt-2 text-muted-foreground">Map and clinic address are editable placeholders.</p>
        </div>
        <ContactMap />
      </Section>
      <CallToActionBand />
    </>
  );
}