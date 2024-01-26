import useSiteMetadata from "@/hooks/useSiteMetadata";
import React from "react";

export function Footer() {
  const { title } = useSiteMetadata();

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright">
          Copyright &copy;{new Date().getFullYear()} {title?.replace(" ", "")}. All Rights Reserved.
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://bootstrapmade.com/" target="_blank" rel="noopener noreferrer">
            BootstrapMade
          </a>
        </div>
      </div>
    </footer>
  );
}
