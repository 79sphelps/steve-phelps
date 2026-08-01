import React, { useCallback, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import Page from "../components/layout/Page";
import Section from "../components/layout/Section";

import ProjectToastMessage from "../features/projects/ProjectToastMessage";
import ProjectCard from "../features/projects/ProjectCard";

import {
  PROJECTS_ARY,
  PROJECTS_HEADING_TEXT,
  PROJECTS_HEADING_SUBTEXT,
  PROJECTS_TOAST_TEXT,
} from "../lib/project-data";

import "./ProjectsPage.css";

const SESSION_KEY = "projects_toast_seen_v1";

const Projects = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);

    if (!seen) {
      setShowToast(true);

      sessionStorage.setItem(SESSION_KEY, "true");
    }
  }, []);

  const handleToastClose = useCallback(() => {
    setShowToast(false);
  }, []);

  return (
    <Page title={PROJECTS_HEADING_TEXT} subtitle={PROJECTS_HEADING_SUBTEXT}>
      {showToast && (
        <ProjectToastMessage
          message={PROJECTS_TOAST_TEXT}
          duration={6000}
          onClose={handleToastClose}
        />
      )}

      <Section>
        <Row className="projects-grid">
          {PROJECTS_ARY.map((item, idx) => (
            <Col
              key={idx}
              lg={4}
              md={6}
              sm={12}
              className="project-column"
              style={{
                animationDelay: `${idx * 0.12}s`,
              }}
            >
              <ProjectCard
                imgPath={item.imgPath}
                isBlog={item.isBlog}
                title={item.title}
                role={item.role}
                scope={item.scope}
                tech={item.tech}
                description={item.description}
                demoLink={item.demoLink}
                ghLink={item.ghLink}
                demoVideo={item.demoVideo}
              />
            </Col>
          ))}
        </Row>
      </Section>
    </Page>
  );
};

export default Projects;
