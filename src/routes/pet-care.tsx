import { createFileRoute } from "@tanstack/react-router";
import { CarePlanCards, CallToActionBand, GroomingFeature, PageIntro, PetCareIntro, PetTypeExplorer, Section, SectionHeading } from "@/components/site/blocks";
import { images } from "@/lib/clinic";

export const Route = createFileRoute("/pet-care")({
  head: () => ({
    meta: [
      { title: "Pet Care & Wellness Plans | Riverdale Veterinary Clinic" },
      { name: "description", content: "Explore pet grooming, life-stage wellness plans, and caring guidance for dogs, cats, birds, rabbits, and small pets." },
      { property: "og:title", content: "Pet Care & Wellness at Riverdale" },
      { property: "og:description", content: "Grooming, wellness plans, and everyday support for companions at every age." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PetCarePage,
});

function PetCarePage() {
  return (
    <>
      <PageIntro eyebrow="A little extra care" title="Good days start with feeling your best." text="Wellness, grooming, and life-stage support for the companions who make every day brighter." image={images.puppyKitten} alt="A golden retriever puppy sitting beside a ginger kitten" />
      <Section><PetCareIntro /></Section>
      <Section tone="soft">
        <SectionHeading eyebrow="For every age and stage" title="Give your pet a healthier year." text="A starting point for the conversations that help shape a plan around your pet." />
        <CarePlanCards />
      </Section>
      <Section>
        <GroomingFeature />
      </Section>
      <Section tone="cream">
        <SectionHeading eyebrow="Every kind of companion" title="Care for every kind of companion." text="Explore a few of the ways our team supports different pets and their unique needs." />
        <PetTypeExplorer />
      </Section>
      <CallToActionBand />
    </>
  );
}