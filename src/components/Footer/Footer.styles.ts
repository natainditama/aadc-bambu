import styled from "styled-components";

const FooterBar = styled.footer`
  background-color: #1c1f2a;
  padding: 1.2rem 0;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 1024px) {
    & > div {
      flex-direction: row;
    }
  }
`;

const FooterCopyright = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #f7f7f6;
  & {
    margin-top: 5px;
  }
  @media screen and (min-width: 1024px) {
    & {
      margin-top: 0;
    }
  }
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & * + * {
    margin-left: 10px;
  }
`;

export { FooterBar, FooterSocial, FooterCopyright };
