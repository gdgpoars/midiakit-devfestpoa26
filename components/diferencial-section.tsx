export function DiferencialSection() {
  return (
    <section className="bg-dark2 px-6 py-[100px]" id="diferencial">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
          {"O Diferencial 2026"}
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
          {"Impacto real."}
          <br />
          {"Não apenas escala."}
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[560px] leading-[1.75]">
          {"Enquanto muitos eventos priorizam escala ou exposição de marca, o DevFest POA 2026 prioriza impacto real."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          {/* Estrutura */}
          <div className="bg-card border border-border rounded-[20px] p-7">
            <div className="text-[15px] font-bold mb-4">{"🏗 Estrutura garantida"}</div>
            <div className="flex flex-col gap-2.5">
              {[
                "2 workshops hands-on",
                "1 dinâmica estruturada de networking",
                "1 ativação gamificada",
                "Espaços planejados para conexão real",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-[14px] text-muted">
                  <span className="text-green font-bold shrink-0 mt-px">{"✔"}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Indicadores */}
          <div className="bg-card border border-border rounded-[20px] p-7">
            <div className="text-[15px] font-bold mb-4">{"📊 Indicadores de sucesso"}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              {[
                { val: "≥ 98%", label: "Presença confirmada" },
                { val: "≥ 90%", label: "Satisfação geral" },
                { val: "≥ 90%", label: "Intenção de retorno" },
              ].map((ind) => (
                <div key={ind.label} className="bg-[rgba(52,168,83,0.08)] border border-[rgba(52,168,83,0.2)] rounded-[14px] p-5 text-center">
                  <div className="text-[1.5rem] font-bold text-green">{ind.val}</div>
                  <div className="text-[12px] text-muted mt-1">{ind.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
