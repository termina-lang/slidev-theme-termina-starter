# slidev-theme-termina-starter

Starter for [Slidev](https://sli.dev) decks with the **Termina** brand theme
([`slidev-theme-termina`](https://github.com/termina-lang/slidev-theme-termina)).
Clone it and start making slides — the theme is pulled from GitHub, no need to
clone it separately.

## Quick start

```bash
git clone https://github.com/termina-lang/slidev-theme-termina-starter my-talk
cd my-talk
npm install        # pulls the Termina theme from GitHub (pinned tag)
npm run dev        # opens the deck in your browser, hot-reloads
```

Then edit **`slides.md`**. That's it.

## Layout

```
slides.md      your deck (edit this)
schedule.ts    data for the <Gantt> / <WBS> diagrams (edit the data only)
public/        per-deck art — your logos / cover image (favicon is theme-provided)
package.json   pins the theme version
```

## Common things

- **Add partner logos / a cover image:** drop the files in `public/` and set
  `coverImage:` / `logos:` in the cover frontmatter (see the commented lines).
  Logos are best as white PNGs trimmed to content.
- **Edit the Gantt/WBS:** change the data in `schedule.ts` — positions are
  computed, never hand-placed.
- **Every layout + knob:** see the theme README
  (<https://github.com/termina-lang/slidev-theme-termina>). For a live tour of
  all layouts with sample data, run the theme's own `example.md`.
- **Export:**
  ```bash
  npm run export        # PDF
  npm run export:pptx   # PPTX (image per slide)
  ```
  (Export needs `playwright-chromium`, already a devDependency.)

## Updating the theme

The theme is pinned in `package.json`
(`"slidev-theme-termina": "github:termina-lang/slidev-theme-termina#v0.3.2"`).
Bump the tag and `npm install` to pick up a newer theme. npm caches GitHub deps,
so to force a specific tag use:

```bash
npm install "slidev-theme-termina@github:termina-lang/slidev-theme-termina#vX" --force
```
