import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "@fontsource/inter";
import "./src/styles/photofolio.css";
import "./src/styles/global.css";
import { Layout } from "./src/components";
import * as React from "react";
import type { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
