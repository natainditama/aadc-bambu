import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { Footer, Header, SEO } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useSiteMetadata from "@/utils/hooks/useSiteMetadata";

const queryClient = new QueryClient();

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SEO />
        <Header  />
        {children}
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Layout;
