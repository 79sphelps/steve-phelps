import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  // SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiFigma,
  // SiSlack,
  SiNotion,
  SiFirebase,
  SiRender,
  SiVercel,
  // SiOpenai,
  SiAnthropic,
  SiGithubcopilot,
  SiJira,
  SiLinux,
} from "react-icons/si";
import { TbSparkles, TbBrain, TbRobot } from "react-icons/tb";

import "./Toolstack.css";

const TOOLS = [
  // {
  //   icon: <SiOpenai />,
  //   label: "OpenAI",
  // },
  {
    icon: <TbBrain />,
    label: "AI Engineering",
  },
  {
    icon: <TbSparkles />,
    label: "Generative AI",
  },
  {
    icon: <TbRobot />,
    label: "AI Agents",
  },
  {
    icon: <SiAnthropic />,
    label: "Claude AI",
  },
  {
    icon: <SiGithubcopilot />,
    label: "GitHub Copilot",
  },
  // {
  //   icon: <SiVisualstudiocode />,
  //   label: "VS Code",
  // },
  {
    icon: <SiGithub />,
    label: "GitHub",
  },
  {
    icon: <SiGit />,
    label: "Git",
  },
  {
    icon: <SiDocker />,
    label: "Docker",
  },
  {
    icon: <SiFirebase />,
    label: "Firebase",
  },
  {
    icon: <SiVercel />,
    label: "Vercel",
  },
  {
    icon: <SiRender />,
    label: "Render",
  },
  {
    icon: <SiPostman />,
    label: "Postman",
  },
  {
    icon: <SiFigma />,
    label: "Figma",
  },
  {
    icon: <SiNotion />,
    label: "Notion",
  },
  // {
  //   icon: <SiSlack />,
  //   label: "Slack",
  // },
  {
    icon: <SiJira />,
    label: "Jira",
  },
  {
    icon: <SiLinux />,
    label: "Linux",
  },
];

const Toolstack = () => {
  return (
    <Row className="toolstack-row justify-content-center">
      {TOOLS.map((tool, index) => (
        <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex">
          <div className="tool-card w-100">
            <div className="tool-icon">{tool.icon}</div>

            <div className="tool-name">{tool.label}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Toolstack;
