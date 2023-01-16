import React from "react";
import { Typography, IconButton } from "@material-tailwind/react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { socials } from "@/utils/constants/socials";
import useSiteMetadata from "@/utils/hooks/useSiteMetadata";

export type FooterData = {
  allFile: Queries.FileConnection;
};

const Footer: React.FC = () => {
  const { title, description } = useSiteMetadata();
  const { allFile }: FooterData = useStaticQuery(graphql`
    query {
      allFile(
        filter: { extension: { eq: "png" }, name: { in: ["facebook", "tiktok", "instagram"] } }
      ) {
        edges {
          node {
            name
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  return (
    <footer className="relative pt-16 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">{description}</Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ name, url }, index: number) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                  <IconButton color="white" className="rounded-full">
                    <GatsbyImage
                      className="w-[45px]"
                      image={
                        allFile.edges[index].node.childImageSharp
                          ?.gatsbyImageData as IGatsbyImageData
                      }
                      alt={name}
                    />
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography variant="small" className="font-normal text-blue-gray-500">
              Copyright &copy; {new Date().getFullYear()} {title}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
