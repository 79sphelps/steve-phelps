import CountUp from "react-countup";
import "./MetricCard.css";

export default function MetricCard({ icon: Icon, value, label }) {
  return (
    <div className="metric-card">
      <div className="metric-content">
        <div className="metric-header">
          <div className="metric-icon">
            <Icon size={20} />
          </div>

          <div className="metric-value">
            <CountUp end={parseInt(value)} duration={1.5} />
          </div>
        </div>

        <div className="metric-label">{label}</div>
      </div>
    </div>
  );
}
