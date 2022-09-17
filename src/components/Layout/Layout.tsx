import React, { ReactNode, useCallback } from "react";
import Header from "../Header/Header";
import GlobalStyle from "./GlobalStyle.styles";
import Footer from "../Footer/Footer";
import Particles from "react-particles";
import { loadFull, Engine } from "tsparticles";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Header />
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
      <Particles
        id="tsparticles"
        className="bg-particles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: ["#6ECDDD", "#36BB93", "#7D43AE", "#E31565", "#EBA91F"] },
            shape: { type: "circle", stroke: { width: 0, color: "#111820" } },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 0.1, opacity_min: 0, sync: false },
            },
            size: { value: 10, random: true },
            line_linked: { enable: false },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: { push: { particles_nb: 3 } },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default Layout;
