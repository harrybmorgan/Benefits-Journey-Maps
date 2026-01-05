import type { Persona } from '../types'

type PersonaSelectorProps = {
  personas: Persona[]
  selectedId: string
  onSelect: (id: string) => void
}

export function PersonaSelector({ personas, selectedId, onSelect }: PersonaSelectorProps) {
  return (
    <section className="card">
      <div className="section-head">
        <div>
          <p className="muted">Personas</p>
          <h2>Choose who you&apos;re designing for</h2>
        </div>
        <p className="muted">Switch personas to see tailored flows, pain points, and artifacts.</p>
      </div>

      <div className="chip-row" role="listbox" aria-label="Persona selector">
        {personas.map((persona) => {
          const isActive = persona.id === selectedId
          const flowsCount = persona.flows.length
          const painCount = persona.flows.reduce(
            (total, flow) => total + flow.steps.reduce((pt, step) => pt + step.painPoints.length, 0),
            0,
          )

          return (
            <button
              key={persona.id}
              className={`chip ${isActive ? 'chip-active' : ''}`}
              role="option"
              aria-selected={isActive}
              onClick={() => onSelect(persona.id)}
            >
              <div className="chip-label">
                <span>{persona.name}</span>
                <span className="badge healthy">{persona.role}</span>
              </div>
              <div className="chip-meta">{persona.summary}</div>
              <div className="chip-meta">
                {flowsCount} flows · {painCount} pain points
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default PersonaSelector

