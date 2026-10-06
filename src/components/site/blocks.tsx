import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Heart,
  MapPin,
  PawPrint,
  Phone,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  carePlans,
  clinic,
  facilities,
  gallery,
  groomingServices,
  healthTips,
  images,
  petTypeOptions,
  petTypes,
  quickServices,
  serviceOptions,
  services,
  testimonials,
  veterinarians,
  whyUs,
  type GalleryCategory,
} from "@/lib/clinic";
import { Icon } from "./icon";
import { Reveal } from "./reveal";
import { Section, SectionHeading } from "./section";

export { Section, SectionHeading } from "./section";

const categories = ["All", "Dogs", "Cats", "Grooming", "Clinic", "Care"] as const;
type CategoryFilter = (typeof categories)[number];

export function PageIntro({
  eyebrow,
  title,
  text,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="container-page pt-8 md:pt-12">
      <div className="relative isolate grid min-h-[330px] overflow-hidden rounded-[2rem] bg-primary md:min-h-[420px] md:grid-cols-[1fr_0.95fr]">
        <div className="absolute inset-0 -z-10 md:inset-y-0 md:left-[40%] md:right-0">
          <img src={image} alt={alt} className="size-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent md:from-primary md:via-primary/30" />
        </div>
        <div className="flex flex-col justify-center p-7 text-primary-foreground md:p-12 lg:p-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-xl text-balance font-display text-4xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            {text}
          </p>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}

export function QuickServiceBar() {
  return (
    <div className="container-page -mt-8 relative z-10">
      <div className="grid overflow-hidden rounded-3xl border border-border/80 bg-card shadow-soft sm:grid-cols-2 lg:grid-cols-5">
        {quickServices.map((service, index) => (
          <Link
            key={service.title}
            to="/services"
            className={`group flex items-center gap-3 p-4 transition-colors hover:bg-secondary/70 ${index < quickServices.length - 1 ? "lg:border-r lg:border-border" : ""}`}
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-transform group-hover:-rotate-6">
              <Icon name={service.icon} className="size-5" />
            </span>
            <span>
              <span className="block font-display text-sm font-semibold">{service.title}</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                {service.text}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ServiceGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => (
        <Reveal key={service.title} delay={(i % 3) * 55}>
          <article className="group flex h-full flex-col rounded-2xl border border-border/80 bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift md:p-6">
            <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition-transform group-hover:scale-105">
              <Icon name={service.icon} className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
            <Link
              to="/contact"
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Ask about this service <ArrowRight className="size-4" />
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {whyUs.map((item, i) => (
        <Reveal key={item.title} delay={(i % 3) * 60}>
          <article className="flex gap-4 py-3">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
              <Icon name={item.icon} className="size-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function WellnessFeature() {
  const items = [
    "Routine health checks",
    "Vaccination",
    "Nutrition guidance",
    "Parasite prevention",
    "Dental care",
    "Weight management",
    "Preventive wellness",
  ];
  return (
    <Section tone="soft">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 size-24 rounded-full bg-sun/40" />
          <img
            src={images.wellness}
            alt="Veterinarian performing a calm wellness check with a beagle"
            width={1408}
            height={1408}
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-soft md:right-8">
            <span className="grid size-11 place-items-center rounded-full bg-accent text-accent-foreground">
              <Heart className="size-5" />
            </span>
            <span className="text-sm font-semibold">Care for every life stage</span>
          </div>
        </Reveal>
        <Reveal>
          <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Complete Pet Wellness
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight md:text-4xl">
            Little check-ins. <span className="text-gradient-brand">A lifetime of care.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A thoughtful wellness routine can help you stay ahead of everyday care. We work with
            you to build a plan that fits your pet, their age, and your family's questions.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to="/pet-care">
              Explore Pet Wellness <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

export function VeterinarianCards({ limit }: { limit?: number }) {
  const people = limit ? veterinarians.slice(0, limit) : veterinarians;
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, i) => (
        <Reveal key={person.id} delay={i * 65}>
          <article className="overflow-hidden rounded-2xl border border-border/80 bg-card transition-all hover:-translate-y-1 hover:shadow-lift">
            <img
              src={person.image}
              alt={`${person.name}, ${person.specialty}`}
              width={912}
              height={1104}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-top"
            />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {person.specialty}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">{person.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {person.qualification} · {person.experience}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {person.expertise.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link to="/contact">Book with {person.name.split(" ")[1]}</Link>
              </Button>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function PetTypeExplorer() {
  const [selected, setSelected] = useState<(typeof petTypes)[number]["id"]>(petTypes[0].id);
  const pet = petTypes.find((item) => item.id === selected) ?? petTypes[0];
  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
        {petTypes.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={selected === item.id}
            onClick={() => setSelected(item.id)}
            className={`group overflow-hidden rounded-2xl border text-left transition-all ${selected === item.id ? "border-primary ring-2 ring-primary/30 shadow-soft" : "border-border bg-card hover:-translate-y-0.5 hover:shadow-soft"}`}
          >
            <img src={item.image} alt="" className="aspect-[1.6/1] w-full object-cover" loading="lazy" />
            <span className="flex items-center gap-2 p-3 font-display text-sm font-semibold sm:p-4">
              <span aria-hidden="true">{item.emoji}</span> {item.label}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col justify-center rounded-3xl bg-card p-6 shadow-soft md:p-9" aria-live="polite">
        <span className="text-4xl" aria-hidden="true">{pet.emoji}</span>
        <h3 className="mt-3 font-display text-2xl font-semibold">Care for {pet.label.toLowerCase()}</h3>
        <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">
          Every companion has their own needs. Find a gentle, considered approach with a team who
          takes the time to get to know them.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {pet.services.map((service) => (
            <li key={service} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {service}
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" className="mt-7 w-fit">
          <Link to="/contact">Ask about {pet.label.toLowerCase()} care <ArrowRight /></Link>
        </Button>
      </div>
    </div>
  );
}

export function GroomingFeature() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <Reveal className="order-2 lg:order-1">
        <span className="inline-flex rounded-full bg-sun/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sun-foreground">
          Fresh, clean & happy
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight md:text-4xl">
          A little pampering goes a long way.
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          From a refreshing bath to a careful trim, our grooming visits are tailored to your pet's
          coat, comfort, and personality. We'll go at their pace.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3">
          {groomingServices.map((service) => (
            <li key={service} className="flex items-center gap-2 text-sm">
              <Check className="size-4 shrink-0 text-primary" /> {service}
            </li>
          ))}
        </ul>
        <Button asChild variant="sun" size="lg" className="mt-8">
          <Link to="/contact">Book Grooming <ArrowRight /></Link>
        </Button>
      </Reveal>
      <Reveal className="order-1 lg:order-2">
        <img
          src={images.grooming}
          alt="A fluffy white Pomeranian enjoying a gentle grooming session"
          width={1408}
          height={1008}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
        />
      </Reveal>
    </div>
  );
}

export function CarePlanCards() {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-3">
      {carePlans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 60}>
          <article className={`flex h-full flex-col rounded-2xl border p-6 ${plan.featured ? "border-primary/45 bg-secondary/55 shadow-soft" : "border-border bg-card"}`}>
            {plan.featured ? (
              <span className="mb-3 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                A popular choice
              </span>
            ) : null}
            <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{plan.recommended}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 shrink-0 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              We'll tailor recommendations with you. No pricing or medical guarantees implied.
            </p>
            <Button asChild variant={plan.featured ? "hero" : "outline"} className="mt-5 w-full">
              <Link to="/contact">Ask about this plan</Link>
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function TestimonialCards({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <Reveal key={item.petName} delay={(i % 4) * 45}>
          <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft">
            <span className="flex gap-1 text-sun-foreground" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => <Heart key={index} className="size-3.5 fill-sun" />)}
            </span>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <span className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground">
                <PawPrint className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{item.owner}</span>
                <span className="block text-xs text-muted-foreground">{item.petName} · {item.petType}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
      <p className="text-xs text-muted-foreground sm:col-span-2 lg:col-span-4">
        Sample testimonials for layout preview. Replace with approved client feedback before publishing.
      </p>
    </div>
  );
}

export function EmergencyBand() {
  return (
    <section className="container-page py-8">
      <div className="grid gap-6 rounded-[2rem] bg-primary p-6 text-primary-foreground md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/75">Here when you need us</span>
          <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Is your pet in an emergency?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            For urgent or life-threatening situations, contact the clinic or your local emergency veterinary service immediately. We do not claim 24/7 availability.
          </p>
        </div>
        <Button asChild variant="onDark" size="lg">
          <a href={`tel:${clinic.emergencyPhone.replace(/\s/g, "")}`}>
            <Phone /> Call Emergency Care
          </a>
        </Button>
      </div>
    </section>
  );
}

export function CallToActionBand() {
  return (
    <section className="container-page py-8">
      <div className="grid gap-6 overflow-hidden rounded-[2rem] bg-accent p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Your pet deserves the best care.</h2>
          <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
            Tell us a little about your companion. We'll help you find the right next step.
          </p>
        </div>
        <Button asChild variant="hero" size="lg">
          <Link to="/contact">Book an Appointment <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  );
}

export function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [filter, setFilter] = useState<CategoryFilter>("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const items = useMemo(
    () => gallery.map((item, index) => ({ ...item, originalIndex: index })).filter((item) => filter === "All" || item.category === filter),
    [filter],
  );
  const visible = preview ? items.slice(0, 6) : items;
  const chosen = selectedImage === null ? undefined : gallery[selectedImage];
  const move = (delta: number) => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + delta + gallery.length) % gallery.length);
  };

  return (
    <>
      <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery">
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={filter === category ? "default" : "outline"}
            size="sm"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="mt-8 grid auto-rows-[165px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((item) => (
          <Reveal
            key={`${item.originalIndex}-${filter}`}
            className={`group relative overflow-hidden rounded-2xl bg-secondary ${item.tall ? "row-span-2" : ""}`}
          >
            <button
              type="button"
              className="absolute inset-0 size-full cursor-zoom-in"
              onClick={() => setSelectedImage(item.originalIndex)}
              aria-label={`Open image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/65 to-transparent p-4 pt-10 text-left text-sm font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                {item.alt}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      {preview ? (
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/gallery">See the whole gallery <ArrowRight /></Link>
          </Button>
        </div>
      ) : null}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl border-0 bg-foreground p-2 text-background sm:p-3">
          {chosen ? (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>Gallery photo</DialogTitle>
                <DialogDescription>{chosen.alt}</DialogDescription>
              </DialogHeader>
              <div className="relative grid min-h-64 place-items-center overflow-hidden rounded-xl bg-foreground">
                <img src={chosen.src} alt={chosen.alt} className="max-h-[78vh] w-full object-contain" />
                <Button variant="onDark" size="icon" className="absolute left-3 top-1/2 -translate-y-1/2" aria-label="Previous photo" onClick={() => move(-1)}>
                  <ChevronLeft />
                </Button>
                <Button variant="onDark" size="icon" className="absolute right-3 top-1/2 -translate-y-1/2" aria-label="Next photo" onClick={() => move(1)}>
                  <ChevronRight />
                </Button>
                <p className="absolute inset-x-0 bottom-0 bg-foreground/65 px-5 py-3 text-sm text-background">{chosen.alt}</p>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function HealthTipCards({ preview = false }: { preview?: boolean }) {
  const [article, setArticle] = useState<(typeof healthTips)[number] | null>(null);
  const items = preview ? healthTips.slice(0, 3) : healthTips;
  return (
    <>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((tip, i) => (
          <Reveal key={tip.slug} delay={(i % 3) * 55}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all hover:-translate-y-1 hover:shadow-lift">
              <img src={tip.image} alt="" loading="lazy" className="aspect-[1.7/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{tip.category}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{tip.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
                <Button variant="link" className="mt-4 w-fit px-0" onClick={() => setArticle(tip)}>
                  Read More <ArrowRight />
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
        Online information does not replace professional veterinary consultation. Contact a veterinary professional for advice about your pet.
      </p>
      <Dialog open={Boolean(article)} onOpenChange={(open) => !open && setArticle(null)}>
        <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-xl">
          {article ? (
            <>
              <img src={article.image} alt="" className="aspect-[1.8/1] w-full rounded-xl object-cover" />
              <DialogHeader>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{article.category}</span>
                <DialogTitle className="pt-2 font-display text-2xl">{article.title}</DialogTitle>
                <DialogDescription className="pt-2 text-base leading-relaxed">{article.text}</DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every pet is different. If you notice a change or have questions about your companion, a veterinarian can help you decide what is appropriate for them. We are happy to talk through your concerns during a visit.
              </p>
              <Button asChild variant="hero" className="w-fit"><Link to="/contact">Talk with our team <ArrowRight /></Link></Button>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [petType, setPetType] = useState("");
  const [service, setService] = useState("");
  const [vet, setVet] = useState("");
  const [time, setTime] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    try {
      const subject = encodeURIComponent(`Appointment request — ${String(values["petName"] ?? "pet")}`);
      const body = encodeURIComponent(
        `Owner: ${values["ownerName"]}\nPhone: ${values["phone"]}\nEmail: ${values["email"]}\nPet: ${values["petName"]} (${values["petType"]})\nAge: ${values["petAge"]}\nService: ${values["service"]}\nPreferred veterinarian: ${values["veterinarian"]}\nPreferred date: ${values["date"]}\nPreferred time: ${values["time"]}\nNotes: ${values["notes"] || "—"}`,
      );
      window.location.href = `mailto:${clinic.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "h-12 rounded-xl bg-background";
  const selectClass = "h-12 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

  if (status === "success") {
    return (
      <div role="status" className="rounded-3xl border border-primary/25 bg-secondary/55 p-7 md:p-10">
        <span className="grid size-14 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-7" /></span>
        <h2 className="mt-5 font-display text-2xl font-semibold">Your request is ready</h2>
        <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
          Your email app should open with the appointment details addressed to {clinic.email}. Please send the email to complete your request; call the clinic if it doesn't open.
        </p>
        <Button variant="outline" className="mt-5" onClick={() => setStatus("idle")}>Make another request</Button>
      </div>
    );
  }

  return (
    <form className="rounded-3xl border border-border/80 bg-card p-5 shadow-soft md:p-8" onSubmit={submit}>
      <fieldset disabled={status === "sending"} className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
        <legend className="mb-5 text-lg font-semibold">Your details</legend>
        <div className="space-y-2">
          <Label htmlFor="ownerName">Owner name *</Label>
          <Input className={inputClass} id="ownerName" name="ownerName" placeholder="Your full name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input className={inputClass} id="phone" name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" required />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="email">Email *</Label>
          <Input className={inputClass} id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        </div>

        <div className="border-t border-border pt-5 sm:col-span-2">
          <p className="text-lg font-semibold">About your pet</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="petName">Pet name *</Label>
          <Input className={inputClass} id="petName" name="petName" placeholder="Your pet's name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="petType">Pet type *</Label>
          <select id="petType" name="petType" required className={selectClass} value={petType} onChange={(e) => setPetType(e.target.value)}>
            <option value="" disabled>Select pet type</option>
            {petTypeOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="petAge">Pet age</Label>
          <Input className={inputClass} id="petAge" name="petAge" placeholder="e.g. 3 years" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service *</Label>
          <select id="service" name="service" required className={selectClass} value={service} onChange={(e) => setService(e.target.value)}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
        <div className="border-t border-border pt-5 sm:col-span-2">
          <p className="text-lg font-semibold">Your preferred visit</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="veterinarian">Preferred veterinarian</Label>
          <select id="veterinarian" name="veterinarian" className={selectClass} value={vet} onChange={(e) => setVet(e.target.value)}>
            <option value="">No preference</option>
            {veterinarians.map((person) => <option key={person.id} value={person.name}>{person.name}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Preferred date *</Label>
          <Input className={inputClass} id="date" name="date" type="date" min={new Date().toISOString().slice(0, 10)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Preferred time *</Label>
          <select id="time" name="time" className={selectClass} required value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="" disabled>Select a time</option>
            {["Morning (8 am – 12 pm)", "Midday (12 pm – 3 pm)", "Afternoon (3 pm – 7 pm)"].map((option) => <option key={option}>{option}</option>)}
          </select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="notes">Anything else we should know?</Label>
          <Textarea className="min-h-28 rounded-xl bg-background" id="notes" name="notes" placeholder="Share any questions or helpful details about your pet." />
        </div>
      </fieldset>
      {status === "error" ? <p role="alert" className="mt-4 text-sm text-destructive">We couldn't open your email app. Please call {clinic.phone} to request an appointment.</p> : null}
      <Button type="submit" variant="hero" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Preparing request…" : "Book Appointment"} <ArrowRight />
      </Button>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        This form prepares an email on your device; your request is not sent until you send that email. For urgent concerns, call the clinic directly.
      </p>
    </form>
  );
}

export function ContactDetails() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-semibold">Come say hello</h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">We'd love to meet you and your companion.</p>
      </div>
      <div className="space-y-4">
        <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-secondary/60">
          <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary"><Phone className="size-5" /></span>
          <span><span className="block text-xs text-muted-foreground">Call the clinic</span><span className="font-semibold">{clinic.phone}</span></span>
        </a>
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
          <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary"><MapPin className="size-5" /></span>
          <span><span className="block text-xs text-muted-foreground">Find us</span><span className="font-semibold">{clinic.address}</span></span>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
          <span className="grid size-11 place-items-center rounded-full bg-secondary text-primary"><Clock3 className="size-5" /></span>
          <span><span className="block text-xs text-muted-foreground">Opening hours</span><span className="font-semibold">See today's hours below</span></span>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <h3 className="font-display font-semibold">Opening hours</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {clinic.hours.map((item) => <li key={item.day} className="flex justify-between gap-3"><span>{item.day}</span><span className="text-muted-foreground">{item.time}</span></li>)}
        </ul>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        For urgent or life-threatening situations, contact the clinic or your local emergency veterinary service immediately. Emergency availability varies; please call first.
      </p>
    </div>
  );
}

export function FacilityCards() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {facilities.map((facility, i) => (
        <Reveal key={facility.title} delay={(i % 3) * 50}>
          <article className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={facility.image} alt={facility.title} loading="lazy" className="aspect-[1.6/1] w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold">{facility.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{facility.text}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function ContactMap() {
  const query = encodeURIComponent(clinic.mapQuery);
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <iframe
        title="Map showing Riverdale Veterinary Clinic"
        src={`https://maps.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[330px] w-full border-0 md:h-[400px]"
      />
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm"><MapPin className="size-4 text-primary" />{clinic.address}</p>
        <a className="inline-flex items-center gap-2 text-sm font-semibold text-primary" href={`https://maps.google.com/?q=${query}`} target="_blank" rel="noreferrer">
          Open in Maps <ArrowDownRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

export function AboutPhilosophy() {
  const values = [
    { title: "Compassion", text: "Every visit starts with listening and gentle handling." },
    { title: "Professional care", text: "Thoughtful veterinary support, explained in everyday language." },
    { title: "Prevention", text: "Small routines can make it easier to stay attentive to wellbeing." },
    { title: "Comfort", text: "A bright, welcoming space helps visits feel a little less daunting." },
    { title: "Education", text: "We make room for questions so you can feel informed and supported." },
    { title: "Long-term wellness", text: "Care that grows and changes along with your companion." },
  ];
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value, i) => (
        <Reveal key={value.title} delay={(i % 3) * 50}>
          <article className="h-full rounded-2xl bg-card p-5">
            <span className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground"><PawPrint className="size-4" /></span>
            <h3 className="mt-4 font-display text-lg font-semibold">{value.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function InlineLink({ to, children }: { to: "/about" | "/services" | "/veterinarians" | "/pet-care" | "/gallery" | "/health-tips" | "/contact"; children: ReactNode }) {
  return <Link to={to} className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3">{children}<ArrowRight className="size-4" /></Link>;
}

export function PetPlanSection() {
  return (
    <Section tone="soft">
      <SectionHeading
        eyebrow="A little extra care"
        title="Give your pet a healthier year."
        text="Choose a starting point for your pet's life stage. We'll tailor recommendations together — no fixed pricing or one-size-fits-all promises."
      />
      <CarePlanCards />
    </Section>
  );
}

export function ContactBookingHeading() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-sm font-semibold text-primary"><CalendarDays className="size-4" /> A simple first step</div>
      <h2 className="mt-2 font-display text-2xl font-semibold">Tell us about your pet</h2>
      <p className="mt-2 leading-relaxed text-muted-foreground">Share your preferred details. We'll help you find a suitable visit.</p>
    </div>
  );
}

export function PetCareIntro() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <Reveal>
        <img src={images.puppyKitten} alt="Ginger kitten and golden retriever puppy sitting together" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
      </Reveal>
      <Reveal>
        <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">Every age, every stage</span>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">The right care changes as they grow.</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">From first visits to slower senior years, a regular relationship with your veterinary team gives you space to ask questions and make a plan that fits.</p>
        <div className="mt-6"><InlineLink to="/contact">Talk with our team</InlineLink></div>
      </Reveal>
    </div>
  );
}

export function AboutWelcome() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
      <Reveal>
        <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">A place to feel at home</span>
        <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Because they're family.</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">We believe good care begins with kindness and clear conversations. Our clinic brings everyday veterinary support, grooming, preventive care, and owner education together in a calm, welcoming place.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">Whether it's a first puppy visit or a check-in for a longtime companion, we'll meet you where you are, listen carefully, and help map out a thoughtful next step.</p>
        <Button asChild variant="hero" size="lg" className="mt-7"><Link to="/about">Our approach <ArrowRight /></Link></Button>
      </Reveal>
      <Reveal>
        <img src={images.ownerDog} alt="A pet owner sharing a happy moment with her border collie outside the clinic" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
      </Reveal>
    </div>
  );
}

export function FacilitiesHighlight() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <Reveal className="relative">
        <img src={images.reception} alt="Bright Riverdale Veterinary Clinic reception and waiting area" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
      </Reveal>
      <Reveal>
        <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">Cleanliness · comfort · modern care</span>
        <h2 className="mt-4 font-display text-3xl font-semibold">A bright place to feel at ease.</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">From the welcome at reception to a quiet consultation, each part of the clinic is thoughtfully arranged for pets and their people.</p>
        <div className="mt-6"><InlineLink to="/about">Explore our facilities</InlineLink></div>
      </Reveal>
    </div>
  );
}

export function ServicesImageStrip() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
      {[
        { src: images.catCare, alt: "A calm cat receiving a checkup" },
        { src: images.grooming, alt: "A dog enjoying a grooming visit" },
        { src: images.treatmentRoom, alt: "Bright treatment room" },
        { src: images.puppyKitten, alt: "A puppy and kitten together" },
      ].map((item) => <img key={item.alt} src={item.src} alt={item.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" />)}
    </div>
  );
}

export function HeroActionLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild variant="hero" size="lg">
        <Link to="/contact">
          Book an Appointment <ArrowRight />
        </Link>
      </Button>
      <Button asChild variant="onDark" size="lg">
        <Link to="/services">Explore Our Services</Link>
      </Button>
    </div>
  );
}

export function TeamTrustNote() {
  return <p className="mt-6 text-xs leading-relaxed text-muted-foreground">Team names are fictional and qualifications, experience, and biographies are clearly marked placeholders for the clinic to replace.</p>;
}

export function HealthTipIntroBand() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {[
        { title: "Ask early", text: "A small question is always worth bringing to your next visit." },
        { title: "Know your pet", text: "Noticing everyday patterns can help you explain what's changed." },
        { title: "Keep a record", text: "Notes on food, routines, and concerns can help guide a conversation." },
      ].map((item, i) => <Reveal key={item.title} delay={i * 50}><div className="h-full rounded-2xl bg-card p-5"><span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-4" /></span><h3 className="mt-3 font-display font-semibold">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div></Reveal>)}
    </div>
  );
}

export function ImageQuote() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-[2rem]">
      <img src={images.heroVet} alt="A veterinarian sharing a calm moment with a dog and cat" loading="lazy" className="h-[300px] w-full object-cover md:h-[420px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
      <p className="absolute inset-x-5 bottom-6 max-w-2xl font-display text-2xl font-semibold text-primary-foreground md:bottom-10 md:left-10 md:text-4xl">“Healthy pets, happier lives.”</p>
    </div>
  );
}

export function PhotoStrip() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { src: images.reception, alt: "Bright clinic reception" },
        { src: images.treatmentRoom, alt: "Modern treatment room" },
        { src: images.grooming, alt: "Pet grooming area" },
      ].map((item) => <img key={item.alt} src={item.src} alt={item.alt} loading="lazy" className="aspect-[1.4/1] w-full rounded-2xl object-cover" />)}
    </div>
  );
}

export function GalleryCategoriesText() {
  const labels: GalleryCategory[] = ["Dogs", "Cats", "Grooming", "Clinic", "Care"];
  return <span className="sr-only">Gallery categories: {labels.join(", ")}</span>;
}

export function EmptyStateIcon() {
  return <X className="sr-only" aria-hidden="true" />;
}