import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";
import blobGrad from "../../../assets/blob-grad.svg";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  background?: "white" | "slate";
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServiceSection({
  id,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "right",
  background = "white",
  ctaLabel,
  ctaHref,
}: ServiceSectionProps) {
  const paragraphs = description.split("\n\n").filter(Boolean);

  return (
    <section
      id={id}
      className={`relative py-20 lg:py-28 overflow-hidden scroll-mt-20 ${
        background === "slate" ? "bg-slate-50" : "bg-white"
      }`}
    >
      <img
        src={imagePosition === "right" ? bgBlobGradient : blobGrad}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute select-none w-[420px] opacity-15 ${
          imagePosition === "right"
            ? "-top-16 -right-32"
            : "-bottom-20 -left-28"
        }`}
      />

      <Container className="relative z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center ${
            imagePosition === "left" ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              {title}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((para) => (
                <p key={para.slice(0, 32)} className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            {ctaLabel && ctaHref && (
              <div>
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity duration-150 shadow-md shadow-accent/25"
                >
                  {ctaLabel}
                </a>
              </div>
            )}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
