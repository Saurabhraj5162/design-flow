import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const OptimizationTechniques = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Optimization Techniques</h1>
        <p>Learn various methods to optimize machine learning models and algorithms.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Optimization</h2>
          <p>
            Understand the importance of optimization in machine learning and an overview of techniques.
          </p>
          <Link to="/categories/optimization-techniques/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Gradient Descent</h2>
          <p>
            Learn about gradient descent, the backbone of many optimization algorithms.
          </p>
          <Link to="/categories/optimization-techniques/gradient-descent" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>Stochastic Gradient Descent (SGD)</h2>
          <p>
            Explore SGD and how it differs from batch gradient descent.
          </p>
          <Link to="/categories/optimization-techniques/stochastic-gradient-descent" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Momentum-Based Methods</h2>
          <p>
            Understand how momentum can accelerate gradient descent and improve convergence.
          </p>
          <Link to="/categories/optimization-techniques/momentum-methods" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>Adaptive Learning Rate Methods</h2>
          <p>
            Learn about AdaGrad, RMSProp, and Adam optimizers that adapt learning rates.
          </p>
          <Link to="/categories/optimization-techniques/adaptive-learning-rate-methods" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>Second-Order Methods</h2>
          <p>
            Discover optimization methods that use second-order derivatives, like Newton's Method.
          </p>
          <Link to="/categories/optimization-techniques/second-order-methods" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>Regularization Techniques</h2>
          <p>
            Explore methods to prevent overfitting by adding regularization to the loss function.
          </p>
          <Link to="/categories/optimization-techniques/regularization" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Hyperparameter Tuning</h2>
          <p>
            Learn strategies for selecting optimal hyperparameters for your models.
          </p>
          <Link to="/categories/optimization-techniques/hyperparameter-tuning" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Bayesian Optimization</h2>
          <p>
            Understand Bayesian methods for optimizing black-box functions.
          </p>
          <Link to="/categories/optimization-techniques/bayesian-optimization" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">10</div>
          <h2>Optimization in Deep Learning</h2>
          <p>
            Explore optimization challenges and techniques specific to deep neural networks.
          </p>
          <Link to="/categories/optimization-techniques/deep-learning-optimization" className="start-reading-button">
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

export default OptimizationTechniques;
