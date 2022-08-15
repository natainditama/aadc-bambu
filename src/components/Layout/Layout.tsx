import React, { ReactNode } from "react";
import Header from "../Header/Header";
import GlobalStyle from "./GlobalStyle.styles";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default Layout;
