
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const NAV = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about'},
  // { label: 'Research', href: '#research' },
  // { label: 'Publications', href: '#publications' },
  // { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-colors',
        scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-200 shadow-subtle' : 'bg-transparent'
      )}
      aria-label="Site header"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl tracking-tight hover:opacity-80">David Chen</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 rounded">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="md:hidden text-sm px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50">
          Contact
        </a>
      </div>
    </header>
  )
}
