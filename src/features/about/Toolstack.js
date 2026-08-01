// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiRender,
//   SiReact,
//   SiRedux,
//   SiReactquery,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiBootstrap,
//   SiTailwindcss,
//   SiJavascript,
//   SiTypescript,
//   SiGraphql,
//   SiJest,
//   SiGit,
//   SiNextdotjs,
// } from "react-icons/si";


// const Toolstack = () => {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedux />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiReactquery />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiJavascript />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiTypescript />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNodedotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiExpress />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiBootstrap />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiTailwindcss />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiGraphql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiJest />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRender />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;




// import React from "react";
// import { Row, Col } from "react-bootstrap";

// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiRender,
//   SiReact,
//   SiRedux,
//   SiReactquery,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiBootstrap,
//   SiTailwindcss,
//   SiJavascript,
//   SiTypescript,
//   SiGraphql,
//   SiJest,
//   SiGit,
//   SiNextdotjs,
// } from "react-icons/si";

// import "./Toolstack.css";

// const TOOLS = [
//   { icon: <SiReact />, label: "React" },
//   { icon: <SiRedux />, label: "Redux" },
//   { icon: <SiReactquery />, label: "TanStack Query" },
//   { icon: <SiJavascript />, label: "JavaScript" },
//   { icon: <SiTypescript />, label: "TypeScript" },
//   { icon: <SiNodedotjs />, label: "Node.js" },
//   { icon: <SiExpress />, label: "Express" },
//   { icon: <SiMongodb />, label: "MongoDB" },
//   { icon: <SiBootstrap />, label: "Bootstrap" },
//   { icon: <SiTailwindcss />, label: "Tailwind CSS" },
//   { icon: <SiGraphql />, label: "GraphQL" },
//   { icon: <SiJest />, label: "Jest" },
//   { icon: <SiGit />, label: "Git" },
//   { icon: <SiNextdotjs />, label: "Next.js" },
//   { icon: <SiVisualstudiocode />, label: "VS Code" },
//   { icon: <SiPostman />, label: "Postman" },
//   { icon: <SiSlack />, label: "Slack" },
//   { icon: <SiRender />, label: "Render" },
// ];

// const Toolstack = () => {
//   return (
//     <Row className="toolstack-row justify-content-center">
//       {TOOLS.map((tool, index) => (
//         <Col
//           key={index}
//           xs={6}
//           sm={4}
//           md={3}
//           lg={2}
//           className="d-flex"
//         >
//           <div className="tool-card w-100">

//             <div className="tool-icon">
//               {tool.icon}
//             </div>

//             <div className="tool-name">
//               {tool.label}
//             </div>

//           </div>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default Toolstack;


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
import {
  TbSparkles,
  TbBrain,
  TbRobot,
} from "react-icons/tb";

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
        <Col
          key={index}
          xs={6}
          sm={4}
          md={3}
          lg={2}
          className="d-flex"
        >
          <div className="tool-card w-100">

            <div className="tool-icon">
              {tool.icon}
            </div>

            <div className="tool-name">
              {tool.label}
            </div>

          </div>
        </Col>
      ))}
    </Row>
  );
};


export default Toolstack;