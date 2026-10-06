import { createFileRoute } from "@tanstack/react-router";
import { HealthTipCards, HealthTipIntroBand, PageIntro, Section, SectionHeading } from "@/components/site/blocks";
import { images } from "@/lib/clinic";

export const Route = createFileRoute("/health-tips")({
  head: () => ({
    meta: [
      { title: "Pet Health Tips & Guides | Riverdale Veterinary Clinic" },
      { name: "description", content: "Approachable pet care guides about puppies, cats, nutrition, dental care, grooming, parasite prevention, and senior pets." },
      { property: "og:title", content: "Pet Health Tips | Riverdale Veterinary Clinic" },
      { property: "og:description", content: "Everyday pet care knowledge for the questions that come with loving a companion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HealthTipsPage,
});

function HealthTipsPage() {
  return (
    <>
      <PageIntro eyebrow="A little knowledge" title="Better care starts with better knowledge." text="Clear, approachable reads for the everyday questions that come with loving a pet. Have a concern? Your veterinary team is always the best place to start." image={images.catCare} alt="A cat being gently examined at a veterinary clinic" />
      <Section tone="soft">
        <SectionHeading eyebrow="Everyday guidance" title="A good place to start." text="Small, helpful reads for the questions that come up between visits." />
        <HealthTipIntroBand />
      </Section>
      <Section>
        <SectionHeading eyebrow="From our care library" title="Helpful reads for pet people." text="Browse by topic and take your next question into a conversation with your veterinary team." />
        <HealthTipCards />
      </Section>
    </>
  );
}