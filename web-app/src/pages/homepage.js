import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master ML, AI, and Data Science</h1>
          <p>Your ultimate resource for learning, exploring, and mastering ML, AI, and Data Science concepts.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
        <div className="category-card">
            <h3>ML/DS Concepts</h3>
            <p>Learn about tradition Machine Learning and Data Science algorithms and model training.</p>
            <Link to="/categories/ml-ds-concepts">Explore</Link>
          </div>
          <div className="category-card">
            <h3>Sequence Analysis</h3>
            <p>Dive deep into sequence data, time series analysis, and more.</p>
            <Link to="/categories/sequence-analysis">Explore</Link>
          </div>
          <div className="category-card">
            <h3>Image Analysis</h3>
            <p>Learn about computer vision, image processing techniques, and algorithms.</p>
            <Link to="/categories/image-analysis">Explore</Link>
          </div>
          <div className="category-card">
            <h3>ML System Designs</h3>
            <p>Explore how to design and scale machine learning systems for production.</p>
            <Link to="/categories/ml-system-designs">Explore</Link>
          </div>
          <div className="category-card">
            <h3>Projects</h3>
            <p>Explore some real life use cases and projects. </p>
            <Link to="/categories/projects">Explore</Link>
          </div>
          <div className="category-card">
            <h3>Data Engineering</h3>
            <p>Master the concepts of Data Engineering - Data Loading, Pipeline, etc.</p>
            <Link to="/categories/data-engineering">Explore</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Deep Dive into AI?</h2>
        <Link to="/categories">
          <button className="cta-button">Start Learning</button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;



// const HomePage = () => {
//   return (
//     <div className="homepage">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Master System Design</h1>
//           <p>Your one-stop resource to learn, explore, and master system design principles.</p>
//           <Link to="/topics">
//             <button className="cta-button">Start Learning</button>
//           </Link>
//         </div>
//       </section>

//       {/* Featured Topics */}
//       <section className="featured-topics">
//         <h2>Featured Topics</h2>
//         <div className="topics-grid">
//           <div className="topic-card">
//             <h3>Databases</h3>
//             <p>Learn about different database systems and best practices for choosing the right one.</p>
//             <Link to="/topics/databases">Explore</Link>
//           </div>
//           <div className="topic-card">
//             <h3>Load Balancers</h3>
//             <p>Understand how load balancers distribute traffic and ensure high availability.</p>
//             <Link to="/topics/load-balancers">Explore</Link>
//           </div>
//           <div className="topic-card">
//             <h3>API Gateways</h3>
//             <p>Discover how API gateways manage API traffic, security, and scaling.</p>
//             <Link to="/topics/api-gateways">Explore</Link>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="how-it-works">
//         <h2>How It Works</h2>
//         <div className="steps-vertical">
//           <div className="step-box">
//             <div className="step-icon">1</div>
//             <div className="step-content">
//               <h3>Choose a Topic</h3>
//               <p>Select from a wide range of system design principles to explore and learn.</p>
//             </div>
//           </div>
//           <div className="step-box">
//             <div className="step-icon">2</div>
//             <div className="step-content">
//               <h3>Learn and Understand</h3>
//               <p>Read through detailed explanations, diagrams, and case studies.</p>
//             </div>
//           </div>
//           <div className="step-box">
//             <div className="step-icon">3</div>
//             <div className="step-content">
//               <h3>Test Your Knowledge</h3>
//               <p>Take quizzes and apply your knowledge through interactive assessments.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="cta-section">
//         <h2>Ready to Master System Design?</h2>
//         <Link to="/quiz">
//           <button className="cta-button">Take a Quiz</button>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default HomePage;