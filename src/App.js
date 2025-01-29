import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
// import VideoPage from './pages/VideoPage';
import YouTubeEmbed from './pages/YouTubeEmbed'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/:videoId" element={<YouTubeEmbed />} />
      {/* <Route path="/video/:videoId" element={<YouTubeEmbed />} /> */}
        {/* <Route path="/video/:videoId" element={<VideoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './pages/Layout';
// import YoutubePlayer from './pages/YouTubeEmbed';
// import Home from './pages/Home';
// import './index.css';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/*" element={<YoutubePlayer />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import VideoPlayer from './pages/VideoPage';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Routes>
//           <Route path="/*" element={<VideoPlayer />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;