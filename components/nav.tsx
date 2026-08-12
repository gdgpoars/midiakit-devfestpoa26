"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  const links = [
    { href: "#momento", label: "O Momento" },
    { href: "#cotas", label: "Cotas" },
    { href: "#comparativo", label: "Comparativo" },
    { href: "#compromissos", label: "Compromissos" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight

      // Scroll-aware background
      setScrolled(scrollTop > 40)

      // Progress bar
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)

      // Active section
      const sections = links.map(l => document.querySelector(l.href))
      let current = ""
      sections.forEach(section => {
        if (section && scrollTop >= (section as HTMLElement).offsetTop - 100) {
          current = "#" + section.id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[110] bg-gradient-to-r from-blue via-green to-yellow transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[rgba(13,13,13,0.92)] backdrop-blur-[16px] border-b border-border shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
            : "py-4 bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <div className="font-display text-[1.1rem] font-bold flex flex-shrink-0">
          <span className="text-blue">Dev</span>
          <span className="text-red">Fest</span>
          <span className="text-yellow">{" Porto "}</span>
          <span className="text-green">Alegre</span>
          <span className="text-text">{" 2026"}</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-[13px] font-medium px-3 py-1.5 rounded-full no-underline transition-all ${
                activeSection === href
                  ? "text-text bg-white/10"
                  : "text-muted hover:text-text hover:bg-white/6"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#cotas"
            className="text-[13px] font-semibold text-muted border border-white/15 rounded-full px-4 py-2 no-underline hover:text-text hover:border-white/30 transition-all"
          >
            Ver cotas →
          </a>
          <a
            href="mailto:gdgpoars@gmail.com"
            className="bg-blue text-white border-none rounded-full px-5 py-2 text-[13px] font-semibold no-underline hover:bg-[#3574e0] hover:-translate-y-px transition-all"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[rgba(13,13,13,0.97)] backdrop-blur-[20px] border-b border-border flex flex-col gap-2 p-6 md:hidden">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-[14px] font-medium px-4 py-3 rounded-xl no-underline transition-colors ${
                  activeSection === href
                    ? "text-text bg-white/8"
                    : "text-muted hover:text-text"
                }`}
              >
                {label}
              </a>
            ))}
            <div className="border-t border-border mt-2 pt-4 flex flex-col gap-3">
              <a
                href="#cotas"
                onClick={() => setMenuOpen(false)}
                className="text-[13px] font-semibold text-muted border border-white/15 rounded-full px-5 py-2.5 no-underline text-center"
              >
                Ver cotas →
              </a>
              <a
                href="mailto:gdgpoars@gmail.com"
                className="bg-blue text-white rounded-full px-5 py-2.5 text-[13px] font-semibold no-underline text-center"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}