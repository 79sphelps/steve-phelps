import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/my_photo-min.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">About Me</span>
            </h1>
            <p className="home-about-body">
              Full Stack Developer with 10+ years of experience building high-performance React/Next.js and Angular applications, specializing in modern JavaScript/TypeScript ecosystems, delivering impactful solutions with React.js, Next.js, Node.js, and Express. Experienced across the full stack (with some AWS) and passionate about scalable state management, performance optimization, intuitive UI design, and leveraging AI tools to accelerate delivery and innovation.
              <br />
              {/* <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">frontend technologies</b> and building
                applications with{" "}
                <b className="purple">React.js, Next.js, and Tailwind CSS</b>
              </i>
              <br /> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                style={{ borderRadius: "12px", width: "200px" }}
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/79sphelps"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <div className='flex flex-row justify-center items-center'>
                  <AiFillGithub style={{ marginTop: '8px' }} />
                  </div>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/steve-phelps-1614192b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <div className='flex flex-row justify-center items-center'>
                  <FaLinkedinIn style={{ marginTop: '8px' }} />
                  </div>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/stevenlphelps/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <div className='flex flex-row justify-center items-center'>
                  <AiFillInstagram style={{ marginTop: '8px' }} />
                  </div>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
