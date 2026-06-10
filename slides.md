---
# ════════════════════════════════════════════════════════════════════
#  Termina deck — STARTER (fictional data)
#  A tour of EVERY layout in the theme. Clone, then edit this file.
#    npm install   &&   npm run dev
#  Delete the slides you don't need; keep the ones you want as a base.
#  Full frontmatter reference for every layout: the theme README
#  (https://github.com/termina-lang/slidev-theme-termina).
# ════════════════════════════════════════════════════════════════════
# ── deck-wide settings ──
theme: termina
canvasWidth: 1920
aspectRatio: 16/9
lineNumbers: true
title: Termina Deck — Starter
favicon: /favicon.png
htmlAttrs:
  lang: en
# ── deck knobs (all optional; shown here for reference) ──
# palette: deck-owned colours. Each key K overrides the theme token --t-K
# everywhere (Gantt/WBS/participants/legend). Uncomment to recolour:
# palette:
#   prime: '#2C6FA6'
#   subco: '#3E9B6E'
# footer text shown on every content slide (left / right):
footLeft: 'termina · sample deck'
footRight: 'Helios Lab · Vega Systems'
# code panel theme for the whole deck (dark | light); override per slide:
codeTheme: dark
# ── slide 1 · COVER ──
layout: cover
eyebrow: Sample · v0
lead: A starter deck that shows every layout in the theme.
# coverImage / logos are per-deck assets (drop them in ./public/):
# coverImage: /cover.png
# logos:
#   - { src: /sponsor_a_white.png, h: 62 }
---

# Termina Deck — Starter

<!--
HOW THIS DECK WORKS
- Each slide is `---` + a frontmatter block that picks a `layout:`.
- Text layouts take plain Markdown; data layouts take a `:data` object or
  frontmatter lists (items / groups / columns).
- See README.md for the full frontmatter reference of every layout.
-->

---
layout: agenda
title: What we'll cover
items:
  - { title: 'Context & layouts', meta: 'the basics' }
  - { title: 'Content & code', meta: 'text & snippets' }
  - { title: 'Tables, boards & data', meta: 'table · register · board · gantt' }
  - { title: 'People & wrap-up', meta: 'closing' }
---

---
layout: section
number: '01'
lead: Dividers introduce a block; the body is the big section title.
---

Content<br>layouts

---
layout: content
eyebrow: Content
locator: § content
title: A normal, full-width content slide
---

- **One column, brand bullets.** Full-width list; good for prose-y points.
- **Nested points** get a lighter marker:
  - A second-level bullet.
  - Another one.
- **Use `default`** for totally free Markdown (paragraphs, mixed content).

---
layout: default
---

## `default` — free Markdown

Use `default` for totally free content: paragraphs, mixed Markdown, your own
components. No header chrome, no brand bullets — just the slide.

> Reach for it when a layout would get in the way.

---
layout: content-grid
eyebrow: Content
locator: § content-grid
title: A 2-column bullet grid
---

- **Cell one.** Bullets flow into a two-column grid.
- **Cell two.** Rows grow with the number of items.
- **Cell three.** Each `**lead**` is emphasised.
- **Cell four.** Great for four parallel points.

---
layout: content-stat
eyebrow: Content
locator: § content-stat
title: A hero number with supporting points
stat: 3–12
statUnit: units / day
statCaption: A big figure on the left, the argument on the right.
---

- **Point one.** Supporting bullet next to the hero stat.
- **Point two.** Keep these short.
- **Point three.** Three is a good maximum.

---
layout: content-figure
eyebrow: Content
locator: § content-figure
title: Bullets beside a figure card
figTag: FIG. 01
figLabel: Drop a diagram / screenshot
---

- **Left column** holds the explanation.
- **Right card** shows `figImage:` (a per-deck asset) or this placeholder.
- Good for a paper figure or an architecture sketch.

---
layout: code
eyebrow: Code
locator: § code
title: A code panel (with filename)
filename: hello.termina
---

```termina
#[priority(8: u32)]
task class HelloTask {
  timer_evp : sink TimeVal triggers tick;

  action tick(&priv self, t : TimeVal) -> Status<i32> {
    return Success;
  }
}
```

::note::

With a `filename:` you get the title bar (dots + name + lang badge). Without it, a single lang badge floats over the code. Add `codeTheme: light` for a light panel.

---
layout: content-code
eyebrow: Code
locator: § content-code
title: Bullets beside code
filename: split.termina
---

- **Left:** the points (default slot).
- **Right:** the code, after `::code::`.
- The lang badge text comes from `lang:` (default `termina`).

::code::

