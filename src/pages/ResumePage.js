import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../components/ui/Particle";
import Loading from "../components/feedback/Loading";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import RESUME_PDF from "../assets/Resume(Trimmed)-StevePhelps-Jan2026-Frontend.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;


const ResumePage = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={RESUME_PDF}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <div className="flex flex-row items-center justify-center">
              <AiOutlineDownload className="mr-3" />
              Download CV
            </div>
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={RESUME_PDF}
            className="d-flex justify-content-center"
            loading={<Loading />}
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row className="resume">
          <Document
            file={RESUME_PDF}
            className="d-flex justify-content-center"
            loading={<Loading />}
          >
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: '50px' }}>
          <Button
            variant="primary"
            href={RESUME_PDF}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <div className="flex flex-row items-center justify-center">
              <AiOutlineDownload className="mr-3" />
              Download CV
            </div>
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumePage;
