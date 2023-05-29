import "./src/styles/global.css";
import "@fontsource/lexend";
import { Layout } from "./src/components";
import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";


export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
