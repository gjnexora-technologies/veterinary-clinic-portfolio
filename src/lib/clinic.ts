/**
 * Editable clinic content. Replace the placeholder details below with the
 * clinic's real information — nothing else in the site needs to change.
 */

import heroVet from "@/assets/hero-vet.jpg";
import wellness from "@/assets/wellness.jpg";
import grooming from "@/assets/grooming.jpg";
import reception from "@/assets/clinic-reception.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import puppyKitten from "@/assets/puppy-kitten.jpg";
import catCare from "@/assets/cat-care.jpg";
import ownerDog from "@/assets/owner-dog.jpg";
import smallPets from "@/assets/small-pets.jpg";
import birds from "@/assets/birds.png";
import vet1 from "@/assets/vet-1.jpg";
import vet2 from "@/assets/vet-2.jpg";
import vet3 from "@/assets/vet-3.jpg";

export const images = {
  heroVet,
  wellness,
  grooming,
  reception,
  treatmentRoom,
  puppyKitten,
  catCare,
  ownerDog,
  smallPets,
  birds,
  vet1,
  vet2,
  vet3,
};

export const clinic = {
  name: "Riverdale Veterinary Clinic",
  short: "Riverdale Vet",
  tagline: "Healthy pets, happier lives.",
  address: "24 Riverdale Avenue, Greenfield, 560001",
  phone: "+1 (555) 014-2200",
  emergencyPhone: "+1 (555) 014-2911",
  email: "hello@riverdalevet.example",
  hours: [
    { day: "Monday – Friday", time: "8:00 am – 7:00 pm" },
    { day: "Saturday", time: "9:00 am – 5:00 pm" },
    { day: "Sunday", time: "10:00 am – 2:00 pm" },
  ],
  mapQuery: "24 Riverdale Avenue, Greenfield",
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Veterinarians", to: "/veterinarians" },
  { label: "Pet Care", to: "/pet-care" },
  { label: "Gallery", to: "/gallery" },
  { label: "Health Tips", to: "/health-tips" },
  { label: "Contact", to: "/contact" },
] as const;

export const quickServices = [
  { icon: "stethoscope", title: "Veterinary Care", text: "Professional medical care for pets." },
  { icon: "scissors", title: "Grooming", text: "Complete grooming and hygiene services." },
  { icon: "microscope", title: "Diagnostics", text: "Modern diagnostic services." },
  { icon: "siren", title: "Emergency Care", text: "Support for urgent pet health needs." },
  { icon: "heart", title: "Pet Wellness", text: "Preventive care for healthier, happier pets." },
] as const;

export const services = [
  {
    icon: "stethoscope",
    title: "General Veterinary Care",
    text: "Routine consultations, health assessments, and treatment.",
  },
  { icon: "syringe", title: "Vaccination", text: "Preventive vaccination programs for pets." },
  {
    icon: "microscope",
    title: "Pet Diagnostics",
    text: "Laboratory testing and diagnostic evaluation.",
  },
  {
    icon: "activity",
    title: "Surgery",
    text: "Professional surgical care with appropriate monitoring.",
  },
  {
    icon: "smile",
    title: "Dental Care",
    text: "Oral health assessments, cleaning, and dental care.",
  },
  {
    icon: "scissors",
    title: "Pet Grooming",
    text: "Bathing, grooming, nail care, coat care, and hygiene.",
  },
  {
    icon: "sparkles",
    title: "Dermatology",
    text: "Care for skin, coat, and allergy-related concerns.",
  },
  {
    icon: "salad",
    title: "Nutrition & Wellness",
    text: "Personalized guidance for healthy pet lifestyles.",
  },
  {
    icon: "shield",
    title: "Senior Pet Care",
    text: "Specialized wellness and monitoring for aging pets.",
  },
  { icon: "siren", title: "Emergency Care", text: "Support for urgent medical situations." },
  {
    icon: "pawPrint",
    title: "Puppy & Kitten Care",
    text: "Early-life health, vaccination, nutrition, and development support.",
  },
  {
    icon: "clipboard",
    title: "Preventive Health Checkups",
    text: "Regular health assessments designed to identify concerns early.",
  },
] as const;

