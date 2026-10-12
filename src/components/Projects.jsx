import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Pixel RPG Game',
    short: 'A retro-style pixel art role-playing game.',
    details:
      'A pixel RPG where the player explores a world, interacts with characters, and progresses through the story. I handled the game design and built the gameplay, focusing on a retro look and simple, fun mechanics.',
    tech: 'Pixel Art, Game Design',
    image: 'https://placehold.co/600x300?text=Pixel+RPG+Game',
  },
  {
    title: 'Airport Mini Database',
    short: 'A flight reservation database system for an airport.',
    details:
      'A relational database for managing flights and reservations. The back-end is built in MySQL Workbench (with an ERD for the design), and LibreOffice Base serves as the front-end, connected through ODBC.',
    tech: 'MySQL Workbench, LibreOffice Base, ODBC',
    image: 'https://placehold.co/600x300?text=Airport+Database',
  },
  {
    title: 'Verity',
    short: 'An anti-cheat system for programming assessments.',
    details:
      'Verity is my capstone project: a kiosk-mode programming assessment platform that locks down the exam environment to prevent cheating, so students can only work inside the test.',
    tech: 'Electron, JavaScript',
    image: 'https://placehold.co/600x300?text=Verity',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
