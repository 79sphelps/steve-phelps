import "./ExperienceCard.css";

export default function ExperienceCard({
  company,
  role,
  location,
  period,
  summary,
  achievements,
  technologies,
}) {
  return (
    <article className="experience-card">
      {/* Header */}

      <div className="experience-header">
        <div className="experience-title-group">
          <h3 className="experience-role">{role}</h3>

          <div className="experience-company">{company}</div>
        </div>

        <div className="experience-period">{period}</div>
      </div>

      {/* Metadata */}

      <div className="experience-meta">
        <span>{location}</span>
      </div>

      {/* Summary */}

      <p className="experience-summary">{summary}</p>

      {/* Achievements */}

      <ul className="experience-achievements">
        {achievements.map((item) => (
          <li key={item}>
            <span className="experience-bullet" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Technology Stack */}

      <div className="experience-technologies">
        {technologies.map((tech) => (
          <span key={tech} className="experience-tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
