import useSiteMetadata from "@/utils/hooks/useSiteMetadata";
import React from "react";

export default function Footer() {
  const { title } = useSiteMetadata();

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright">
          Copyright &copy; {new Date().getFullYear()}{" "}{title}. All Rights Reserved.
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
