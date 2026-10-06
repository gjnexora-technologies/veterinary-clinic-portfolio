import { createFileRoute } from "@tanstack/react-router";
import { AboutPhilosophy, CallToActionBand, FacilityCards, ImageQuote, PageIntro, Section, SectionHeading } from "@/components/site/blocks";
import { images } from "@/lib/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Riverdale | A Kinder Kind of Veterinary Care" },
      { name: "description", content: "Learn about Riverdale Veterinary Clinic's approach to compassionate care, prevention, comfort, and lifelong pet wellness." },
      { property: "og:title", content: "About Riverdale Veterinary Clinic" },
      { property: "og:description", content: "A welcoming clinic built around compassion, thoughtful care, and pets' comfort." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Our story" title="Because they're family." text="A warm, thoughtful place for pets and the people who love them. We believe the best care begins with kindness, listening, and clear conversations." image={images.ownerDog} alt="Pet owner sharing a happy moment with her border collie outside the clinic" />
      <Section>
        <SectionHeading eyebrow="What matters to us" title="Care shaped around real life." text="Our philosophy keeps the pet, the person, and the relationship between them at the heart of every visit." />
        <AboutPhilosophy />
      </Section>
      <Section tone="soft">
        <ImageQuote />
      </Section>
      <Section>
        <SectionHeading eyebrow="Our space" title="Cleanliness, comfort, modern care." text="Explore the spaces designed to make visits feel welcoming, calm, and considered." />
        <FacilityCards />
      </Section>
      <CallToActionBand />
    </>
  );
}