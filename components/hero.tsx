import { MapPin, Calendar, Users, Building2 } from "lucide-react"
 
export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6 pt-[120px] pb-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(66,133,244,0.12)_0%,transparent_70%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_10%_60%,rgba(234,67,53,0.08)_0%,transparent_70%),radial-gradient(circle_400px_at_90%_70%,rgba(52,168,83,0.08)_0%,transparent_70%),radial-gradient(circle_300px_at_50%_100%,rgba(251,188,5,0.06)_0%,transparent_70%)]" />
      </div>
 
      <div className="relative z-1 max-w-[900px] mx-auto">
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
        <p className="animate-fade-up animate-delay-3 text-[clamp(1rem,2vw,1.15rem)] font-medium text-text mb-12">
          {"O principal ponto de encontro estratégico da comunidade tech do Sul do Brasil."}
        </p>
 
        {/* Meta — cards de destaque */}
        <div className="animate-fade-up animate-delay-4 grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: Calendar,
              label: "Quando",
              value: "31/10/2026",
              textColor: "#4285F4",
              bg: "rgba(66,133,244,0.10)",
              border: "rgba(66,133,244,0.35)",
            },
            {
              icon: MapPin,
              label: "Onde",
              value: "Faculdade Dom Bosco - POA/RS",
              textColor: "#EA4335",
              bg: "rgba(234,67,53,0.10)",
              border: "rgba(234,67,53,0.35)",
            },
            {
              icon: Users,
              label: "Público esperado",
              value: "300 pessoas",
              textColor: "#FBBC05",
              bg: "rgba(251,188,5,0.10)",
              border: "rgba(251,188,5,0.35)",
            },
            {
              icon: Building2,
              label: "Organização",
              value: "GDG Porto Alegre + GDG Caxias do Sul",
              textColor: "#34A853",
              bg: "rgba(52,168,83,0.10)",
              border: "rgba(52,168,83,0.35)",
            },
          ].map(({ icon: Icon, label, value, textColor, bg, border }) => (
            <div
              key={label}
              style={{ background: bg, borderColor: border }}
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.25)]"
            >
              <div
                style={{ background: border }}
                className="flex items-center justify-center w-11 h-11 rounded-full mb-1"
              >
                <Icon size={20} className="text-[#0a0a0a]" strokeWidth={2.5} />
              </div>
              <span style={{ color: textColor }} className="text-[11px] font-bold uppercase tracking-[.08em]">
                {label}
              </span>
              <span className="text-[16px] md:text-[17px] font-extrabold text-text leading-snug">
                {value}
              </span>
            </div>
          ))}
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
 
        {/* Scroll cue */}
        <div className="mt-16 flex flex-col items-center gap-2 text-[11px] font-semibold tracking-[.06em] uppercase text-muted/50 animate-bounce">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Scroll
        </div>
      </div>
    </div>
  )
}