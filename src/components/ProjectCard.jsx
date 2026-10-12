import { useState } from 'react'

export default function ProjectCard({ title, short, details, tech, image }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow transition hover:shadow-lg">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-slate-600">{short}</p>

        {expanded && (
          <div className="mt-3 space-y-2 border-t pt-3 text-sm text-slate-600">
            <p>{details}</p>
            <p className="font-medium text-indigo-600">Tech: {tech}</p>
          </div>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-semibold text-indigo-600 hover:underline"
        >
          {expanded ? 'Show Less ▲' : 'View More ▼'}
        </button>
      </div>
    </div>
  )
}
