type VideoThumbnail = {
  url: string;
  width: number;
  height: number;
};

type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      default: VideoThumbnail;
      medium: VideoThumbnail;
      high: VideoThumbnail;
    };
  };
};

export { Video, VideoThumbnail };
