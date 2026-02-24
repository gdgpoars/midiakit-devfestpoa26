export function ConteudoSection() {
  const trilhas = [
    {
      color: "bg-blue",
      title: "🚀 Tecnologia & Inovação",
      tags: ["Cloud", "IA", "Arquitetura", "DevOps"],
    },
    {
      color: "bg-green",
      title: "💼 Carreira & Mercado",
      tags: ["Liderança", "Transição", "Networking"],
    },
    {
      color: "bg-red",
      title: "🤝 Comunidade & Diversidade",
      tags: ["Inclusão", "Representatividade", "Bem-estar"],
    },
    {
      color: "bg-yellow",
      title: "🧪 Hands-on & Laboratórios",
      tags: ["Workshops", "Prática", "Projetos reais"],
    },
  ]

  return (
    <section className="bg-dark2 px-6 py-[100px]" id="conteudo">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
          {"Estrutura de Conteúdo"}
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
          {"Trilhas pensadas"}
          <br />
          {"para impacto real"}
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[560px] leading-[1.75]">
          {"Curadoria baseada em atualidade técnica, aplicabilidade prática, representatividade e equilíbrio de senioridade."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {trilhas.map((trilha) => (
            <div key={trilha.title} className="bg-card rounded-[16px] overflow-hidden border border-border">
              <div className={`${trilha.color} h-1`} />
              <div className="px-6 py-5">
                <div className="text-[15px] font-bold mb-3">{trilha.title}</div>
                <div className="flex flex-wrap gap-2">
                  {trilha.tags.map((tag) => (
                    <span key={tag} className="bg-[rgba(255,255,255,0.06)] rounded-full px-3 py-1 text-[12px] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
