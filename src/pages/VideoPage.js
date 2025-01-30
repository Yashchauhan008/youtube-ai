import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import VideoPlayer from "../components/VideoPlayer";
import Summry from "../components/Summry";
import Chat from "../components/Chat";

const YoutubePlayer = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <PanelGroup direction={isMobile ? "vertical" : "horizontal"} style={{ height: "100vh" }}>
      <Panel minSize={40} maxSize={60} defaultSize={60} style={{ backgroundColor: "lightblue", height: "100%" }}>
        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
          <VideoPlayer/>
        </div>
        <div>
            <Summry/>
        </div>
      </Panel>
      <PanelResizeHandle style={{ width: isMobile ? "100%" : "5px", height: isMobile ? "5px" : "100%", background: "gray", cursor: isMobile ? "ns-resize" : "ew-resize" }} />
      <Panel style={{ backgroundColor: "lightcoral", height: "100%" }}>
        <div>
            <Chat/>
        </div>
      </Panel>
    </PanelGroup>
  );
};

export default YoutubePlayer;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const YoutubePlayer = () => {
//   const { videoId } = useParams();
  
//   const [leftWidth, setLeftWidth] = useState(500);
//   const [isResizing, setIsResizing] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (isResizing) {
//         setLeftWidth(event.clientX);
//       }
//     };

//     const handleMouseUp = () => {
//       setIsResizing(false);
//     };

//     if (isResizing) {
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleMouseUp);
//     } else {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     }

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isResizing]);


//   return (
//     <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
//     <div style={{ width: `${leftWidth}px`, height: "100vh", backgroundColor: "lightblue" }}>
//     <div className="video-container" style={{width:"100px"}}>
//            {videoId ? (
//              <iframe
//                src={`https://www.youtube.com/embed/${videoId}`}
//                title="YouTube Video Player"
//                frameBorder="0"
//                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                allowFullScreen
//              />
//            ) : (
//              <p>Error: Invalid video ID</p>
//            )}
//          </div>
//     </div>
//     <div
//       style={{ width: "5px", background: "gray", cursor: "ew-resize" }}
//       onMouseDown={() => setIsResizing(true)}
//     ></div>
//     <div style={{ flexGrow: 1, height: "100vh", backgroundColor: "lightcoral" }}>hell boy</div>
//   </div>
//   );
// };

// export default YoutubePlayer;


// import { useState, useEffect } from "react";

// const YoutubePlayer = () => {
//   const [leftWidth, setLeftWidth] = useState(300);
//   const [isResizing, setIsResizing] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//         if (!isResizing) return;
//         const newWidth = Math.max(600, Math.min(event.clientX, 900));
//         setLeftWidth(newWidth);
//       };

//     const handleMouseUp = () => {
//       setIsResizing(false);
//     };

//     if (isResizing) {
//       document.addEventListener("mousemove", handleMouseMove);
//       document.addEventListener("mouseup", handleMouseUp);
//     } else {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     }

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isResizing]);

//   return (
//     <div style={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
//       <div style={{ width: `${leftWidth}px`, height: "100vh", backgroundColor: "lightblue" }}>
//         <iframe
//           style={{ width: "100%", height: "100%" }}
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//           title="YouTube Video Player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//       <div
//         style={{ width: "5px", background: "gray", cursor: "ew-resize" }}
//         onMouseDown={() => setIsResizing(true)}
//       ></div>
//       <div style={{ flexGrow: 3, height: "100vh", backgroundColor: "lightcoral" }}></div>
//     </div>
//   );
// };

// export default YoutubePlayer;




// import React from 'react';
// import { useParams } from 'react-router-dom';

// const YoutubePlayer = () => {
//   const { videoId } = useParams(); 
//   return (
//     <div className="card">
//       <div className="card-header">
//         <h2>YouTube Video Player by yash</h2>
//       </div>
//       <div className="card-content">
//         <div className="video-container">
//           {videoId ? (
//             <iframe
//               src={`https://www.youtube.com/embed/${videoId}`}
//               title="YouTube Video Player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             />
//           ) : (
//             <p>Error: Invalid video ID</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YoutubePlayer;
