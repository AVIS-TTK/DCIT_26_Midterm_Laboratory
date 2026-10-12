const skills = ['Game Design', 'Story writer', 'Basic Programming', 'System Analysis', 'Computer Literacy']
const interests = ['Game Development', 'Anime', 'Gaming', 'Music']

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold">About Me</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-indigo-600">Background</h3>
          <p className="leading-relaxed text-slate-600">
            I like anime, Manga, and Strategy games. I am currently a working student juggling a tight schedules and fighting an economy that is actively trying to make me starve to death. But I will not yield and I will struggle till the very end.
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-indigo-600">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold text-indigo-600">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((s) => (
                <span key={s} className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
