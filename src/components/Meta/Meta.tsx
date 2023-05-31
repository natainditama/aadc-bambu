import React from "react";
import useSiteMetadata from "@/utils/hooks/useSiteMetadata";
import defaultOpenGraphImage from "@/images/og-default.png";

const DEFAULT_LANG = "en";

type Meta = JSX.IntrinsicElements["meta"][];

interface SEOProps  {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export default function Meta({ title, description, pathname, children }: SEOProps)  {
   const { title: defaultTitle, titleTemplate,  description: defaultDescription, image, siteUrl, lang } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <html lang={`${lang}`} />
      <title>
        {seo.title} - {titleTemplate}
      </title>
      <meta name="robots" content="noindex" />
      <meta name="title" content={`${seo.title} - ${titleTemplate}`} />
      <meta name="description" content={`${seo.description}`} />
      <link rel="canonical" href={`${seo.url}`} />

      <meta property="og:locale" content={`${lang}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${seo.url}`} />
      <meta property="og:title" content={`${seo.title} - ${titleTemplate}`} />
      <meta property="og:description" content={`${seo.description}`} />
      <meta property="og:image" content={`${seo.image}`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${seo.url}`} />
      <meta property="twitter:title" content={`${seo.title} - ${titleTemplate}`} />
      <meta property="twitter:description" content={`${seo.description}`} />
      <meta name="twitter:creator" content="@natainditama" />
      <meta name="twitter:site" content="@aadc-bambu" />
      <meta property="twitter:image" content={`${seo.image}`} />
      {children}
    </>
  );
}

