import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export function Preloader() {
  const preloader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadPreloader();
    document.addEventListener("DOMContentLoaded", loadPreloader);
    window.addEventListener("load", loadPreloader);
    return () => {
      document.removeEventListener("DOMContentLoaded", loadPreloader);
      window.removeEventListener("load", loadPreloader);
    };
  }, []);

  function loadPreloader() {
    preloader.current?.classList.add("loaded");
    gsap
      .to("#preloader", {
        force3D: true,
        yPercent: -101,
        duration: 1,
        delay: 0.6,
        ease: "power2.inOut",
      })
      .then(() => {
        preloader.current?.remove();
      });
  }

  return (
    <div id="preloader" ref={preloader}>
      <div className="line"></div>
    </div>
  );
}
