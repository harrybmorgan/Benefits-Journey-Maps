type LandingProps = {
  onEnter: () => void
  imageUrl?: string
}

export function Landing({ onEnter, imageUrl }: LandingProps) {
  return (
    <div className="landing">
      <header className="landing-hero">
        <div className="landing-copy">
          <img src="/wex-logo.svg" alt="WEX logo" className="landing-logo" />
          <h1>
            Welcome to your
            <br />
            benefits journey!
          </h1>
          <p>
            Use this interactive map to get to know our customers and their journey through WEX.
          </p>
          <button className="landing-cta" type="button" onClick={onEnter}>
            Enter the journey
          </button>
        </div>
        <div className="landing-visual">
          <div className="landing-figure">
            {imageUrl ? (
              <img src={imageUrl} alt="Benefits journey illustration" />
            ) : (
              <div className="landing-placeholder" aria-hidden>
                <span>Hero artwork</span>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="landing-footer">
        <span>Your adventure awaits</span>
        <span className="landing-arrow">↓</span>
      </div>
    </div>
  )
}

export default Landing

