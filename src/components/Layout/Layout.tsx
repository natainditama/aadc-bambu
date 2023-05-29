import React, { PropsWithChildren } from "react";
import { Footer, Header, Meta } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Layout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
        <Header  />
        {children}
        <Footer />
    </QueryClientProvider>
  );
};

