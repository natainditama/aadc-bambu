import { Layout } from "./src/components";
import * as React from "react";
import type { GatsbySSR } from "gatsby";
import meta from "./gatsby-meta";

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: meta.lang });
};
