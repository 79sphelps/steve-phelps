// import { Row, Col } from "react-bootstrap";
// import BlurText from "../../components/ui/ReactBitsComponents/BlurText";

// // const testData = [
// //   { type: "TypeScript", bgcolor: "#ef6c00", completed: 75 },
// //   { type: "JavaScript", bgcolor: "#ef6c00", completed: 90 },
// //   { type: "React.js", bgcolor: "#6a1b9a", completed: 90 },
// //   { type: "Next.js", bgcolor: "#6a1b9a", completed: 60 },
// //   { type: "Redux/RTK/TanStack Query", bgcolor: "#00695c", completed: 85 },
// //   { type: "REST API, GraphQL", bgcolor: "#00695c", completed: 85 },
// //   { type: "Bootstrap/Tailwind CSS", bgcolor: "#00695c", completed: 75 },
// //   { type: "HTML/CSS", bgcolor: "#00695c", completed: 85 },
// //   { type: "Angular", bgcolor: "#6a1b9a", completed: 70 },
// //   { type: "NgRX/RxJS", bgcolor: "#00695c", completed: 70 },
// //   { type: "Node.js/Express", bgcolor: "#ef6c00", completed: 75 },
// //   { type: "Python", bgcolor: "#ef6c00", completed: 75 },
// //   { type: "Java", bgcolor: "#ef6c00", completed: 40 },
// //   { type: "C++", bgcolor: "#ef6c00", completed: 75 },
// // ];

// const frontendData = [
//   { type: "React.js", bgcolor: "#6a1b9a", completed: 90 },
//   { type: "Next.js", bgcolor: "#6a1b9a", completed: 60 },
//   { type: "TypeScript", bgcolor: "#ef6c00", completed: 75 },
//   { type: "JavaScript", bgcolor: "#ef6c00", completed: 90 },
//   { type: "Redux/RTK/TanStack Query", bgcolor: "#00695c", completed: 85 },
// ];

// const stylingData = [
//   { type: "Tailwind, MUI, Bootstrap, Styled Components", bgcolor: "#00695c", completed: 75 },
//   { type: "HTML/CSS", bgcolor: "#00695c", completed: 85 },
// ];

// const toolingData = [
// { type: "Jest, React Testing Library", bgcolor: "#ef6c00", completed: 80 },
// ];

// const backendData = [
//   { type: "Node.js/Express", bgcolor: "#ef6c00", completed: 75 },
//   { type: "REST API, GraphQL", bgcolor: "#00695c", completed: 85 },
//   { type: "Python", bgcolor: "#ef6c00", completed: 75 },
//   // { type: "Java", bgcolor: "#ef6c00", completed: 40 },
//   // { type: "C++", bgcolor: "#ef6c00", completed: 75 },
// ];

// const ProgressBar2 = (props) => {
//   const { bgcolor, completed } = props;

//   const containerStyles = {
//     width: "95%",
//     justifyContent: "center",
//     backgroundColor: "#e0e0de",
//     borderRadius: 50,
//     margin: 10,
//     height: 30,
//   };

//   const fillerStyles = {
//     height: "100%",
//     width: `${completed}%`,
//     backgroundColor: bgcolor,
//     borderRadius: "inherit",
//     textAlign: "right",
//   };

//   const labelStyles = {
//     padding: 10,
//     color: "white",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={containerStyles}>
//       <div style={fillerStyles}>
//         <span style={labelStyles}>{`${completed}%`}</span>
//       </div>
//     </div>
//   );
// };

// // function renderBars() {
// //   return testData.map((item, idx) => {
// //     return (
// //       <div className="bar-container" key={idx}>
// //         <p className="skill-title">{item.type}</p>
// //         <ProgressBar2
// //           key={idx}
// //           bgcolor={item.bgcolor}
// //           completed={item.completed}
// //         />
// //       </div>
// //     );
// //   });
// // }

// function renderFrontendBars() {
//   return frontendData.map((item, idx) => {
//     return (
//       <div className="bar-container" key={idx}>
//         <p className="skill-title">{item.type}</p>
//         <ProgressBar2
//           key={idx}
//           bgcolor={item.bgcolor}
//           completed={item.completed}
//         />
//       </div>
//     );
//   });
// }

// function renderStylingBars() {
//   return stylingData.map((item, idx) => {
//     return (
//       <div className="bar-container" key={idx}>
//         <p className="skill-title">{item.type}</p>
//         <ProgressBar2
//           key={idx}
//           bgcolor={item.bgcolor}
//           completed={item.completed}
//         />
//       </div>
//     );
//   });
// }

