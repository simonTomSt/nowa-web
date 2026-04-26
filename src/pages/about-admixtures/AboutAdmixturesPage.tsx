import architectureImg from "../../assets/architecture.jpg";
import PageHero from "../../components/PageHero";

export default function AboutAdmixturesPage() {
  return (
    <PageHero
      title="About admixtures"
      description="The use of admixtures for concrete has many advantages and benefits that have a positive impact on the quality and properties of this material."
      backgroundImage={architectureImg}
    />
  );
}
