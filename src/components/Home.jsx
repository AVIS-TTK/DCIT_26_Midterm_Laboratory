export default function Home() {
  return (
    <section id="home" className="bg-gradient-to-br from-indigo-600 to-purple-600 px-4 py-24 text-center text-white">
      <h1 className="text-4xl font-extrabold md:text-6xl">Welcome to my portfolio 👋</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
        Hi, I'm AVIS, a BSIT student who loves game design, building systems, and learning new technologies.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a href="#projects" className="rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:scale-105">
          View My Work
        </a>
        <a href="/cv.pdf" download className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white/10">
          Download CV
        </a>
      </div>
    </section>
  )
}
