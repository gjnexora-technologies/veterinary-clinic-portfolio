import { createFileRoute } from "@tanstack/react-router";
import { CallToActionBand, EmergencyBand, PageIntro, Section, SectionHeading, ServiceGrid } from "@/components/site/blocks";
import { images } from "@/lib/clinic";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Veterinary Services | Riverdale Veterinary Clinic" },
      { name: "description", content: "Explore veterinary consultations, vaccination, diagnostics, grooming, dental care, surgery consultations, and preventive wellness at Riverdale." },
      { property: "og:title", content: "Veterinary Services at Riverdale" },
      { property: "og:description", content: "Everyday veterinary care, grooming, diagnostics, and wellness services for your companion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Here for every stage" title="Everything your pet needs, under one roof." text="From puppy and kitten visits to thoughtful senior care, our services bring everyday wellbeing together in one welcoming clinic." image={images.treatmentRoom} alt="Bright modern veterinary treatment and diagnostics room" />
      <Section>
        <SectionHeading eyebrow="Our services" title="A thoughtful range of care." text="Tell us what your pet needs and our team can help you find the right next step." />
        <ServiceGrid />
      </Section>
      <EmergencyBand />
      <CallToActionBand />
    </>
  );
}