export const whyUs = [
  {
    icon: "heart",
    title: "Compassionate Care",
    text: "Every pet is treated with patience and kindness.",
  },
  {
    icon: "users",
    title: "Experienced Veterinary Team",
    text: "Professional veterinary care focused on your pet's needs.",
  },
  {
    icon: "building",
    title: "Modern Facilities",
    text: "Clean, comfortable, and thoughtfully designed facilities.",
  },
  {
    icon: "pawPrint",
    title: "Complete Pet Care",
    text: "Medical care, grooming, wellness, and preventive services in one place.",
  },
  {
    icon: "leaf",
    title: "Pet-Friendly Environment",
    text: "A calm environment designed to reduce stress for pets.",
  },
  {
    icon: "sparkles",
    title: "Personalized Attention",
    text: "Care plans designed around each pet's individual needs.",
  },
] as const;

export const veterinarians = [
  {
    id: "dr-elena-moss",
    name: "Dr. Elena Moss",
    specialty: "General Veterinary Medicine",
    qualification: "Placeholder qualification",
    experience: "Placeholder years of experience",
    image: images.vet1,
    bio: "Elena enjoys slow, unhurried consultations and helping nervous pets feel safe in the exam room.",
    expertise: ["Preventive care", "Feline medicine", "Nutrition guidance"],
  },
  {
    id: "dr-adam-hale",
    name: "Dr. Adam Hale",
    specialty: "Pet Surgery & Internal Medicine",
    qualification: "Placeholder qualification",
    experience: "Placeholder years of experience",
    image: images.vet2,
    bio: "Adam focuses on careful surgical planning and clear, jargon-free explanations for pet owners.",
    expertise: ["Soft tissue surgery", "Internal medicine", "Pain management"],
  },
  {
    id: "dr-priya-nair",
    name: "Dr. Priya Nair",
    specialty: "Dermatology & Preventive Care",
    qualification: "Placeholder qualification",
    experience: "Placeholder years of experience",
    image: images.vet3,
    bio: "Priya works with itchy skin, allergies, and small companion animals, from rabbits to birds.",
    expertise: ["Skin & coat health", "Small pets", "Puppy and kitten care"],
  },
] as const;

export const groomingServices = [
  "Bath & Blow Dry",
  "Hair Trimming",
  "Nail Clipping",
  "Ear Cleaning",
  "Coat Care",
  "Breed-Specific Grooming",
  "Hygiene Care",
] as const;

export const carePlans = [
  {
    name: "Puppy Care",
    recommended: "Recommended for pets under 12 months",
    featured: false,
    items: [
      "Vaccination schedule",
      "Health checkups",
      "Nutrition guidance",
      "Preventive care",
    ],
  },
  {
    name: "Adult Pet Wellness",
    recommended: "Recommended for pets aged 1–7 years",
    items: ["Routine checkups", "Vaccinations", "Dental care", "Nutrition monitoring"],
    featured: true,
  },
  {
    name: "Senior Pet Care",
    recommended: "Recommended for pets aged 7+ years",
    featured: false,
    items: [
      "Regular health assessments",
      "Wellness monitoring",
      "Nutrition support",
      "Preventive care",
    ],
  },
] as const;

export const petTypes = [
  {
    id: "dogs",
    emoji: "🐶",
    label: "Dogs",
    image: images.ownerDog,
    services: [
      "Annual health checkups",
      "Vaccination & parasite prevention",
      "Dental cleaning",
      "Breed-specific grooming",
    ],
  },
  {
    id: "cats",
    emoji: "🐱",
    label: "Cats",
    image: images.catCare,
    services: [
      "Calm, cat-friendly consultations",
      "Vaccination programs",
      "Weight & nutrition plans",
      "Senior cat monitoring",
    ],
  },
  {
    id: "small-pets",
    emoji: "🐰",
    label: "Small Pets",
    image: images.smallPets,
    services: [
      "Rabbit & guinea pig checkups",
      "Dental and diet assessment",
      "Housing & enrichment advice",
      "Preventive health care",
    ],
  },
  {
    id: "birds",
    emoji: "🐦",
    label: "Birds",
    image: images.birds,
    services: [
      "Companion bird wellness checks",
      "Beak, feather and nail care",
      "Nutrition guidance",
      "Behaviour support",
    ],
  },
] as const;

export type GalleryCategory = "Dogs" | "Cats" | "Grooming" | "Clinic" | "Care";

