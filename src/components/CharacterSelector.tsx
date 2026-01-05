import { forwardRef } from 'react'
import type { Persona } from '../types'

type CharacterSelectorProps = {
  personas: Persona[]
  selectedId: string
  onSelect: (id: string) => void
  heroImage?: string
  onExplore?: (id: string) => void
}

export const CharacterSelector = forwardRef<HTMLDivElement, CharacterSelectorProps>(
  ({ personas, selectedId, onSelect, heroImage, onExplore }, ref) => {
    const activePersona = personas.find((p) => p.id === selectedId) ?? personas[0]

    return (
      <section className="card character-section" aria-label="Persona selector" ref={ref}>
        <div className="character-left">
          <p className="muted">Personas</p>
          <h2>Every journey needs a hero</h2>
          <p className="body-text">
            Built on research and data, these personas are your key to navigating the experience of WEX
            Benefits users. Each has distinctive goals, motivations, and pain points.
          </p>

          <div className="persona-grid">
            {personas.map((persona) => {
              const isActive = persona.id === activePersona.id
              return (
                <button
                  key={persona.id}
                  className={`persona-card ${isActive ? 'persona-card-active' : ''}`}
                  onClick={() => onSelect(persona.id)}
                  aria-pressed={isActive}
                >
                  <div className="persona-avatar" aria-hidden />
                  <div className="persona-card-body">
                    <strong>{persona.name}</strong>
                    <span className="muted">{persona.role}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-figure">
              {heroImage ? (
                <img src={heroImage} alt={`${activePersona.name} illustration`} />
              ) : (
                <div className="landing-placeholder" aria-hidden>
                  <span>Persona artwork</span>
                </div>
              )}
            </div>
            <div className="hero-info">
              <h3>{activePersona.name}</h3>
              <ul className="list">
                {activePersona.goal ? <li>{activePersona.goal}</li> : null}
                {activePersona.focus ? <li>{activePersona.focus}</li> : null}
                {activePersona.summary ? <li>{activePersona.summary}</li> : null}
              </ul>
            </div>
            <div className="hero-actions">
              <button className="btn-primary" type="button" onClick={() => onSelect(activePersona.id)}>
                Meet {activePersona.name}
              </button>
              <button className="btn-secondary" type="button" onClick={() => onSelect(activePersona.id)}>
                Talk to {activePersona.name}
              </button>
              <button
                className="btn-ghost"
                type="button"
                onClick={() => {
                  onSelect(activePersona.id)
                  onExplore?.(activePersona.id)
                }}
              >
                Explore {activePersona.name}&apos;s journey
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  },
)

CharacterSelector.displayName = 'CharacterSelector'

export default CharacterSelector