```termina
fn add(a : u32, b : u32) -> u32 {
  return a + b;
}
```

---
layout: section
number: '02'
lead: Tables, boards and the data-driven schedule diagrams.
---

Tables, boards<br>& data

---
layout: table
eyebrow: Tables
locator: § table
title: A styled table with a highlighted column
highlight: 4
---

| Property | A | B | Termina |
|---|---|---|---|
| Memory safety | <span class="t-no">✗</span> | <span class="t-yes">✓</span> | <span class="t-yes">✓</span> |
| Bounded execution | <span class="t-no">✗</span> | <span class="t-partial">~</span> | <span class="t-yes">✓</span> |
| Timing models | <span class="t-no">✗</span> | <span class="t-no">✗</span> | <span class="t-yes">✓</span> |

::note::

`highlight: <n>` accents the n-th column; `::note::` adds this caption.

---
layout: register
eyebrow: Tables
locator: § register
title: A grouped register (ID + name rows)
columns: ['Group', 'Items']
groups:
  - lead: G1
    label: First group
    items:
      - { lead: A1, text: An item in the first group }
      - { lead: A2, text: A highlighted item, mark: true, tag: NEW }
  - lead: G2
    label: Second group
    items:
      - { lead: B1, text: An item in the second group }
      - { lead: B2, text: Groups auto-split into two balanced columns }
      - { lead: B3, text: The label cell spans its items (rowspan) }
---

---
layout: board
eyebrow: Planning
locator: § board
title: A kanban board (lanes of cards)
columns:
  - title: To do
    cards:
      - { title: Card one, text: A card with a title and a body line. }
      - { text: A title-less card renders its text as the main line. }
  - title: In progress
    tag: WIP
    cards:
      - { title: Card two, text: Lanes and cards auto-scale with count. }
  - title: Done
    cards:
      - { title: Card three, text: Long detail can live in presenter notes. }
---

---
layout: checklist
eyebrow: Planning
locator: § checklist
title: Open points to agree
items:
  - { title: 'First point', text: 'Click a row to tick it (resets on reload).' }
  - { title: 'Second point', text: 'Good for "to agree / to clarify" lists.' }
  - { title: 'Third point', text: 'Gap and sizes auto-scale with item count.' }
---

---
layout: wbs
title: Work-package breakdown
---

<script setup>
import { wbs } from './schedule'
</script>

<WBS :data="wbs" />

---
layout: gantt
title: 9-month schedule
---

<script setup>
import { schedule } from './schedule'
</script>

<Gantt :data="schedule" />

---
layout: timeline
eyebrow: Schedule
locator: § timeline
title: Milestone timeline
items:
  - { date: 'Jan 2026', label: 'Kick-off', note: 'Project start.' }
  - { date: 'Jun 2026', label: 'Mid-term', note: 'Mid-term review.' }
  - { date: 'Dec 2026', label: 'Final', note: 'Final review.' }
---

---
layout: steps
eyebrow: Plan
locator: § steps
title: Next steps
items:
  - { title: 'Step one', text: 'Numbered sequence; auto 01, 02, … or explicit n:.' }
  - { title: 'Step two', text: 'Number centres on its title + text block.' }
  - { title: 'Step three', text: 'Good for roadmaps and procedures.' }
---

---
layout: metrics
eyebrow: Outcomes
title: Up to three hero metrics
metrics:
  - { value: '↓ 40%', unit: 'effort', label: 'Short, punchy figures only.' }
  - { value: '100%', unit: 'traceable', label: 'Use timeline for dates, not this.' }
  - { value: '3×', unit: 'faster', label: 'Three is the maximum.' }
---

---
layout: section
number: '03'
lead: People and the closing slide.
---

People &<br>wrap-up

---
layout: participants
eyebrow: Participants
title: Grouped by organisation
groups:
  - org: Helios Lab
    accent: '#2C6FA6'
    tag: Prime
    people:
      - { name: 'A. Researcher', role: 'Lead' }
      - { name: 'C. Developer', role: 'Engineer' }
  - org: Vega Systems
    accent: '#3E9B6E'
    tag: Sub
    people:
      - { name: 'B. Engineer', role: 'Architect' }
      - { name: 'D. Analyst', role: 'Validation' }
---

---
layout: quote
---

Design once, *reuse* everywhere.

---
layout: team
title: Who is behind it
people:
  - { name: 'A. Researcher', role: 'Helios Lab' }
  - { name: 'B. Engineer', role: 'Vega Systems' }
---

---
layout: closing
title: Thank you.
lead: Questions and collaboration welcome.
contact: example.org · termina-lang.github.io
---
