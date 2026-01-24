import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import TrackVisibility from "react-on-screen";
import "./Contact.css";
import contactImg from "../../Assets/contact-img.svg";
import BlurText from "../ReactBitsComponents/BlurText";
import ContactForm from "./ContactForm";
import { HOME_PHONE, HOME_EMAIL } from "../Home/home-profile-info";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container fluid className="about-section">
        {/* <Particle /> */}
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <BlurText
                text="Get in Touch"
                delay={200}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-5xl mb-8 text-blue-800 justify-center"
              />
            </h1>
            <div style={{ display: "inline" }}>
              <b className="purple">PHONE: </b>{ HOME_PHONE }
            </div>
            <div style={{ display: "inline" }}>
              <b className="purple">EMAIL: </b>
              <a href={`mailto:${HOME_EMAIL}`}>{ HOME_EMAIL }</a>
            </div>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible = true }) => (
                  <img
                    //   className={
                    // isVisible ? "animate__animated animate__zoomIn" : ""
                    //   }
                    src={contactImg}
                    alt="Contact Me"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col
              //   md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Contact;