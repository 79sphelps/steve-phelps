import "./ResumeQuickScan.css";

const items = [
  {
    label: "Primary Stack",
    value: "React / TypeScript",
  },
  {
    label: "Specialty",
    value: "Frontend Architecture",
  },
  {
    label: "Current Focus",
    value: "AI Products",
  },
  {
    label: "Experience",
    value: "Senior Engineering",
  },
];

export default function ResumeQuickScan() {
  return (
    <div className="resume-scan-grid">
      {items.map((item) => (
        <div className="resume-scan-card" key={item.label}>
          <div>{item.label}</div>

          <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}
