import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiPostgresql,
  SiAnthropic,
  SiVite,
  SiStorybook,
  SiFramer,
} from "react-icons/si";

import { TbSparkles, TbBrain, TbRobot } from "react-icons/tb";

import "./TechnologyStack.css";

const TECH = [
  {
    icon: <SiTypescript />,
    label: "TypeScript",
    category: "Frontend",
  },
  {
    icon: <SiJavascript />,
    label: "JavaScript",
    category: "Frontend",
  },
  {
    icon: <SiReact />,
    label: "React",
    category: "Frontend",
  },
  {
    icon: <SiNextdotjs />,
    label: "Next.js",
    category: "Frontend",
  },
  {
    icon: <SiAngular />,
    label: "Angular",
    category: "Frontend",
  },
  {
    icon: <SiRedux />,
    label: "Redux / RTK",
    category: "Frontend",
  },
  {
    icon: <SiReactquery />,
    label: "TanStack Query",
    category: "Frontend",
  },
  {
    icon: <SiTailwindcss />,
    label: "Tailwind CSS",
    category: "Frontend",
  },

  {
    icon: <SiNodedotjs />,
    label: "Node.js",
    category: "Backend",
  },
  {
    icon: <SiExpress />,
    label: "Express",
    category: "Backend",
  },
  {
    icon: <SiGraphql />,
    label: "GraphQL",
    category: "Backend",
  },
  {
    icon: <SiFirebase />,
    label: "Firebase",
    category: "Backend",
  },
  {
    icon: <SiPostgresql />,
    label: "PostgreSQL",
    category: "Backend",
  },

  {
    icon: <TbBrain />,
    label: "AI Engineering",
    category: "AI",
  },
  {
    icon: <TbSparkles />,
    label: "Generative AI",
    category: "AI",
  },
  {
    icon: <TbRobot />,
    label: "AI Agents",
    category: "AI",
  },
  {
    icon: <SiAnthropic />,
    label: "Claude AI",
    category: "AI",
  },

  {
    icon: <SiVite />,
    label: "Vite",
    category: "Tools",
  },
  {
    icon: <SiStorybook />,
    label: "Storybook",
    category: "Tools",
  },
  {
    icon: <SiFramer />,
    label: "Framer Motion",
    category: "Tools",
  },
];

const TechnologyStack = () => {
  return (
    <Row className="tech-stack-grid">
      {TECH.map((tech, idx) => (
        <Col key={idx} xs={6} sm={4} lg={6} className="tech-stack-column">
          <div className="tech-stack-card">
            <div className="tech-stack-icon">{tech.icon}</div>

            <div className="tech-stack-name">{tech.label}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default TechnologyStack;
