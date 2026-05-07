const REGIONS = [
  { id: "prefrontal", cn: "前額葉皮質", en: "Prefrontal Cortex",
    glyph: <g><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></g> },
  { id: "hippocampus", cn: "海馬迴", en: "Hippocampus",
    glyph: <path d="M4 12c0-3 2-5 5-5 2 0 3 1 4 2 1-1 2-2 4-2 3 0 5 2 5 5 0 4-5 8-9 10-4-2-9-6-9-10z"/> },
  { id: "parietal", cn: "頂葉", en: "Parietal Lobe",
    glyph: <g><path d="M5 14c0-5 3-9 7-9s7 4 7 9c0 2-1 4-3 5H8c-2-1-3-3-3-5z"/><path d="M12 5v14"/></g> },
  { id: "default", cn: "預設模式網路", en: "Default Mode Network",
    glyph: <g><circle cx="6" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="12" cy="16" r="2"/><path d="M7 9l4 6M17 9l-4 6"/></g> },
  { id: "reward", cn: "獎勵系統", en: "Reward System",
    glyph: <path d="M12 4l2.5 5 5.5.8-4 4 1 5.5-5-2.6-5 2.6 1-5.5-4-4 5.5-.8z"/> }
];

function RegionRail({ active, onChange }) {
  return (
    <nav className="ms-region-rail" aria-label="Brain regions">
      {REGIONS.map(r => (
        <button key={r.id}
          className={`ms-region-item${r.id === active ? " is-active" : ""}`}
          onClick={() => onChange(r.id)}>
          <span className="ms-region-puck">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {r.glyph}
            </svg>
          </span>
          <span className="ms-region-label">{r.cn}</span>
        </button>
      ))}
    </nav>
  );
}

window.RegionRail = RegionRail;
window.REGIONS = REGIONS;
