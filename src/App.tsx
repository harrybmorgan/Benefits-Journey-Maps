import { useEffect, useMemo, useState } from 'react'
import JourneyLegend from './components/JourneyLegend'
import JourneyTimeline from './components/JourneyTimeline'
import { Hero } from './components/Hero'
import PainPointModal from './components/PainPointModal'
import PersonaSelector from './components/PersonaSelector'
import personas from './data/personas'
import type { PainPoint } from './types'

function App() {
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

  const stats = {
    personas: personas.length,
    flows: persona.flows.length,
    painPoints: persona.flows.reduce(
      (total, flow) => total + flow.steps.reduce((sum, step) => sum + step.painPoints.length, 0),
      0,
    ),
    artifacts: persona.flows.reduce(
      (total, flow) => total + flow.steps.reduce((sum, step) => sum + step.artifacts.length, 0),
      0,
    ),
  }

  return (
    <div className="page">
      <Hero
        kicker="Interactive journeys"
        title="Benefits journeys, tailored by persona"
        subtitle="Explore flows, pain points, and artifacts to align teams on where to focus next. Switch personas to see how the experience shifts across touchpoints."
        stats={[
          { label: 'Personas', value: `${stats.personas}` },
          { label: 'Flows for this persona', value: `${stats.flows}` },
          { label: 'Mapped pain points', value: `${stats.painPoints}` },
          { label: 'Artifacts', value: `${stats.artifacts}` },
        ]}
      />

      <main className="shell">
        <PersonaSelector personas={personas} selectedId={persona.id} onSelect={setPersonaId} />
        <JourneyLegend />
        <JourneyTimeline
          flows={persona.flows}
          selectedFlowId={selectedFlowId}
          onSelectFlow={setSelectedFlowId}
          onSelectPainPoint={setActivePainPoint}
        />
      </main>

      <PainPointModal painPoint={activePainPoint} onClose={() => setActivePainPoint(null)} />
    </div>
  )
}

export default App
