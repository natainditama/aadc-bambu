import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Meta } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { Video } from "@/types/videos";
import useSiteMetadata from "@/utils/hooks/useSiteMetadata";

export const Head: HeadFC = () => <Meta></Meta>;

const CHANNEL_ID = "UCVVQiuzOR_MlSOax9KPnuIA";
const API_KEY = process.env.GATSBY_YOUTUBE_API_KEY;
const BASE_URL = process.env.GATSBY_YOUTUBE_API_URL;

export default function HomePage() {
  const { description } = useSiteMetadata()

  const { status, data, error } = useQuery({
    queryKey: ["videos"],
    queryFn: async (): Promise<{ items: Array<Video> }> => {
      const data = await fetch(
        `${BASE_URL}search?part=snippet&part=id&channelId=${CHANNEL_ID}&maxResults=12&order=viewCount&type=video&videoDuration=medium&key=${API_KEY}`
      );
      return await data.json();
    },
  });

  return (
    <>
      <section
        id="hero"
        className="hero d-flex flex-column justify-content-center align-items-center"
        data-aos="fade"
        data-aos-delay="1500"
      >
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="fw-bold mb-3 lh-base">
                Temukan <span className="text-white">Konten Menarik</span> dan Nostalgia di YouTube AADC Bambu
              </h1>
              <p className="lh-base">{description}</p>
              <a href="http://"></a>
              <a
                href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-started"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="gallery">
        <div className="container">
          {status === "loading" ? (
            "Loading..."
          ) : error instanceof Error ? (
            <span>Error: {error.message}</span>
          ) : (
            <div className="row gy-4 justify-content-center">
              {data && data?.items.map((item) => {
                return (
                  <div className="col-xl-4 col-lg-4 col-md-6" key={item.id.videoId}>
                    <div className="gallery-item h-100">
                      <img
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                        loading="lazy"
                        className="img-fluid"
                      />
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
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
