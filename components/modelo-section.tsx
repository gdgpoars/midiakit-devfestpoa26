export function ModeloSection() {
  return (
    <section className="bg-dark px-6 py-[100px]" id="modelo">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
          {"Modelo de Investimento"}
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
          {"Transparência"}
          <br />
          {"em cada centavo"}
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[560px] leading-[1.75]">
          {"O DevFest não comercializa publicidade. Convida empresas a investirem no desenvolvimento do ecossistema local."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          <div className="bg-card border border-border rounded-[20px] p-7">
            <div className="text-[2rem] mb-4">{"🎟️"}</div>
            <div className="text-[15px] font-bold mb-2">{"Ingressos"}</div>
            <div className="text-[14px] text-muted leading-[1.7]">
              {"Custearão alimentação e parte da experiência do participante — garantindo acesso democrático ao evento."}
            </div>
          </div>
          <div className="bg-card border border-border rounded-[20px] p-7">
            <div className="text-[2rem] mb-4">{"🤝"}</div>
            <div className="text-[15px] font-bold mb-2">{"Investimento das Empresas"}</div>
            <div className="text-[14px] text-muted leading-[1.7]">
              {"Viabilizará estrutura, qualidade técnica, interatividade e ampliação da inclusão. Impacto direto na experiência."}
            </div>
          </div>
          <div className="bg-card border border-border rounded-[20px] p-7">
            <div className="text-[2rem] mb-4">{"🔄"}</div>
            <div className="text-[15px] font-bold mb-2">{"Investimento Impulso"}</div>
            <div className="text-[14px] text-muted leading-[1.7]">
              {"Apoios estratégicos via permuta que fortalecem a experiência do evento sem desembolso financeiro direto."}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center bg-[rgba(66,133,244,0.06)] border border-[rgba(66,133,244,0.15)] rounded-[16px] px-7 py-5 text-[14px] text-muted italic">
          {"O DevFest Porto Alegre é organizado de forma "}
          <strong className="text-blue not-italic">{"voluntária e sem fins lucrativos"}</strong>
          {". Cada investimento fortalece educação continuada, diversidade real e desenvolvimento sustentável do ecossistema tech do Rio Grande do Sul."}
        </div>
      </div>
    </section>
  )
}
