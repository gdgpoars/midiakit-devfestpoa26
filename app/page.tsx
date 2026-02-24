import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { MomentSection } from "@/components/moment-section"
import { MvvSection } from "@/components/mvv-section"
import { DiferencialSection } from "@/components/diferencial-section"
import { PublicoSection } from "@/components/publico-section"
import { ConteudoSection } from "@/components/conteudo-section"
import { CotasSection } from "@/components/cotas-section"
import { ComparativoSection } from "@/components/comparativo-section"
import { ModeloSection } from "@/components/modelo-section"
import { CompromissosSection } from "@/components/compromissos-section"
import { CtaFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MomentSection />
        <MvvSection />
        <DiferencialSection />
        <PublicoSection />
        <ConteudoSection />
        <CotasSection />
        <ComparativoSection />
        <ModeloSection />
        <CompromissosSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
