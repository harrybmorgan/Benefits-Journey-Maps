export type Severity = 'low' | 'medium' | 'high'
export type StepStatus = 'healthy' | 'watch' | 'risk'

export type PainPoint = {
  id: string
  title: string
  severity: Severity
  description: string
  impact: string
  action: string
}

export type Artifact = {
  id: string
  label: string
  alt: string
  thumbnail: string
}

export type Step = {
  id: string
  title: string
  summary: string
  details: string
  touchpoint: string
  status: StepStatus
  tags: string[]
  metrics?: string
  duration?: string
  artifacts: Artifact[]
  painPoints: PainPoint[]
}

export type JourneyFlow = {
  id: string
  name: string
  description: string
  channel: string
  steps: Step[]
}

export type Persona = {
  id: string
  name: string
  role: string
  goal: string
  summary: string
  focus?: string
  flows: JourneyFlow[]
}

