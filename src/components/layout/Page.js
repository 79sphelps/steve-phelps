import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

import BlurText from "../ui/ReactBitsComponents/BlurText";

// import "./Page.css";
import "./PageV2.css";

const Page = ({
  title,
  subtitle,
  children,
  pageClassName = "",
  containerClassName = "",
  headerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  headerAction,
}) => {
  return (
    <section className={`page ${pageClassName}`}>
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <Container className={`page-container ${containerClassName}`}>
          {(title || subtitle || headerAction) && (
            <header className={`page-header ${headerClassName}`}>
              {title && (
                <div className="page-heading-wrapper">
                  <BlurText
                    text={title}
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className={`page-title ${titleClassName}`}
                  />
                </div>
              )}

              {subtitle && (
                <p className={`page-subtitle ${subtitleClassName}`}>
                  {subtitle}
                </p>
              )}

              {headerAction && (
                <div className="page-header-action">{headerAction}</div>
              )}
            </header>
          )}

          {children}
        </Container>
      </motion.div>
    </section>
  );
};

export default Page;
