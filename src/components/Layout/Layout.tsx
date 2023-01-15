import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Footer, Header, SEO } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { socials } from "@/utils/constants/socials";
import useSiteMetadata from "@/utils/hooks/useSiteMetadata";

const queryClient = new QueryClient();

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SEO />
        <Header title={title} description={description} />
        {children}
        <Footer title={title} description={description} socials={socials} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Layout;