// function renderToolingBars() {
//   return toolingData.map((item, idx) => {
//     return (
//       <div className="bar-container" key={idx}>
//         <p className="skill-title">{item.type}</p>
//         <ProgressBar2
//           key={idx}
//           bgcolor={item.bgcolor}
//           completed={item.completed}
//         />
//       </div>
//     );
//   });
// }

// function renderBackendBars() {
//   return backendData.map((item, idx) => {
//     return (
//       <div className="bar-container" key={idx}>
//         <p className="skill-title">{item.type}</p>
//         <ProgressBar2
//           key={idx}
//           bgcolor={item.bgcolor}
//           completed={item.completed}
//         />
//       </div>
//     );
//   });
// }

// // const ProgrammingLanguageBars = () => {
// //   return (
// //     <div>
// //       <h2 className="title">
// //         <BlurText
// //           text="Skills"
// //           delay={200}
// //           animateBy="words"
// //           direction="top"
// //           className="text-5xl mb-8 text-blue-800 justify-center"
// //         />
// //       </h2>
// //       {renderBars()}
// //     </div>
// //   );
// // };

// const FrontendBars = () => {
//   return (
//     <div>
//       <h2 className="title">
//         <BlurText
//           text="Frontend"
//           delay={200}
//           animateBy="words"
//           direction="top"
//           className="text-5xl mb-8 text-blue-800 justify-center"
//         />
//       </h2>
//       {renderFrontendBars()}
//     </div>
//   );
// };

// const StylingBars = () => {
//   return (
//     <div>
//       <h2 className="title">
//         <BlurText
//           text="Styling"
//           delay={200}
//           animateBy="words"
//           direction="top"
//           className="text-5xl mb-8 text-blue-800 justify-center"
//         />
//       </h2>
//       {renderStylingBars()}
//     </div>
//   );
// };

// const ToolingBars = () => {
//   return (
//     <div>
//       <h2 className="title">
//         <BlurText
//           text="Tooling"
//           delay={200}
//           animateBy="words"
//           direction="top"
//           className="text-5xl mb-8 text-blue-800 justify-center"
//         />
//       </h2>
//       {renderToolingBars()}
//     </div>
//   );
// };

// const BackendBars = () => {
//   return (
//     <div>
//       <h2 className="title">
//         <BlurText
//           text="Backend"
//           delay={200}
//           animateBy="words"
//           direction="top"
//           className="text-5xl mb-8 text-blue-800 justify-center"
//         />
//       </h2>
//       {renderBackendBars()}
//     </div>
//   );
// };

// // const PlatformsBars = () => {
// //   return (
// //     <div>
// //       <h2 className="title">
// //         <BlurText
// //           text="Platforms"
// //           delay={200}
// //           animateBy="words"
// //           direction="top"
// //           className="text-5xl mb-8 text-blue-800 justify-center"
// //         />
// //       </h2>
// //       {renderPlatformsBars()}
// //     </div>
// //   );
// // };

// const Skills = () => {
//   return (
//     <>
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <Col
//         md={7}
//         style={{
//           justifyContent: "center",
//           paddingTop: "30px",
//           // paddingBottom: "50px",
//         }}
//       >
//         {/* <ProgrammingLanguageBars /> */}
//         <FrontendBars />
//       </Col>
//     </Row>
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <Col
//         md={7}
//         style={{
//           justifyContent: "center",
//           paddingTop: "30px",
//           // paddingBottom: "50px",
//         }}
//       >
//         <StylingBars />
//       </Col>
//     </Row>
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <Col
//         md={7}
//         style={{
//           justifyContent: "center",
//           paddingTop: "30px",
//           // paddingBottom: "50px",
//         }}
//       >
//         <ToolingBars />
//       </Col>
//     </Row>
//     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//       <Col
//         md={7}
//         style={{
//           justifyContent: "center",
//           paddingTop: "30px",
//           // paddingBottom: "50px",
//         }}
//       >
//         <BackendBars />
//       </Col>
//     </Row>
//     </>
//   );
// }




// // export default Skills;
// import React from "react";
// import { Row, Col } from "react-bootstrap";

// import BlurText from "../../components/ui/ReactBitsComponents/BlurText";

// import "./Skills.css";


// /* ==========================================================
//    Skill Data
// ========================================================== */

// const frontendData = [
//   {
//     type: "React.js",
//     bgcolor: "#3146ff",
//     completed: 90,
//   },
//   {
//     type: "Next.js",
//     bgcolor: "#3146ff",
//     completed: 60,
//   },
//   {
//     type: "TypeScript",
//     bgcolor: "#3b82f6",
//     completed: 75,
//   },
//   {
//     type: "JavaScript",
//     bgcolor: "#2563eb",
//     completed: 90,
//   },
//   {
//     type: "Redux / RTK / TanStack Query",
//     bgcolor: "#6366f1",
//     completed: 85,
//   },
// ];


