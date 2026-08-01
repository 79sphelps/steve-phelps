import React from "react";

import "./Section.css";


const Section = ({
  title,
  subtitle,
  icon,
  action,
  children,

  className = "",

  variant = "default",

  padded = true,
}) => {
  return (
    <section
      className={`
        page-section
        page-section-${variant}
        ${padded ? "page-section-padded" : ""}
        ${className}
      `}
    >

      {(title || subtitle || icon || action) && (
        <div className="page-section-header">

          <div className="page-section-heading">

            {icon && (
              <div className="page-section-icon">
                {icon}
              </div>
            )}


            <div>
              {title && (
                <h2 className="page-section-title">
                  {title}
                </h2>
              )}

              {subtitle && (
                <p className="page-section-subtitle">
                  {subtitle}
                </p>
              )}
            </div>

          </div>


          {action && (
            <div className="page-section-action">
              {action}
            </div>
          )}

        </div>
      )}


      <div className="page-section-content">
        {children}
      </div>

    </section>
  );
};


export default Section;