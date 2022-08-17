import React from "react";
import { FooterBar, FooterSocial, FooterCopyright } from "./Footer.styles";
import socialItems from "../../utils/constants/socialItems.constants";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Container from "../Container/Container";

const Footer = () => {
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

  return (
    <FooterBar>
      <Container>
        <FooterCopyright>Copyright © 2022. All rights reserved.</FooterCopyright>
        <FooterSocial>
          {data.allFile.edges.map(({ node: { name, childImageSharp } }: any, index: number) => {
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
        </FooterSocial>
      </Container>
    </FooterBar>
  );
};

export default Footer;
