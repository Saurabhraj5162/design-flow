import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master System Design</h1>
          <p>Your one-stop resource to learn, explore, and master system design principles.</p>
          <Link to="/topics">
            <button className="cta-button">Start Learning</button>
          </Link>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="featured-topics">
        <h2>Featured Topics</h2>
        <div className="topics-grid">
          <div className="topic-card">
            <h3>Databases</h3>
            <p>Learn about different database systems and best practices for choosing the right one.</p>
            <Link to="/topics/databases">Explore</Link>
          </div>
          <div className="topic-card">
            <h3>Load Balancers</h3>
            <p>Understand how load balancers distribute traffic and ensure high availability.</p>
            <Link to="/topics/load-balancers">Explore</Link>
          </div>
          <div className="topic-card">
            <h3>API Gateways</h3>
            <p>Discover how API gateways manage API traffic, security, and scaling.</p>
            <Link to="/topics/api-gateways">Explore</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Choose a Topic</h3>
            <p>Select from a wide range of system design principles to explore and learn.</p>
          </div>
          <div className="step">
            <h3>2. Learn and Understand</h3>
            <p>Read through detailed explanations, diagrams, and case studies.</p>
          </div>
          <div className="step">
            <h3>3. Test Your Knowledge</h3>
            <p>Take quizzes and apply your knowledge through interactive assessments.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Master System Design?</h2>
        <Link to="/quiz">
          <button className="cta-button">Take a Quiz</button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
