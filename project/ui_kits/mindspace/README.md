# Mindspace — UI Kit

Hi-fi recreation of the Mindspace tablet app, in React (inline JSX via Babel).

## Files
- `index.html` — runnable demo. Click-thru between the two known screens.
- `App.jsx` — root, screen router, shared state.
- `Header.jsx` — top bar (wordmark, search/bell/avatar).
- `Sidebar.jsx` — left rail (Add, Map, Clear) on Home.
- `RegionRail.jsx` — vertical brain-region selector on Detail.
- `BrainStage.jsx` — the luminous brain image with floating idea-cards.
- `IdeaCard.jsx` — small floating card (Home) and list-row variant (Detail).
- `StatusCard.jsx` — region status card with load meter.
- `SuggestCapsule.jsx` — bottom-right floating suggestion.
- `tokens.css` — re-exports the project-level tokens for portability.

## Coverage
- Two screens: **Home (靈感宇宙)** and **Region Detail (前額葉皮質)**.
- Click an idea-card → flips to detail. Click ← → back home. Click a region puck → switches active region.
- Real interactions stop there — this is a visual recreation, not a working app.
