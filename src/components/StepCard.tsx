import { useState } from 'react'
import type { PainPoint, Step } from '../types'
import { Gallery } from './Gallery'

type StepCardProps = {
  step: Step
  onSelectPainPoint: (painPoint: PainPoint) => void
}

export function StepCard({ step, onSelectPainPoint }: StepCardProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <article className="card step-card">
      <div className="step-header">
        <div>
          <p className="step-meta">
            <span>{step.touchpoint}</span>
            {step.metrics ? <span>• {step.metrics}</span> : null}
            {step.duration ? <span>• {step.duration}</span> : null}
          </p>
          <h3 className="step-title">{step.title}</h3>
        </div>
        <div className="step-meta">
          <span className={`badge ${step.status}`}>{step.status}</span>
          <button className="collapse-toggle" onClick={() => setExpanded((prev) => !prev)}>
            {expanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>

      {expanded ? (
        <>
          <p className="body-text">{step.summary}</p>
          <p className="body-text">{step.details}</p>

          {step.tags.length ? (
            <div className="tags" aria-label="Tags">
              {step.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {step.painPoints.length ? (
            <div className="pain-points" aria-label="Pain points">
              {step.painPoints.map((pain) => (
                <button
                  key={pain.id}
                  className={`pain-badge ${pain.severity}`}
                  onClick={() => onSelectPainPoint(pain)}
                >
                  {pain.title}
                </button>
              ))}
            </div>
          ) : null}

          {step.artifacts.length ? <Gallery artifacts={step.artifacts} label={step.title} /> : null}
        </>
      ) : null}
    </article>
  )
}

export default StepCard

