import React from 'react'
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
    const { videoId } = useParams();

  return (
    <>
    <iframe
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
    </>
  )
}

export default VideoPlayer