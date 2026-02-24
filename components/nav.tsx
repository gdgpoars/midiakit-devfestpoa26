"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 py-4 bg-[rgba(13,13,13,0.85)] backdrop-blur-[16px] border-b border-border md:px-10">
      <div className="font-display text-[1.1rem] font-bold flex">
        <span className="text-blue">Dev</span>
        <span className="text-red">Fest</span>
        <span className="text-yellow">{" Porto "}</span>
        <span className="text-green">Alegre</span>
        <span className="text-text">{" 2026"}</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8">
        <a href="#momento" className="text-[13px] font-medium text-muted hover:text-text transition-colors no-underline">
          O Momento
        </a>
        <a href="#cotas" className="text-[13px] font-medium text-muted hover:text-text transition-colors no-underline">
          Cotas
        </a>
        <a href="#comparativo" className="text-[13px] font-medium text-muted hover:text-text transition-colors no-underline">
          Comparativo
        </a>
        <a href="#compromissos" className="text-[13px] font-medium text-muted hover:text-text transition-colors no-underline">
          Compromissos
        </a>
      </div>

      <a
        href="mailto:gdgpoars@gmail.com"
        className="hidden md:inline-block bg-blue text-white border-none rounded-[10px] px-5 py-2.5 text-[13px] font-semibold no-underline hover:bg-[#3574e0] hover:-translate-y-px transition-all"
      >
        Fale Conosco
      </a>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-text bg-transparent border-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(13,13,13,0.95)] backdrop-blur-[16px] border-b border-border flex flex-col gap-4 p-6 md:hidden">
          <a href="#momento" onClick={() => setMenuOpen(false)} className="text-[14px] font-medium text-muted hover:text-text transition-colors no-underline">
            O Momento
          </a>
          <a href="#cotas" onClick={() => setMenuOpen(false)} className="text-[14px] font-medium text-muted hover:text-text transition-colors no-underline">
            Cotas
          </a>
          <a href="#comparativo" onClick={() => setMenuOpen(false)} className="text-[14px] font-medium text-muted hover:text-text transition-colors no-underline">
            Comparativo
          </a>
          <a href="#compromissos" onClick={() => setMenuOpen(false)} className="text-[14px] font-medium text-muted hover:text-text transition-colors no-underline">
            Compromissos
          </a>
          <a
            href="mailto:gdgpoars@gmail.com"
            className="bg-blue text-white rounded-[10px] px-5 py-2.5 text-[13px] font-semibold no-underline text-center"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  )
}
