import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const EnsembleMethods = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Ensemble Methods</h1>
        <p>Improve model performance by combining multiple models in innovative ways.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Ensemble Methods</h2>
          <p>
            Learn the basics of ensemble methods and how combining models can improve accuracy.
          </p>
          <Link to="/categories/ensemble-methods/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Bagging</h2>
          <p>
            Understand how bagging reduces variance by training multiple models on bootstrapped samples.
          </p>
          <Link to="/categories/ensemble-methods/bagging" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>Random Forests</h2>
          <p>
            Learn about random forests, a popular bagging technique that uses multiple decision trees.
          </p>
          <Link to="/categories/ensemble-methods/random-forests" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Boosting</h2>
          <p>
            Discover boosting methods that build strong learners by combining weak ones iteratively.
          </p>
          <Link to="/categories/ensemble-methods/boosting" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>AdaBoost</h2>
          <p>
            Learn about AdaBoost, an adaptive boosting algorithm that focuses on misclassified instances.
          </p>
          <Link to="/categories/ensemble-methods/adaboost" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>Gradient Boosting</h2>
          <p>
            Understand gradient boosting and how it builds models by optimizing a loss function.
          </p>
          <Link to="/categories/ensemble-methods/gradient-boosting" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>XGBoost</h2>
          <p>
            Explore XGBoost, a powerful gradient boosting library known for speed and performance.
          </p>
          <Link to="/categories/ensemble-methods/xgboost" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Stacking</h2>
          <p>
            Learn about stacking, an ensemble method that combines multiple base models using a meta-learner.
          </p>
          <Link to="/categories/ensemble-methods/stacking" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Voting Classifier</h2>
          <p>
            Discover voting classifiers that combine predictions from multiple models for improved accuracy.
          </p>
          <Link to="/categories/ensemble-methods/voting-classifier" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">10</div>
          <h2>Bagging vs. Boosting</h2>
          <p>
            Compare bagging and boosting techniques and understand their differences.
          </p>
          <Link to="/categories/ensemble-methods/bagging-vs-boosting" className="start-reading-button">
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

export default EnsembleMethods;
