import { Row, Col } from "react-bootstrap";
import BlurText from "../ReactBitsComponents/BlurText";

const testData = [
  { type: "TypeScript", bgcolor: "#ef6c00", completed: 75 },
  { type: "JavaScript", bgcolor: "#ef6c00", completed: 90 },
  { type: "React.js", bgcolor: "#6a1b9a", completed: 90 },
  { type: "Next.js", bgcolor: "#6a1b9a", completed: 60 },
  { type: "Redux/RTK/TanStack Query", bgcolor: "#00695c", completed: 85 },
  { type: "REST API, GraphQL", bgcolor: "#00695c", completed: 85 },
  { type: "Bootstrap/Tailwind CSS", bgcolor: "#00695c", completed: 75 },
  { type: "HTML/CSS", bgcolor: "#00695c", completed: 85 },
  { type: "Angular", bgcolor: "#6a1b9a", completed: 70 },
  { type: "NgRX/RxJS", bgcolor: "#00695c", completed: 70 },
  { type: "Node.js/Express", bgcolor: "#ef6c00", completed: 75 },
  { type: "Python", bgcolor: "#ef6c00", completed: 75 },
  // { type: "Java", bgcolor: "#ef6c00", completed: 40 },
  // { type: "C++", bgcolor: "#ef6c00", completed: 75 },
];

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

function renderBars() {
  return testData.map((item, idx) => {
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

const ProgrammingLanguageBars = () => {
  return (
    <div>
      <h2 className="title">
        <BlurText
          text="Skills"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-5xl mb-8 text-blue-800 justify-center"
        />
      </h2>
      {renderBars()}
    </div>
  );
};

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
        }}
      >
        <ProgrammingLanguageBars />
      </Col>
    </Row>
  );
}

export default Skills;
