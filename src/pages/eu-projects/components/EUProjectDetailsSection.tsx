import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function EUProjectDetailsSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-40 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-accent shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Cel projektu
            </h2>
          </div>

          <div className="space-y-5 text-base text-gray-600 leading-relaxed">
            <p>
              Celem projektu jest zwiększenie konkurencyjności Firmy na rynku krajowym,
              dzięki zaproponowaniu rozwiązania, którego obecnie w Polsce nie oferuje żaden
              inny podmiot. W wyniku projektu Wnioskodawca planuje wdrożyć autorskie
              rozwiązania, które zostały opracowane w laboratorium należącym do Firmy.
            </p>
            <p>
              Rezultat projektu wpisuje się w obecne trendy rynkowe dotyczące rozwiązań
              pro-środowiskowych i jest odpowiedzią na problemy rynku, w tym na rosnące
              wyzwania termomodernizacyjne i brak ekologicznych i ekonomicznych alternatyw
              w produkcji materiałów ściennych i izolacyjnych. Rezultat będzie dedykowany
              zarówno dla klientów indywidualnych, jak również dla Firm m.in. cały rynek
              materiałów ściennych, izolacyjnych (w tym hurtownie i deweloperzy).
            </p>
            <p>
              Projekt zakłada realizację dwóch zadań: zakup środków trwałych oraz zakup
              oprogramowania. Lokalizacja projektu: woj. Łódzkie. Oprócz innowacyjności
              produktowej/procesowej projekt zakłada zastosowanie technologii
              informacyjno-komunikacyjnych (TIK) oraz uwzględnia aspekty środowiskowe.
              Inwestycja realizowana jest przez mikroprzedsiębiorstwo i zlokalizowana jest
              na terenie wiejskim.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
