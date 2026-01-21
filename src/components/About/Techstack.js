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
  // SiRedis,
  // SiFirebase,
  SiNextdotjs,
  // SiSolidity,
  // SiPostgresql,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
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
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <SiNextdotjs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="flex justify-center items-center">
          <DiNodejs />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
