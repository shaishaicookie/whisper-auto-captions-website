import React from "react";
import "../css/Ack.css";

export function Ack() {
  return (
    <div className="ack">
      <div className="ack-title">ACKNOWLEDGEMENT</div>
      <div className="ack-content">
        Special thanks to{" "}
        <a href="https://github.com/ggerganov" style={{ textDecoration: 'underline'}}>ggerganov</a>, the author of{" "}
        <a href="https://github.com/ggerganov/whisper.cpp" style={{ textDecoration: 'underline' }}>whisper.cpp</a>, for his
        work that has improved the transcription speed of the whisper model on
        Macs without GPUs. The speed improvement is <a href="https://blog.castopod.org/install-whisper-cpp-on-your-mac-in-5mn-and-transcribe-all-your-podcasts-for-free/" style={{ textDecoration: 'underline' }}>5-45</a> times faster than the
        native Python version of the whisper model.
      </div>
    </div>
  );
}


export default Ack;