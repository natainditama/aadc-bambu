import styled from "styled-components";

const ContainerStyle = styled.div`
  & {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 640px) {
    & {
      max-width: 640px;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  @media (min-width: 768px) {
    & {
      max-width: 768px;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  @media (min-width: 1024px) {
    & {
      max-width: 1024px;
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  @media (min-width: 1280px) {
    & {
      max-width: 1280px;
      padding-left: 5rem;
      padding-right: 5rem;
    }
  }

  @media (min-width: 1536px) {
    & {
      max-width: 1536px;
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }
`;

export { ContainerStyle };
