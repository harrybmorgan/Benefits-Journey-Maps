import type { JourneyFlow, PainPoint } from '../types'
import { StepCard } from './StepCard'

type JourneyTimelineProps = {
  flows: JourneyFlow[]
  selectedFlowId: string
  onSelectFlow: (flowId: string) => void
  onSelectPainPoint: (painPoint: PainPoint) => void
  showTabs?: boolean
}

export function JourneyTimeline({
  flows,
  selectedFlowId,
  onSelectFlow,
  onSelectPainPoint,
  showTabs = true,
}: JourneyTimelineProps) {
  const selectedFlow = flows.find((flow) => flow.id === selectedFlowId) ?? flows[0]

  return (
    <section className="card timeline">
      <div className="section-head">
        <div>
          <p className="muted">Journey</p>
          <h2>{selectedFlow.name}</h2>
          <p className="flow-summary">
            {selectedFlow.description} · {selectedFlow.channel}
          </p>
        </div>
      </div>

      {showTabs ? (
        <div className="flow-tabs" role="tablist" aria-label="Journey flows">
          {flows.map((flow) => {
            const active = flow.id === selectedFlow.id
            return (
              <button
                key={flow.id}
                role="tab"
                aria-selected={active}
                className={`tab ${active ? 'tab-active' : ''}`}
                onClick={() => onSelectFlow(flow.id)}
              >
                {flow.name}
              </button>
            )
          })}
        </div>
      ) : null}

      <div className="steps-grid">
        {selectedFlow.steps.map((step) => (
          <StepCard key={step.id} step={step} onSelectPainPoint={onSelectPainPoint} />
        ))}
      </div>
    </section>
  )
}

export default JourneyTimeline

