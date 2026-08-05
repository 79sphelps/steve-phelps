import "./SkillGroup.css";

export default function SkillGroup({ title, description, icon: Icon, skills }) {
  return (
    <div className="skill-group-card">
      {/* Header */}

      <div className="skill-group-header">
        <div className="skill-group-icon">
          <Icon size={22} />
        </div>

        <div className="skill-group-content">
          <h3 className="skill-group-title">{title}</h3>

          <p className="skill-group-description">{description}</p>
        </div>
      </div>

      {/* Skills */}

      <div className="skill-group-tags">
        {skills.map((skill) => (
          <span key={skill} className="skill-group-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
