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
            image
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export type UseSiteMetaDataReturnType = ReturnType<typeof useSiteMetadata>;

export default useSiteMetadata;
