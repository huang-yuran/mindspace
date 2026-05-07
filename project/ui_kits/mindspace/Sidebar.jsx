function Sidebar({ onAdd }) {
  return (
    <nav className="ms-sidebar" aria-label="Primary">
      <button className="ms-side-item ms-side-add" onClick={onAdd} aria-label="Add inspiration">
        <span className="ms-side-add-puck">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
        </span>
        <span className="ms-side-label">新增靈感</span>
      </button>
      <button className="ms-side-item">
        <span className="ms-side-puck">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M8 7l3 9M16 7l-3 9"/></svg>
        </span>
        <span className="ms-side-label">靈感地圖</span>
      </button>
      <button className="ms-side-item">
        <span className="ms-side-puck">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M5 6l1 14a2 2 0 002 2h8a2 2 0 002-2l1-14"/></svg>
        </span>
        <span className="ms-side-label">清空大腦</span>
      </button>
    </nav>
  );
}

window.Sidebar = Sidebar;
