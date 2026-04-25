import teamImage from "../../../assets/team.jpg";
import dotsPattern from "../../../assets/dots.png";
import Container from "../../../components/layout/Container";

export default function WhoWeAreSection() {
  return (
    <section className="relative bg-white py-16 lg:py-28 overflow-hidden">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0">

          <div className="relative lg:z-0 lg:shrink-0 lg:w-[420px] lg:ml-16">
            <img
              src={dotsPattern}
              alt=""
              aria-hidden="true"
              className="hidden lg:block pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-36 z-10"
            />
            <img
              src={teamImage}
              alt="Our team at work"
              className="relative z-20 w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="bg-accent rounded-2xl px-6 py-10 sm:px-10 sm:py-12 lg:-ml-16 lg:z-10 lg:flex-1 lg:px-24 lg:py-20 lg:min-h-[420px] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
              Who We Are?
            </h2>
            <p className="mt-4 lg:mt-5 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed lg:max-w-xl">
              We are an experienced team of specialists with over 10 years of experience in the
              concrete chemical admixtures and construction laboratories industry. We represent
              youth, creativity, and openness to innovation. Our achievements in creating
              innovative products for concrete, including chemical admixtures, and conducting
              research in our construction laboratory, constitute the foundation of our activity.
              We stand out in the market thanks to our passion, full commitment, and constant
              pursuit of improving our products and services.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-3 h-11 px-6 lg:h-12 lg:px-7 rounded-lg border border-white/60 text-white font-medium text-sm hover:bg-white/10 transition-colors duration-150"
              >
                Get to know us better
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
