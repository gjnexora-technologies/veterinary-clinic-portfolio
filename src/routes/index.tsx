import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, PawPrint, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AboutWelcome,
  CallToActionBand,
  EmergencyBand,
  FacilitiesHighlight,
  GalleryGrid,
  HealthTipCards,
  HeroActionLinks,
  PetTypeExplorer,
  QuickServiceBar,
  Section,
  SectionHeading,
  ServiceGrid,
  TestimonialCards,
  VeterinarianCards,
  WellnessFeature,
  WhyChooseUs,
} from "@/components/site/blocks";
import { Reveal } from "@/components/site/reveal";
import { clinic, images } from "@/lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riverdale Veterinary Clinic | Exceptional Care for Every Paw" },
      { name: "description", content: "Compassionate veterinary care, grooming, diagnostics, and wellness for dogs, cats, and small pets in Greenfield." },
      { property: "og:title", content: "Riverdale Veterinary Clinic | Exceptional Care for Every Paw" },
      { property: "og:description", content: "Compassionate veterinary care, grooming, diagnostics, and wellness for every companion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="container-page pt-5 md:pt-8">
        <div className="relative isolate grid min-h-[590px] overflow-hidden rounded-[2rem] bg-primary md:min-h-[680px] md:grid-cols-[0.9fr_1.1fr]">
          <div className="absolute inset-0 -z-10 md:inset-y-0 md:left-[34%] md:right-0">
            <img src={images.heroVet} alt="Veterinarian with a happy golden retriever and tabby cat at the clinic" width={1920} height={1280} fetchPriority="high" className="size-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/5 md:from-primary md:via-primary/40 md:to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col justify-center p-7 text-primary-foreground md:p-12 lg:p-16">
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold backdrop-blur">
              <PawPrint className="size-4" /> CARE FOR EVERY COMPANION
            </span>
            <h1 className="max-w-xl text-balance font-display text-5xl font-semibold leading-[1.04] md:text-6xl">
              Exceptional care <span className="text-sun">for every paw.</span>
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              Compassionate veterinary care, modern treatment, and complete wellness services for the pets who make your family whole.
            </p>
            <div className="mt-8"><HeroActionLinks /></div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/85">
              <span className="inline-flex items-center gap-2"><Heart className="size-4 text-sun" /> Care with kindness</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-sun" /> Thoughtful wellness</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="size-4 text-sun" /> A calmer visit</span>
            </div>
          </div>
          <div className="hidden md:block" />
          <a href="#services" aria-label="Explore our services" className="absolute bottom-6 right-7 z-10 grid size-11 place-items-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur transition-transform hover:translate-y-1">
            <ArrowRight className="size-5 rotate-90" />
          </a>
        </div>
      </section>

      <QuickServiceBar />

      <Section id="services">
        <SectionHeading eyebrow="Care under one roof" title="Everything your pet needs, under one roof." text="From everyday checkups to grooming and diagnostics, our team is here for the moments big and small." />
        <ServiceGrid limit={6} />
        <div className="mt-8 text-center"><Button asChild variant="outline"><Link to="/services">See all services <ArrowRight /></Link></Button></div>
      </Section>

      <WellnessFeature />

      <Section>
        <SectionHeading eyebrow="Why Riverdale" title="Good care starts with feeling understood." text="A friendly team, thoughtful spaces, and a personal approach to every pet." />
        <WhyChooseUs />
      </Section>

      <Section tone="cream">
        <SectionHeading eyebrow="All kinds of companions" title="Care for every kind of companion." text="Choose a pet to see some of the ways we can support their everyday wellbeing." />
        <PetTypeExplorer />
      </Section>

      <Section>
        <SectionHeading eyebrow="Meet the team" title="People who care about the little things." text="Get to know the friendly faces who will take the time to know your pet, too." />
        <VeterinarianCards limit={3} />
        <p className="mt-5 text-center text-xs text-muted-foreground">Fictional profile examples with placeholder qualifications and experience; replace with approved clinic details.</p>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="A peek inside" title="Little moments, big personalities." text="A few snapshots from the pets, people, and spaces that make Riverdale feel like home." />
        <GalleryGrid preview />
      </Section>

      <Section>
        <AboutWelcome />
      </Section>

      <Section tone="cream">
        <SectionHeading eyebrow="From pet parents" title="Kind words from our community." text="Sample testimonials for layout preview. Replace with approved client feedback before publishing." />
        <TestimonialCards limit={3} />
      </Section>

      <Section>
        <FacilitiesHighlight />
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="Good to know" title="Better care starts with better knowledge." text="Clear, approachable reads for the everyday questions that come with loving a pet." />
        <HealthTipCards preview />
        <div className="mt-8 text-center"><Button asChild variant="outline"><Link to="/health-tips">Browse all health tips <ArrowRight /></Link></Button></div>
      </Section>

      <EmergencyBand />
      <CallToActionBand />
      <div className="container-page py-8 text-center text-xs text-muted-foreground">{clinic.name} · Thoughtful care for every paw.</div>
    </>
  );
}
