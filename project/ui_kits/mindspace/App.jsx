const IDEAS = [
  { id: "iceland", title: "去冰島看極光", desc: "規劃出發時間、交通與行程", meta: "5 天前", bg: "linear-gradient(135deg,#9bb8d8 0%,#d8c8e8 100%)", tags: ["規劃","決策"], region: "prefrontal" },
  { id: "novel", title: "寫一本小說", desc: "整理人物、章節、世界觀", meta: "1 週前", bg: "linear-gradient(135deg,#f0e8d8 0%,#c8b8a0 100%)", tags: ["創作","多步驟"], region: "default" },
  { id: "photo", title: "學習攝影", desc: "鏡頭選擇、構圖、後製練習", meta: "3 天前", bg: "linear-gradient(135deg,#403830 0%,#807060 100%)", tags: ["學習"], region: "parietal" },
  { id: "guitar", title: "學會彈吉他", desc: "每週一首曲子", meta: "2 週前", bg: "linear-gradient(135deg,#e8c890 0%,#a87850 100%)", tags: ["學習","規劃"], region: "reward" },
  { id: "paint", title: "畫出自己的畫", desc: "嘗試水彩與壓克力", meta: "4 天前", bg: "linear-gradient(135deg,#d8c0b0 0%,#806858 100%)", tags: ["情感","創作"], region: "default" },
  { id: "plant", title: "打造一個植物角落", desc: "選擇植物、容器與光線", meta: "1 天前", bg: "linear-gradient(135deg,#b8c8a8 0%,#586848 100%)", tags: ["規劃"], region: "prefrontal" },
  { id: "cafe", title: "開一家咖啡店", desc: "預算、選址、品項規劃", meta: "2 天前", bg: "linear-gradient(135deg,#c8a888 0%,#604030 100%)", tags: ["規劃","決策","預算"], region: "prefrontal" },
  { id: "surf", title: "學衝浪", desc: "找一位教練、訂課", meta: "今天", bg: "linear-gradient(135deg,#90a8c0 0%,#406080 100%)", tags: ["學習"], region: "reward" }
];

const POSITIONS = [
  { x: 28, y: 18 }, { x: 52, y: 22 }, { x: 70, y: 32 },
  { x: 22, y: 42 }, { x: 44, y: 46 }, { x: 32, y: 66 },
  { x: 58, y: 68 }, { x: 75, y: 60 }
];

const REGION_DATA = {
  prefrontal: { id: "prefrontal", cn: "前額葉皮質", en: "Prefrontal Cortex",
    desc: "負責規劃、決策、目標設定、時間管理與自我控制",
    loadLabel: "偏高", loadPct: 72, note: "近期有較多規劃與決策任務" },
  hippocampus: { id: "hippocampus", cn: "海馬迴", en: "Hippocampus",
    desc: "負責記憶整合與情境連結",
    loadLabel: "適中", loadPct: 48, note: "持續累積新的記憶連結" },
  parietal: { id: "parietal", cn: "頂葉", en: "Parietal Lobe",
    desc: "負責空間感知、感官整合與注意力",
    loadLabel: "適中", loadPct: 55, note: "感官資訊處理穩定" },
  default: { id: "default", cn: "預設模式網路", en: "Default Mode Network",
    desc: "負責自我反思、想像與閒置時的思考",
    loadLabel: "偏低", loadPct: 32, note: "近期有許多自由聯想的時刻" },
  reward: { id: "reward", cn: "獎勵系統", en: "Reward System",
    desc: "負責動機、期待與愉悅感的形成",
    loadLabel: "適中", loadPct: 60, note: "新的學習目標正在形成" }
};

function HomeScreen({ onOpenRegion }) {
  return (
    <div className="ms-screen ms-screen-home">
      <Header title="Mindspace" subtitle="你的靈感宇宙" />
      <div className="ms-home-body">
        <Sidebar />
        <main className="ms-home-main">
          <div className="ms-home-greeting">
            <h1 className="ms-h1">歡迎回來，創造者。</h1>
            <p className="ms-home-sub">這裡收藏著你曾經想嘗試的所有可能性。</p>
          </div>
          <BrainStage>
            {IDEAS.map((i, idx) => (
              <IdeaCard key={i.id} idea={i}
                x={POSITIONS[idx].x} y={POSITIONS[idx].y}
                delay={idx * 60}
                onClick={() => onOpenRegion(i.region)} />
            ))}
          </BrainStage>
          <div className="ms-home-explore">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
            <span>探索你的靈感宇宙</span>
          </div>
        </main>
        <SuggestCapsule title="大腦清空計畫" sub="定期整理，讓靈感流動起來" />
      </div>
    </div>
  );
}

function RegionScreen({ regionId, onChangeRegion, onBack }) {
  const region = REGION_DATA[regionId];
  const ideas = IDEAS.filter(i => i.region === regionId);
  return (
    <div className="ms-screen ms-screen-region">
      <Header title={region.cn} subtitle={`${region.en} · 執行、規劃、決策中樞`} onBack={onBack} />
      <div className="ms-region-body">
        <RegionRail active={regionId} onChange={onChangeRegion} />
        <div className="ms-region-canvas">
          <div className="ms-brain-img ms-brain-img-region" data-tint={regionId} />
        </div>
        <div className="ms-region-side">
          <StatusCard region={region} />
          <div className="ms-region-list">
            <div className="ms-region-list-head">在此區域的靈感</div>
            {ideas.length ? ideas.map(i => <IdeaListRow key={i.id} idea={i} />) :
              <div className="ms-empty">這個區域還沒有靈感</div>}
          </div>
          <div className="ms-balance">
            <div className="ms-balance-head">建議平衡</div>
            <div className="ms-balance-body">
              <span className="ms-balance-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2z"/></svg>
              </span>
              <div className="ms-balance-text">你的{region.cn.slice(0,3)}正在{region.loadLabel === "偏高" ? "高" : "穩定"}負荷運作，建議安排恢復型活動。</div>
              <div className="ms-balance-tags">
                <span className="ms-tag-pill">散步</span>
                <span className="ms-tag-pill">冥想</span>
                <span className="ms-tag-pill">創作</span>
                <span className="ms-tag-pill">運動</span>
              </div>
              <span className="ms-suggest-chev">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = React.useState({ name: "home" });
  return screen.name === "home"
    ? <HomeScreen onOpenRegion={(r) => setScreen({ name: "region", region: r })} />
    : <RegionScreen regionId={screen.region}
        onChangeRegion={(r) => setScreen({ name: "region", region: r })}
        onBack={() => setScreen({ name: "home" })} />;
}

window.App = App;
