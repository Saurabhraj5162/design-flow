import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to DesignFlow</h1>
      <Link to="/diagram">
        <button className="btn">Start a New Design</button>
      </Link>
    </div>
  );
}

export default HomePage;