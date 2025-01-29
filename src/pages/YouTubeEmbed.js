// import React, { useEffect, useState } from 'react';
// import { useLocation, Navigate, useParams } from 'react-router-dom';

// const YoutubePlayer = () => {
//   const videoId = useParams()

//   return (
//     <div className="card">
//       <div className="card-header">
//         <h2>YouTube Video Player</h2>
//       </div>
//       <div className="card-content">
//         <div className="video-container">
//           <iframe
//             src={`https://www.youtube.com/embed/${videoId}`}
//             title="YouTube Video Player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YoutubePlayer;
import React from 'react';
import { useParams } from 'react-router-dom';

const YoutubePlayer = () => {
  const { videoId } = useParams(); // Extract videoId correctly

  return (
    <div className="card">
      <div className="card-header">
        <h2>YouTube Video Player by yash</h2>
      </div>
      <div className="card-content">
        <div className="video-container">
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p>Error: Invalid video ID</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubePlayer;
