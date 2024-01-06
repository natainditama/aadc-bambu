import type { GatsbyConfig } from "gatsby";
import meta from "./gatsby-meta";
import * as dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const corePlugins = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "src",
      path: `${__dirname}/src`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
];

const devPlugins = [
  {
    resolve: "gatsby-plugin-alias-imports",
    options: {
      alias: {
        "@/*": "src/",
        "@/components": "src/components/",
        "@/lib": "src/lib/",
        "@/images": "src/images/",
        "@/pages": "src/pages/",
        "@/types": "src/types/",
        "@/utils": "src/utils/",
      },
      extensions: ["js", "ts", "tsx", "jsx"],
    },
  },
];

const imagePlugins = ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"];

const searchPlugins = [
  "gatsby-plugin-sitemap",
  "gatsby-plugin-robots-txt",
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [process.env.GA_TRACKING_ID],
    },
  },
];

const pwaPlugins = [
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: meta.title,
      short_name: meta.title,
      description: meta.description,
      lang: meta.lang,
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      display: "standalone",
      icon: meta.favicon,
      icon_options: {
        purpose: "any maskable",
      },
    },
  },
  "gatsby-plugin-offline",
];

const config: GatsbyConfig = {
  siteMetadata: meta,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [...corePlugins, ...imagePlugins, ...devPlugins, ...searchPlugins, ...pwaPlugins],
};

export default config;
