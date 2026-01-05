import { useEffect, useMemo, useState } from 'react'
import CharacterSelector from './components/CharacterSelector'
import Landing from './components/Landing'
import JourneyStages from './components/JourneyStages'
import personas from './data/personas'
import { getJourneyByPersona } from './data/journeys'
// PainPoint type retained for potential future use
// import type { PainPoint } from './types'

function App() {
  const [showLanding, setShowLanding] = useState(true)
  const [personaId, setPersonaId] = useState(personas[0]?.id ?? '')
  const [view, setView] = useState<'home' | 'journey'>('home')
  // const [activePainPoint] = useState<PainPoint | null>(null) // kept for future modal wiring; currently unused

  const persona = useMemo(
    () => personas.find((item) => item.id === personaId) ?? personas[0],
    [personaId],
  )

  useEffect(() => {
    if (!persona) return
  }, [persona])

  if (!persona) {
    return null
  }

  if (showLanding) {
    return (
      <Landing
        onEnter={() => {
          setShowLanding(false)
          setView('home')
        }}
        imageUrl="/landing-hero.png"
      />
    )
  }

  if (view === 'journey') {
    const journey = getJourneyByPersona(persona.id)
    return (
      <div className="page light-page">
        <main className="shell">
          {journey ? (
            <JourneyStages journey={journey} personaName={persona.name} />
          ) : (
            <p>Journey data not found.</p>
          )}
        </main>
      </div>
    )
  }

  return (
    <div className="page light-page">
      <main className="shell">
        <CharacterSelector
          personas={personas}
          selectedId={persona.id}
          onSelect={(id) => {
            setPersonaId(id)
          }}
          heroImage="/landing-hero.png"
          onExplore={(id) => {
            setPersonaId(id)
            setView('journey')
          }}
        />
      </main>
    </div>
  )
}

export default App
