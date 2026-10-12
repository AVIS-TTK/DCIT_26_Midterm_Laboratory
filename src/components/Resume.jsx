const education = [
  { school: 'Cavite State University – Tanza Campus', detail: 'BS Information Technology', year: '2024 – Present' },
]
const experience = [
  { role: 'Freelance Developer', detail: 'Short description of what you do.', year: '2025 – Present' },
]
const skills = ['Game Designer', 'Basic Programming', 'System Analysis', 'Database Developer']

function Block({ title, items, render }) {
  return (
    <div>
      <h3 className="mb-3 text-xl font-semibold text-indigo-600">{title}</h3>
      <ul className="space-y-3">{items.map(render)}</ul>
    </div>
  )
}

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold">Resume</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <Block
          title="Education"
          items={education}
          render={(e) => (
            <li key={e.school} className="rounded-lg bg-white p-4 shadow-sm">
              <p className="font-semibold">{e.school}</p>
              <p className="text-sm text-slate-600">{e.detail}</p>
              <p className="text-xs text-slate-400">{e.year}</p>
            </li>
          )}
        />
        <Block
          title="Experience"
          items={experience}
          render={(e) => (
            <li key={e.role} className="rounded-lg bg-white p-4 shadow-sm">
              <p className="font-semibold">{e.role}</p>
              <p className="text-sm text-slate-600">{e.detail}</p>
              <p className="text-xs text-slate-400">{e.year}</p>
            </li>
          )}
        />
        <Block
          title="Skills"
          items={skills}
          render={(s) => (
            <li key={s} className="rounded-lg bg-white p-3 shadow-sm">{s}</li>
          )}
        />
      </div>
    </section>
  )
}
