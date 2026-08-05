import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  Briefcase,
  Code2,
  Database,
  Globe,
  Layers,
  MapPin,
  Sparkles,
  //   User,
} from "lucide-react";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  fadeUp,
  staggerContainer,
  scaleIn,
} from "../features/resume/resume-motion";
import ResumeSection from "../features/resume/ResumeSection";
import "./ResumePageV3.css";
import "../features/resume/ResumePrint.css";
import {
  resume,
  experience,
  projects,
  skillGroups,
  education,
  certifications,
  highlights,
} from "../features/resume/resume-data";

import Page from "../components/layout/Page";
// import Section from "../components/layout/Section";
import CertificationCard from "../features/resume/CertificationCard";
import EducationCard from "../features/resume/EducationCard";
import ExperienceCard from "../features/resume/ExperienceCard";
import HighlightCard from "../features/resume/HighlightCard";
import MetricCard from "../features/resume/MetricCard";
import ProjectCard from "../features/resume/ProjectCard";
// import Section from "../components/layout/Section";
import SkillGroup from "../features/resume/SkillGroup";
import SpecularButton from "../components/ui/ReactBitsComponents/SpecularButton";
import MY_IMG from "../assets/my_photo-min.jpg";
import RESUME_PDF from "../assets/Resume(Trimmed)-StevePhelps-May2026-Frontend.pdf";

export default function ResumePageV2() {
  const navigate = useNavigate();

  return (
    <Page
      title="Resume"
      subtitle="Senior frontend engineer specializing in scalable React architecture, AI-powered products, and exceptional UX."
    >
      <div className="resume-page">
        <div className="resume-background-accent" />

        <div className="resume-container">
          {/* =====================================================
            HERO
            ===================================================== */}

          {/* <section className="resume-card resume-hero"> */}
          <motion.section
            className="resume-card resume-hero"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="resume-hero-content">
              <div>
                <div className="resume-status">
                  Available for Senior Frontend Engineering Roles
                </div>

                <h1 className="resume-name">{resume.name}</h1>

                <div className="resume-title">{resume.title}</div>

                <a href={RESUME_PDF} download className="resume-download">
                  Download PDF
                </a>

                <div className="resume-meta">
                  <div className="resume-meta-item">
                    <MapPin size={18} />
                    {resume.location}
                  </div>

                  <div className="resume-meta-item">
                    <Globe size={18} />
                    {resume.website}
                  </div>

                  <div className="resume-meta-item">
                    <Database size={18} />
                    React • TypeScript • UX
                  </div>
                </div>
              </div>

              {/* <div className="resume-avatar">
                <User size={82} />
              </div> */}
              <div className="resume-avatar">
                {/* <div className="resume-avatar-ring"> */}
                {/* <User size={82} /> */}
                <Tilt>
                  <div className="snapshot-avatar-card">
                    <img
                      src={MY_IMG}
                      className="snapshot-avatar"
                      alt="Steve Phelps"
                    />
                  </div>
                </Tilt>
                {/* </div> */}
              </div>
            </div>
          </motion.section>

          {/* =====================================================
            METRICS
            ===================================================== */}

          <motion.div
            className="resume-metrics"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {resume.metrics.map((metric) => (
              <motion.div key={metric.label} variants={scaleIn}>
                <MetricCard {...metric} />
              </motion.div>
            ))}
          </motion.div>

          {/* =====================================================
 SUMMARY
===================================================== */}

          <ResumeSection
            title="Professional Summary"
            icon={<Briefcase size={20} />}
          >
            <p className="resume-body-text">{resume.summary}</p>
          </ResumeSection>

          {/* =====================================================
            EXPERIENCE FULL WIDTH
            ===================================================== */}

          <ResumeSection
            title="Professional Experience"
            icon={<Briefcase size={20} />}
          >
            <div className="resume-timeline">
              <div className="resume-timeline-line" />

              {experience.map((job) => (
                <div
                  key={`${job.company}-${job.period}`}
                  className="resume-timeline-item"
                >
                  <motion.div
                    className="resume-timeline-node"
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <span />
                  </motion.div>

                  <ExperienceCard {...job} />
                </div>
              ))}
            </div>
          </ResumeSection>

          {/* =====================================================
            PROJECTS + SKILLS SPLIT
            ===================================================== */}

          <div className="resume-content-grid">
            <ResumeSection
              title="Featured Projects"
              icon={<Layers size={20} />}
            >
              <div className="resume-column">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Technical Skills" icon={<Code2 size={20} />}>
              <div className="resume-column">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.title} {...group} />
                ))}
              </div>
            </ResumeSection>
          </div>

          {/* =====================================================
            EDUCATION + HIGHLIGHTS
            ===================================================== */}

          <div className="resume-content-grid compact">
            <ResumeSection
              title="Professional Highlights"
              icon={<Sparkles size={20} />}
            >
              <div className="resume-highlight-grid">
                {highlights.map((item) => (
                  <HighlightCard key={item.label} {...item} />
                ))}
              </div>
            </ResumeSection>

            <ResumeSection
              title="Education & Certifications"
              icon={<Award size={20} />}
            >
              <div className="resume-column">
                {education.map((item) => (
                  <EducationCard key={item.degree} {...item} />
                ))}

                {certifications.map((cert) => (
                  <CertificationCard key={cert.name} {...cert} />
                ))}
              </div>
            </ResumeSection>
          </div>

          {/* =====================================================
            CTA
            ===================================================== */}

          <section className="resume-cta">
            <div className="resume-hero-content">
              <div>
                <h2 className="resume-name">
                  Let's Build Exceptional Products
                </h2>

                <p>
                  Senior frontend engineering focused on scalable architecture,
                  AI-powered products, and exceptional user experiences.
                </p>
              </div>

              {/* <a href={`mailto:${resume.email}`} className="resume-cta-button">
                Contact Me
              </a> */}
              <SpecularButton
                // href={"/contact"}
                // target="_blank"
                onClick={() => navigate("/contact")}
                size="lg"
                radius={18}
                tint="#0f172a"
                tintOpacity={0.85}
                blur={8}
                textColor="#ffffff"
                lineColor="#2563eb"
                baseColor="#1e293b"
                // intensity={1.4}
                intensity={2}
                shineSize={8}
                shineFade={22}
                thickness={1.25}
                speed={0.25}
                followMouse
                // proximity={250}
                proximity={180}
                autoAnimate={false}
              >
                {/* <AiOutlineDownload /> */}
                <span>Contact Me</span>
              </SpecularButton>
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
}
