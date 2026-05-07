function Header({ title, subtitle, onBack }) {
  return (
    <header className="ms-header">
      <div className="ms-header-left">
        {onBack && (
          <button className="ms-icon-btn" onClick={onBack} aria-label="Back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
        )}
        <div className="ms-brand-block">
          <div className="ms-brand-name">
            {title}
            <span className="ms-brand-dot" />
          </div>
          {subtitle && <div className="ms-brand-sub">{subtitle}</div>}
        </div>
      </div>
      <div className="ms-header-right">
        <button className="ms-icon-btn" aria-label="Search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
        </button>
        <button className="ms-icon-btn" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7M10 21h4"/></svg>
        </button>
        <div className="ms-avatar" aria-label="Account" />
      </div>
    </header>
  );
}

window.Header = Header;
