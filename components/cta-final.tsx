export function CtaFinal() {
  return (
    <div className="bg-dark text-center px-6 py-[100px]" id="investir">
      <div className="max-w-[720px] mx-auto bg-card border border-border rounded-[32px] px-6 py-16 md:px-12 relative overflow-hidden">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue via-red via-yellow to-green" />

        {/* Glow */}
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(66,133,244,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-4">
            {"Pronto para fazer parte?"}
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
            {"Empresas que investem no DevFest não compram visibilidade."}
          </h2>
          <p className="text-[1.05rem] text-muted max-w-[560px] mx-auto leading-[1.75] text-center mb-10">
            {"Elas assumem protagonismo no desenvolvimento da tecnologia do Sul do Brasil."}
          </p>
          <div className="flex flex-col gap-3 items-center">
            <a
              href="mailto:gdgpoars@gmail.com?subject=Quero investir no maior evento tech do RS - DevFest POA 2026"
              className="inline-flex items-center justify-center gap-2 no-underline bg-gradient-to-br from-blue to-[#6ea6ff] text-white rounded-[14px] px-8 py-4 text-[15px] font-bold w-full max-w-[480px] font-sans shadow-[0_4px_24px_rgba(66,133,244,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(66,133,244,0.45)] transition-all"
            >
              {"🚀 Quero investir no maior evento tech do RS"}
            </a>
            <a
              href="mailto:gdgpoars@gmail.com?subject=Investimento em educação e diversidade - DevFest POA 2026"
              className="inline-flex items-center justify-center gap-2 no-underline bg-[rgba(52,168,83,0.1)] text-green border border-[rgba(52,168,83,0.3)] rounded-[14px] px-8 py-4 text-[15px] font-bold w-full max-w-[480px] font-sans hover:bg-[rgba(52,168,83,0.18)] hover:-translate-y-0.5 transition-all"
            >
              {"💚 Quero investir em fomento da comunidade que investe em educação continuada e diversidade em tech"}
            </a>
            <a
              href="mailto:gdgpoars@gmail.com?subject=Fale Conosco - DevFest POA 2026"
              className="inline-flex items-center justify-center gap-2 no-underline bg-transparent text-muted border border-border rounded-[14px] px-8 py-3.5 text-[14px] font-semibold w-full max-w-[480px] font-sans hover:text-text hover:border-[rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all"
            >
              {"✉️ Fale Conosco — gdgpoars@gmail.com"}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
