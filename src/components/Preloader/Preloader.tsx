import React, { useEffect, useRef } from 'react'

export default function Preloader() {
  const preloader = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadPreloader()
    document.addEventListener("DOMContentLoaded", loadPreloader)
    window.addEventListener("load", loadPreloader);
    return () => {
      document.removeEventListener("DOMContentLoaded", loadPreloader)
      window.removeEventListener("load", loadPreloader);
    }
  }, [])
  

  function loadPreloader() {
     setTimeout(() => {
       preloader.current?.classList.add("loaded");
     }, 1000);
     setTimeout(() => {
       preloader.current?.remove();
     }, 2000);
  }

  return (
    <div id="preloader" ref={preloader}>
      <div className="line"></div>
    </div>
  );
}
