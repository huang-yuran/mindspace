function SuggestCapsule({ title, sub }) {
  return (
    <button className="ms-suggest">
      <span className="ms-suggest-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"/></svg>
      </span>
      <span className="ms-suggest-body">
        <span className="ms-suggest-title">{title}</span>
        <span className="ms-suggest-sub">{sub}</span>
      </span>
      <span className="ms-suggest-chev">›</span>
    </button>
  );
}

window.SuggestCapsule = SuggestCapsule;
