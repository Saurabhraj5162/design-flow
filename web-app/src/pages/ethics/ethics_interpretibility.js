import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const EthicsAndInterpretability = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Ethics and Interpretability</h1>
        <p>Understand the ethical considerations and interpretability challenges in machine learning.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Ethics in Machine Learning</h2>
          <p>
            Learn about the ethical challenges associated with the use of machine learning models.
          </p>
          <Link to="/categories/ethics-interpretability/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Bias in Machine Learning Models</h2>
          <p>
            Understand how bias can affect machine learning models and how to mitigate it.
          </p>
          <Link to="/categories/ethics-interpretability/bias" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>Fairness in Machine Learning</h2>
          <p>
            Explore fairness techniques to ensure that machine learning models are equitable across groups.
          </p>
          <Link to="/categories/ethics-interpretability/fairness" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Privacy Concerns</h2>
          <p>
            Learn about privacy issues in machine learning and techniques for preserving data privacy.
          </p>
          <Link to="/categories/ethics-interpretability/privacy" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>Interpretability vs. Accuracy</h2>
          <p>
            Discover the trade-offs between interpretability and accuracy in machine learning models.
          </p>
          <Link to="/categories/ethics-interpretability/interpretability-vs-accuracy" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>Model Explainability Techniques</h2>
          <p>
            Explore methods like LIME and SHAP to make machine learning models more interpretable.
          </p>
          <Link to="/categories/ethics-interpretability/explainability-techniques" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>Transparency in Machine Learning</h2>
          <p>
            Understand the importance of transparency in building trust with machine learning models.
          </p>
          <Link to="/categories/ethics-interpretability/transparency" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Accountability in Machine Learning</h2>
          <p>
            Learn how accountability can be ensured in the deployment and use of machine learning models.
          </p>
          <Link to="/categories/ethics-interpretability/accountability" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Black Box Models and Challenges</h2>
          <p>
            Discover the challenges of black box models and approaches to make them more interpretable.
          </p>
          <Link to="/categories/ethics-interpretability/black-box-challenges" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">10</div>
          <h2>Case Studies on Ethical Issues</h2>
          <p>
            Explore real-world case studies where ethical issues in machine learning had significant consequences.
          </p>
          <Link to="/categories/ethics-interpretability/case-studies" className="start-reading-button">
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

export default EthicsAndInterpretability;
