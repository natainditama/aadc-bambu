import { useStaticQuery, graphql } from "gatsby";

interface SiteMetaData {
  site: {
    siteMetadata: Queries.SiteSiteMetadata ;
  };
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetaData>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            titleTemplate
            author
            siteUrl
            lang
            image: file(absolutePath: { glob: "**/src/images/og-default.png" }) {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 1200)
              }
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export type UseSiteMetaDataReturnType = ReturnType<typeof useSiteMetadata>;

export default useSiteMetadata;
