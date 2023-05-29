import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

export type VideoItemProps = {
  title: string;
  publishedAt: string;
  image: React.ReactNode;
  videoId: string;
};

const VideoItem: React.FC<VideoItemProps> = ({ title, image, publishedAt, videoId }: VideoItemProps) => {
  const publishDate: Date = new Date(publishedAt);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  
  return (
    <>
      Card
    </>
  );
};

export default VideoItem;
