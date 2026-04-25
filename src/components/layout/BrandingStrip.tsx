import euLogos from "../../assets/eu_logos.png";
import Container from "./Container";

export default function BrandingStrip() {
  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <Container className="py-6 flex justify-center">
        <img src={euLogos} alt="EU funding logos" className="max-h-20 w-auto object-contain" />
      </Container>
    </section>
  );
}
