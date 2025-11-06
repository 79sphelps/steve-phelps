import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import allAboutHairAngular from "../../Assets/all-about-hair-p1.png";
import allAboutHairReact from "../../Assets/all-about-hair-react-1-min.png";
import realEstateSite from "../../Assets/real-estate-site-home.png";
import eventPlanningNW from "../../Assets/event-planning-nw-2-p1.png";
// import eventPlanningNW0 from "../../Assets/event-planning-nw-1-p1-w300.png";
import calendarAppReact from "../../Assets/calendar-app.png";
// import chatApp from "../../Assets/chat-app.png";
// import musicApp from "../../Assets/music-player-app.png";
import northone from "../../Assets/northone.png";
import azlo from "../../Assets/azlo.png";
import smar from "../../Assets/smar-investments.png";
import workday from "../../Assets/workday-kira.png";
import nikepdp from "../../Assets/nike-pdp.png";

function Projects() {
  useEffect(() => {
    // toast.info();
    toast(
      // "The backend services of these apps are using the free tier of Render.com hosting, and at the moment the entire month of October usage limits have been reached. The services will NOT return fetched REST API data until next month when usage renews."
      "The backend hosting services are using the free tier of Render.com and so there will be a delay when loading a given demo site due to the services being brought back from sleep."
    );
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
        <ToastContainer 
          position="top-center"
          autoClose={30000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"

          // transition={Bounce}
        />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the React.js and Angular projects I've worked on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={nikepdp}
              isBlog={false}
              title="Nike.com - Product Display Page"
              // description="Worked as a senior React developer on the Nike.com PDP (Product Display Page) team. This platform is part of the core buying flow on nike.com where consumers can get a detailed look at products before adding to cart. The project leveraged a NextJS web shell client and used several other micro frontends to comprise the makeup of the PDP."
              description="Enhanced Nike.com’s core Product Display Page (PDP) with a small team, improving the buying flow and user experience after a full refactor, while collaborating closely with design, product, and QA to ensure high-quality, aligned delivery."
              demoLink="https://www.nike.com/t/mind-002-mens-pregame-shoes-rdCHsAh1/HQ4308-003"
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={workday}
              isBlog={false}
              title="Workday - Kira"
              // description="This was an internal Workday tool that leveraged information provided from Jira and enhanced it to provide better planning and execution tracking for both releases and milestones. I had a chance to work on this project between November 2024 and February 2025. It was built using React/RTK with Material UI on the frontend and Node.js on the backend. MariaDB (MySQL) was used as the datastore."
              description="Developed and enhanced Workday’s internal Kira application, a planning and execution tracking tool that integrated Jira and internal data to streamline milestone tracking and release planning for engineering teams."
              // demoLink=""
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={northone}
              isBlog={false}
              title="NorthOne - Banking"
              // description="This is the primary React.js desktop banking application for NorthOne. I had a chance to work on this site along with a mobile site built with React Native back in 2021/2022. It uses Redux for state management and leverages a fully distributed AWS backend using microservices."
              description="Delivered new features and maintained web and mobile banking applications using ReactJS, React Native, GraphQL, and serverless microservices on AWS, including outbound wire transfers and mobile check deposits, while refactoring frontends for improved performance and maintainability."
              demoLink="https://northone.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={azlo}
              isBlog={false}
              title="Azlo - Banking"
              description="Helped lead the design and implementation of a new customer onboarding frontend in an Nx mono repo using Angular 9/10 with NgRX and RxJS, while maintaining multiple Angular applications and building RESTful APIs for distributed microservices, improving performance, scalability, and user experience."
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={realEstateSite}
              isBlog={false}
              title="Real Estate Broker Site"
              description="This is the front end of a real estate broker website built using older style React and Redux for state management. It uses the redux-saga library to make and handle asynchronous calls to the back end. The app leverages the react-bootstrap library for UI. The app includes APIs for authorized CRUD operations, authentication and access management (via OAuth), and simple/complex forms with custom validation. It uses the compound component pattern and the Styled Components library to style the components."
              ghLink="https://github.com/79sphelps/real-estate-rentals-frontend"
              demoLink="https://real-estate-rentals-frontend.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={allAboutHairReact}
              isBlog={false}
              title="All About Hair - React (WIP)"
              description="This is the React.js/TanStack Query version of the original Angular app. It is a complete rework and it uses TanStack Query for async calls, Bootstrap for styling, and Auth0 for auth. It includes a fully functional backoffice area for updating site pages. MongoDB Cloud Atlas was used for free cloud storage."
              ghLink="https://github.com/79sphelps/all-about-hair-react"
              demoLink="https://all-about-hair-react.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={smar}
              isBlog={false}
              title="SMAR Investments 1, LLC"
              description="This is the front end of the SMAR Investments 1, LLC website built using older style React and Redux for state management. It uses the redux-saga library to make and handle asynchronous calls to the back end. The app leverages the react-bootstrap library for UI. The app includes APIs for authorized CRUD operations, authentication and access management (via OAuth), and simple/complex forms with custom validation. It uses the compound component pattern and the Styled Components library to style the components."
              // ghLink="https://github.com/79sphelps/smar-investments-1-llc-frontend"
              demoLink="https://smar-investments-1-llc-frontend.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={allAboutHairAngular}
              isBlog={false}
              title="All About Hair - Angular (Old)"
              description="This is a custom hair salon site for a business in Happy Valley. It was
                built with MEAN stack using Bootstrap 4. It includes APIs for authorized
                CRUD operations, authentication and access management with automatic JWT
                renewal (via OAuth), and simple/complex forms with custom validation. It
                integrates Google Calendar APIs. This site is still a work in progress."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://all-about-hair.onrender.com/"
            />
          </Col>

          {/* <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={musicApp}
              isBlog={false}
              title="React Music Player"
              description="This is a React.js application that utilizes the react-player package. It is just a static site ATM and with no backend yet. It is WIP right now and only plays YouTube videos. This is just the frontend static site at the moment. I started working on it to give my daughter an alternative to surfing YouTube endlessly and be able to still allow her to listen to her music."
              ghLink="https://github.com/79sphelps/react-player-app-frontend"
              demoLink="https://react-player-app-frontend.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Chat Application"
              description="This is a React.js chat application used for communication with my family. It leverages the Scaledrone API which is a real-time messaging API that makes building chat rooms easier."
              // ghLink="https://github.com/79sphelps/scaledrone-chat-app"
              demoLink="https://scaledrone-chat-app-22bw.onrender.com/"
            />
          </Col> */}

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={eventPlanningNW}
              isBlog={false}
              title="Event Planning NW (Old Project)"
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
          {/* 
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={eventPlanningNW0}
              isBlog={false}
              title="Event Planning NW (Old Original Project)"
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
          </Col> */}

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={calendarAppReact}
              isBlog={false}
              title="Calendar Application"
              description="This is a React.js/Redux calendar application. It leverages the FullCalendar package which makes visualizing month/week/day events really easy. There are lots of options with the package but only minimal ones are used. It was an older project to get familiar with Redux, Redux-Saga, selectors, and state management. Bootstrap was used for styling. It has a Node.js/Express backend and MongoDB Cloud Atlas was used for cloud storage."
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