// const stylingData = [
//   {
//     type: "Tailwind CSS, MUI, Bootstrap, Styled Components",
//     bgcolor: "#14b8a6",
//     completed: 75,
//   },
//   {
//     type: "HTML / CSS",
//     bgcolor: "#0ea5e9",
//     completed: 85,
//   },
// ];


// const toolingData = [
//   {
//     type: "Jest, React Testing Library",
//     bgcolor: "#a855f7",
//     completed: 80,
//   },
// ];


// const backendData = [
//   {
//     type: "Node.js / Express",
//     bgcolor: "#22c55e",
//     completed: 75,
//   },
//   {
//     type: "REST API / GraphQL",
//     bgcolor: "#0284c7",
//     completed: 85,
//   },
//   {
//     type: "Python",
//     bgcolor: "#2563eb",
//     completed: 75,
//   },
// ];



// /* ==========================================================
//    Progress Bar
// ========================================================== */

// const ProgressBar = ({
//   completed,
//   bgcolor,
// }) => {

//   return (
//     <div className="skill-progress">

//       <div
//         className="skill-progress-fill"
//         style={{
//           width:`${completed}%`,
//           background:
//           `linear-gradient(
//             90deg,
//             ${bgcolor},
//             #8b9aff
//           )`
//         }}
//       >

//         <span className="skill-progress-label">
//           {completed}%
//         </span>

//       </div>

//     </div>
//   );
// };



// /* ==========================================================
//    Skill Row
// ========================================================== */

// const SkillBar = ({
//   skill
// }) => {

//   return (

//     <div className="skill-bar-container">

//       <div className="skill-header">

//         <span className="skill-title">
//           {skill.type}
//         </span>


//         <span className="skill-value">
//           {skill.completed}%
//         </span>

//       </div>


//       <ProgressBar
//         completed={skill.completed}
//         bgcolor={skill.bgcolor}
//       />

//     </div>

//   );

// };



// /* ==========================================================
//    Section Card
// ========================================================== */

// const SkillSection = ({
//   title,
//   skills
// }) => {

//   return (

//     <div className="skill-section-card">


//       <div className="skill-section-header">

//         <BlurText
//           text={title}
//           delay={200}
//           animateBy="words"
//           direction="top"
//           className="skill-section-title"
//         />

//       </div>


//       <div className="skill-bars">

//         {skills.map((skill,index)=>(

//           <SkillBar
//             key={index}
//             skill={skill}
//           />

//         ))}

//       </div>


//     </div>

//   );

// };



// /* ==========================================================
//    Main
// ========================================================== */

// const Skills = () => {


//   const sections = [

//     {
//       title:"Frontend",
//       skills:frontendData
//     },

//     {
//       title:"Styling",
//       skills:stylingData
//     },

//     {
//       title:"Tooling",
//       skills:toolingData
//     },

//     {
//       title:"Backend",
//       skills:backendData
//     }

//   ];



//   return (

//     <section className="skills-section">

//       <Row className="justify-content-center">

//         <Col
//           xs={12}
//           lg={10}
//           xl={9}
//         >


//           {
//             sections.map(
//               (section,index)=>(

//               <div
//                 key={section.title}
//                 className="skills-column"
//                 style={{
//                   animationDelay:
//                   `${index * .12}s`
//                 }}
//               >

//                 <SkillSection
//                   title={section.title}
//                   skills={section.skills}
//                 />

//               </div>

//             ))
//           }


//         </Col>

//       </Row>


//     </section>

//   );

// };


// export default Skills;

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


const SkillCard = ({
  title,
  skills,
}) => {

  return (

    <div className="skill-section-card">

      <BlurText
        text={title}
        delay={200}
        animateBy="words"
        direction="top"
        className="skill-section-title"
      />


      <p className="skill-description">
        {skills}
      </p>


    </div>

  );
};



const Skills = () => {

  return (

    <section className="skills-section">

      <Row className="skills-grid g-4">

        {SKILL_GROUPS.map((group,index)=>(

          <Col
            key={group.title}
            xs={12}
            md={6}
            xl={3}
            className="skills-column"
            style={{
              animationDelay:`${index * .1}s`
            }}
          >

            <SkillCard
              title={group.title}
              skills={group.skills}
            />

          </Col>

        ))}

      </Row>

    </section>

  );

};


export default Skills;