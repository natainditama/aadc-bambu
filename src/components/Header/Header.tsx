import { socialLinks } from "@/utils/constants/site";
import React from "react";
import { Link } from "gatsby";
import useSiteMetadata from "@/utils/hooks/useSiteMetadata";

export default function Header() {
  const { title } = useSiteMetadata();

  return (
    <header id="header" className="header d-flex align-items-center fixed-top py-4">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <h2 className="h4 fw-bold mb-0">{title}</h2>
        </a>
        <div className="header-social-links">
          {socialLinks.map((link, index) => (
            <a href={link.url} className={`text-body ${link.name}`} key={index}>
              <i className={`bi bi-${link.name}`}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
