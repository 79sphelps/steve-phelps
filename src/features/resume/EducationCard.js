import "./EducationCard.css";

export default function EducationCard({
  institution,
  degree,
  period,
  details,
}) {
  return (
    <article className="education-card">
      <div className="education-header">
        <div className="education-info">
          <h3 className="education-degree">{degree}</h3>

          <div className="education-institution">{institution}</div>
        </div>

        <div className="education-period">{period}</div>
      </div>

      <p className="education-details">{details}</p>
    </article>
  );
}
