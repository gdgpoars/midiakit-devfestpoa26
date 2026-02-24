export function Footer() {
  return (
    <footer className="bg-dark2 px-6 py-10 border-t border-border text-center">
      <div className="font-display text-[1.2rem] font-black mb-3">
        <span className="text-blue">Dev</span>
        <span className="text-red">Fest</span>
        <span className="text-yellow">{" Porto "}</span>
        <span className="text-green">Alegre</span>
        <span className="text-text">{" 2026"}</span>
      </div>
      <div className="text-[13px] text-muted leading-[1.7]">
        {"Realização: GDG Porto Alegre · Porto Alegre, RS · Final de Outubro de 2026"}
      </div>
      <div className="mt-2 text-[12px] text-[rgba(255,255,255,0.3)]">
        {"Uma iniciativa das comunidades Google Developer Groups · Evento voluntário e sem fins lucrativos"}
      </div>
    </footer>
  )
}
