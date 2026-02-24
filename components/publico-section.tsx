export function PublicoSection() {
  const audiences = [
    { icon: "👩‍💻", label: "Desenvolvedores(as) Jr a Sênior" },
    { icon: "🎓", label: "Estudantes de tecnologia" },
    { icon: "🔄", label: "Pessoas em transição de carreira" },
    { icon: "🧭", label: "Lideranças técnicas" },
    { icon: "👩‍🤝‍👩", label: "Comunidade feminina" },
    { icon: "🌈", label: "Grupos sub-representados" },
  ]

  return (
    <section className="bg-dark px-6 py-[100px]" id="publico">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
          {"Público-Alvo"}
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
          {"Quem vai estar lá"}
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[560px] leading-[1.75]">
          {"Um público altamente qualificado, engajado e ávido por conexão e conhecimento."}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {audiences.map((a) => (
            <div key={a.label} className="bg-card border border-border rounded-[16px] p-5 flex items-center gap-3">
              <div className="text-[1.5rem]">{a.icon}</div>
              <div className="text-[14px] font-medium">{a.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-[rgba(251,188,5,0.06)] border border-[rgba(251,188,5,0.2)] rounded-[16px] px-7 py-6 flex flex-wrap gap-6 items-center">
          <div className="text-[14px] flex items-center gap-2">
            {"🎯 Meta: "}
            <strong className="text-yellow font-bold">{"+8 a +10 p.p."}</strong>
            {" na participação feminina"}
          </div>
          <div className="text-[14px] flex items-center gap-2">
            {"🎤 Meta: "}
            <strong className="text-yellow font-bold">{"≥ 50%"}</strong>
            {" de palestrantes mulheres ou sub-representados"}
          </div>
          <div className="text-[14px] flex items-center gap-2">
            {"💬 Diversidade é "}
            <strong className="text-yellow font-bold">{"diretriz estrutural"}</strong>
            {", não pauta secundária"}
          </div>
        </div>
      </div>
    </section>
  )
}
