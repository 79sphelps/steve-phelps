import "./SectionHeader.css";

export default function SectionHeader({ icon: Icon, title }) {
  return (
    <div className="section-header">
      <div className="section-header-icon">
        <Icon size={20} />
      </div>

      <div className="section-header-content">
        <h2 className="section-header-title">{title}</h2>

        <div className="section-header-line" />
      </div>
    </div>
  );
}
