import "./ProjectCard.css";

export default function ProjectCard({
  title,
  category,
  description,
  highlights,
  stack,
  metrics,
}) {
  return (
    <article className="project-card">
      {/* Header */}

      <div className="project-header">
        <div className="project-category">{category}</div>

        <h3 className="project-title">{title}</h3>
      </div>

      {/* Description */}

      <p className="project-description">{description}</p>

      {/* Metrics */}

      {/* <div className="project-metrics">
        {metrics.map((metric) => (
          <div key={metric.label} className="project-metric">
            <div className="project-metric-value">{metric.value}</div>

            <div className="project-metric-label">{metric.label}</div>
          </div>
        ))}
      </div> */}

      {/* Highlights */}

      <ul className="project-highlights">
        {highlights.map((item) => (
          <li key={item}>
            <span className="project-highlight-dot" />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Stack */}

      <div className="project-stack">
        {stack.map((item) => (
          <span key={item} className="project-stack-tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
