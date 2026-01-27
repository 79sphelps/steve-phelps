import { Row, Col } from "react-bootstrap";
import BlurText from "../ReactBitsComponents/BlurText";

// const testData = [
//   { type: "TypeScript", bgcolor: "#ef6c00", completed: 75 },
//   { type: "JavaScript", bgcolor: "#ef6c00", completed: 90 },
//   { type: "React.js", bgcolor: "#6a1b9a", completed: 90 },
//   { type: "Next.js", bgcolor: "#6a1b9a", completed: 60 },
//   { type: "Redux/RTK/TanStack Query", bgcolor: "#00695c", completed: 85 },
//   { type: "REST API, GraphQL", bgcolor: "#00695c", completed: 85 },
//   { type: "Bootstrap/Tailwind CSS", bgcolor: "#00695c", completed: 75 },
//   { type: "HTML/CSS", bgcolor: "#00695c", completed: 85 },
//   { type: "Angular", bgcolor: "#6a1b9a", completed: 70 },
//   { type: "NgRX/RxJS", bgcolor: "#00695c", completed: 70 },
//   { type: "Node.js/Express", bgcolor: "#ef6c00", completed: 75 },
//   { type: "Python", bgcolor: "#ef6c00", completed: 75 },
//   { type: "Java", bgcolor: "#ef6c00", completed: 40 },
//   { type: "C++", bgcolor: "#ef6c00", completed: 75 },
// ];

const frontendData = [
  { type: "React.js", bgcolor: "#6a1b9a", completed: 90 },
  { type: "Next.js", bgcolor: "#6a1b9a", completed: 60 },
  { type: "TypeScript", bgcolor: "#ef6c00", completed: 75 },
  { type: "JavaScript", bgcolor: "#ef6c00", completed: 90 },
  { type: "Redux/RTK/TanStack Query", bgcolor: "#00695c", completed: 85 },
];

const stylingData = [
  { type: "Tailwind, MUI, Bootstrap, Styled Components", bgcolor: "#00695c", completed: 75 },
  { type: "HTML/CSS", bgcolor: "#00695c", completed: 85 },
];

const toolingData = [
{ type: "Jest, React Testing Library", bgcolor: "#ef6c00", completed: 80 },
];

const backendData = [
  { type: "Node.js/Express", bgcolor: "#ef6c00", completed: 75 },
  { type: "REST API, GraphQL", bgcolor: "#00695c", completed: 85 },
  { type: "Python", bgcolor: "#ef6c00", completed: 75 },
  // { type: "Java", bgcolor: "#ef6c00", completed: 40 },
  // { type: "C++", bgcolor: "#ef6c00", completed: 75 },
];

// const platformsData = [

// ];

const ProgressBar2 = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    width: "95%",
    justifyContent: "center",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
    height: 30,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 10,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

// function renderBars() {
//   return testData.map((item, idx) => {
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

function renderFrontendBars() {
  return frontendData.map((item, idx) => {
    return (
      <div className="bar-container" key={idx}>
        <p className="skill-title">{item.type}</p>
        <ProgressBar2
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      </div>
    );
  });
}

function renderStylingBars() {
  return stylingData.map((item, idx) => {
    return (
      <div className="bar-container" key={idx}>
        <p className="skill-title">{item.type}</p>
        <ProgressBar2
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      </div>
    );
  });
}

function renderToolingBars() {
  return toolingData.map((item, idx) => {
    return (
      <div className="bar-container" key={idx}>
        <p className="skill-title">{item.type}</p>
        <ProgressBar2
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      </div>
    );
  });
}

function renderBackendBars() {
  return backendData.map((item, idx) => {
    return (
      <div className="bar-container" key={idx}>
        <p className="skill-title">{item.type}</p>
        <ProgressBar2
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      </div>
    );
  });
}

// const ProgrammingLanguageBars = () => {
//   return (
//     <div>
//       <h2 className="title">
//         <BlurText
//           text="Skills"
//           delay={200}
//           animateBy="words"
//           direction="top"
//           className="text-5xl mb-8 text-blue-800 justify-center"
//         />
//       </h2>
//       {renderBars()}
//     </div>
//   );
// };

const FrontendBars = () => {
  return (
    <div>
      <h2 className="title">
        <BlurText
          text="Frontend"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8 text-blue-800 justify-center"
        />
      </h2>
      {renderFrontendBars()}
    </div>
  );
};

const StylingBars = () => {
  return (
    <div>
      <h2 className="title">
        <BlurText
          text="Styling"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8 text-blue-800 justify-center"
        />
      </h2>
      {renderStylingBars()}
    </div>
  );
};

const ToolingBars = () => {
  return (
    <div>
      <h2 className="title">
        <BlurText
          text="Tooling"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8 text-blue-800 justify-center"
        />
      </h2>
      {renderToolingBars()}
    </div>
  );
};

const BackendBars = () => {
  return (
    <div>
      <h2 className="title">
        <BlurText
          text="Backend"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8 text-blue-800 justify-center"
        />
      </h2>
      {renderBackendBars()}
    </div>
  );
};

// const PlatformsBars = () => {
//   return (
//     <div>
//       <h2 className="title">
//         <BlurText
//           text="Platforms"
//           delay={200}
//           animateBy="words"
//           direction="top"
//           className="text-5xl mb-8 text-blue-800 justify-center"
//         />
//       </h2>
//       {renderPlatformsBars()}
//     </div>
//   );
// };

const Skills = () => {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          // paddingBottom: "50px",
        }}
      >
        {/* <ProgrammingLanguageBars /> */}
        <FrontendBars />
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          // paddingBottom: "50px",
        }}
      >
        <StylingBars />
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          // paddingBottom: "50px",
        }}
      >
        <ToolingBars />
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          // paddingBottom: "50px",
        }}
      >
        <BackendBars />
      </Col>
    </Row>
    </>
  );
}

export default Skills;
