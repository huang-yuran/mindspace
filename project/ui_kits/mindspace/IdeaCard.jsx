function IdeaCard({ idea, x, y, onClick, delay = 0 }) {
  return (
    <button
      className="ms-idea-float"
      style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}ms` }}
      onClick={onClick}>
      <span className="ms-idea-thumb" style={{ background: idea.bg }} />
      <span className="ms-idea-name">{idea.title}</span>
    </button>
  );
}

function IdeaListRow({ idea }) {
  return (
    <div className="ms-idea-row">
      <span className="ms-idea-row-thumb" style={{ background: idea.bg }} />
      <div className="ms-idea-row-body">
        <div className="ms-idea-row-title">{idea.title}</div>
        <div className="ms-idea-row-desc">{idea.desc}</div>
        <div className="ms-idea-row-tags">
          {idea.tags.map(t => <span key={t} className="ms-tag-pill">{t}</span>)}
        </div>
      </div>
      <div className="ms-idea-row-meta">{idea.meta}</div>
      <span className="ms-idea-row-chev">›</span>
    </div>
  );
}

window.IdeaCard = IdeaCard;
window.IdeaListRow = IdeaListRow;
