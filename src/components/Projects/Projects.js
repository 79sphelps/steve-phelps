import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import allAboutHairAngular from "../../Assets/all-about-hair-p1.png";
import allAboutHairReact from "../../Assets/all-about-hair-react-1-min.png";
import realEstateSite from "../../Assets/real-estate-site-home.png";
import eventPlanningNW from "../../Assets/event-planning-nw-2-p1.png";
import eventPlanningNW0 from "../../Assets/event-planning-nw-1-p1-w300.png";
import calendarAppReact from "../../Assets/calendar-app.png";
import chatApp from "../../Assets/chat-app.png";
import musicApp from "../../Assets/music-player-app.png";
import northone from "../../Assets/northone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the React.js and Angular projects I've worked on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={northone}
              isBlog={false}
              title="NorthOne - Banking"
              description="This is the primary React.js desktop banking application for NorthOne. I had a chance to work on this site along with a mobile site built with React Native back in 2021/2022."
              demoLink="https://northone.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allAboutHairAngular}
              isBlog={false}
              title="All About Hair - Angular"
              description="This is a custom hair salon site for a business in Happy Valley. It was
                built with MEAN stack using Bootstrap 4. It includes APIs for authorized
                CRUD operations, authentication and access management with automatic JWT
                renewal (via OAuth), and simple/complex forms with custom validation. It
                integrates Google Calendar APIs. This site is still a work in progress."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://all-about-hair.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allAboutHairReact}
              isBlog={false}
              title="All About Hair - React"
              description="This is the React.js/Redux version of the Angular app. It is a rework of the original. It uses Redux-Saga for async calls, Bootstrap for styling, and Auth0 for auth. It includes a fully functional backoffice area for updating site pages. MongoDB Cloud Atlas was used for free cloud storage."
              ghLink="https://github.com/79sphelps/all-about-hair-react"
              demoLink="https://all-about-hair-react.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realEstateSite}
              isBlog={false}
              title="Real Estate Site"
              description="This is the front end of a real estate broker website built using older style React and Redux for state management. It uses the redux-saga library to make and handle asynchronous calls to the back end. The app leverages the react-bootstrap library for UI. The app includes APIs for authorized CRUD operations, authentication and access management (via OAuth), and simple/complex forms with custom validation. It uses the compound component pattern and the Styled Components library to style the components."
              ghLink="https://github.com/79sphelps/real-estate-rentals-frontend"
              demoLink="https://real-estate-rentals-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicApp}
              isBlog={false}
              title="React Music Player"
              description="This is a React.js application that utilizes the react-player package. It is just a static site ATM and with no backend yet. It is WIP right now and only plays YouTube videos. This is just the frontend static site at the moment. I started working on it to give my daughter an alternative to surfing YouTube endlessly and be able to still allow her to listen to her music."
              ghLink="https://github.com/79sphelps/react-player-app-frontend"
              demoLink="https://react-player-app-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat Application"
              description="This is a React.js chat application used for communication with my family. It leverages the Scaledrone API a real-time messaging API which makes building chat rooms"
              ghLink="https://github.com/79sphelps/scaledrone-chat-app"
              demoLink="https://scaledrone-chat-app-22bw.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventPlanningNW}
              isBlog={false}
              title="Event Planning NW"
              description="This was a mock up SPA project using the MEAN stack. The project was the initial design
                for a local event planning entrepeneur but work on it stopped in order to
                perform a redesign later on. It was built with Angular 5 using Bootstrap 4.
                Getting to know more Bootstrap 4 features was one of the primary goals.
                It includes APIs for authorized CRUD operations, authentication and access
                management with automatic JWT renewal (via OAuth), and simple/complex forms
                with custom validation. More attention was paid to the back-end
                administrative side with most data hosted in MongoDB document stores hosted
                by mLab. This mock project is no longer maintained but kept for reference only."
              ghLink="https://github.com/79sphelps/event-planning-nw-2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventPlanningNW0}
              isBlog={false}
              title="Event Planning NW - Original"
              description="This was a mock up SPA project using the MEAN stack. The project was the initial design
                for a local event planning entrepeneur but work on it stopped in order to
                perform a redesign later on. It was built with Angular 5 using Bootstrap 4.
                Getting to know more Bootstrap 4 features was one of the primary goals.
                It includes APIs for authorized CRUD operations, authentication and access
                management with automatic JWT renewal (via OAuth), and simple/complex forms
                with custom validation. More attention was paid to the back-end
                administrative side with most data hosted in MongoDB document stores hosted
                by mLab. This mock project is no longer maintained but kept for reference only."
              ghLink="https://github.com/79sphelps/event-planning-nw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendarAppReact}
              isBlog={false}
              title="Calendar Application"
              description="This is a React.js/Redux calendar application. It was an older project to get familiar with Redux, Redux-Saga, selectors, and state management. Bootstrap was used for styling. It has a Node.js/Express backend and MongoDB Cloud Atlas was used for cloud storage."
              ghLink="https://github.com/79sphelps/northone"
              demoLink="https://northone.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
