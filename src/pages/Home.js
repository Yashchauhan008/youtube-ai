// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useLocation } from "react-router-dom";

import { useState } from "react";



// const Home = () => {
//     const location = useLocation();
//     const navigate = useNavigate()
//     const url = "https://www.youtube.com/embed/LVxkmNPLGlQ?si=I386sPsOcH3rvl-S"

//     // <iframe width="560" height="315" src="https://www.youtube.com/embed/LVxkmNPLGlQ?si=I386sPsOcH3rvl-S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//   return (
//     <>
//     <h2>home</h2>

//     <button onClick={()=>{navigate(`/video/${url}`)}}>video</button>
//     </>
//   )
// }

// export default Home


// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const youtubeUrl = "https://www.youtube.com/watch?v=LVxkmNPLGlQ";
//   const encodedUrl = encodeURIComponent(youtubeUrl); // Encode URL

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Link to={`/video/${encodedUrl}`}>Watch Video</Link>
//     </div>
//   );
// };

// export default Home;

 
// export default function Home() {
//     const [url, setUrl] = useState("");
//     const extractVideoId = (youtubeUrl) => {
//       const match = youtubeUrl.match(/[?&]v=([^&]+)/);
//       return match ? match[1] : "";
//     };
  
//     return (
//       <div className="flex flex-col items-center p-6">
//         <h1 className="text-2xl font-bold mb-4">YouTube Video Embed</h1>
//         <input
//           type="text"
//           placeholder="Paste YouTube URL here"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           className="border p-2 w-80 rounded mb-2"
//         />
//         <a
//           href={`/video/${extractVideoId(url)}`}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Play Video
//         </a>
//       </div>
//     );
//   }


import React from 'react';

const Home = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Welcome to YouTube Player</h2>
      </div>
      <div className="card-content">
        <p>
          To watch a video, append a YouTube URL after the domain.
          <br />
          Example: http://localhost:3000/https://www.youtube.com/watch?v=j2cw2BMnQ9E
        </p>
      </div>
    </div>
  );
};

export default Home;