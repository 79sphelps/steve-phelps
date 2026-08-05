export default function CertificationCard({ name, issuer, year }) {
  return (
    <div className="certification-card">
      <div className="certification-name">{name}</div>

      <div className="certification-meta">
        {issuer} <span>•</span> {year}
      </div>
    </div>
  );
}
