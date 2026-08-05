import "./HighlightCard.css";

export default function HighlightCard({ value, label }) {
  return (
    <div className="highlight-card">
      <div className="highlight-value">{value}</div>

      <div className="highlight-label">{label}</div>
    </div>
  );
}
