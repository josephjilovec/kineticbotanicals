import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kinetic Botanicals",
    short_name: "Kinetic",
    description: "Gym-bag aromatic roll-ons for active routines.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e8",
    theme_color: "#151a17",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
