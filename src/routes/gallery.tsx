import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid, PageIntro, Section, SectionHeading } from "@/components/site/blocks";
import { images } from "@/lib/clinic";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Pet Gallery | Riverdale Veterinary Clinic" },
      { name: "description", content: "A peek at happy pets, caring visits, grooming, and the bright spaces at Riverdale Veterinary Clinic." },
      { property: "og:title", content: "Pet Gallery | Riverdale Veterinary Clinic" },
      { property: "og:description", content: "Meet some of the pets, people, and spaces that make Riverdale feel like home." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageIntro eyebrow="Little moments" title="A little joy in every visit." text="Happy pets, gentle care, and bright spaces — take a look around Riverdale." image={images.heroVet} alt="Veterinarian sharing a happy moment with a dog and cat" />
      <Section>
        <SectionHeading eyebrow="Our gallery" title="The faces of Riverdale." text="Browse by the moments that matter to you." />
        <GalleryGrid />
      </Section>
    </>
  );
}