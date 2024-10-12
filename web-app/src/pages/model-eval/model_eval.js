import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const ModelEvaluation = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Model Evaluation</h1>
        <p>Assess and improve your models with effective evaluation techniques.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Model Evaluation</h2>
          <p>
            Learn the importance of evaluating models and the key concepts involved.
          </p>
          <Link to="/categories/model-evaluation/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Training, Validation, and Test Sets</h2>
          <p>
            Understand how to split your data into training, validation, and test sets.
          </p>
          <Link to="/categories/model-evaluation/data-splitting" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>Cross-Validation Techniques</h2>
          <p>
            Explore various cross-validation methods to assess model performance.
          </p>
          <Link to="/categories/model-evaluation/cross-validation" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Evaluation Metrics for Classification</h2>
          <p>
            Learn about accuracy, precision, recall, F1 score, and more for classification models.
          </p>
          <Link to="/categories/model-evaluation/classification-metrics" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>Evaluation Metrics for Regression</h2>
          <p>
            Discover metrics like MSE, RMSE, MAE, and R-squared for regression models.
          </p>
          <Link to="/categories/model-evaluation/regression-metrics" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>ROC Curve and AUC</h2>
          <p>
            Understand ROC curves and AUC for evaluating binary classifiers.
          </p>
          <Link to="/categories/model-evaluation/roc-auc" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>Confusion Matrix</h2>
          <p>
            Learn how to interpret confusion matrices and their role in model evaluation.
          </p>
          <Link to="/categories/model-evaluation/confusion-matrix" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Model Selection and Hyperparameter Tuning</h2>
          <p>
            Learn how to select the best model and tune hyperparameters effectively.
          </p>
          <Link to="/categories/model-evaluation/model-selection" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Bias-Variance Tradeoff</h2>
          <p>
            Explore the balance between bias and variance to improve model generalization.
          </p>
          <Link to="/categories/model-evaluation/bias-variance-tradeoff" className="start-reading-button">
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

export default ModelEvaluation;
