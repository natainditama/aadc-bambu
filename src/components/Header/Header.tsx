import React from "react";
import { Navbar, NavLogo, NavList, NavListItem, NavSocial, NavSocialLink } from "./Header.styles";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import socialItems from "../../utils/constants/socialItems.constants";

const Header = () => {
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
    <Navbar>
      <NavLogo>
        <Link to="/">
          <StaticImage
            src="https://yt3.ggpht.com/ytc/AMLnZu_e5SkKL2szVns3FcibCCrvIG7gFMH6HTat7-oy=s88-c-k-c0x00ffffff-no-rj"
            style={{ borderRadius: "50%", margin: "8px", width: "58px" }}
            alt="AADC Bambu"
          />
        </Link>
      </NavLogo>
      <NavList>
        <NavListItem>
          <Link to="/videos">videos</Link>
        </NavListItem>
      </NavList>
      <NavSocial>
        {data.allFile.edges.map(({ node: { name, childImageSharp } }: any, index: number) => {
          return (
            <NavSocialLink
              href={socialItems[index].url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <GatsbyImage alt={name} image={childImageSharp.gatsbyImageData} />
            </NavSocialLink>
          );
        })}
      </NavSocial>
    </Navbar>
  );
};

export default Header;
