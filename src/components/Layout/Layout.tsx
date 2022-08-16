import React, { ReactNode } from "react";
import Header from "../Header/Header";
import GlobalStyle from "./GlobalStyle.styles";
import Footer from "../Footer/Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
