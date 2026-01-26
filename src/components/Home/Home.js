import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import Particle from "../Particle";
import RotatingText from "../ReactBitsComponents/RotatingText";
import homeLogo from "../../Assets/home-main.svg";
import HomeSnapshot from "./HomeSnapshot";
// import Type from "./Type";
import {
  HOME_NAME,
  HOME_GREETING,
  HOME_GREETING_MSG,
  HOME_PROFILE_HEADING_1,
  HOME_PROFILE_HEADING_2,
  HOME_PROFILE_HEADING_3,
  HOME_INTERESTS_TEXT,
  HOME_INTERESTS_ARY,
  HOME_EMAIL,
  HOME_PHONE,
  HOME_CITY,
  HOME_STATE,
} from "./home-profile-data";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {/* <Container className="home-content" style={{ marginLeft: '0px', paddingLeft: '0px', border: '1px solid dodgerblue' }}> */}
        <Container>
          <Row>
            {/* <Col md={7} className="home-header" style={{ marginLeft: '0px', paddingLeft: '0px', border: '1px solid dodgerblue' }}> */}
            <Col className="home-header">
              <h1 className="heading-name">
                {HOME_GREETING}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h3 className="heading-subtext">
                {HOME_GREETING_MSG}
                <strong className="main-name"> {HOME_NAME}</strong>.
              </h3>
              <h3 className="heading-subtext">{HOME_PROFILE_HEADING_1}</h3>
              <h3 className="heading-subtext">{HOME_PROFILE_HEADING_2}</h3>
              <h3 className="heading-subtext">{HOME_PROFILE_HEADING_3}</h3>
              <h3 className="heading-subtext" style={{ marginTop: "10px" }}>
                {HOME_INTERESTS_TEXT}
                <RotatingText
                  texts={HOME_INTERESTS_ARY}
                  mainClassName="mt-1 px-2 sm:px-2 md:px-3 bg-blue-800 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  // rotationInterval={2000}
                  rotationInterval={3000}
                />
              </h3>
              {/* <Type /> */}
              <div>
                {/* <div style={{ padding: '50px', textAlign: "left" }}> */}
                {/* <ul class="information margin-tb-30"> */}
                {/* <ul style={{ fontSize: "1.5rem" }}> */}
                {/* <ul style={{ fontSize: "20px" }}> */}
                {/* <ul className="home-contact-text"> */}
                <ul>
                  <li>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <AiOutlinePhone className="home-contact-info-icon" />
                      <b className="blue" style={{ marginRight: "5px" }}>
                        -
                      </b>
                      {HOME_PHONE}
                    </div>
                  </li>
                  <li>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <AiOutlineMail className="home-contact-info-icon" />
                      <b className="blue" style={{ marginRight: "5px" }}>
                        -
                      </b>
                      {HOME_EMAIL}
                    </div>
                  </li>
                  <li>
                    <b className="blue" style={{ marginRight: "5px" }}>
                      CITY:{" "}
                    </b>
                    {HOME_CITY}
                  </li>
                  <li>
                    <b className="blue" style={{ marginRight: "5px" }}>
                      STATE:{" "}
                    </b>
                    {HOME_STATE}
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={5} className="home-right-hero-img">
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeSnapshot />
    </section>
  );
};

export default Home;
