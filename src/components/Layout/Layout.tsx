import React, { PropsWithChildren, useEffect } from "react";
import { Footer, Header, Preloader, ScrollTop } from "@/components";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <ScrollTop />
    </>
  );
}
