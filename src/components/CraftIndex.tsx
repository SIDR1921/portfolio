import "./CraftIndex.css";

const CRAFT = [
  { key: "A", title: "Programming", items: "Python · Java · C · SQL · HTML" },
  {
    key: "B",
    title: "AI / ML",
    items:
      "Machine Learning · Deep Learning · NLP · Transformers · Generative AI · LLMs · RAG · Fine-tuning (LoRA / PEFT) · Multi-agent systems · Edge AI",
  },
  {
    key: "C",
    title: "Frameworks",
    items: "PyTorch · TensorFlow · scikit-learn · pandas · NumPy · LangChain · FastAPI · OpenCV",
  },
  {
    key: "D",
    title: "Tools",
    items: "Git · Jupyter · Streamlit · Power BI · Tableau · Ollama · VS Code",
  },
];

export function CraftIndex() {
  return (
    <section id="craft" className="craft">
      <div className="craft__gradient" aria-hidden="true" />
      <div className="shell craft__inner">
        <p className="section-label">03 — Craft index</p>
        <h2 className="craft__title">Tools of the trade.</h2>
        <div className="craft__grid">
          {CRAFT.map((c) => (
            <div className="craft__card" data-reveal key={c.key}>
              <div className="craft__key">{c.key}</div>
              <h3 className="craft__name">{c.title}</h3>
              <p className="craft__items">{c.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
