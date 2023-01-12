import type { GatsbyConfig } from "gatsby";

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
];

const devPlugins = [
  "gatsby-plugin-mantine",
  {
    resolve: "gatsby-plugin-alias-imports",
    options: {
      alias: {
        "@src": "src",
        "@components": "src/components",
        "@assets": "src/assets",
        "@pages": "src/pages",
        "@types": "src/types",
        "@utils": "src/utils",
      },
      extensions: ["js", "ts", "tsx", "jsx"],
    },
  },
];

const imagePlugins = ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"];

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [...corePlugins, ...imagePlugins, ...devPlugins],
};

export default config;
