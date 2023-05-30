import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright">
          &copy;Copyright <strong>{new Date().getFullYear()}</strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by
          <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">
            BootstrapMade
          </a>
        </div>
      </div>
    </footer>
  );
}
