# Mindspace Design System

> 你的靈感宇宙 — *Your Universe of Inspiration*

Mindspace is a personal "inspiration universe" app, built around a poetic, science-fiction-tinged metaphor: your mind is a luminous, translucent brain, and every idea you've ever had floats inside it as a softly-glowing card. Open the app and you see your own brain, alive with neural sparkle, holding photo-thumbnailed ideas in suspension. Drill into a brain region (e.g. *前額葉皮質* / Prefrontal Cortex) and the ideas in that region surface, organized by the cognitive function that lobe represents.

The product is rendered in **Traditional Chinese** as the primary language, with English subtitles for region/feature names. The voice is warm, reflective, and slightly literary — closer to a quiet companion than a productivity app.

---

## Source materials

This system was reverse-engineered from two reference renders provided by the user:

- `uploads/ChatGPT Image 2026年5月7日 下午02_01_24.png` — Mindspace home (full-bleed brain, 9 idea-cards floating inside it)
- `uploads/ChatGPT Image 2026年5月7日 下午02_47_20.png` — Side-by-side: Mindspace home + Prefrontal Cortex detail screen

No codebase, Figma file, or font files were provided, so type and exact tokens are inferred from the renders. Substitutions are flagged in **CAVEATS** at the bottom of this file.

---

## Index

| File / folder | What it is |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography |
| `colors_and_type.css` | Color tokens + typography scale + semantic CSS variables |
| `SKILL.md` | Agent-Skills-compatible entry point for Claude Code |
| `assets/` | Logos, icons, brain imagery, idea-card photos |
| `fonts/` | Webfont files (currently CDN-linked — see CAVEATS) |
| `preview/` | Cards rendered into the project's Design System tab |
| `ui_kits/mindspace/` | Hi-fi React recreation of the mobile/tablet app |

---

## Product surfaces

There is **one product**: the Mindspace app itself. It appears to be designed for tablet-sized canvases (the renders are ~3:2). Two core screens are visible:

1. **Home / 靈感宇宙** — Full-bleed translucent brain with idea-cards floating in it. Left rail: 新增靈感 (Add inspiration), 靈感地圖 (Inspiration map), 清空大腦 (Clear mind). Bottom-right floating capsule: 大腦清空計畫 (Brain-clearing plan).
2. **Region detail / 前額葉皮質** — Side rail of brain regions (前額葉皮質, 海馬迴, 頂葉, 預設模式網路, 獎勵系統). Right column: a status card ("目前負荷狀態 / 偏高 72%") and a list of ideas tagged to that region. Bottom: a balance suggestion card (建議平衡).

---

## CONTENT FUNDAMENTALS

**Language.** Traditional Chinese (zh-Hant) primary. English appears only as a subtitle under bilingual region names — e.g. `前額葉皮質 / Prefrontal Cortex`. Never use Simplified Chinese.

**Voice.** Reflective, warm, lightly literary. The product addresses the user as a *creator* (`創造者`) and treats ideas as precious things "in suspension." Copy is written as if a thoughtful friend is narrating, not a system reporting state.

Examples lifted from the renders:
- `歡迎回來，創造者。` — *Welcome back, creator.* (Note the comma + full stop. Sentences end punctuated even when short.)
- `這裡收藏著你曾經想嘗試的所有可能性。` — *Here lives every possibility you've ever wanted to try.*
- `探索你的靈感宇宙` — *Explore your universe of inspiration.*
- `你的前額葉正在高負荷運作，建議安排恢復型活動。` — Status messages stay observational; the app *suggests*, never *commands*.

**Casing & punctuation.** Chinese uses full-width punctuation (`，。、`). English subtitles are Title Case (`Prefrontal Cortex`, not `prefrontal cortex`). No exclamation marks. No em-dashes. Numerals are half-width (`72%`, `2 天前新增`).

