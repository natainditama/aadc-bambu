import React, { PropsWithChildren, useEffect } from "react";
import { Footer, Header, Preloader, ScrollTop } from "@/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";

const queryClient = new QueryClient();

export default function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });  
    AOS.refresh();  
  }, [])
  
  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Header />
      <main id="main" data-aos="fade" data-aos-delay="1500">
        {children}
      </main>
      <Footer />
      <ScrollTop />
    </QueryClientProvider>
  );
}
