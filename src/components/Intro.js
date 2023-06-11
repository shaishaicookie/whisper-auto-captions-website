import React from "react";
import "../css/Intro.css";

export function Intro() {
  return (
    <div className="intro">
      <div className="intro-contents">
        <div className="intro-title">
          Ultrafast & accurate AI-powered subtitle generation for Final Cut Pro
        </div>

        <div className="intro-details">
          <div className="intro-detail-1">
            Powered by Open AI's whisper model
          </div>
          <div className="intro-detail-2">
            Say goodbye to manual transcription with our lightning-fast subtitle
            tool{" "}
          </div>
          <div className="intro-china-download">
          Download from China, <a href="https://vu3mopq3x8.feishu.cn/docx/Go9IdrSkpochcoxpgHfcl7nhn2d" target="_blank" style={{ textDecoration: 'underline'}}>Click here</a>
          </div>
        </div>

        <div className="intro-download">
          <div className="intro-apple-download">
            <a
              href="https://drive.google.com/file/d/1qaNZb7LKtxKjMkoMdEoE6xOks4n36fNR/view?usp=sharing"
              target="_blank"
            >
              Download for Apple Chip
            </a>
          </div>
          <div className="intro-intel-download">
            <a
              href="https://drive.google.com/file/d/1Sshl-sc_QW1WnSBd8H3Dvm8nHedwyeiW/view?usp=sharing"
              target="_blank"
            >
              Download for Intel Chip
            </a>
          </div>
        </div>

      </div>
      <div className="intro-app-icon">
        <img src="../website-icon.png" />
      </div>
    </div>
  );
}

export default Intro;
