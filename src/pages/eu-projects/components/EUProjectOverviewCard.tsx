import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";
import euLogos from "../../../assets/eu_logos.png";

export default function EUProjectOverviewCard() {
  return (
    <section className="relative bg-slate-50 py-16 lg:py-24 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-32 w-[500px] opacity-15 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-lg p-8 lg:p-12">
          <div className="flex justify-center mb-8">
            <img
              src={euLogos}
              alt="Fundusze Europejskie – Program Regionalny, Rzeczpospolita Polska, Województwo Łódzkie, Unia Europejska – Europejski Fundusz Rozwoju Regionalnego"
              className="max-h-16 w-auto object-contain"
            />
          </div>

          <hr className="border-slate-200 mb-8" />

          <p className="text-lg lg:text-xl font-bold text-gray-900 leading-snug">
            „Wdrożenie własnych wyników prac B+R dotyczących opracowania drobnowymiarowych elementów murowych oraz innowacyjnych izolacyjnych materiałów ściennych"
          </p>

          <p className="mt-5 text-sm text-gray-600 leading-relaxed">
            w ramach konkursu numer RPLD.02.03.01.-IP.02-10-080/22 ogłoszonego w ramach
            regionalnego programu operacyjnego województwa łódzkiego na lata 2014-2020{" "}
            <span className="font-semibold text-gray-700">
              OŚ PRIORYTETOWA II: INNOWACYJNA I KONKURENCYJNA GOSPODARKA
              DZIAŁANIE II.3: ZWIĘKSZENIE KONKURENCYJNOŚCI MŚP
              PODDZIAŁANIE II.3.1: INNOWACJE W MŚP
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