**Tone moves.**
- Use *你* (informal "you"), never *您* (formal). The app is intimate.
- Treat ideas as living things: 靈感 (inspiration), 收藏 (collect/keep), 流動 (flow), 可能性 (possibilities).
- Brain-anatomy vocabulary is the primary metaphor system. Lean in: *負荷狀態* (load state), *恢復型活動* (recovery activity), *規劃、決策、目標設定* (planning, decision, goal-setting).
- Action labels are short verbs or noun-phrases: `新增靈感`, `清空大腦`, `靈感地圖`, `大腦清空計畫`.
- Tags on idea-cards are 2-character pills: `規劃`, `決策`, `情感`, `預算`, `多步驟`.

**No emoji. No exclamation. No promotional copy.** Whitespace and the brain imagery do the emotional work.

---

## VISUAL FOUNDATIONS

The aesthetic is **luminous, translucent, near-monochrome with a single iridescent accent**. Picture a museum-grade product render: a single subject (the brain) photographed against soft warm light, with UI floating in front of it as if etched on glass.

### Color
- **Background.** Off-white with a faint warm cast (`#F4F2EF` → `#ECEAE6`). Never pure white. Subtle vertical gradient from top-warm to bottom-slightly-cooler.
- **Surface (cards).** Translucent white over the brain, ~85% opacity, with a soft inner-light feel. They look like frosted glass tiles, not solid cards.
- **Foreground.** Deep warm grey for text (`#2A2723`), softer grey for secondary (`#7C7872`), tertiary (`#B5B0A8`).
- **Accent.** A single iridescent gradient — pale blue → lavender → soft pink — used very sparingly: the `+` add button, the active region tab, the progress bar in 負荷狀態, the small dot indicator next to product names. This is the *only* saturated color in the system.
- **Imagery.** Idea-card thumbnails are warm, soft, slightly grainy photographs (camera, latte, plant, surfer, guitar, notebook). Never illustrated, never b&w.

### Type
- **Display / Body — Chinese.** A modern humanist sans with low contrast and slightly soft terminals. Reference: Noto Sans TC at weights 400/500/600. Used at sizes 14 / 16 / 20 / 28 / 44.
- **Subtitle — English.** A geometric sans, slightly looser than the Chinese, set 1–2 sizes smaller and in tertiary grey.
- **No serif. No mono.** The brand has no need for either.
- **Tracking.** Chinese: 0. English subtitles: +0.02em. All-caps is never used.
- **Line-height.** Tight on display (1.15), generous on body (1.6).

### Spacing & layout
- **Scale.** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Most screens lean on 24 and 32.
- **Whitespace is the loudest design element.** The home screen is ~70% empty. Nothing fights the brain.
- **Layout.** Two-column or rail+canvas. The brain is always the visual anchor. UI elements orbit it.
- **Fixed elements.** Top header is fixed (logo left, search/bell/avatar right). Side rail is fixed. Bottom-right floating capsule (建議 / 計畫) is fixed.

### Background & imagery
- **Backgrounds are NEVER flat.** They carry a near-imperceptible warm vignette and, on detail screens, a region-tinted glow (lavender for prefrontal cortex, etc).
- **Hero imagery is photographic 3D**: a single luminous brain rendered with depth-of-field, soft rim-light, and visible neural filament. Treat it as a photographed object, not an illustration.
- **No patterns. No textures. No grain overlay on UI** (only inside the brain render itself).
- **Idea-card thumbnails** are slightly desaturated, warm, with visible film softness.

