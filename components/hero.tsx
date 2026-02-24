import { MapPin, Calendar, Users } from "lucide-react"

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6 pt-[120px] pb-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(66,133,244,0.12)_0%,transparent_70%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_10%_60%,rgba(234,67,53,0.08)_0%,transparent_70%),radial-gradient(circle_400px_at_90%_70%,rgba(52,168,83,0.08)_0%,transparent_70%),radial-gradient(circle_300px_at_50%_100%,rgba(251,188,5,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-1 max-w-[860px] mx-auto">
        {/* Badge */}
        <div className="animate-fade-up animate-delay-0 inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] border border-border rounded-full px-[18px] py-2 text-[12px] font-semibold tracking-[.06em] uppercase text-muted mb-8">
          <span className="text-yellow">{"★"}</span> {"Mídia Kit 2026"}
        </div>

        {/* Title */}
        <h1 className="animate-fade-up animate-delay-1 font-display text-[clamp(3rem,8vw,6rem)] font-black leading-[1.0] tracking-[-0.03em] mb-6">
          <span className="text-blue">Dev</span>
          <span className="text-red">Fest</span>
          <br />
          <span className="text-yellow">{"Porto "}</span>
          <span className="text-green">Alegre</span>
          <br />
          <span className="text-text">2026</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up animate-delay-2 text-[clamp(1.1rem,2.5vw,1.4rem)] text-muted max-w-[600px] mx-auto mb-4">
          {"Presença. Conexão. Participação. Pertencimento."}
        </p>

        {/* Tagline */}
        <p className="animate-fade-up animate-delay-3 text-[clamp(1rem,2vw,1.15rem)] font-medium text-text mb-10">
          {"O principal ponto de encontro estratégico da comunidade tech do Sul do Brasil."}
        </p>

        {/* Meta */}
        <div className="animate-fade-up animate-delay-4 flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-[14px] text-muted">
            <MapPin size={16} className="opacity-60" />
            {"Porto Alegre – RS"}
          </div>
          <div className="flex items-center gap-2 text-[14px] text-muted">
            <Calendar size={16} className="opacity-60" />
            {"Final de Outubro de 2026"}
          </div>
          <div className="flex items-center gap-2 text-[14px] text-muted">
            <Users size={16} className="opacity-60" />
            {"GDG Porto Alegre, GDG Caxias do Sul"}
          </div>
        </div>

        {/* Pills */}
        <div className="animate-fade-up animate-delay-5 flex flex-wrap justify-center gap-2.5 mb-12">
          {["Comunitário", "Inclusivo", "Interativo", "Estrategicamente conectado"].map((pill) => (
            <span key={pill} className="bg-[rgba(255,255,255,0.05)] border border-border rounded-full px-[18px] py-2 text-[13px] text-muted font-medium">
              {"✔ " + pill}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="animate-fade-up animate-delay-6 flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:gdgpoars@gmail.com?subject=Quero investir no DevFest POA 2026"
            className="inline-flex items-center gap-2 bg-blue text-white border-none rounded-xl px-7 py-3.5 text-[15px] font-bold no-underline font-sans hover:bg-[#3574e0] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(66,133,244,0.35)] transition-all"
          >
            {"Quero investir no maior evento tech do RS →"}
          </a>
          <a
            href="#cotas"
            className="inline-flex items-center gap-2 bg-transparent text-text border border-border rounded-xl px-7 py-3.5 text-[15px] font-semibold no-underline font-sans hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-0.5 transition-all"
          >
            {"Ver cotas de investimento"}
          </a>
        </div>
      </div>
    </div>
  )
}
