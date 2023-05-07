// import React from "react";
// import "../css/NavBar.css";

// export function NavBar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-title">Whisper Auto Captions</div>
//       <div className="navbar-contents">
//         <div className="navbar-download">Download</div>
//         <div className="navbar-github">
//           <a
//             href="https://github.com/shaishaicookie/fcpx-auto-captions"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;



import React from "react";
import "../css/NavBar.css";

export function NavBar() {

  const handleDownloadClick = () => {
    const introDownload = document.querySelector('.intro-download');
    introDownload.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className="navbar">
      <div className="navbar-title">Whisper Auto Captions</div>
      <div className="navbar-contents">
        <div className="navbar-download" onClick={handleDownloadClick}>Download</div>
        <div className="navbar-github">
          <a
            href="https://github.com/shaishaicookie/fcpx-auto-captions"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

