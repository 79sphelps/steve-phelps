import React from "react";
import { Row, Col } from "react-bootstrap";

import BlurText from "../../components/ui/ReactBitsComponents/BlurText";

import "./Skills.css";

const SKILL_GROUPS = [
  {
    title: "Frontend Architecture",
    skills:
      "React • TypeScript • Next.js • Redux Toolkit • TanStack Query • Component Architecture",
  },

  {
    title: "AI Product Development",
    skills:
      "LLM Integrations • AI Chat Experiences • Generative AI • AI Agents • Prompt Engineering",
  },

  {
    title: "Backend & Data Systems",
    skills:
      "Node.js • Express • Firebase • Firestore • REST APIs • GraphQL • Data Modeling",
  },

  {
    title: "UI Engineering",
    skills:
      "Tailwind CSS • Material UI • Bootstrap • Storybook • Responsive Design • Accessibility",
  },

  {
    title: "Engineering Workflow",
    skills:
      "Git • Testing • CI/CD • Figma • Production Deployments • SaaS Architecture",
  },
];

const SkillCard = ({ title, skills }) => {
  return (
    <div className="skill-section-card">
      <BlurText
        text={title}
        delay={200}
        animateBy="words"
        direction="top"
        className="skill-section-title"
      />

      <p className="skill-description">{skills}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section">
      <Row className="skills-grid g-4">
        {SKILL_GROUPS.map((group, index) => (
          <Col
            key={group.title}
            xs={12}
            md={6}
            xl={3}
            className="skills-column"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <SkillCard title={group.title} skills={group.skills} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Skills;