export const gallery: {
  src: string;
  alt: string;
  category: GalleryCategory;
  tall?: boolean;
}[] = [
  { src: images.heroVet, alt: "Veterinarian with a golden retriever and a tabby cat", category: "Care" },
  { src: images.puppyKitten, alt: "A ginger kitten and golden retriever puppy together", category: "Dogs" },
  { src: images.catCare, alt: "Grey cat being examined by a veterinarian", category: "Cats", tall: true },
  { src: images.grooming, alt: "Pomeranian being blow dried at the grooming salon", category: "Grooming" },
  { src: images.reception, alt: "Bright clinic reception and waiting area", category: "Clinic" },
  { src: images.wellness, alt: "Veterinarian listening to a beagle's heart", category: "Care", tall: true },
  { src: images.treatmentRoom, alt: "Modern treatment and diagnostics room", category: "Clinic" },
  { src: images.ownerDog, alt: "Pet owner hugging her border collie outside the clinic", category: "Dogs" },
  { src: images.birds, alt: "Birds at the clinic", category: "Care" },
  { src: images.vet1, alt: "Dr. Elena Moss holding a long-haired cat", category: "Cats" },
  { src: images.vet2, alt: "Dr. Adam Hale with a labrador", category: "Dogs", tall: true },
  { src: images.vet3, alt: "Dr. Priya Nair holding a rabbit", category: "Care" },
];

export const healthTips = [
  {
    slug: "puppy-vaccination-basics",
    category: "Puppy Care",
    title: "Puppy vaccination basics",
    text: "What a first-year vaccination schedule usually looks like and how to prepare your puppy for each visit.",
    image: images.puppyKitten,
  },
  {
    slug: "cat-wellness",
    category: "Cats",
    title: "Cat wellness at every age",
    text: "Small signals that tell you a cat is thriving — and the ones worth a conversation with your vet.",
    image: images.catCare,
  },
  {
    slug: "pet-nutrition",
    category: "Nutrition",
    title: "Building a balanced bowl",
    text: "Portioning, treats, and how nutrition needs shift as your pet grows older.",
    image: images.wellness,
  },
  {
    slug: "dental-care",
    category: "Dental",
    title: "Dental care you can do at home",
    text: "Brushing routines, chew choices, and why oral health affects the whole body.",
    image: images.vet2,
  },
  {
    slug: "grooming-tips",
    category: "Grooming",
    title: "Grooming between salon visits",
    text: "Simple brushing and nail routines that keep coats comfortable all year round.",
    image: images.grooming,
  },
  {
    slug: "parasite-prevention",
    category: "Prevention",
    title: "Parasite prevention, season by season",
    text: "Fleas, ticks and worms — what to watch for and how prevention schedules work.",
    image: images.ownerDog,
  },
  {
    slug: "senior-pet-care",
    category: "Senior Pets",
    title: "Caring for a senior companion",
    text: "Mobility, comfort and monitoring changes that help older pets stay happy.",
    image: images.vet1,
  },
  {
    slug: "common-health-concerns",
    category: "Wellness",
    title: "Recognising common health concerns",
    text: "Appetite, energy, coat and toilet habits — everyday signals worth paying attention to.",
    image: images.treatmentRoom,
  },
] as const;

export const testimonials = [
  {
    petName: "Bailey",
    petType: "Dog",
    owner: "Priya S.",
    quote:
      "The team explained every step of Bailey's checkup and never rushed us. He now walks into the clinic wagging his tail.",
  },
  {
    petName: "Miso",
    petType: "Cat",
    owner: "Daniel R.",
    quote:
      "Miso hates carriers, but the calm waiting area and gentle handling made this the easiest visit we've had.",
  },
  {
    petName: "Pepper",
    petType: "Rabbit",
    owner: "Anita M.",
    quote:
      "Finding a clinic comfortable with small pets was hard. The advice on diet and housing was genuinely useful.",
  },
  {
    petName: "Rocky",
    petType: "Dog",
    owner: "Jonas K.",
    quote:
      "Clean, bright and friendly. Booking was simple and we got a reminder before the appointment.",
  },
];

export const facilities = [
  { title: "Reception", text: "A calm, welcoming first stop for you and your pet.", image: images.reception },
  { title: "Consultation Rooms", text: "Quiet spaces designed for unhurried conversations.", image: images.wellness },
  { title: "Treatment Rooms", text: "Well-equipped rooms for procedures and monitoring.", image: images.treatmentRoom },
  { title: "Grooming Area", text: "Bright, comfortable grooming with gentle handling.", image: images.grooming },
  { title: "Diagnostic Area", text: "Modern imaging and laboratory diagnostics.", image: images.treatmentRoom },
  { title: "Recovery & Waiting", text: "Soft, quiet spaces for resting and waiting.", image: images.reception },
];

export const serviceOptions = [
  "Veterinary Consultation",
  "Vaccination",
  "Grooming",
  "Diagnostics",
  "Dental Care",
  "Surgery Consultation",
  "Wellness Checkup",
  "Other",
] as const;

export const petTypeOptions = ["Dog", "Cat", "Rabbit", "Bird", "Small pet", "Other"] as const;
