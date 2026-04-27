import euLogos from "../../assets/eu_logos.png";
import Container from "./Container";

export default function BrandingStrip() {
  return (
    <section className="bg-white border-t border-gray-200">
      <Container className="py-6 flex justify-center">
        <a href="/eu-projects" aria-label="Projekty UE">
          <img
            src={euLogos}
            alt="Fundusze Europejskie – Program Regionalny, Rzeczpospolita Polska, Województwo Łódzkie, Unia Europejska – Europejski Fundusz Rozwoju Regionalnego"
            className="max-h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </a>
      </Container>
    </section>
  );
}
