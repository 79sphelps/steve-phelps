import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import BlurText from "../../components/ui/ReactBitsComponents/BlurText";

// import "./Github.css";
import "./GithubV2.css";

const Github = () => {
  return (
    <Container fluid className="github-section">
      <Row className="justify-content-center">
        <Col lg={10} xl={9}>
          <div className="github-card">
            <div className="github-heading">
              <BlurText
                text="Days I Code"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-5xl text-blue-800 justify-center"
              />

              <p className="github-subtitle">
                Consistency matters more than streaks. Here's a snapshot of my
                public GitHub activity.
              </p>
            </div>

            <div className="github-calendar-wrapper">
              {/* <GitHubCalendar
                username="79sphelps"
                blockSize={15}
                blockMargin={5}
                color="#4f7cff"
                fontSize={14}
              /> */}
              <GitHubCalendar
                username="79sphelps"
                blockSize={window.innerWidth < 768 ? 10 : 15}
                blockMargin={window.innerWidth < 768 ? 3 : 5}
                color="#4f7cff"
                fontSize={window.innerWidth < 768 ? 11 : 14}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Github;
