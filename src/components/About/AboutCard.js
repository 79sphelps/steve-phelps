import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "justify" }}> */}

          <div className="about-me-paragraph">
            I’m a senior frontend and full stack engineer with over a decade of
            experience building and maintaining production web applications used
            by internal teams and large-scale consumer platforms.
          </div>

          <div className="about-me-paragraph">
            Throughout my career, I’ve worked across e-commerce, fintech,
            enterprise tools, and internal platforms—most recently at Nike and
            Workday—where I helped design, build, and evolve React-based systems
            supporting high-traffic user flows and mission-critical business
            workflows. I specialize in translating complex, often ambiguous
            requirements into clear, maintainable frontend architecture that
            performs well and scales over time.
          </div>

          <div className="about-me-paragraph">
            My strongest skills sit at the intersection of frontend
            architecture, state management, and product thinking. I care deeply
            about performance, accessibility, and long-term maintainability, and
            I’m comfortable taking ownership of features from early discovery
            through delivery and iteration. I work closely with product
            managers, designers, and backend engineers to ensure the UI isn’t
            just visually polished, but reliable and intuitive under real-world
            conditions.
          </div>

          <div className="about-me-paragraph">
            I’m drawn to teams that value thoughtful engineering, clear
            communication, and ownership. I enjoy mentoring, contributing to
            shared standards, and raising the quality bar without
            over-engineering. Above all, I take pride in building software that
            people depend on—software that is easy to use, hard to break, and
            built with intention.
          </div>

          <div className="about-me-paragraph">
            Outside of work, I continue sharpening my skills through hands-on
            projects, technical study, and keeping current with modern React,
            TypeScript, and frontend best practices.
          </div>
          {/* 
          <p style={{ textAlign: "left" }}>
            In my recent role at Nike, I helped optimize the Product Display
            Page—core to the customer product discovery journey. Working as a
            senior React developer, I focused on performance, speed, and
            efficiency within a Next.js web shell and multiple micro frontends,
            directly impacting the shopping experience for millions of users.
            <br />
            <br />
            Before that, at Workday, I helped to re-architect an internal
            planning and milestone tracking project, merging Jira data with
            internal systems. By leveraging React, RTK, Material UI, and
            Node.js, I improved maintainability, streamlined workflows, and
            built robust visualizations with Recharts for enterprise-scale
            planning.
            <br />
            <br />
            At NorthOne, I assisted with enhancing and optimizing the front-end
            React.js and React Native banking applications, adding features like
            outgoing wire transfers and mobile check deposits while cleaning up
            significant technical debt. Earlier at Azlo, my work rebuilding the
            Angular onboarding flow using NgRX and RxJS boosted conversion
            rates, reduced customer support workload, and strengthened fraud
            protection.
            <br />
            <br />
            Earlier in my career at Intel and McAfee, I built internal tools,
            web dashboards, and web automation frameworks that improved product
            health visibility and optimized platform operations.
            <br />
            <br />
            Apart from developing, some other activities that I love to do!
          </p> */}

          <div style={{ textAlign: "left" }}>
            Apart from developing, some other activities that I really enjoy
            are...
          </div>

          <ul>
            <li className="about-activity">
              <div className="flex flex-row items-center">
                <ImPointRight className="mr-3" /> Playing Music
              </div>
            </li>
            <li className="about-activity">
              <div className="flex flex-row items-center">
                <ImPointRight className="mr-3" /> Learning German
              </div>
            </li>
            <li className="about-activity">
              <div className="flex flex-row items-center">
                <ImPointRight className="mr-3" /> Traveling
              </div>
            </li>
          </ul>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Steve Phelps</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
