import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Serving as a full stack JavaScript developer at NorthOne, I played
            an instrumental role in rewriting and optimizing React.js banking
            frontends for both desktop and mobile applications using React.js,
            React Native, Redux, GraphQL, and Storybook. My efforts led to the
            addition of outgoing wire transfers and mobile check deposits as
            well as spearheading large amounts of tech debt cleanup.
            <br />
            <br />
            Prior to working for NorthOne, I worked for another fintech company
            named Azlo. There, I developed applications in Angular and worked
            with a team of 4 engineers to rebuild the entire front-end user
            onboarding application using NgRX and RxJS for state management.
            This increased the user conversion rate significantly, reduced
            customer service team thrash, enhanced fraud protection, and cut
            down on bug count.
            <br />
            <br />
            At Intel and McAfee, I worked on various teams designing and
            implementing custom internal tools and enhancing automation and
            testing frameworks, deployments, metrics gathering, and dashboards
            to promote platform/product health visibility.
            <br />
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
              <ImPointRight /> Travelling
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
