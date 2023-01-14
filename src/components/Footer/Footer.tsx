import React from "react";
import type { Socials } from "@utils/constants/socials";
import { Typography, IconButton } from "@material-tailwind/react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

export type FooterProps = {
  title: string;
  description: string ;
  socials: Socials[];
  menus: { name: string; items: { name: string; path: string }[] }[];
};

export type FooterData = {
  allFile: Queries.FileConnection;
};

const Footer: React.FC<FooterProps> = ({ title, description, socials, menus }: FooterProps) => {
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
                      image={allFile.edges[index].node.childImageSharp?.gatsbyImageData as IGatsbyImageData}
                      alt={name}
                    />
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          {/* <div className="mx-auto mt-8 grid w-max lg:grid-cols-2 lg:mt-0">
            <div></div>
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography variant="small" className="font-normal text-blue-gray-500">
              {`Copyright &copy; ${new Date().getFullYear()} ${title}`}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
