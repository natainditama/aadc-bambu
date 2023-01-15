import React from "react";
import type { PageProps } from "gatsby";
import { VideoItem, SEO } from "@/components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Video } from "@/types/videos";

const CHANNEL_ID = "UCVVQiuzOR_MlSOax9KPnuIA";

const HomePage: React.FC<PageProps> = () => {
  const { status, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<{ items: Array<Video> }> => {
      const { data } = await axios.get(
        `${process.env.YOUTUBE_API_URL}search?part=snippet&part=id&channelId=${CHANNEL_ID}&order=viewCount&maxResults=12&key=${process.env.YOUTUBE_API_KEY}`
      );
      return data;
    },
  });

  return (
    <>
      <SEO title="Home Page" />
      <section className="videos-wrap">
        <div className="container mx-auto">
          {status === "loading" ? (
            "Loading..."
          ) : error instanceof Error ? (
            <span>Error: {error.message}</span>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {data?.items.map((item) => {
                return (
                  <VideoItem
                    key={item.id.videoId}
                    title={item.snippet.title}
                    publishedAt={item.snippet.publishedAt}
                    videoId={item.id.videoId}
                    image={
                      <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    }
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
