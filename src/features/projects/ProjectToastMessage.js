import React, { useEffect, useRef } from "react";

// import "./ProjectToastMessage.css";
import "./ProjectToastMessageV2.css";

const ProjectToastMessage = ({ message, duration = 6000, onClose }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      onClose?.();
    }, duration);

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [duration, onClose]);

  return (
    <div
      className="project-toast"
      role="status"
      style={{
        "--toast-duration": `${duration}ms`,
      }}
    >
      <div className="project-toast-progress" />

      <div className="project-toast-icon">✨</div>

      <div className="project-toast-content">
        <div className="project-toast-title">Featured Projects</div>

        <div className="project-toast-message">{message}</div>
      </div>

      <button
        className="project-toast-close"
        onClick={onClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export default ProjectToastMessage;
