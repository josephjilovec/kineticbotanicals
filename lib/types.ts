export type ScentProfile = "Fresh" | "Earthy" | "Herbaceous" | "Calming";
export type WorkoutVibe = "High Intensity" | "Heavy Lifting" | "Yoga / Mobility";

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  profile: ScentProfile[];
  notes: string[];
  accent: string;
  tint: string;
  price: number;
  size: string;
  intensity: "Light" | "Balanced" | "Bold";
  description: string;
  ritual: string;
  badge?: string;
  workoutMatches: WorkoutVibe[];
};

export type CartItem = {
  product: Product;
  quantity: number;
};
