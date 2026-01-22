import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
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

import BlurText from "../ReactBitsComponents/BlurText";

function Projects() {
  useEffect(() => {
    // toast.info();
    toast(
      // "The backend services of these apps are using the free tier of Render.com hosting, and at the moment the entire month of October usage limits have been reached. The services will NOT return fetched REST API data until next month when usage renews."
      "The backend hosting services are using the free tier of Render.com and so there will be a delay when loading a given demo site due to the services being brought back from sleep.",
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
          {/* Recent <strong className="purple">Projects </strong> */}
          <BlurText
            text="Recent Projects"
            delay={200}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-5xl mb-8 text-blue-800 justify-center"
          />
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the React.js and Angular projects I've worked on:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={nikepdp}
              isBlog={false}
              title="Nike.com — Product Display Page (PDP)"
              role="Senior Frontend Engineer"
              scope="Mission-critical e-commerce experience on a globally trafficked consumer platform."
              tech="JavaScript, TypeScript, React, Next.js, Microfrontends, Figma, Git, Agile/Scrum"
              // description="Worked as a senior React developer on the Nike.com PDP (Product Display Page) team. This platform is part of the core buying flow on nike.com where consumers can get a detailed look at products before adding to cart. The project leveraged a NextJS web shell client and used several other micro frontends to comprise the makeup of the PDP."
              description="Built and enhanced Nike.com’s core Product Display Page, a high-traffic, revenue-critical surface used by millions of customers globally. Contributed to post-refactor improvements that streamlined the buying flow and elevated usability, while ensuring performance and visual consistency across devices and browsers. Collaborated closely with design, product, and QA to translate Figma designs into scalable, accessible React components within a microfrontend architecture."
              demoLink="https://www.nike.com/t/mind-002-mens-pregame-shoes-rdCHsAh1/HQ4308-003"
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={workday}
              isBlog={false}
              title="Workday — Kira Internal Milestone & Tracking Tool"
              role="Senior Frontend / Full Stack Engineer"
              scope="Internal, mission-critical workflow supporting cross-team engineering planning."
              tech="React, TypeScript, Redux Toolkit, Material UI, Recharts, REST APIs, Node.js, Express, SQL, Git, Figma"
              // description="This was an internal Workday tool that leveraged information provided from Jira and enhanced it to provide better planning and execution tracking for both releases and milestones. I had a chance to work on this project between November 2024 and February 2025. It was built using React/RTK with Material UI on the frontend and Node.js on the backend. MariaDB (MySQL) was used as the datastore."
              description="Developed and evolved Kira, an internal planning and execution tracking tool used by engineering and delivery teams to manage milestones and release planning. Built intuitive, data-rich React interfaces that integrated Jira and internal APIs, enabling teams to visualize progress and dependencies with clarity. Focused on maintainable state management, reusable UI patterns, and responsive layouts to support long-term scalability."
              // demoLink=""
            />
          </Col>
          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={northone}
              isBlog={false}
              title="NorthOne — Web & Mobile Banking Applications"
              role="Senior Full Stack Engineer"
              scope="Customer-facing financial applications with real-world transactional complexity."
              tech="React, React Native, TypeScript, Redux, Apollo Client, GraphQL, AWS Serverless, Storybook, Git"
              // description="This is the primary React.js desktop banking application for NorthOne. I had a chance to work on this site along with a mobile site built with React Native back in 2021/2022. It uses Redux for state management and leverages a fully distributed AWS backend using microservices."
              description="Delivered and maintained features across web and mobile banking applications used by small business customers, including outbound wire transfers and mobile check deposits. Built responsive React and React Native interfaces backed by GraphQL APIs, while refactoring legacy frontend code to improve performance, reliability, and developer experience. Worked within a regulated fintech environment where UX clarity, data integrity, and cross-platform consistency were critical."
              demoLink="https://northone.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={azlo}
              isBlog={false}
              title="Azlo — Customer Onboarding Application and Services"
              role="Senior Full Stack Engineer"
              scope="Core onboarding flow for a digital banking platform, supporting new customer acquisition."
              tech="Angular 9/10, TypeScript, Nx, NgRX, RxJS, Material UI, SCSS, Node.js, REST APIs, AWS, Git"
              description="Helped lead the frontend architecture and implementation of a new customer onboarding experience within an Nx monorepo, supporting multiple Angular applications. Built complex, form-driven UIs using Angular, NgRX, and RxJS to guide users through critical onboarding workflows, while maintaining and improving existing applications. Partnered with backend teams to integrate REST APIs and ensure performance, scalability, and a smooth user experience."
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={realEstateSite}
              isBlog={false}
              title="Real Estate Broker Site - Tessa Goldy"
              role="Senior Full Stack Engineer"
              scope="Customer- and client-facing application supporting secure data entry and administrative workflows."
              tech="React, JavaScript, Redux, redux-saga, react-bootstrap, Styled Components, OAuth, REST APIs, Git"
              description="Developed a customer- and client-facing real estate website using React and Redux, supporting authenticated user flows, data-driven forms, and secure CRUD operations. Implemented redux-saga to manage asynchronous API interactions and applied the compound component pattern to build reusable, scalable UI components. Focused on predictable state management, form validation, and long-term maintainability in a production environment."
              ghLink="https://github.com/79sphelps/real-estate-rentals-frontend"
              demoLink="https://real-estate-rentals-frontend.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={allAboutHairReact}
              isBlog={false}
              title="Small Business - All About Hair (Happy Valley)"
              role="Senior Full Stack Engineer"
              scope="Customer- and client-facing application with authenticated administrative workflows."
              tech="React, JavaScript, Redux, TanStack Query, Bootstrap, Auth0, Node.js, Express, MongoDB Atlas, Git"
              description="Re-architected a legacy Angular application into a modern React-based desktop web application, improving maintainability, data-fetching reliability, and overall developer experience. Built a customer- and client-facing interface alongside a fully functional back-office admin area for managing site content and updates. Implemented secure authentication and authorization flows and designed scalable API integrations to support real-world business workflows."
              ghLink="https://github.com/79sphelps/all-about-hair-react"
              demoLink="https://all-about-hair-react.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={smar}
              isBlog={false}
              title="SMAR Investments 1, LLC"
              role="Senior Full Stack Engineer"
              scope="Customer- and client-facing application with secure access and data workflows."
              tech="React, JavaScript, Redux, redux-saga, react-bootstrap, Styled Components, OAuth, REST APIs, Git"
              description="Built and maintained the frontend for a customer- and client-facing investment platform, implementing complex, form-driven workflows and authenticated CRUD operations. Developed React interfaces using Redux and redux-saga to manage asynchronous data flows and application state, while applying the compound component pattern to create reusable, composable UI primitives. Focused on predictable state management, form validation, and scalable styling to support long-term application growth."
              // description="This is the front end of the SMAR Investments 1, LLC website built using older style React and Redux for state management. It uses the redux-saga library to make and handle asynchronous calls to the back end. The app leverages the react-bootstrap library for UI. The app includes APIs for authorized CRUD operations, authentication and access management (via OAuth), and simple/complex forms with custom validation. It uses the compound component pattern and the Styled Components library to style the components."
              // ghLink="https://github.com/79sphelps/smar-investments-1-llc-frontend"
              demoLink="https://smar-investments-1-llc-frontend.onrender.com/"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              imgPath={allAboutHairAngular}
              isBlog={false}
              title="Small Business - All About Hair (Happy Valley) (OLD)"
              role="Senior Full Stack Engineer"
              scope="Customer-facing website with secure admin functionality for a live small business."
              tech="Angular, Node.js, Express, MongoDB Atlas, Bootstrap 4, REST APIs, OAuth, Google Calendar APIs"
              description="Designed and built a custom full-stack web application for a local hair salon, delivering both customer-facing pages and authenticated administrative workflows. Implemented secure CRUD APIs with automatic JWT renewal, integrated Google Calendar APIs for scheduling-related functionality, and developed complex, validated forms to support day-to-day business operations. Emphasized reliability, security, and ease of use for non-technical business owners."
              // description="This is a custom hair salon site for a business in Happy Valley. It was
              //   built with MEAN stack using Bootstrap 4. It includes APIs for authorized
              //   CRUD operations, authentication and access management with automatic JWT
              //   renewal (via OAuth), and simple/complex forms with custom validation. It
              //   integrates Google Calendar APIs. This site is still a work in progress."
              // ghLink=""
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
              title="Small Business — Event Planning NW (Happy Valley) (OLD)"
              role="Full Stack Engineer"
              scope="Early-stage customer- and admin-facing SPA prototype with emphasis on backend administration."
              tech="Angular 5, Node.js, Express, MongoDB Atlas, Bootstrap 4, REST APIs, OAuth"
              description="Built an initial single-page application prototype for a local event planning business using the MEAN stack, focusing on backend administrative workflows and data modeling. Implemented authenticated CRUD APIs, complex form validation, and access-controlled management features, with MongoDB-backed document storage. The project served as a foundation for a later redesign and remains as a reference implementation."
              // description="This was a mock up SPA project using the MEAN stack. The project was the initial design
              //   for a local event planning entrepeneur but work on it stopped in order to
              //   perform a redesign later on. It was built with Angular 5 using Bootstrap 4.
              //   Getting to know more Bootstrap 4 features was one of the primary goals.
              //   It includes APIs for authorized CRUD operations, authentication and access
              //   management with automatic JWT renewal (via OAuth), and simple/complex forms
              //   with custom validation. More attention was paid to the back-end
              //   administrative side with most data hosted in MongoDB document stores hosted
              //   by mLab. This mock project is no longer maintained but kept for reference only."
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
              title="Personal — Calendar Application"
              role="Full Stack Engineer"
              scope="Authenticated personal productivity application with persistent data storage."
              description="Developed a full-stack calendar application using React and Redux to manage complex state and event-driven workflows. Integrated FullCalendar to support day, week, and month views, and implemented a Node.js/Express backend with persistent storage. Focused on predictable state management patterns, asynchronous data handling, and reusable UI components in a production-style architecture."
              tech="React, JavaScript, TypeScript, Redux, redux-saga, react-bootstrap, Styled Components, REST APIs, Git"
              // description="This is a React.js/Redux calendar application. It leverages the FullCalendar package which makes visualizing month/week/day events really easy. There are lots of options with the package but only minimal ones are used. It was an older project to get familiar with Redux, Redux-Saga, selectors, and state management. Bootstrap was used for styling. It has a Node.js/Express backend and MongoDB Cloud Atlas was used for cloud storage."
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
