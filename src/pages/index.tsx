import React, { useEffect } from "react";
import type { HeadFC } from "gatsby";
import { Meta } from "@/components";
import { Video } from "@/types/videos";
import useSiteMetadata from "@/utils/hooks/useSiteMetadata";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { AnimateIn } from "@/components";
import useFetch from "@/utils/hooks/useFetch";

export const Head: HeadFC = () => <Meta />;

const CHANNEL_ID = "UCVVQiuzOR_MlSOax9KPnuIA";
const API_KEY = process.env.GATSBY_YOUTUBE_API_KEY;
const BASE_URL = process.env.GATSBY_YOUTUBE_API_URL;

export default function HomePage() {
  const { description } = useSiteMetadata();

  const { isLoading, data, error } = useFetch<{ items: Video[] }>(
    `${BASE_URL}search?part=snippet&part=id&channelId=${CHANNEL_ID}&maxResults=12&order=viewCount&type=video&videoDuration=medium&key=${API_KEY}`
  );

  useEffect(() => {
    const split = SplitType.create(document.querySelectorAll(".title"));

    gsap.set(".title", {
      opacity: "1",
    });

    gsap.from(split.lines, {
      y: "100%",
      stagger: 0.1,
      duration: 1.2,
      ease: "power3",
      delay: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="fw-bold mb-3 lh-base">
                <div className="title-wrapper d-inline-block">
                  <div className="title">
                    Temukan <span className="text-white">Konten Menarik</span>
                  </div>
                </div>{" "}
                <div className="title-wrapper d-inline-block">
                  <div className="title">dan Nostalgia di</div>
                </div>{" "}
                <div className="title-wrapper d-inline-block">
                  <div className="title">YouTube AADC Bambu</div>
                </div>{" "}
              </h1>
              <AnimateIn delay={1.1}>
                <p className="lh-base">{description}</p>
                <a href={`https://www.youtube.com/channel/${CHANNEL_ID}`} target="_blank" rel="noopener noreferrer" className="btn-get-started">
                  Subscribe
                </a>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="gallery">
        <div className="container">
          {isLoading ? (
            "Loading..."
          ) : error instanceof Error ? (
            <span>Error: {error.message}</span>
          ) : (
            <div className="row gy-4 justify-content-center">
              {data?.items
                ? data?.items.map((item, index) => {
                    return (
                      <div className="col-xl-4 col-lg-4 col-md-6" key={item.id.videoId}>
                        <AnimateIn delay={index <= 2 ? 0.8 : 0}>
                          <div className="gallery-item h-100">
                            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} loading="lazy" className="img-fluid" />
                            <div className="gallery-links d-flex align-items-center justify-content-center">
                              <a
                                href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                                title={item.snippet.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glightbox preview-link"
                              >
                                <i className="bi bi-arrows-angle-expand"></i>
                              </a>
                            </div>
                          </div>
                        </AnimateIn>
                      </div>
                    );
                  })
                : null}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
