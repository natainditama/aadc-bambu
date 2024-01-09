import React, { useEffect } from "react";
import { graphql, type HeadFC } from "gatsby";
import { Meta, VideoCard, AnimateIn } from "@/components";
import useSiteMetadata from "@/hooks/useSiteMetadata";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { config } from "@/lib/config";

export const Head: HeadFC = () => <Meta />;

export default function HomePage({ data }: { data: { allContentfulVideo: Queries.ContentfulVideoConnection } }) {
  const videos = data.allContentfulVideo.nodes;
  const { description } = useSiteMetadata();

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
                  <div className="title">dan Nostalgia</div>
                </div>{" "}
                <div className="title-wrapper d-inline-block">
                  <div className="title">di</div>
                </div>{" "}
                <div className="title-wrapper d-inline-block">
                  <div className="title">YouTube AADC Bambu</div>
                </div>{" "}
              </h1>
              <AnimateIn delay={1.1}>
                <p className="lh-base">{description}</p>
                <a
                  href={`https://www.youtube.com/channel/${config.YOUTUBE_CHANNEL_ID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-get-started"
                >
                  Subscribe
                </a>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            {videos
              ? videos.map((item: Queries.ContentfulVideo) => {
                  return (
                    <div className="col-xl-4 col-lg-4 col-md-6" key={item.videoId}>
                      <VideoCard
                        title={`${item.title}`}
                        imageUrl={`${item.imageUrl}`.replace("mqdefault", "hqdefault")}
                        videoId={`${item.videoId}`}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
}

export const query = graphql`
  query HomePageQuery {
    allContentfulVideo {
      nodes {
        videoId
        title
        imageUrl
      }
    }
  }
`;
