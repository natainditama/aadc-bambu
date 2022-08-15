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
`;

const NavList = styled.ul`
  list-style: none;
  text-align: right;
  padding-right: 30px;
  padding-top: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  & * + * {
    margin-left: 10px;
  }
  @media only screen and (min-width: 1000px) {
    & {
      padding-top: 60px;
      padding-right: 0;
      flex-direction: column;
    }
    & * + * {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

const NavListItem = styled.li`
  color: #141720;
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 1.5px;
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
      font-size: 1rem;
      letter-spacing: 2px;
      line-height: 1.5rem;
      writing-mode: vertical-lr;
    }
  }
`;

const NavSocial = styled.div`
  display: none;
  position: absolute;
  bottom: 1rem;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
