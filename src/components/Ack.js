import React from "react";
import "../css/Ack.css";

export function Ack() {
  return (
    <div className="ack">
      <div className="ack-title">ACKNOWLEDGEMENT</div>
      <div className="ack-content">
        Special thanks to{" "}
        <a href="https://github.com/ggerganov">ggerganov</a>, the author of{" "}
        <a href="https://github.com/ggerganov/whisper.cpp">whisper.cpp</a>, for his
        work that has improved the transcription speed of the whisper model on
        Macs without GPUs. The speed improvement is 10-20 times faster than the
        native Python version of the whisper model.
      </div>
    </div>
  );
}


export default Ack;