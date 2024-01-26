import React, { PropsWithChildren, useEffect } from "react";
import { Footer, Header, Preloader, ScrollTop } from "@/components";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ReactLenis from "@studio-freight/react-lenis";

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
      <ReactLenis root>
        <main id="main">{children}</main>
      </ReactLenis>
      <Footer />
      <ScrollTop />
    </>
  );
}
