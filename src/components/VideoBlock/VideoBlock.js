import "./VideoBlock.css";
import React, { useState, useRef } from "react";

export default function VideoBlock() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="academy-video">
      <div className="container">
        <div className="academy-video__inner">
          <video
            ref={videoRef}
            className="academy-video__img"
            src="./assets/video/video-preview.mp4"
            poster="./assets/video.png"
            onClick={handleVideoClick}
            loop
          />
          {!isPlaying && (
            <button className="academy-video__btn" onClick={handleVideoClick}>
              <img src="./assets/play.svg" alt="Play" width={50} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
