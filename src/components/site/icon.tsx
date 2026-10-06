import {
  Activity,
  Building2,
  ClipboardCheck,
  Heart,
  Leaf,
  Microscope,
  PawPrint,
  Salad,
  Scissors,
  Shield,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  activity: Activity,
  building: Building2,
  clipboard: ClipboardCheck,
  heart: Heart,
  leaf: Leaf,
  microscope: Microscope,
  pawPrint: PawPrint,
  salad: Salad,
  scissors: Scissors,
  shield: Shield,
  siren: Siren,
  smile: Smile,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  syringe: Syringe,
  users: Users,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = map[name] ?? PawPrint;
  return <Component className={className} aria-hidden="true" />;
}
