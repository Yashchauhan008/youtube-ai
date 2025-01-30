import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/:videoId" element={<VideoPage/>} />
      <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;