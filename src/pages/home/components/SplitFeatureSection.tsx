import type { LucideIcon } from "lucide-react";
import Container from "../../../components/layout/Container";

interface FeatureItem {
  icon: LucideIcon;
  label: string;
}

interface FloatingCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SplitFeatureSectionProps {
  direction: "left" | "right";
  heading: string;
  description: string;
  features: FeatureItem[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  card: FloatingCard;
  blob: { src: string; side: "left" | "right" };
}

export default function SplitFeatureSection({
  direction,
  heading,
  description,
  features,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  card,
  blob,
}: SplitFeatureSectionProps) {
  const imageFirst = direction === "left";

  const cardBody = (
    <>
      <FloatingCardIcon icon={card.icon} />
      <p className="mt-4 text-white font-semibold text-base leading-snug">{card.title}</p>
      <p className="mt-2 text-white/80 text-sm leading-relaxed">{card.description}</p>
    </>
  );

  const imageBlock = (
    <div className="relative">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-72 sm:h-96 lg:h-[480px] object-cover rounded-2xl shadow-[0_8px_60px_-8px_rgba(52,166,220,0.45),0_30px_80px_-10px_rgba(100,120,220,0.25)]"
      />
      <div className="hidden lg:block absolute -bottom-8 left-6 max-w-[300px] bg-accent rounded-2xl p-6 shadow-[0_8px_40px_-4px_rgba(52,166,220,0.6),0_24px_80px_-8px_rgba(80,100,200,0.35)]">
        {cardBody}
      </div>
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
        {heading}
      </h2>
      <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
        {description}
      </p>
      <div className="mt-8 grid grid-cols-2 gap-6">
        {features.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col gap-3">
            <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <Icon size={18} />
            </span>
            <p className="text-sm font-semibold text-gray-800 leading-snug">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 h-11 px-6 rounded-lg border border-accent text-accent font-medium text-sm hover:bg-accent/10 transition-colors duration-150"
        >
          {ctaLabel}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative py-16 lg:py-24 overflow-hidden">
      <img
        src={blob.src}
        aria-hidden="true"
        className={`pointer-events-none select-none absolute top-1/2 -translate-y-1/2 w-[600px] opacity-60 ${
          blob.side === "right" ? "-right-48" : "-left-48"
        }`}
      />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center">
          {imageFirst ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
        {/* Desktop card is position:absolute inside the image block — this renders it for mobile */}
        <div className="lg:hidden mt-6 bg-accent rounded-2xl p-6 shadow-[0_8px_40px_-4px_rgba(52,166,220,0.6),0_24px_80px_-8px_rgba(80,100,200,0.35)]">
          {cardBody}
        </div>
      </Container>
    </div>
  );
}

function FloatingCardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
      <Icon size={20} />
    </span>
  );
}
