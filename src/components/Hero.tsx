type HeroStat = {
  label: string
  value: string
}

type HeroProps = {
  title: string
  subtitle: string
  kicker?: string
  stats: HeroStat[]
}

export function Hero({ title, subtitle, kicker, stats }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-title">
          {kicker ? <span className="kicker">{kicker}</span> : null}
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card" aria-label={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Hero

