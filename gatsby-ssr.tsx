import meta from "./gatsby-meta";

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: meta.lang });
};
