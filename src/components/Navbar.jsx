import { useState } from 'react'

const links = ['Home', 'About', 'Projects', 'Resume', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="text-lg font-bold text-indigo-600">MyPortfolio</span>

        <button
          onClick={() => setOpen(!open)}
          className="rounded p-2 text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="font-medium transition hover:text-indigo-600">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="space-y-1 border-t bg-white px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 hover:bg-indigo-50"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
