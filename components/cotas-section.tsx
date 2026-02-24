export function CotasSection() {
  return (
    <section className="bg-dark px-6 py-[100px]" id="cotas">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
          {"Cotas de Investimento"}
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
          {"Escolha como sua empresa"}
          <br />
          {"quer fazer história"}
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[560px] leading-[1.75]">
          {"Meta de captação: R$ 20.000 a R$ 25.000. Cada investimento fortalece educação, diversidade e o ecossistema tech do RS."}
        </p>

        <div className="text-center mt-12 mb-0 text-[12px] font-bold tracking-[.06em] uppercase text-yellow">
          {"⭐ Mais estratégico"}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {/* MASTER */}
          <div className="rounded-[24px] overflow-hidden border border-yellow shadow-[0_0_0_1px_var(--yellow),0_20px_60px_rgba(251,188,5,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="px-7 pt-7 pb-0 bg-card">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.08em] uppercase bg-[rgba(251,188,5,0.15)] text-yellow rounded-full px-3 py-1 mb-4">
                {"💎 Master"}
              </div>
              <div className="font-display text-[1.4rem] font-black mb-1">{"Investimento Master"}</div>
              <div className="text-[12px] text-muted mb-5">{"Apenas 2 empresas · Selo \"Powered by\""}</div>
              <div className="font-display text-[2.8rem] font-black leading-none text-yellow mb-1.5">{"R$ 5.000"}</div>
              <div className="h-px bg-border mt-5" />
            </div>
            <div className="px-7 py-5 pb-7 bg-card flex-1">
              <div className="flex flex-col gap-2.5">
                {[
                  '"Powered by [Empresa]" em todas as comunicações',
                  "Marca em destaque máximo: site, redes, backdrop, credenciais",
                  "Agradecimento nominal no palco",
                  "2 min de fala na abertura + 2 min no encerramento",
                  "Espaço principal de ativação",
                  "10 ingressos",
                  "Post exclusivo dedicado nas redes do evento",
                  "Participação em networking estruturado",
                  "Mailing do evento (LGPD + opt-in)",
                  "Lista segmentada (área, senioridade, interesses)",
                  "2 perguntas personalizadas no formulário",
                  "Mural de oportunidades físico ou digital",
                  "Distribuição de brindes institucionais",
                  "Relatório pós-evento com métricas",
                  "Prioridade de renovação para 2027",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[13px] text-muted leading-[1.5]">
                    <span className="text-yellow font-bold shrink-0 mt-px">{"✔"}</span>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="mailto:gdgpoars@gmail.com?subject=Cota Master - DevFest POA 2026"
                className="block w-full text-center py-3.5 rounded-xl text-[14px] font-bold no-underline mt-5 bg-yellow text-[#000] hover:bg-[#e6ad00] transition-all font-sans"
              >
                {"Quero ser Master →"}
              </a>
            </div>
          </div>

          {/* PARCEIRO */}
          <div className="rounded-[24px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="px-7 pt-7 pb-0 bg-card">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.08em] uppercase bg-[rgba(66,133,244,0.15)] text-blue rounded-full px-3 py-1 mb-4">
                {"🥈 Parceiro"}
              </div>
              <div className="font-display text-[1.4rem] font-black mb-1">{"Investimento Parceiro"}</div>
              <div className="text-[12px] text-muted mb-5">{"Até 3 empresas"}</div>
              <div className="font-display text-[2.8rem] font-black leading-none text-blue mb-1.5">{"R$ 2.000"}</div>
              <div className="h-px bg-border mt-5" />
            </div>
            <div className="px-7 py-5 pb-7 bg-card flex-1">
              <div className="flex flex-col gap-2.5">
                {[
                  "Marca em destaque secundário: site, redes e materiais",
                  "Menção nominal na abertura e encerramento",
                  "5 ingressos",
                  "Divulgação coletiva nas redes sociais",
                  "Inclusão em materiais oficiais",
                  "Mailing do evento (LGPD + opt-in)",
                  "Inserção da logo em email marketing oficial",
                  "Distribuição de brindes institucionais",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[13px] text-muted leading-[1.5]">
                    <span className="text-blue font-bold shrink-0 mt-px">{"✔"}</span>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="mailto:gdgpoars@gmail.com?subject=Cota Parceiro - DevFest POA 2026"
                className="block w-full text-center py-3.5 rounded-xl text-[14px] font-bold no-underline mt-5 bg-blue text-white hover:bg-[#3574e0] transition-all font-sans"
              >
                {"Quero ser Parceiro →"}
              </a>
            </div>
          </div>

          {/* COLABORADOR */}
          <div className="rounded-[24px] overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="px-7 pt-7 pb-0 bg-card">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[.08em] uppercase bg-[rgba(52,168,83,0.12)] text-green rounded-full px-3 py-1 mb-4">
                {"🟢 Colaborador"}
              </div>
              <div className="font-display text-[1.4rem] font-black mb-1">{"Investimento Colaborador"}</div>
              <div className="text-[12px] text-muted mb-5">{"Até 6 empresas"}</div>
              <div className="font-display text-[2.8rem] font-black leading-none text-green mb-1.5">{"R$ 1.000"}</div>
              <div className="h-px bg-border mt-5" />
            </div>
            <div className="px-7 py-5 pb-7 bg-card flex-1">
              <div className="flex flex-col gap-2.5">
                {[
                  "Logo no site oficial",
                  "Logo em slide coletivo exibido durante o evento",
                  "2 ingressos",
                  "Menção coletiva nas redes sociais",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[13px] text-muted leading-[1.5]">
                    <span className="text-green font-bold shrink-0 mt-px">{"✔"}</span>
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="mailto:gdgpoars@gmail.com?subject=Cota Colaborador - DevFest POA 2026"
                className="block w-full text-center py-3.5 rounded-xl text-[14px] font-bold no-underline mt-5 bg-[rgba(52,168,83,0.15)] text-green border border-[rgba(52,168,83,0.3)] hover:bg-[rgba(52,168,83,0.25)] transition-all font-sans"
              >
                {"Quero ser Colaborador →"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
