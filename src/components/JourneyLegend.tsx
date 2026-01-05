export function JourneyLegend() {
  return (
    <div className="legend" aria-label="Legend for journey statuses and pain points">
      <span className="pill success">
        <span className="pill-dot" />
        Healthy step
      </span>
      <span className="pill warning">
        <span className="pill-dot" />
        Watch
      </span>
      <span className="pill danger">
        <span className="pill-dot" />
        At risk
      </span>
      <span className="pill info">
        <span className="pill-dot" />
        Screenshot / artifact
      </span>
      <span className="pill">
        <span className="pill-dot" style={{ background: '#f59e0b' }} />
        Pain point (tap to open details)
      </span>
    </div>
  )
}

export default JourneyLegend

