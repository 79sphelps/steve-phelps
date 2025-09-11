import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "justify" }}> */}
          <p style={{ textAlign: "left" }}>
            In my recent role at Nike, I helped optimize the Product Display Page—core to the customer product discovery journey. Working as a senior React developer, I focused on performance, speed, and efficiency within a Next.js web shell and multiple micro frontends, directly impacting the shopping experience for millions of users.
            <br />
            <br />
            Before that, at Workday, I helped to re-architect an internal planning and milestone tracking project, merging Jira data with internal systems. By leveraging React, RTK, Material UI, and Node.js, I improved maintainability, streamlined workflows, and built robust visualizations with Recharts for enterprise-scale planning.
            <br />
            <br />
            At NorthOne, I assisted with enhancing and optimizing the front-end React.js and React Native banking applications, adding features like outgoing wire transfers and mobile check deposits while cleaning up significant technical debt. Earlier at Azlo, my work rebuilding the Angular onboarding flow using NgRX and RxJS boosted conversion rates, reduced customer support workload, and strengthened fraud protection.
            <br />
            <br />
            Earlier in my career at Intel and McAfee, I built internal tools, web dashboards, and web automation frameworks that improved product health visibility and optimized platform operations.
            <br />
            <br />
            Apart from developing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning German
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
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
