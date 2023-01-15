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
    <Card className="relative group rounded-md mt-8">
      <CardHeader className="relative">{image}</CardHeader>
      <CardBody>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary hover:underline"
        >
          <Typography variant="paragraph">{title}</Typography>
        </a>
      </CardBody>
      <CardFooter divider className="flex items-center py-3">
        <Typography variant="small" className="opacity-80">
          {publishDate.toLocaleDateString(undefined, options)}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default VideoItem;
