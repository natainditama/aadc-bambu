import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Footer, Header, SEO } from "@components";
import { socials } from "@utils/constants/socials";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useSiteMetadata from "@utils/hooks/useSiteMetadata";

const queryClient = new QueryClient();

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { title, description }  = useSiteMetadata()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SEO />
        <Header />
        {children}
        <Footer
          title={title as string}
          description={description as string}
          socials={socials}
          menus={[
            {
              name: "useful links",
              items: [
                { name: "About Us", path: "https://www.creative-tim.com/presentation" },
                { name: "Blog", path: "https://www.creative-tim.com/blog" },
                {
                  name: "Github",
                  path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
                },
                {
                  name: "Free Products",
                  path: "https://www.creative-tim.com/templates/free?ref=mtk",
                },
              ],
            },
          ]}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Layout;
