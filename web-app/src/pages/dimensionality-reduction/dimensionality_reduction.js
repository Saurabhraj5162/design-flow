import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const DimensionalityReduction = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Dimensionality Reduction</h1>
        <p>Reduce the complexity of high-dimensional datasets and enhance model efficiency.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Dimensionality Reduction</h2>
          <p>
            Learn the basics of dimensionality reduction and why it's important in machine learning.
          </p>
          <Link to="/categories/dimensionality-reduction/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Principal Component Analysis (PCA)</h2>
          <p>
            Understand PCA, a popular technique for reducing dimensionality while retaining variance.
          </p>
          <Link to="/categories/dimensionality-reduction/principal-component-analysis" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>Linear Discriminant Analysis (LDA)</h2>
          <p>
            Learn about LDA, a technique that reduces dimensions by maximizing class separability.
          </p>
          <Link to="/categories/dimensionality-reduction/linear-discriminant-analysis" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>t-Distributed Stochastic Neighbor Embedding (t-SNE)</h2>
          <p>
            Explore t-SNE, a powerful method for visualizing high-dimensional data in lower dimensions.
          </p>
          <Link to="/categories/dimensionality-reduction/tsne" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>Autoencoders for Dimensionality Reduction</h2>
          <p>
            Learn how autoencoders, a type of neural network, are used to compress data into lower dimensions.
          </p>
          <Link to="/categories/dimensionality-reduction/autoencoders" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>Factor Analysis</h2>
          <p>
            Understand factor analysis and how it is used for modeling observed variables.
          </p>
          <Link to="/categories/dimensionality-reduction/factor-analysis" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>Kernel PCA</h2>
          <p>
            Discover how kernel PCA extends traditional PCA to non-linear relationships in data.
          </p>
          <Link to="/categories/dimensionality-reduction/kernel-pca" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Independent Component Analysis (ICA)</h2>
          <p>
            Learn about ICA, a method for separating multivariate signals into additive components.
          </p>
          <Link to="/categories/dimensionality-reduction/independent-component-analysis" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Multidimensional Scaling (MDS)</h2>
          <p>
            Explore MDS, a technique for visualizing the level of similarity between data points.
          </p>
          <Link to="/categories/dimensionality-reduction/multidimensional-scaling" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">10</div>
          <h2>Applications of Dimensionality Reduction</h2>
          <p>
            Understand the applications of dimensionality reduction in real-world problems.
          </p>
          <Link to="/categories/dimensionality-reduction/applications" className="start-reading-button">
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

export default DimensionalityReduction;
