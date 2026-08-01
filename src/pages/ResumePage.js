import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page as PdfPage, pdfjs } from "react-pdf";

import Page from "../components/layout/Page";
import Section from "../components/layout/Section";

// import Loading from "../components/feedback/Loading";
import ResumeLoader from "../components/feedback/ResumeLoader";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import RESUME_PDF from "../assets/Resume(Trimmed)-StevePhelps-May2026-Frontend.pdf";

import "./ResumePage.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const ResumePage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const [pdfProgress, setPdfProgress] = useState(0);
  const [pdfLoaded, setPdfLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pdfScale = width > 1200 ? 1.55 : width > 768 ? 1.2 : 0.48;

  useEffect(() => {
    if (pdfLoaded) return;

    const interval = setInterval(() => {
      setPdfProgress((prev) => {
        if (prev >= 90) {
          return prev;
        }

        return prev + Math.floor(Math.random() * 8) + 1;
      });
    }, 350);

    return () => clearInterval(interval);
  }, [pdfLoaded]);

  const DownloadButton = () => (
    <Button
      href={RESUME_PDF}
      target="_blank"
      className="resume-download-button"
    >
      <AiOutlineDownload />
      <span>Download CV</span>
    </Button>
  );

  return (
    <Page
      title="Resume"
      subtitle="Frontend Developer specializing in React, TypeScript, modern UI architecture, and polished user experiences."
      className="resume-page"
    >
      <Section className="resume-content-section">
        <div className="resume-download-top">
          <DownloadButton />
        </div>

        {/* <Row className="resume-document-wrapper">
          <Document
            file={RESUME_PDF}
            className={`resume-document ${pdfLoaded ? "resume-visible" : ""}`}
            onLoadProgress={({ loaded, total }) => {
              const percent = Math.round((loaded / total) * 100);

              setPdfProgress(percent);
            }}
            onLoadSuccess={() => {
              setPdfProgress(100);

              setTimeout(() => {
                setPdfLoaded(true);
              }, 300);
            }}
            loading={<ResumeLoader progress={pdfProgress} />}
          >
            {[1, 2, 3].map((page) => (
              <div key={page} className="resume-page-container">
                <PdfPage pageNumber={page} scale={pdfScale} />
              </div>
            ))}
          </Document>
        </Row> */}
        <Row className="resume-document-wrapper">
          {!pdfLoaded && <ResumeLoader progress={pdfProgress} />}

          <Document
            file={RESUME_PDF}
            className={`resume-document ${pdfLoaded ? "resume-visible" : ""}`}
            onLoadProgress={({ loaded, total }) => {
              const percent = Math.round((loaded / total) * 100);

              setPdfProgress(percent);
            }}
            onLoadSuccess={() => {
              setPdfProgress(100);

              setTimeout(() => {
                setPdfLoaded(true);
              }, 500);
            }}
          >
            {[1, 2, 3].map((page) => (
              <div key={page} className="resume-page-container">
                <PdfPage pageNumber={page} scale={pdfScale} />
              </div>
            ))}
          </Document>
        </Row>

        <div className="resume-footer-download">
          <DownloadButton />
        </div>
      </Section>
    </Page>
  );
};

export default ResumePage;
