import { createFileRoute } from "@tanstack/react-router";
import { CallToActionBand, PageIntro, Section, SectionHeading, TeamTrustNote, VeterinarianCards } from "@/components/site/blocks";
import { images } from "@/lib/clinic";

export const Route = createFileRoute("/veterinarians")({
  head: () => ({
    meta: [
      { title: "Meet Our Veterinarians | Riverdale Veterinary Clinic" },
      { name: "description", content: "Meet the veterinary team at Riverdale, with sample profiles for general medicine, surgery, dermatology, and preventive care." },
      { property: "og:title", content: "Meet the Riverdale Veterinary Team" },
      { property: "og:description", content: "Friendly faces and thoughtful veterinary care for every kind of companion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VeterinariansPage,
});

function VeterinariansPage() {
  return (
    <>
      <PageIntro eyebrow="Meet your care team" title="People who care about the little things." text="Get to know the friendly faces behind your pet's care. We take the time to listen, explain, and make every visit feel personal." image={images.wellness} alt="Veterinarian with a beagle during a wellness check" />
      <Section>
        <SectionHeading eyebrow="Our veterinarians" title="A team with a gentle touch." text="Our sample profiles show the kind of introductions that will help pet owners get to know your real team." />
        <VeterinarianCards />
        <TeamTrustNote />
      </Section>
      <CallToActionBand />
    </>
  );
}