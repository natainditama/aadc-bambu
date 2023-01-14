import React, { useRef } from "react";
import { Typography } from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";
import { useScrollLock, useWindowScroll } from "@mantine/hooks";

enum StateHeader {
  Open,
  Close,
  Toggle,
}

const Header: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setScrollLocked] = useScrollLock(true);
  const [, scrollTo] = useWindowScroll();

  function handleHeader(state: StateHeader): void {
    if (containerRef.current != null) {
      if (state == StateHeader.Open) {
        containerRef.current.classList.add("open");
        setScrollLocked(false);
      } else if (state == StateHeader.Close) {
        containerRef.current.classList.remove("open");
        setScrollLocked(true);
      } else {
        containerRef.current.classList.toggle("open");
        setScrollLocked((locked) => !locked);
      }
      scrollTo({ y: 0 });
    }
  }

  return (
    <header className="intro" ref={containerRef}>
      <StaticImage
        src="https://tympanus.net/Tutorials/SlidingHeaderLayout/img/header03.jpg"
        alt="Hero Image"
        layout="fullWidth"
        placeholder="blurred"
        className="intro__image"
      />
      <div className="intro__content">
        <div className="container mx-auto">
          <Typography as="h1" variant="h1" className="mb-2">
            AADC Bambu
          </Typography>
          <div className="flex lg:grid grid-cols-2 items-center justify-between space-x-6">
            <div>
              <Typography as="p" variant="paragraph" className="mb-2">
                Terimakasih kepada Tuhan Yang Maha Esa atas anugerah yang luar biasa
              </Typography>
              <div className="flex space-x-4 items-center lg:space-x-6">
                <button
                  className="font-medium text-primary hover:underline"
                  onClick={() => handleHeader(StateHeader.Close)}
                >
                  Home
                </button>
                <button
                  className="font-medium text-primary hover:underline"
                  onClick={() => handleHeader(StateHeader.Open)}
                >
                  Videos
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button className="trigger" onClick={() => handleHeader(StateHeader.Toggle)}>
                <svg width="100%" height="100%" viewBox="0 0 60 60" preserveAspectRatio="none">
                  <g className="icon icon--grid">
                    <rect x="32.5" y="5.5" width="22" height="22" />
                    <rect x="4.5" y="5.5" width="22" height="22" />
                    <rect x="32.5" y="33.5" width="22" height="22" />
                    <rect x="4.5" y="33.5" width="22" height="22" />
                  </g>
                  <g className="icon icon--cross">
                    <line x1="4.5" y1="55.5" x2="54.953" y2="5.046" />
                    <line x1="54.953" y1="55.5" x2="4.5" y2="5.047" />
                  </g>
                </svg>
                <span>View content</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
