import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FooterBar, FooterSocial, FooterCopyright } from "./Footer.styles";
import socialItems from "../../utils/constants/socialItems.constants";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(true);

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { extension: { eq: "png" }, name: { in: ["facebook", "tiktok", "instagram"] } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              id
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  `);

  useEffect(function () {
    let handleResize: () => void;
    if (typeof window !== "undefined") {
      handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("DOMContentLoaded", handleResize);
      window.addEventListener("resize", handleResize);
    }
    return function () {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("DOMContentLoaded", handleResize);
      }
    };
  }, []);

  return (
    <FooterBar>
      <FooterCopyright>Copyright © 2022. All rights reserved.</FooterCopyright>
      <FooterSocial>
        {isMobile &&
          data.allFile.edges.map(({ node: { name, childImageSharp } }: any, index: number) => {
            return (
              <a
                href={socialItems[index].url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <GatsbyImage
                  alt={name}
                  image={childImageSharp.gatsbyImageData}
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            );
          })}
        <Link to="/" className="logo">
          <StaticImage
            src="https://yt3.ggpht.com/ytc/AMLnZu_e5SkKL2szVns3FcibCCrvIG7gFMH6HTat7-oy=s88-c-k-c0x00ffffff-no-rj"
            style={{ width: "25px", height: "25px", borderRadius: "50%" }}
            placeholder="tracedSVG"
            alt="AADC Bambu"
          />
        </Link>
      </FooterSocial>
    </FooterBar>
  );
};

export default Footer;
