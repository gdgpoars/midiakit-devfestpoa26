export function MvvSection() {
  return (
    <section className="bg-dark px-6 py-[100px]" id="missao">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
          {"Missão, Visão & Valores"}
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
          {"O que nos move"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {/* Missao */}
          <div className="bg-card border border-border rounded-[20px] p-8">
            <div className="text-[2rem] mb-4">{"🎯"}</div>
            <div className="text-[1rem] font-bold text-text mb-3">{"Missão"}</div>
            <div className="text-[14px] text-muted leading-[1.7]">
              {"Conectar, capacitar e fortalecer a comunidade tech do Sul do Brasil por meio de conteúdo técnico relevante e experiências colaborativas."}
            </div>
          </div>
          {/* Visao */}
          <div className="bg-card border border-border rounded-[20px] p-8">
            <div className="text-[2rem] mb-4">{"🔭"}</div>
            <div className="text-[1rem] font-bold text-text mb-3">{"Visão"}</div>
            <div className="text-[14px] text-muted leading-[1.7]">
              {"Ser o evento tech comunitário mais relevante e inclusivo da região Sul até 2028."}
            </div>
          </div>
          {/* Valores */}
          <div className="bg-card border border-border rounded-[20px] p-8">
            <div className="text-[2rem] mb-4">{"💛"}</div>
            <div className="text-[1rem] font-bold text-text mb-3">{"Valores"}</div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {["Comunidade acima de ego", "Inclusão intencional", "Excelência operacional", "Acesso democrático", "Colaboração", "Transparência"].map((value) => (
                <div key={value} className="bg-[rgba(66,133,244,0.08)] border border-[rgba(66,133,244,0.2)] rounded-[10px] px-3.5 py-2.5 text-[13px] text-text font-medium">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
