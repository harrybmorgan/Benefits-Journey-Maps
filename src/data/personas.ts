import type { Persona } from '../types'

export const personas: Persona[] = [
  {
    id: 'new-hire',
    name: 'Ava Chen',
    role: 'New hire',
    goal: 'Finish enrollment before day 15 with confidence',
    summary:
      'Needs clarity on plan fit, deadlines, and quick access to enrollment help while switching between desktop and mobile.',
    focus: 'Speed to enroll + reassurance',
    flows: [
      {
        id: 'onboarding',
        name: 'Onboarding & enrollment',
        channel: 'Web + mobile',
        description:
          'Guides a new hire from eligibility to confirmation while surfacing guardrails for missing documents or plan confusion.',
        steps: [
          {
            id: 'welcome',
            title: 'Welcome + eligibility',
            summary: 'Confirm eligibility window and collect basic profile info.',
            details:
              'Eligibility details are scattered across email and portal. Users skim the email and miss that dependents require proof before enrollment.',
            touchpoint: 'Email → portal',
            status: 'watch',
            tags: ['Eligibility', 'Checklist'],
            metrics: '62% email open rate, 41% completion',
            artifacts: [
              {
                id: 'welcome-shot',
                label: 'Welcome email preview',
                alt: 'Welcome email with eligibility dates',
                thumbnail:
                  'https://images.unsplash.com/photo-1587614295999-6c7c1e17db04?auto=format&fit=crop&w=800&q=80',
              },
            ],
            painPoints: [
              {
                id: 'eligibility-confusion',
                title: 'Eligibility window is easy to miss',
                severity: 'medium',
                description: 'Dates appear in text but not reinforced in the portal banner.',
                impact: 'Leads to rushed enrollment and HR tickets about missed deadlines.',
                action: 'Add inline countdown banner and calendar add-to links.',
              },
            ],
          },
          {
            id: 'compare',
            title: 'Compare plans',
            summary: 'Side-by-side plan comparison to choose HSA vs PPO.',
            details:
              'Plan compare lacks highlighted “best for me” hints. Users toggle coverage levels to check total cost but lose previous selections.',
            touchpoint: 'Portal (desktop)',
            status: 'risk',
            tags: ['Plan compare', 'Decision support'],
            metrics: 'Avg time on step: 7m 12s',
            artifacts: [
              {
                id: 'compare-shot',
                label: 'Comparison view',
                alt: 'Benefits plan comparison cards',
                thumbnail:
                  'https://images.unsplash.com/photo-1587614203976-365c74645e83?auto=format&fit=crop&w=900&q=80',
              },
            ],
            painPoints: [
              {
                id: 'no-recommendation',
                title: 'No “best for me” guidance',
                severity: 'high',
                description: 'Lacks defaults tuned to persona; users bounce to PDFs or HR.',
                impact: 'Decision fatigue and deferral past day 10.',
                action: 'Add quick recommend with estimated annual cost and highlights.',
              },
              {
                id: 'toggle-loss',
                title: 'Selections reset when switching tabs',
                severity: 'medium',
                description: 'Switching networks clears deductible view and totals.',
                impact: 'Forces rework; users assume totals are wrong.',
                action: 'Persist filters and show change history inline.',
              },
            ],
          },
          {
            id: 'dependents',
            title: 'Add dependents & documents',
            summary: 'Upload proof and validate coverage levels.',
            details:
              'Users hit file size errors without guidance and do not see that PDF is preferred. Mobile camera uploads create unreadable scans.',
            touchpoint: 'Mobile + desktop',
            status: 'watch',
            tags: ['Document upload', 'Validation'],
            metrics: '23% re-upload rate',
            artifacts: [
              {
                id: 'upload-shot',
                label: 'Dependent upload',
                alt: 'Upload form with drag-and-drop',
                thumbnail:
                  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
              },
            ],
            painPoints: [
              {
                id: 'file-errors',
                title: 'Unclear file guidance',
                severity: 'medium',
                description: 'No preview or compress hint before upload.',
                impact: 'Support tickets about unreadable documents.',
                action: 'Add pre-upload tips + auto-compress on mobile.',
              },
            ],
          },
          {
            id: 'submit',
            title: 'Submit enrollment',
            summary: 'Review totals, sign, and submit.',
            details:
              'Final step is straightforward; reassurance needed that elections were saved and when coverage starts.',
            touchpoint: 'Portal',
            status: 'healthy',
            tags: ['Confirmation', 'Compliance'],
            duration: '< 2m',
            artifacts: [
              {
                id: 'confirmation-shot',
                label: 'Confirmation screen',
                alt: 'Enrollment confirmation with start date',
                thumbnail:
                  'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
              },
            ],
            painPoints: [],
          },
        ],
      },
      {
        id: 'support',
        name: 'Need help during enrollment',
        channel: 'Mobile + chat',
        description: 'Provides quick access to chat, FAQs, and human help without leaving context.',
        steps: [
          {
            id: 'surface-help',
            title: 'Inline help surfaces',
            summary: 'Contextual help inside comparison and upload screens.',
            details: 'Help drawer exists but is hidden behind “?” icon on mobile.',
            touchpoint: 'In-app help',
            status: 'watch',
            tags: ['Help', 'Deflection'],
            artifacts: [
              {
                id: 'help-drawer',
                label: 'Help drawer',
                alt: 'Right side help drawer with FAQs',
                thumbnail:
                  'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80',
              },
            ],
            painPoints: [
              {
                id: 'help-discoverability',
                title: 'Help entry is hidden',
                severity: 'medium',
                description: 'Icon-only affordance; users instead open a ticket.',
                impact: 'Drives avoidable support chats.',
                action: 'Add inline “Need help?” CTA with top FAQ links.',
              },
            ],
          },
          {
            id: 'handoff',
            title: 'Chat to human handoff',
            summary: 'Escalate complex questions to HR without retyping context.',
            details:
              'Chatbot captures intent but loses the selected plan context when escalating to a human.',
            touchpoint: 'Chat + case',
            status: 'risk',
            tags: ['Handoff', 'Context'],
            painPoints: [
              {
                id: 'context-loss',
                title: 'Context lost on handoff',
                severity: 'high',
                description: 'Agent cannot see plan card user was viewing.',
                impact: 'Adds 3-5 minutes per chat and user frustration.',
                action: 'Pass current plan + screen link into case notes automatically.',
              },
            ],
            artifacts: [],
          },
        ],
      },
    ],
  },
  {
    id: 'caregiver',
    name: 'Jordan Lee',
    role: 'Caregiver',
    goal: 'Submit and track medical claims for a parent',
    summary:
      'Switches between mobile photos and desktop to finish claims; needs clarity on what is reimbursable.',
    focus: 'Reduce rework + transparency',
    flows: [
      {
        id: 'claim',
        name: 'Submit a claim',
        channel: 'Mobile first',
        description:
          'Guides from receipt capture to reimbursement, with upfront checks on eligibility and documentation.',
        steps: [
          {
            id: 'capture',
            title: 'Capture receipt',
            summary: 'Takes photo of EOB or receipt on mobile.',
            details: 'Low-light photos cause rejected claims; no guidance before capture.',
            touchpoint: 'Mobile camera',
            status: 'risk',
            tags: ['Capture', 'Quality'],
            painPoints: [
              {
                id: 'photo-quality',
                title: 'Unclear capture quality',
                severity: 'medium',
                description: 'No feedback after snap; user only sees rejection days later.',
                impact: 'Cycle time increases; user resubmits same receipt.',
                action: 'Add live quality check and “retake” guidance.',
              },
            ],
            artifacts: [],
          },
          {
            id: 'eligibility-check',
            title: 'Eligibility check',
            summary: 'Confirms expense type and plan before upload.',
            details: 'Question copy is long; users skip and later see denials.',
            touchpoint: 'Mobile + desktop',
            status: 'watch',
            tags: ['Eligibility', 'Copy'],
            painPoints: [
              {
                id: 'copy-fatigue',
                title: 'Dense copy',
                severity: 'low',
                description: 'Users skim; no inline examples.',
                impact: 'Leads to 12% avoidable denials.',
                action: 'Swap to bullets + examples with icons.',
              },
            ],
            artifacts: [],
          },
          {
            id: 'status',
            title: 'Track status',
            summary: 'Shows where a claim sits and what’s needed.',
            details: 'Status uses system codes; no SLA expectation.',
            touchpoint: 'Portal + email',
            status: 'watch',
            tags: ['Tracking', 'Notifications'],
            painPoints: [
              {
                id: 'status-opaque',
                title: 'Opaque statuses',
                severity: 'medium',
                description: '“In review” shows no ETA; users call support.',
                impact: 'High call volume on day 5-6.',
                action: 'Add ETA and next expected action with channel.',
              },
            ],
            artifacts: [],
          },
        ],
      },
    ],
  },
  {
    id: 'hsa-maximizer',
    name: 'Priya Patel',
    role: 'HSA power user',
    goal: 'Optimize HSA and reimburse fast',
    summary:
      'Uploads receipts monthly, wants shortcuts, and uses both desktop and mobile to reconcile quickly.',
    focus: 'Efficiency + reuse',
    flows: [
      {
        id: 'reimburse',
        name: 'Reimburse yourself',
        channel: 'Desktop + mobile',
        description:
          'Fast path to submit recurring expenses with reusable payees and stored bank accounts.',
        steps: [
          {
            id: 'start-fast',
            title: 'Start from recent expense',
            summary: 'Searches recent transactions and pre-fills provider.',
            details: 'Recent list is long; no filters for provider or tag.',
            touchpoint: 'Portal',
            status: 'watch',
            tags: ['Prefill', 'Search'],
            painPoints: [
              {
                id: 'no-filter',
                title: 'No quick filters',
                severity: 'medium',
                description: 'Scrolling slows repeat users.',
                impact: 'Drop-offs on step 1 for power users.',
                action: 'Add filters (provider, tag, date) and keyboard shortcuts.',
              },
            ],
            artifacts: [],
          },
          {
            id: 'review',
            title: 'Review and submit',
            summary: 'Confirms bank, amount, and remittance method.',
            details: 'Bank selection defaults to first account; not the most recent.',
            touchpoint: 'Portal',
            status: 'healthy',
            tags: ['Payment', 'Defaults'],
            painPoints: [],
            artifacts: [],
          },
        ],
      },
    ],
  },
]

export default personas

