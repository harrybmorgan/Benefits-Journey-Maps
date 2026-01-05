import { useEffect, useMemo, useState } from 'react'
import CharacterSelector from './components/CharacterSelector'
import JourneyLegend from './components/JourneyLegend'
import JourneyTimeline from './components/JourneyTimeline'
import { Hero } from './components/Hero'
import Landing from './components/Landing'
import PainPointModal from './components/PainPointModal'
import PersonaSelector from './components/PersonaSelector'
import personas from './data/personas'
import type { PainPoint } from './types'

function App() {
  const [showLanding, setShowLanding] = useState(true)
  const [personaId, setPersonaId] = useState(personas[0]?.id ?? '')
  const [selectedFlowId, setSelectedFlowId] = useState(personas[0]?.flows[0]?.id ?? '')
  const [activePainPoint, setActivePainPoint] = useState<PainPoint | null>(null)

  const persona = useMemo(
    () => personas.find((item) => item.id === personaId) ?? personas[0],
    [personaId],
  )

  useEffect(() => {
    if (!persona) return
    const hasFlow = persona.flows.some((flow) => flow.id === selectedFlowId)
    if (!hasFlow) {
      setSelectedFlowId(persona.flows[0]?.id ?? '')
    }
  }, [persona, selectedFlowId])

  if (!persona) {
    return null
  }

  if (showLanding) {
    return <Landing onEnter={() => setShowLanding(false)} imageUrl="/landing-hero.png" />
  }

  const painPoints = useMemo(
    () =>
      persona.flows.flatMap((flow) =>
        flow.steps.flatMap((step) =>
          step.painPoints.map((pain) => ({
            ...pain,
            flow: flow.name,
            step: step.title,
          })),
        ),
      ),
    [persona],
  )

  const totalSteps = useMemo(
    () => persona.flows.reduce((total, flow) => total + flow.steps.length, 0),
    [persona],
  )

  const stats = {
    personas: personas.length,
    flows: persona.flows.length,
    steps: totalSteps,
    painPoints: painPoints.length,
    touchpoints: persona.touchpoints?.length ?? 0,
  }

  const metricCards = [
    { label: 'Flows', value: `${stats.flows}` },
    { label: 'Steps', value: `${stats.steps}` },
    { label: 'Pain points', value: `${stats.painPoints}` },
    { label: 'Touchpoints', value: `${stats.touchpoints}` },
  ]

  const topPainPoints = painPoints.slice(0, 4)

  return (
    <div className="page">
      <Hero
        kicker="Interactive journeys"
        title="Benefits journeys, tailored by persona"
        subtitle="Explore flows, pain points, and artifacts to align teams on where to focus next. Switch personas to see how the experience shifts across touchpoints."
        stats={[
          { label: 'Personas', value: `${stats.personas}` },
          { label: 'Flows for this persona', value: `${stats.flows}` },
          { label: 'Pain points mapped', value: `${stats.painPoints}` },
          { label: 'Touchpoints captured', value: `${stats.touchpoints}` },
        ]}
      />

      <main className="shell">
        <CharacterSelector
          personas={personas}
          selectedId={persona.id}
          onSelect={(id) => {
            setPersonaId(id)
            const next = personas.find((p) => p.id === id)
            setSelectedFlowId(next?.flows[0]?.id ?? '')
          }}
          heroImage="/landing-hero.png"
        />

        <section className="card metrics">
          <div className="section-head">
            <div>
              <p className="muted">At a glance</p>
              <h2>{persona.name}&rsquo;s journey stats</h2>
            </div>
            <p className="muted">Switch personas to see how flows and pain points change.</p>
          </div>
          <div className="metric-grid">
            {metricCards.map((metric) => (
              <div key={metric.label} className="metric-card">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <PersonaSelector personas={personas} selectedId={persona.id} onSelect={setPersonaId} />

        <section className="card persona-detail">
          <div className="persona-summary">
            <p className="muted">Persona</p>
            <h3>{persona.name}</h3>
            <p className="body-text">{persona.summary}</p>
            <div className="pill info">
              <span className="pill-dot" />
              {persona.focus ?? persona.goal}
            </div>
          </div>
          <div className="persona-goals">
            <h4>Goal</h4>
            <p className="body-text">{persona.goal}</p>
            {persona.touchpoints?.length ? (
              <>
                <div className="divider" />
                <h4>Touchpoints</h4>
                <ul className="list">
                  {persona.touchpoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
          {persona.quote ? (
            <div className="quote-block">
              <p className="muted">Voice of the member</p>
              <blockquote>{persona.quote}</blockquote>
            </div>
          ) : null}
        </section>

        <JourneyLegend />

        <section className="journey-shell">
          <div className="card journey-header">
            <div>
              <p className="muted">Journey map</p>
              <h2>Explore flows for {persona.name}</h2>
              <p className="body-text">
                Toggle flows to see steps, artifacts, and pain points. Each button jumps to a flow.
              </p>
            </div>
            <div className="flow-buttons" role="tablist" aria-label="Journey flows">
              {persona.flows.map((flow) => {
                const active = flow.id === selectedFlowId
                return (
                  <button
                    key={flow.id}
                    className={`flow-button ${active ? 'flow-button-active' : ''}`}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedFlowId(flow.id)}
                  >
                    <span className="flow-name">{flow.name}</span>
                    <span className="flow-meta">{flow.channel}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <JourneyTimeline
            flows={persona.flows}
            selectedFlowId={selectedFlowId}
            onSelectFlow={setSelectedFlowId}
            onSelectPainPoint={setActivePainPoint}
            showTabs={false}
          />
        </section>

        <section className="card support-grid">
          <div>
            <p className="muted">Top pain points</p>
            <h3>Where to focus next</h3>
            <ul className="list">
              {topPainPoints.map((pp) => (
                <li key={pp.id}>
                  <span className={`badge ${pp.severity}`}>{pp.severity}</span> {pp.title}{' '}
                  <span className="muted">
                    — {pp.flow} · {pp.step}
                  </span>
                </li>
              ))}
              {!topPainPoints.length ? <li className="muted">No pain points mapped yet.</li> : null}
            </ul>
          </div>
          <div>
            <p className="muted">Flows</p>
            <h3>Included journeys</h3>
            <ul className="list">
              {persona.flows.map((flow) => (
                <li key={flow.id}>
                  <strong>{flow.name}</strong> · <span className="muted">{flow.channel}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <PainPointModal painPoint={activePainPoint} onClose={() => setActivePainPoint(null)} />
    </div>
  )
}

export default App
