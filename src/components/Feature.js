import React from "react";
import "../css/Feature.css";

export function Feature() {
  return (
    <div className="feature">
        <div className="feature-title">FEATURES</div>
        <div className="feature-info">
          <div className="feature-info-item">
            <div className="feature-info-detail">Accurate transcription in over 90 languages</div>
            <img className="feature-info-img" src="../feature-1.png"></img>

          </div>
          <div className="feature-info-item">
            <div className="feature-info-detail">Live output & Progress bar</div>
            <img className="feature-info-img" src="../feature-2.png"></img>
          </div>
          <div className="feature-info-item">
            <div className="feature-info-detail">Send fcpxml directly to Final Cut Pro X</div>
            <img className="feature-info-img" src="../feature-3.png"></img>
          </div>
          <div className="feature-info-item">
            <div className="feature-info-detail">Support downloading .srt files for seamless editing in Adobe Premiere Pro, DaVinci Resolve & Sony Vegas</div>
            <img className="feature-info-img" src="../feature-4.png"></img>
          </div>
        </div>
    </div>
  );
}

export default Feature;
