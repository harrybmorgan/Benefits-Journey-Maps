export type StageNode = {
  id: string
  label: string
  clickable: boolean
  accent?: boolean
}

export type StageColumn = {
  id: string
  title: string
  nodes: StageNode[]
}

export type PersonaJourney = {
  personaId: string
  columns: StageColumn[]
}

export const journeys: PersonaJourney[] = [
  {
    personaId: 'nicole',
    columns: [
      {
        id: 'awareness',
        title: 'Awareness',
        nodes: [
          { id: 'discover-benefits', label: 'Discover benefits', clickable: true },
          { id: 'download-app', label: 'Download app', clickable: true },
        ],
      },
      {
        id: 'learn-enroll',
        title: 'Learn/Enroll',
        nodes: [
          { id: 'annual-open', label: 'Annual open enrollment', clickable: false },
          { id: 'first-time', label: 'First time enrollment', clickable: true },
          { id: 'compare-plans', label: 'Compare plans + review costs', clickable: true },
          { id: 'cobras', label: 'COBRA enrollment', clickable: false },
        ],
      },
      {
        id: 'manage',
        title: 'Manage',
        nodes: [
          { id: 'check-coverage', label: 'Check plan coverage', clickable: false },
          { id: 'invest-hsa', label: 'Invest HSA', clickable: false },
          { id: 'replace-card', label: 'Replace card', clickable: true },
          { id: 'check-balances', label: 'Check balances', clickable: true },
          { id: 'outside-wex', label: 'Outside WEX', clickable: false },
          { id: 'wex-resources', label: 'WEX Resources', clickable: false },
          { id: 'contact-service', label: 'Contact customer service', clickable: false },
          { id: 'pay-pocket', label: 'Pay out of pocket', clickable: true },
          { id: 'pay-using-card', label: 'Pay using WEX card', clickable: true },
          { id: 'get-help', label: 'Get help', clickable: true, accent: true },
          { id: 'get-reimbursed', label: 'Get reimbursed', clickable: true, accent: true },
          { id: 'set-hsa', label: 'Set HSA contribution', clickable: false },
          { id: 'login-auth', label: 'Login/authentication', clickable: false },
        ],
      },
      {
        id: 'transition',
        title: 'Transition',
        nodes: [
          { id: 'life-events', label: 'Life events', clickable: true, accent: true },
          { id: 'add-spouse', label: 'Add spouse', clickable: true },
          { id: 'add-child', label: 'Add child', clickable: false },
          { id: 'loses-job', label: 'Loses job', clickable: false },
          { id: 'cobra-payment', label: 'Make COBRA payment', clickable: false },
        ],
      },
    ],
  },
  {
    personaId: 'crystal',
    columns: [
      {
        id: 'awareness',
        title: 'Awareness',
        nodes: [
          { id: 'discover-benefits', label: 'Discover benefits', clickable: false },
          { id: 'download-app', label: 'Download app', clickable: true },
        ],
      },
      {
        id: 'learn-enroll',
        title: 'Learn/Enroll',
        nodes: [
          { id: 'annual-open', label: 'Annual open enrollment', clickable: false },
          { id: 'first-time', label: 'First time enrollment', clickable: false },
          { id: 'compare-plans', label: 'Compare plans + review costs', clickable: true },
          { id: 'cobras', label: 'COBRA enrollment', clickable: false },
        ],
      },
      {
        id: 'manage',
        title: 'Manage',
        nodes: [
          { id: 'check-coverage', label: 'Check plan coverage', clickable: true },
          { id: 'invest-hsa', label: 'Invest HSA', clickable: false },
          { id: 'replace-card', label: 'Replace card', clickable: true },
          { id: 'check-balances', label: 'Check balances', clickable: true },
          { id: 'outside-wex', label: 'Outside WEX', clickable: true },
          { id: 'wex-resources', label: 'WEX Resources', clickable: true },
          { id: 'contact-service', label: 'Contact customer service', clickable: true },
          { id: 'pay-pocket', label: 'Pay out of pocket', clickable: true },
          { id: 'pay-using-card', label: 'Pay using WEX card', clickable: true },
          { id: 'get-help', label: 'Get help', clickable: true, accent: true },
          { id: 'get-reimbursed', label: 'Get reimbursed', clickable: true, accent: true },
          { id: 'set-hsa', label: 'Set HSA contribution', clickable: false },
          { id: 'login-auth', label: 'Login/authentication', clickable: true },
        ],
      },
      {
        id: 'transition',
        title: 'Transition',
        nodes: [
          { id: 'life-events', label: 'Life events', clickable: true, accent: true },
          { id: 'add-spouse', label: 'Add spouse', clickable: true },
          { id: 'add-child', label: 'Add child', clickable: true },
          { id: 'loses-job', label: 'Loses job', clickable: false },
          { id: 'cobra-payment', label: 'Make COBRA payment', clickable: true },
        ],
      },
    ],
  },
  {
    personaId: 'eustace',
    columns: [
      {
        id: 'awareness',
        title: 'Awareness',
        nodes: [
          { id: 'discover-benefits', label: 'Discover benefits', clickable: false },
          { id: 'download-app', label: 'Download app', clickable: false },
        ],
      },
      {
        id: 'learn-enroll',
        title: 'Learn/Enroll',
        nodes: [
          { id: 'annual-open', label: 'Annual open enrollment', clickable: false },
          { id: 'first-time', label: 'First time enrollment', clickable: false },
          { id: 'compare-plans', label: 'Compare plans + review costs', clickable: true },
          { id: 'cobras', label: 'COBRA enrollment', clickable: true },
        ],
      },
      {
        id: 'manage',
        title: 'Manage',
        nodes: [
          { id: 'check-coverage', label: 'Check plan coverage', clickable: true },
          { id: 'invest-hsa', label: 'Invest HSA', clickable: true },
          { id: 'replace-card', label: 'Replace card', clickable: false },
          { id: 'check-balances', label: 'Check balances', clickable: true },
          { id: 'outside-wex', label: 'Outside WEX', clickable: true },
          { id: 'wex-resources', label: 'WEX Resources', clickable: true },
          { id: 'contact-service', label: 'Contact customer service', clickable: true },
          { id: 'pay-pocket', label: 'Pay out of pocket', clickable: true },
          { id: 'pay-using-card', label: 'Pay using WEX card', clickable: true },
          { id: 'get-help', label: 'Get help', clickable: true, accent: true },
          { id: 'get-reimbursed', label: 'Get reimbursed', clickable: true, accent: true },
          { id: 'set-hsa', label: 'Set HSA contribution', clickable: true },
          { id: 'login-auth', label: 'Login/authentication', clickable: true },
        ],
      },
      {
        id: 'transition',
        title: 'Transition',
        nodes: [
          { id: 'life-events', label: 'Life events', clickable: true, accent: true },
          { id: 'add-spouse', label: 'Add spouse', clickable: true },
          { id: 'add-child', label: 'Add child', clickable: true },
          { id: 'loses-job', label: 'Loses job', clickable: true },
          { id: 'cobra-payment', label: 'Make COBRA payment', clickable: true },
        ],
      },
    ],
  },
]

export function getJourneyByPersona(personaId: string): PersonaJourney | undefined {
  return journeys.find((journey) => journey.personaId === personaId)
}

