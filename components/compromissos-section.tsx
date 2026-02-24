export function CompromissosSection() {
  const items = [
    { icon: "📊", label: "Transparência financeira" },
    { icon: "📈", label: "Relatório de impacto" },
    { icon: "👥", label: "Dados consolidados de público" },
    { icon: "🏛", label: "Governança comunitária responsável" },
    { icon: "🤝", label: "Relacionamento de longo prazo" },
  ]

  return (
    <section className="bg-dark2 px-6 py-[100px]" id="compromissos">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
          {"Compromissos"}
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
          {"O que você pode"}
          <br />
          {"esperar de nós"}
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[560px] leading-[1.75]">
          {"Governança comunitária responsável e relacionamento de longo prazo."}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {items.map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-[16px] p-5 text-center">
              <div className="text-[1.8rem] mb-3">{item.icon}</div>
              <div className="text-[13px] font-semibold text-text">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
