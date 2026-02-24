export function ComparativoSection() {
  const rows = [
    { label: "Vagas disponíveis", master: "2 empresas", parceiro: "3 empresas", colaborador: "6 empresas", highlight: true },
    { label: "Ingressos", master: "10", parceiro: "5", colaborador: "2" },
    { label: "Logo no site oficial", master: "check-y", parceiro: "check-b", colaborador: "check-g" },
    { label: "Logo em materiais físicos", master: "✔ Destaque máximo", parceiro: "✔ Secundário", colaborador: "✔ Slide coletivo", masterClass: "text-yellow", parceiroClass: "text-blue", colaboradorClass: "text-green" },
    { label: "Menção no palco", master: "✔ Nominal", parceiro: "✔ Nominal", colaborador: "✔ Coletivo", masterClass: "text-yellow", parceiroClass: "text-blue", colaboradorClass: "text-green" },
    { label: "Fala no evento", master: "✔ 2+2 min", parceiro: "dash", colaborador: "dash", masterClass: "text-yellow" },
    { label: "Espaço de ativação", master: "✔ Principal", parceiro: "dash", colaborador: "dash", masterClass: "text-yellow" },
    { label: "Post exclusivo nas redes", master: "check-y", parceiro: "dash", colaborador: "dash" },
    { label: "Divulgação nas redes sociais", master: "check-y", parceiro: "✔ Coletivo", colaborador: "✔ Coletivo", parceiroClass: "text-blue", colaboradorClass: "text-green" },
    { label: "Mailing do evento (opt-in)", master: "check-y", parceiro: "check-b", colaborador: "dash" },
    { label: "Lista segmentada de participantes", master: "check-y", parceiro: "dash", colaborador: "dash" },
    { label: "Perguntas no formulário de inscrição", master: "✔ até 2", parceiro: "dash", colaborador: "dash", masterClass: "text-yellow" },
    { label: "Networking estruturado", master: "check-y", parceiro: "dash", colaborador: "dash" },
    { label: "Mural de oportunidades", master: "check-y", parceiro: "dash", colaborador: "dash" },
    { label: "Distribuição de brindes", master: "check-y", parceiro: "check-b", colaborador: "dash" },
    { label: "Relatório pós-evento", master: "check-y", parceiro: "dash", colaborador: "dash" },
    { label: "Email marketing oficial", master: "check-y", parceiro: "check-b", colaborador: "dash" },
    { label: "Prioridade de renovação 2027", master: "check-y", parceiro: "dash", colaborador: "dash", highlight: true },
    { label: 'Selo "Powered by"', master: "check-y", parceiro: "dash", colaborador: "dash" },
  ]

  function renderCell(value: string, colorClass?: string) {
    if (value === "check-y") return <span className="text-yellow text-[16px]">{"✔"}</span>
    if (value === "check-b") return <span className="text-blue text-[16px]">{"✔"}</span>
    if (value === "check-g") return <span className="text-green text-[16px]">{"✔"}</span>
    if (value === "dash") return <span className="text-[rgba(255,255,255,0.2)]">{"—"}</span>
    return <span className={colorClass || ""}>{value}</span>
  }

  return (
    <section className="bg-dark2 px-6 py-[100px]" id="comparativo">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-[11px] font-bold tracking-[.1em] uppercase text-blue mb-3">
          {"Comparativo"}
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] mb-4">
          {"Tudo lado a lado"}
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[560px] leading-[1.75]">
          {"Compare as cotas e escolha o nível de investimento ideal para sua empresa."}
        </p>
        <div className="mt-12 overflow-x-auto rounded-[20px] border border-border">
          <table className="w-full border-collapse">
            <thead className="bg-[rgba(255,255,255,0.03)]">
              <tr>
                <th className="p-4 px-5 text-left text-[13px] font-bold border-b border-border w-[40%]">
                  {"Benefício"}
                </th>
                <th className="p-4 px-5 text-center text-[13px] font-bold border-b border-border text-yellow">
                  {"💎 Master"}
                  <br />
                  <small>{"R$ 5.000"}</small>
                </th>
                <th className="p-4 px-5 text-center text-[13px] font-bold border-b border-border text-blue">
                  {"🥈 Parceiro"}
                  <br />
                  <small>{"R$ 2.000"}</small>
                </th>
                <th className="p-4 px-5 text-center text-[13px] font-bold border-b border-border text-green">
                  {"🟢 Colaborador"}
                  <br />
                  <small>{"R$ 1.000"}</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`hover:bg-[rgba(255,255,255,0.02)] ${row.highlight ? "bg-[rgba(251,188,5,0.04)]" : ""}`}
                >
                  <td className={`px-5 py-3.5 text-[13px] text-text font-medium border-b border-border text-left ${i === rows.length - 1 ? "border-b-0" : ""}`}>
                    {row.label}
                  </td>
                  <td className={`px-5 py-3.5 text-[13px] text-muted text-center align-middle border-b border-border ${i === rows.length - 1 ? "border-b-0" : ""}`}>
                    {renderCell(row.master, row.masterClass)}
                  </td>
                  <td className={`px-5 py-3.5 text-[13px] text-muted text-center align-middle border-b border-border ${i === rows.length - 1 ? "border-b-0" : ""}`}>
                    {renderCell(row.parceiro, row.parceiroClass)}
                  </td>
                  <td className={`px-5 py-3.5 text-[13px] text-muted text-center align-middle border-b border-border ${i === rows.length - 1 ? "border-b-0" : ""}`}>
                    {renderCell(row.colaborador, row.colaboradorClass)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
