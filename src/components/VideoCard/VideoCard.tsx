import React from "react";
import { AnimateIn } from "../AnimateIn/AnimateIn";

type VideoCardProps = {
  title: string;
  imageUrl: string;
  videoId: string;
};

export function VideoCard({ title, imageUrl, videoId }: VideoCardProps) {
  return (
    <>
      <AnimateIn>
        <div className="gallery-item h-100">
          <img src={imageUrl} alt={title} loading="lazy" className="img-fluid" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href={`https://www.youtube.com/watch?v=${videoId}`} title={title} target="_blank" rel="noopener noreferrer" className="glightbox preview-link">
              <i className="bi bi-arrows-angle-expand"></i>
            </a>
          </div>
        </div>
      </AnimateIn>
    </>
  );
}
