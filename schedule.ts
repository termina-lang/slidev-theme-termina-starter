// schedule.ts — sample data for the theme's example deck (example.md).
// FAKE data for a fictional 9-month project with THREE partners — deliberately a
// different shape from any real deck, and a demo that the data-driven Gantt/WBS
// handle more than two partners (each gets its own colour & legend entry).
//   start / end : month numbers a work-package row spans (bar = start..end)
//   milestones  : month is a BOUNDARY (0 = project start, months = end)
//   deliverables: month is the end-of-month it is due
//   partners    : [{ id, label, color }] — rows/subs reference a partner by `id`;
//                 colour & legend come from here (a token var or any CSS colour).

const partners = [
  { id: 'HEL',  label: 'Helios Lab (prime)', color: 'var(--t-prime)' },
  { id: 'VEGA', label: 'Vega Systems',       color: 'var(--t-subco)' },
  { id: 'ORI',  label: 'Orion Cloud',        color: '#9C5BB8' },
]

export const schedule = {
  months: 9,
  partners,
  groups: [
    { code: 'WP1', name: 'Discovery', span: 'M1–M2', rows: [
      { sub: 'WP1.1', partner: 'HEL',  name: 'Field study',       start: 1, end: 2 },
      { sub: 'WP1.2', partner: 'VEGA', name: 'Sensor survey',     start: 1, end: 2 },
    ]},
    { code: 'WP2', name: 'Build', span: 'M2–M7', rows: [
      { sub: 'WP2.1', partner: 'HEL',  name: 'Firmware',          start: 2, end: 6 },
      { sub: 'WP2.2', partner: 'VEGA', name: 'Hardware',          start: 2, end: 5 },
      { sub: 'WP2.3', partner: 'ORI',  name: 'Cloud backend',     start: 3, end: 7 },
    ]},
    { code: 'WP3', name: 'Trials', span: 'M6–M9', rows: [
      { sub: 'WP3.1', partner: 'HEL',  name: 'Lab trials',        start: 6, end: 8 },
      { sub: 'WP3.2', partner: 'ORI',  name: 'Pilot deployment',  start: 7, end: 9 },
    ]},
  ],
  milestones: [
    { label: 'Kick-off',    month: 0 },
    { label: 'Field trial', month: 5 },
    { label: 'Launch',      month: 9 },
  ],
  deliverables: [
    { label: 'D1', month: 2 }, { label: 'D2', month: 5 },
    { label: 'D3', month: 7 }, { label: 'D4', month: 9 },
  ],
}

// wbs — the data behind the <WBS> work-breakdown slide (same fictional project).
export const wbs = {
  root: 'Sensor Platform — Work Breakdown',
  partners,
  groups: [
    { code: 'WP1', name: 'Discovery', span: 'Months 1–2', subs: [
      { code: 'WP1.1', partner: 'HEL',  name: 'Field Study',      who: 'A. Researcher' },
      { code: 'WP1.2', partner: 'VEGA', name: 'Sensor Survey',    who: 'B. Engineer' },
    ]},
    { code: 'WP2', name: 'Build', span: 'Months 2–7', subs: [
      { code: 'WP2.1', partner: 'HEL',  name: 'Firmware',         who: 'A. Researcher' },
      { code: 'WP2.2', partner: 'VEGA', name: 'Hardware',         who: 'C. Developer' },
      { code: 'WP2.3', partner: 'ORI',  name: 'Cloud Backend',    who: 'E. Cloud' },
    ]},
    { code: 'WP3', name: 'Trials', span: 'Months 6–9', subs: [
      { code: 'WP3.1', partner: 'HEL',  name: 'Lab Trials',       who: 'A. Researcher' },
      { code: 'WP3.2', partner: 'ORI',  name: 'Pilot Deployment', who: 'E. Cloud' },
    ]},
  ],
}
