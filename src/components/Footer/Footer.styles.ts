import styled from "styled-components";

const FooterBar = styled.footer`
  background-color: #1c1f2a;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  align-items: center;
  & > div {
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 1000px) {
    & {
      padding-left: 120px;
      flex-direction: row;
    }
    & > div {
      margin-bottom: 0;
    }
  }
`;

const FooterCopyright = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #f7f7f6;
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & * + * {
    margin-left: 10px;
  }
  @media only screen and (min-width: 1000px) {
    & > .logo {
      transform: scale(1.5);
    }
  }
`;

export { FooterBar, FooterSocial, FooterCopyright };
