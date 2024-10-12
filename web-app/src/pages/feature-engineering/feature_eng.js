import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const FeatureEngineering = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Feature Engineering</h1>
        <p>Enhance your machine learning models by transforming and creating powerful features.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Feature Engineering</h2>
          <p>
            Learn the basics of feature engineering and how it can impact model performance.
          </p>
          <Link to="/categories/feature-engineering/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Handling Missing Values</h2>
          <p>
            Discover various techniques to handle missing data in your dataset.
          </p>
          <Link to="/categories/feature-engineering/missing-values" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>Encoding Categorical Variables</h2>
          <p>
            Learn methods to encode categorical data such as one-hot encoding and label encoding.
          </p>
          <Link to="/categories/feature-engineering/categorical-encoding" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Feature Scaling and Normalization</h2>
          <p>
            Understand how to scale and normalize features to improve model performance.
          </p>
          <Link to="/categories/feature-engineering/feature-scaling" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>Feature Transformation</h2>
          <p>
            Learn about log transformation, Box-Cox, and other transformations to stabilize variance.
          </p>
          <Link to="/categories/feature-engineering/feature-transformation" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>Feature Extraction</h2>
          <p>
            Understand feature extraction techniques such as PCA and LDA for dimensionality reduction.
          </p>
          <Link to="/categories/feature-engineering/feature-extraction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>Polynomial Features</h2>
          <p>
            Discover how to create polynomial features to capture non-linear relationships in data.
          </p>
          <Link to="/categories/feature-engineering/polynomial-features" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Feature Selection</h2>
          <p>
            Learn methods to select the most important features for building effective models.
          </p>
          <Link to="/categories/feature-engineering/feature-selection" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Interaction Features</h2>
          <p>
            Explore interaction features that capture relationships between different variables.
          </p>
          <Link to="/categories/feature-engineering/interaction-features" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">10</div>
          <h2>Domain Knowledge in Feature Engineering</h2>
          <p>
            Understand the role of domain knowledge in creating meaningful features.
          </p>
          <Link to="/categories/feature-engineering/domain-knowledge" className="start-reading-button">
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

export default FeatureEngineering;
