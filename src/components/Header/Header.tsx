import React from "react";
import { Navbar, NavLogo, NavList, NavListItem, NavSocial, NavSocialLink } from "./Header.styles";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
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
        <NavSocialLink
          href="https://www.instagram.com/ayunibambu0404/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage src="../../images/instagram.png" alt="Instagram" />
        </NavSocialLink>
        <NavSocialLink
          href="https://www.facebook.com/igusti.murniati.1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage src="../../images/facebook.png" alt="Facebook" />
        </NavSocialLink>
        <NavSocialLink
          href="https://www.tiktok.com/@aadcbambu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StaticImage src="../../images/tiktok.png" alt="TikTok" />
        </NavSocialLink>
      </NavSocial>
    </Navbar>
  );
};

export default Header;
