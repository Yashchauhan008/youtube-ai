import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <Link to="/home">Go to Home</Link>
    </div>
  );
};

export default Landing;
