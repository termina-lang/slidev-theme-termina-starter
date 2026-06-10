---
theme: termina
canvasWidth: 1920
aspectRatio: 16/9
lineNumbers: true
title: Termina Talk
# Deck knobs (all optional — see the theme README for the full list):
# palette: { prime: '#2C6FA6', subco: '#3E9B6E' }
# footLeft: 'termina · my talk'
# footRight: 'Org A · Org B'
# codeTheme: dark            # or light
favicon: /favicon.png        # square image in ./public/
layout: cover
eyebrow: My Project · v0
lead: One-line subtitle goes here.
# Per-deck assets (drop them in ./public/ and uncomment):
# coverImage: /cover.png
# coverImageWidth: 90%
# logos:
#   - { src: /sponsor_a_white.png, h: 62 }
#   - { src: /sponsor_b_white.png, h: 56 }
---

# Your talk title here

<!--
This IS your deck — edit slides.md (and ./schedule.ts for the Gantt/WBS data;
only the data, positions are computed). Drop logos/cover art in ./public/.

Layouts: cover · agenda · section · content · content-grid · content-stat ·
content-figure · code · content-code · table · gantt · wbs · timeline · steps ·
metrics · quote · team · participants · closing · default
Full frontmatter reference + every knob: the theme README
(https://github.com/termina-lang/slidev-theme-termina). For a tour of EVERY
layout with sample data, see the theme's own example.md.
-->

---
layout: section
number: '01'
lead: Optional supporting line.
---

First section

---
layout: content
eyebrow: Topic
locator: § Section
title: A full-width list of points
---

- **First point.** Supporting sentence.
- **Second point.** Supporting sentence.
- **Third point.** Supporting sentence.

---
layout: code
title: A code slide
filename: example.termina
---

```termina
task class CExample {
  // your Termina code here
}
```

---
layout: gantt
title: 12-month schedule
---

<script setup>
import { schedule } from './schedule'
</script>

<Gantt :data="schedule" />

---
layout: closing
title: Thank you.
contact: termina-lang.github.io
---
