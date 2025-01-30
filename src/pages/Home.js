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