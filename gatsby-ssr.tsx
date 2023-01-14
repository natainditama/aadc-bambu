import { Layout } from "./src/components";
import * as React from "react";
import type { GatsbySSR } from "gatsby";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
