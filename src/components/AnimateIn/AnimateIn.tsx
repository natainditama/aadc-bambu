import React, { useRef, useEffect, PropsWithChildren } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimateInProps = {
  delay?: number;
};

export function AnimateIn({ children, delay = 0 }: PropsWithChildren<AnimateInProps>) {
  const divRef = useRef(null);

  useEffect(() => {
    const ref = divRef.current;

    gsap.set(ref, {
      autoAlpha: 0,
      y: 50,
    });

    // animates when entering viewport
    gsap.to(ref, {
      scrollTrigger: {
        trigger: ref,
      },
      delay,
      duration: 1,
      autoAlpha: 1,
      y: 0,
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={`animate-in`} ref={divRef}>
      {children}
    </div>
  );
}
