import type { PainPoint } from '../types'

type PainPointModalProps = {
  painPoint: PainPoint | null
  onClose: () => void
}

export function PainPointModal({ painPoint, onClose }: PainPointModalProps) {
  if (!painPoint) return null

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Pain point details">
      <div className="modal-card">
        <div className="modal-header">
          <div>
            <p className="muted">Pain point · {painPoint.severity}</p>
            <h3>{painPoint.title}</h3>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close pain point dialog">
            Close
          </button>
        </div>
        <div className="divider" />
        <p className="body-text">{painPoint.description}</p>
        <p className="body-text">
          <strong>Impact:</strong> {painPoint.impact}
        </p>
        <p className="body-text">
          <strong>Action:</strong> {painPoint.action}
        </p>
      </div>
    </div>
  )
}

export default PainPointModal

