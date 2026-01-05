import type { PersonaJourney, StageNode } from '../data/journeys'

type JourneyStagesProps = {
  journey: PersonaJourney
  personaName: string
}

export function JourneyStages({ journey, personaName }: JourneyStagesProps) {
  return (
    <div className="journey-page">
      <header className="journey-header-card">
        <div>
          <p className="muted">Journey</p>
          <h1>{personaName}&apos;s journey</h1>
          <p className="body-text">Click on any of the key stages to explore in more detail.</p>
        </div>
        <div className="journey-legend">
          <span className="legend-dot clickable" /> Clickable
          <span className="legend-dot disabled" /> View only
          <span className="legend-dot accent" /> Primary actions
        </div>
      </header>

      <div className="journey-columns">
        {journey.columns.map((col) => (
          <div key={col.id} className="journey-column">
            <h3>{col.title}</h3>
            <div className="node-stack">
              {col.nodes.map((node) => (
                <StageButton key={node.id} node={node} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function StageButton({ node }: { node: StageNode }) {
  const className = [
    'stage-button',
    node.clickable ? 'stage-clickable' : 'stage-disabled',
    node.accent ? 'stage-accent' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={className} disabled={!node.clickable} type="button">
      <span className="stage-label">{node.label}</span>
      {node.clickable ? <span className="stage-plus">＋</span> : null}
    </button>
  )
}

export default JourneyStages

