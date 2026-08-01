// import React from "react";
// import { Col, Row } from "react-bootstrap";
// // import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiAngularSimple,
//   DiNodejs,
// } from "react-icons/di";
// import {
//   SiTypescript,
//   SiRedux,
//   SiReactquery,
//   SiGraphql,
//   SiExpress,
//   SiNextdotjs,
// } from "react-icons/si";
// import { ABOUT_TECH_ARRAY } from "../../lib/about-data";

// const TECH = {
//   'javascript': <DiJavascript1 />,
//   'typescript': <SiTypescript />,
//   'react': <DiReact />,
//   'angular': <DiAngularSimple />,
//   'nextjs': <SiNextdotjs />,
//   'nodejs': <DiNodejs />,
//   'redux': <SiRedux />,
//   'reactquery': <SiReactquery />,
//   'graphql': <SiGraphql />,
//   'express': <SiExpress />,
// }

// const Techstack = () => {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       { ABOUT_TECH_ARRAY.map((item, idx) => (
//         <Col xs={4} md={2} className="tech-icons" key={idx}>
//           <div className="flex justify-center items-center">
//             { TECH[item] }
//           </div>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Techstack;




// import React from "react";
// import { Col, Row } from "react-bootstrap";

// import {
//   DiJavascript1,
//   DiReact,
//   DiAngularSimple,
//   DiNodejs,
// } from "react-icons/di";

// import {
//   SiTypescript,
//   SiRedux,
//   SiReactquery,
//   SiGraphql,
//   SiExpress,
//   SiNextdotjs,
// } from "react-icons/si";

// import { ABOUT_TECH_ARRAY } from "../../lib/about-data";

// import "./TechStack.css";

// const TECH = {
//   javascript: <DiJavascript1 />,
//   typescript: <SiTypescript />,
//   react: <DiReact />,
//   angular: <DiAngularSimple />,
//   nextjs: <SiNextdotjs />,
//   nodejs: <DiNodejs />,
//   redux: <SiRedux />,
//   reactquery: <SiReactquery />,
//   graphql: <SiGraphql />,
//   express: <SiExpress />,
// };

// const TechStack = () => {
//   return (
//     <Row className="tech-stack-grid">
//       {ABOUT_TECH_ARRAY.map((item, idx) => (
//         <Col
//           xs={6}
//           sm={4}
//           md={3}
//           lg={2}
//           className="tech-stack-column"
//           key={idx}
//         >
//           <div className="tech-stack-card">
//             <div className="tech-stack-icon">{TECH[item]}</div>

//             <span className="tech-stack-name">{item}</span>
//           </div>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default TechStack;


// import React from "react";
// import { Col, Row } from "react-bootstrap";

// import {
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiAngular,
//   SiRedux,
//   SiReactquery,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiExpress,
//   SiGraphql,
//   SiFirebase,
//   SiPostgresql,
//   SiMongodb,
//   // SiOpenai,
//   SiAnthropic,
//   // SiLangchain,
//   SiVite,
//   SiStorybook,
//   SiFramer,
// } from "react-icons/si";
// import {
//   TbSparkles,
//   TbBrain,
//   TbRobot,
// } from "react-icons/tb";

// import "./TechStack.css";


// const TECH = [
//   {
//     icon: <SiTypescript />,
//     label: "TypeScript",
//   },
//   {
//     icon: <SiJavascript />,
//     label: "JavaScript",
//   },
//   {
//     icon: <SiReact />,
//     label: "React",
//   },
//   {
//     icon: <SiNextdotjs />,
//     label: "Next.js",
//   },
//   {
//     icon: <SiAngular />,
//     label: "Angular",
//   },
//   {
//     icon: <SiRedux />,
//     label: "Redux",
//   },
//   {
//     icon: <SiReactquery />,
//     label: "TanStack Query",
//   },
//   {
//     icon: <SiTailwindcss />,
//     label: "Tailwind CSS",
//   },
//   {
//     icon: <SiNodedotjs />,
//     label: "Node.js",
//   },
//   {
//     icon: <SiExpress />,
//     label: "Express",
//   },
//   {
//     icon: <SiGraphql />,
//     label: "GraphQL",
//   },
//   {
//     icon: <SiFirebase />,
//     label: "Firebase",
//   },
//   {
//     icon: <SiPostgresql />,
//     label: "PostgreSQL",
//   },
//   {
//     icon: <SiMongodb />,
//     label: "MongoDB",
//   },
//   // {
//   //   icon: <SiOpenai />,
//   //   label: "OpenAI API",
//   // },
//   {
//     icon: <TbBrain />,
//     label: "AI Engineering",
//   },
//   {
//     icon: <TbSparkles />,
//     label: "Generative AI",
//   },
//   {
//     icon: <TbRobot />,
//     label: "AI Agents",
//   },
//   {
//     icon: <SiAnthropic />,
//     label: "Anthropic Claude",
//   },
//   // {
//   //   icon: <SiLangchain />,
//   //   label: "LangChain",
//   // },
//   {
//     icon: <SiVite />,
//     label: "Vite",
//   },
//   {
//     icon: <SiStorybook />,
//     label: "Storybook",
//   },
//   {
//     icon: <SiFramer />,
//     label: "Framer Motion",
//   },
// ];


// const TechStack = () => {
//   return (
//     <Row className="tech-stack-grid">
//       {TECH.map((tech, idx) => (
//         <Col
//           xs={6}
//           sm={4}
//           md={3}
//           lg={2}
//           className="tech-stack-column"
//           key={idx}
//         >
//           <div className="tech-stack-card">

//             <div className="tech-stack-icon">
//               {tech.icon}
//             </div>

//             <span className="tech-stack-name">
//               {tech.label}
//             </span>

//           </div>
//         </Col>
//       ))}
//     </Row>
//   );
// };


// export default TechStack;


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

import {
  TbSparkles,
  TbBrain,
  TbRobot,
} from "react-icons/tb";

import "./TechStack.css";


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


const TechStack = () => {

  return (
    <Row className="tech-stack-grid">

      {TECH.map((tech, idx) => (

        <Col
          key={idx}
          xs={6}
          sm={4}
          lg={6}
          className="tech-stack-column"
        >

          <div className="tech-stack-card">

            <div className="tech-stack-icon">
              {tech.icon}
            </div>

            <div className="tech-stack-name">
              {tech.label}
            </div>

          </div>

        </Col>

      ))}

    </Row>
  );

};


export default TechStack;