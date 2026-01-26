import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiAngularSimple,
  DiNodejs,
  DiMongodb,
  // DiPython,
  // DiGit,
  // DiJava,
} from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiGraphql,
  SiExpress,
  // SiRedis,
  // SiFirebase,
  SiNextdotjs,
  // SiSolidity,
  // SiPostgresql,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";
import { ABOUT_TECH_ARRAY } from "./about-data";

const TECH = {
  'javascript': <DiJavascript1 />,
  'typescript': <SiTypescript />,
  'react': <DiReact />,
  'angular': <DiAngularSimple />,
  'nextjs': <SiNextdotjs />,
  'nodejs': <DiNodejs />,
  'redux': <SiRedux />,
  'reactquery': <SiReactquery />,
  'graphql': <SiGraphql />,
  'express': <SiExpress />,
}

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      { ABOUT_TECH_ARRAY.map((item, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <div className="flex justify-center items-center">
            { TECH[item] }
          </div>
        </Col>
      ))}

      {/* <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiJavascript1 />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiReact />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiAngularSimple />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiNextdotjs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiNodejs />
        </div>
      </Col> */}
    </Row>
  );
}

export default Techstack;
