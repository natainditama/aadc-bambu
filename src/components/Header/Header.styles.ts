import styled from "styled-components";

const Navbar = styled.header`
  position: relative;
  background: #f7f7f6;
  box-shadow: 5px 2px 20px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  & > * {
    width: 100%;
  }
  @media only screen and (min-width: 1000px) {
    & {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      flex-direction: column;
      width: 60px;
      transition: 0.5s;
    }
  }
`;

const NavLogo = styled.div`
  display: block;
  transform: translate3d(20px, 40px, 0);
  @media only screen and (min-width: 1000px) {
    margin-bottom: 20px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding-left: 0;
  text-align: right;
  padding-right: 2rem;
  line-height: 2.5;
  margin: 10px;
  @media only screen and (min-width: 1000px) {
    & {
      margin: 0;
      transform: rotate(90deg);
      transform-origin: 0px 150% 0px;
    }
  }
`;

const NavListItem = styled.li`
  font-size: 1.4rem;
  color: #141720;
  letter-spacing: 1.45px;
  text-transform: uppercase;
  & a {
    color: #141720;
    font-weight: 500;
  }
  & a:hover {
    text-decoration: none;
    color: #5d6bcf;
  }
  @media only screen and (min-width: 1000px) {
    & {
      font-size: 0.8rem;
      letter-spacing: 2px;
    }
    & a {
      font-weight: 600;
    }
  }
`;

const NavSocial = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1.5rem;
  font-size: 1rem;
  line-height: 0.8;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * + * {
    // margin-top: 6px;
  }
  @media only screen and (min-width: 1000px) {
    & {
      display: flex;
    }
  }
`;

const NavSocialLink = styled.a`
  color: #141720;
  display: block;
  width: 50px;
  @keyframes shake {
    0%,
    20%,
    100% {
      transform: translateX(0);
    }
    40%,
    80% {
      transform: translateX(-2px);
    }
    60% {
      transform: translateX(2px);
    }
  }
  &:hover {
    animation: shake 0.8s ease-in-out;
  }
`;

export { Navbar, NavLogo, NavList, NavListItem, NavSocial, NavSocialLink };
