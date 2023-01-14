import "./src/styles/global.css";
import "@fontsource/lexend";
import { Layout } from "./src/components";
import * as React from "react";
import type { GatsbyBrowser } from "gatsby";

// @ts-ignore
export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  // @ts-ignore
  return <Layout>{element}</Layout>;
};
