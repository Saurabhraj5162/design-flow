import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const UnsupervisedLearning = () => {
  return (
    <div className="unsupervised-container">
      <header className="header">
        <h1>Unsupervised Learning</h1>
        <p>Discover patterns and structures in unlabeled data using unsupervised algorithms.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Unsupervised Learning</h2>
          <p>
            Learn the fundamentals of unsupervised learning and how it differs from supervised learning.
          </p>
          <Link to="/categories/unsupervised-learning/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Clustering</h2>
          <p>
            Explore clustering algorithms that group data points based on similarity.
          </p>
          <Link to="/categories/unsupervised-learning/clustering" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>K-Means Clustering</h2>
          <p>
            Understand K-Means, a popular algorithm for partitioning data into clusters.
          </p>
          <Link to="/categories/unsupervised-learning/k-means-clustering" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Hierarchical Clustering</h2>
          <p>
            Learn about hierarchical clustering methods that build nested clusters.
          </p>
          <Link to="/categories/unsupervised-learning/hierarchical-clustering" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>Dimensionality Reduction</h2>
          <p>
            Discover techniques for reducing the number of features while preserving important information.
          </p>
          <Link to="/categories/unsupervised-learning/dimensionality-reduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>



        <div className="card">
          <div className="card-number">7</div>
          <h2>Association Rule Learning</h2>
          <p>
            Learn about discovering interesting relationships between variables in large datasets.
          </p>
          <Link to="/categories/unsupervised-learning/association-rule-learning" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Anomaly Detection</h2>
          <p>
            Explore methods for identifying unusual data points that deviate from the norm.
          </p>
          <Link to="/categories/unsupervised-learning/anomaly-detection" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Self-Organizing Maps</h2>
          <p>
            Discover how self-organizing maps are used for visualizing high-dimensional data.
          </p>
          <Link to="/categories/unsupervised-learning/self-organizing-maps" className="start-reading-button">
            Start Reading
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UnsupervisedLearning;
