import React from "react";
import Container from "./layout/Container";

type OverlayIntensity = "light" | "medium" | "dark";
type Alignment = "left" | "center";

interface PageHeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  overlayIntensity?: OverlayIntensity;
  alignment?: Alignment;
}

const overlayClasses: Record<OverlayIntensity, string> = {
  light: "bg-gradient-to-r from-black/50 via-black/35 to-black/15",
  medium: "bg-gradient-to-r from-black/70 via-black/50 to-black/25",
  dark: "bg-gradient-to-r from-black/85 via-black/70 to-black/45",
};

export default function PageHero({
  title,
  description,
  backgroundImage,
  overlayIntensity = "medium",
  alignment = "left",
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center min-h-[65vh] bg-cover bg-center bg-[image:var(--page-hero-bg)] rounded-br-[3rem] overflow-hidden"
      style={{ "--page-hero-bg": `url(${backgroundImage})` } as React.CSSProperties}
    >
      <div className={`absolute inset-0 ${overlayClasses[overlayIntensity]}`} />
      <div className="absolute inset-0 shadow-[inset_0_0_100px_30px_rgba(0,0,0,0.4)]" />

      <Container
        className={`relative z-10 pt-40 pb-24 ${alignment === "center" ? "text-center" : ""}`}
      >
        <div className={`max-w-2xl ${alignment === "center" ? "mx-auto" : ""}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
