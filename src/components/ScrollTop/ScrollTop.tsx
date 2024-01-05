import React, { useEffect, useRef } from "react";

export function ScrollTop() {
  const scrollTop = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    return () => {
      window.removeEventListener("load", togglescrollTop);
      document.removeEventListener("scroll", togglescrollTop);
    };
  }, []);

  function togglescrollTop() {
    if (scrollTop.current) {
      window.scrollY > 100 ? scrollTop.current?.classList.add("active") : scrollTop.current?.classList.remove("active");
    }
  }

  function handleScrollToTop() {
    if (scrollTop.current) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <a
      href="#top"
      ref={scrollTop}
      onClick={handleScrollToTop}
      className="scroll-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
