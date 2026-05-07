function StatusCard({ region }) {
  return (
    <div className="ms-status-card">
      <div className="ms-status-head">
        <div className="ms-status-cn">{region.cn}</div>
        <div className="ms-status-en">{region.en}</div>
      </div>
      <div className="ms-status-desc">{region.desc}</div>
      <div className="ms-status-meter-row">
        <span>目前負荷狀態</span>
        <span className="ms-status-pct">{region.loadLabel} · {region.loadPct}%</span>
      </div>
      <div className="ms-status-bar"><div className="ms-status-fill" style={{ width: `${region.loadPct}%` }} /></div>
      <div className="ms-status-foot">{region.note}</div>
    </div>
  );
}

window.StatusCard = StatusCard;
