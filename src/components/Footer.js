import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/shaishaicookie"
          target="_blank"
          rel="noopener noreferrer"
        >
          © Developed by shaishaicookie
        </a>
      </div>
      <div className="contact">
        Contact:{" "}
        <a href="mailto:sherrywang042@gmail.com">sherrywang042@gmail.com</a>
      </div>
    </div>
  );
}

export default Footer;
