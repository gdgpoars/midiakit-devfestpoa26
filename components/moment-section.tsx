export function MomentSection() {
  return (
    <section className="bg-dark2 px-6 py-[100px]" id="momento">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
              O Momento
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
              {"2026 é sobre crescer em "}
              <em className="text-blue not-italic">qualidade</em>
            </h2>
            <p className="text-[1.05rem] text-muted max-w-[560px] leading-[1.75]">
              {"O DevFest Porto Alegre chega a 2026 em fase de maturidade. Após consolidar público, estrutura, reputação e governança comunitária, o próximo passo não é crescer em volume."}
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {[
                { color: "bg-blue", label: "Presença real" },
                { color: "bg-red", label: "Conexão intencional" },
                { color: "bg-yellow", label: "Participação ativa" },
                { color: "bg-green", label: "Inclusão ampliada" },
                { color: "bg-blue", label: "Experiência memorável" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-[1rem] font-medium">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-[20px] p-10">
            <blockquote className="font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold leading-[1.3] text-text">
              {'"Não será apenas um evento. Será o principal ponto de encontro '}
              <em className="text-blue not-italic">{"estratégico"}</em>
              {' da comunidade tech do Sul do Brasil."'}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
