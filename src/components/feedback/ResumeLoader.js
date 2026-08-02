import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

// import "./ResumeLoader.css";
import "./ResumeLoaderV2.css";

const ResumeLoader = ({ progress = 0 }) => {
  return (
    <div className="resume-loader">
      <div className="resume-loader-orb">
        <AiOutlineFilePdf />
      </div>

      <h3>Preparing Resume</h3>

      <p>Loading your document...</p>

      <div className="resume-progress">
        <div
          className="resume-progress-bar"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <span className="resume-progress-text">{progress}%</span>
    </div>
  );
};

export default ResumeLoader;
