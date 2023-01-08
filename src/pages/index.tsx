import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className="header-logo"></div>
      <article className="title-section">
        <h1>
          We are launching <span className="soon">soon!</span>
        </h1>
        <p className="title-info">Subscribe and get notified</p>
      </article>
      <article className="input-section">
        <a href="https://www.youtube.com/@aadcbambu" target="_blank" rel="noopener noreferrer">
          <svg
            role="img"
            viewBox="0 0 24 24"
            style={{ fill: "#FF0000", height: "5rem" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube</title>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </article>
      <article>
        <div className="statistics-img">
          <img
            src="https://catherineisonline.github.io/ping-coming-soon-page-frontendmentor/images/illustration-dashboard.png"
            alt="Statistics Image"
          />
        </div>
      </article>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
