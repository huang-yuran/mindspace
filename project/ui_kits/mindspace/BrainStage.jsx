function BrainStage({ children, tint }) {
  return (
    <div className="ms-brain-stage" data-tint={tint || "neutral"}>
      <div className="ms-brain-img" />
      <div className="ms-brain-children">{children}</div>
    </div>
  );
}

window.BrainStage = BrainStage;
