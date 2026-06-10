// schedule.ts — data behind the <Gantt> and <WBS> for this talk.
// Edit ONLY these objects; the components redraw deterministically.
//   start / end : month numbers a work-package row spans (bar = start..end)
//   milestones  : month is a BOUNDARY (0 = project start, months = end)
//   deliverables: month is the end-of-month it is due
//   partners    : [{ id, label, color }] — rows/subs reference a partner by `id`;
//                 colour & legend come from here (a token var or any CSS colour).

const partners = [
  { id: 'A', label: 'Partner A (prime)', color: 'var(--t-prime)' },
  { id: 'B', label: 'Partner B (sub)',   color: 'var(--t-subco)' },
]

export const schedule = {
  months: 12,
  partners,
  groups: [
    { code: 'WP1', name: 'First work package', span: 'M1–M3', rows: [
      { sub: 'WP1.1', partner: 'A', name: 'Task one',   start: 1, end: 3 },
      { sub: 'WP1.2', partner: 'B', name: 'Task two',   start: 2, end: 3 },
    ]},
    { code: 'WP2', name: 'Second work package', span: 'M3–M8', rows: [
      { sub: 'WP2.1', partner: 'A', name: 'Task three', start: 3, end: 8 },
      { sub: 'WP2.2', partner: 'B', name: 'Task four',  start: 4, end: 8 },
    ]},
  ],
  milestones: [
    { label: 'Kick-off',        month: 0 },
    { label: 'Mid-term review', month: 6 },
    { label: 'Final review',    month: 12 },
  ],
  deliverables: [
    { label: 'D1', month: 3 }, { label: 'D2', month: 8 }, { label: 'D3', month: 12 },
  ],
}

export const wbs = {
  root: 'My Project — Work Breakdown',
  partners,
  groups: [
    { code: 'WP1', name: 'First work package', span: 'Months 1–3', subs: [
      { code: 'WP1.1', partner: 'A', name: 'Task One', who: 'Owner A' },
      { code: 'WP1.2', partner: 'B', name: 'Task Two', who: 'Owner B' },
    ]},
    { code: 'WP2', name: 'Second work package', span: 'Months 3–8', subs: [
      { code: 'WP2.1', partner: 'A', name: 'Task Three', who: 'Owner A' },
      { code: 'WP2.2', partner: 'B', name: 'Task Four',  who: 'Owner B' },
    ]},
  ],
}
