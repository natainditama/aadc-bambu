import React, { useEffect, useState } from "react";
import type { HeadFC } from "gatsby";
import { Meta, VideoCard } from "@/components";
import { Video } from "@/types/videos";
import useSiteMetadata from "@/utils/hooks/useSiteMetadata";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { AnimateIn } from "@/components";
import useSWR from "swr";
import apiClient from "@/lib/api";
import config from "@/lib/config";

export const Head: HeadFC = () => <Meta />;

const getVideos = async (url: string, queryParams = "") => {
  return apiClient
    .get(
      `${url}?part=snippet&part=id&channelId=${config.YOUTUBE_CHANNEL_ID}&maxResults=12&order=viewCount&type=video&videoDuration=medium${queryParams}`,
    )
    .then((res) => res.data);
};

export default function HomePage() {
  const { description } = useSiteMetadata();
  const [queryParams, setQueryParams] = useState(`&key=${config.YOUTUBE_API_KEY}`);

  const { isLoading, data, error } = useSWR(
    [`/search`, queryParams],
    ([url, queryParams]) => getVideos(url, queryParams),
    {
      onErrorRetry: (error, _key, _config, revalidate, { retryCount }) => {
        if (error.request.status === 404) return;
        if (error.request.status === 403) return;

        // Only retry up to 10 times.
        if (retryCount >= 10) return;

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    },
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
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border opacity-50" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <AnimateIn delay={0.8}>
                  <div className="alert alert-danger py-4" role="alert">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                      <svg className="bi" height={20} width={20} role="img" aria-label="Danger:">
                        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </symbol>{" "}
                      </svg>
                      <h4 className="alert-heading mb-0 fw-bold">Oops! Something went wrong error!</h4>
                    </div>
                    <hr className="w-50 mx-auto" />
                    <p className="">{error?.message}</p>
                    <button
                      type="button"
                      disabled={isLoading}
                      className="btn btn-danger"
                      onClick={() => {
                        setQueryParams(`&key=${config.YOUTUBE_API_KEY_FALLBACK}`);
                      }}
                    >
                      Try again
                    </button>
                  </div>
                </AnimateIn>
              </div>
            </div>
          ) : (
            <div className="row gy-4 justify-content-center">
              {data?.items
                ? data?.items.map((item: Video) => {
                    return (
                      <div className="col-xl-4 col-lg-4 col-md-6" key={item.id.videoId}>
                        <VideoCard
                          title={item.snippet.title}
                          imageUrl={item.snippet.thumbnails.medium.url}
                          videoId={item.id.videoId}
                        />
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