### Animation
- **Default easing.** Slow, viscous. `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart) at 400–600ms. Nothing snaps.
- **On load.** Cards fade up with a 4–8px translateY and stagger of 60ms. The brain itself has a constant, very slow ambient pulse (3–5s, opacity 0.92 ↔ 1.0).
- **No bounces. No spring overshoot.** Movement is breath-like.
- **Sparkle.** Tiny white pinpoints within the brain twinkle on a 4s loop — the only persistent motion.

### Hover & press
- **Hover.** Surface lightens by ~4% and gains a faint outer glow (`box-shadow: 0 0 24px rgba(180, 170, 220, 0.25)`). No size change.
- **Press.** Surface dims by ~6% and scales to 0.98. No haptic-style flash.
- **Focus.** A 1.5px iridescent ring at 3px offset.

### Borders, radius, shadows
- **Radius.** Cards 20px. Idea-card thumbnails 16px. Pills 999px. Buttons 999px (capsule) for primary actions; 16px for secondary tiles.
- **Borders.** Hairline only, `1px solid rgba(255,255,255,0.6)` on glass surfaces. No dark borders anywhere.
- **Shadows.** Soft, diffuse, warm-tinted. Two-layer:
  - inner highlight: `inset 0 1px 0 rgba(255,255,255,0.8)`
  - outer drop: `0 12px 40px -12px rgba(60, 50, 40, 0.18)`
- **No hard shadows. No colored shadows except the iridescent accent's own glow.**

### Transparency & blur
- Glass surfaces use `backdrop-filter: blur(24px) saturate(1.1)` over the warm background.
- Modals dim the canvas with a 60% off-white veil, not black.
- The side rail uses no blur — it sits directly on the canvas.

### Iconography (summary; full detail below)
Hairline / 1.5px stroke icons. Rounded caps. Sized 20–24px. Color matches text foreground. The `+` add button is the *only* filled iconographic element and uses the iridescent gradient as fill.

---

## ICONOGRAPHY

The references show a small, controlled icon set rendered in a **hairline stroke** style — closer to Lucide / Phosphor (Light) than to Material or Heroicons solid. Strokes are 1.5px, caps and joins are rounded, and icon size is 20–24px.

Icons observed:
- `search` (top right)
- `bell` (top right)
- `share-network` / `inspiration-map` (side rail — three-node graph)
- `trash` (side rail)
- `plus` (large add button, iridescent fill — the only non-stroked icon)
- `chevron-down` (explore-down hint at bottom of home)
- `chevron-right` (list rows, suggestion capsule)
- `chevron-left` (back arrow on detail screen)
- `sparkle` (suggestion-capsule leading icon, 大腦清空計畫)
- Region glyphs in the detail rail: a small abstracted brain-region icon for each lobe (prefrontal, hippocampus, parietal, default-mode, reward).

**Approach in this system.** No codebase icon font was available, so we link **Lucide** from CDN (`https://unpkg.com/lucide@latest`) for the standard set — its 1.5px stroke and rounded caps match the references closely. This is a **substitution**; flag to the user (see CAVEATS).

The five region glyphs are *not* in any standard library. We provide simple inline SVG placeholders in `assets/region-glyphs/` — clearly marked as placeholders.

**Emoji.** Never used.
**Unicode glyphs.** Not used as icons.
**PNG icons.** Not used. All icons are SVG (Lucide CDN or inline).

---

## CAVEATS

The user should treat the items below as *open questions*, not finished decisions:

1. **Fonts are substituted.** No font files provided. Currently using **Noto Sans TC** (Google Fonts, weights 400/500/600/700) for Chinese and **Inter** for the English subtitles. If Mindspace has chosen typefaces, please drop the `.ttf`/`.woff2` files into `fonts/` and update `colors_and_type.css`.
2. **Color values are eyeballed from PNGs.** They reproduce the feel but exact hex codes from a brand palette would be ideal.
3. **Iconography is substituted with Lucide via CDN.** If you have a custom icon set (font, sprite, or SVGs), drop them into `assets/icons/` and we'll wire them up.
4. **The iridescent accent gradient is interpreted.** It clearly runs blue→lavender→pink but the exact stops are guessed.
5. **No second product surface.** The renders only show the app. If there's a marketing site, docs, or onboarding flow, those need separate UI kits.
6. **No interaction prototypes were referenced.** Animation timings (400–600ms, ease-out-quart) are best-guess for the aesthetic — confirm against any motion specs you have.
