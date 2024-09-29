// src/pages/SequenceAnalysisPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './module_chapters.css';

const MLDSConceptsPage = () => {
  return (
    <div className="module-page">
      <h1>ML/DS Concepts</h1>
      <p> A solid foundation for anyone looking to understand key ML and DS concepts.</p>

      {/* Chapters Timeline */}
      <section className="timeline">
        <div className="timeline-event">
        <div className="number-circle">1</div>
          <div className="timeline-card">
            <h3>Foundational Maths</h3>
            <p>understand concepts of Statistics & Probability, Linear Algebra, Calculus for ML, Probability Distributions.</p>
            <Link to="/categories/ml-ds-concepts/foundational-maths">Read More</Link>
          </div>
        </div>
        <div className="timeline-event">
        <div className="number-circle">2</div>
          <div className="timeline-card">
            <h3>Supervised Learning</h3>
            <p>Explore key models like Linear Regression, Decision Trees, and Neural Networks.</p>
            <Link to="/categories/ml-ds-concepts/supervised-learning">Read More</Link>
          </div>
        </div>
        <div className="timeline-event">
        <div className="number-circle">3</div>
          <div className="timeline-card">
            <h3>Unsupervised Learning</h3>
            <p>Understand clustering, PCA, and autoencoders for pattern discovery.</p>
            <Link to="/categories/ml-ds-concepts/unsupervised-learning">Read More</Link>
          </div>
        </div>
        <div className="timeline-event">
        <div className="number-circle">4</div>
          <div className="timeline-card">
            <h3>Model Evaluation</h3>
            <p>Learn how to measure model performance with accuracy, ROC, and cross-validation.</p>
            <Link to="/categories/ml-ds-concepts/model-evaluation">Read More</Link>
          </div>
        </div>

        <div className="timeline-event">
        <div className="number-circle">5</div>
          <div className="timeline-card">
            <h3>Optimization Techniques</h3>
            <p>Improve your models with gradient descent and advanced optimizers.</p>
            <Link to="/categories/ml-ds-concepts/optimization-technique">Read More</Link>
          </div>
        </div>

        <div className="timeline-event">
        <div className="number-circle">6</div>
          <div className="timeline-card">
            <h3>Ensemble Methods</h3>
            <p>Master Random Forests, Boosting, and other ensemble techniques.</p>
            <Link to="/categories/ml-ds-concepts/ensemble-methods">Read More</Link>
          </div>
        </div>

        <div className="timeline-event">
        <div className="number-circle">7</div>
          <div className="timeline-card">
            <h3>Feature Engineering</h3>
            <p>Discover how to clean and prepare data with scaling, encoding, and more.</p>
            <Link to="/categories/ml-ds-concepts/feature-engineering">Read More</Link>
          </div>
        </div>


        <div className="timeline-event">
        <div className="number-circle">8</div>
          <div className="timeline-card">
            <h3>Dimensionality Reduction</h3>
            <p>Simplify data with PCA, LDA, and other dimensionality reduction methods.</p>
            <Link to="/categories/ml-ds-concepts/dimensionality-reduction">Read More</Link>
          </div>
        </div>

        <div className="timeline-event">
        <div className="number-circle">9</div>
          <div className="timeline-card">
            <h3>Time Series Analysis</h3>
            <p>Get started with time series forecasting using ARIMA and seasonal trends.</p>
            <Link to="/categories/ml-ds-concepts/time-series">Read More</Link>
          </div>
        </div>


        <div className="timeline-event">
        <div className="number-circle">10</div>
          <div className="timeline-card">
            <h3>Model Deployment</h3>
            <p>Learn how to save, load, and deploy machine learning models in production.</p>
            <Link to="/categories/ml-ds-concepts/model-deployment">Read More</Link>
          </div>
        </div>

        <div className="timeline-event">
        <div className="number-circle">11</div>
          <div className="timeline-card">
            <h3>Ethics and Interpretability</h3>
            <p>Understand model decisions and reduce bias with explainability tools.</p>
            <Link to="/categories/ml-ds-concepts/ethics-interpretability">Read More</Link>
          </div>
        </div>

      </section>
    </div>
  );
};

export default MLDSConceptsPage;
