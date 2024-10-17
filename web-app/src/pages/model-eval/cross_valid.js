import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const CrossValidationTechniques = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Cross-Validation Techniques</h1>
          <p>Exploring Methods to Assess Model Performance</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Cross-Validation</h2>
            <p>
              Cross-validation is a statistical method used to estimate the performance of machine learning models. It involves partitioning the data into subsets, training the model on some subsets, and validating it on others. This helps in assessing how the results of a model will generalize to an independent dataset.
            </p>
          </section>

          {/* K-Fold Cross-Validation */}
          <section>
            <h2>K-Fold Cross-Validation</h2>
            <p>
              In <strong>K-Fold Cross-Validation</strong>, the dataset is divided into <MathJax inline>{'\\( K \\)'}</MathJax> equal parts or folds. The model is trained and validated <MathJax inline>{'\\( K \\)'}</MathJax> times, each time using a different fold as the validation set and the remaining folds as the training set.
            </p>
            <img src="/images/k_fold_cv.png" alt="K-Fold Cross-Validation" className="distribution-image" />
            <p className="image-source">Figure: Illustration of K-Fold Cross-Validation.</p>
          </section>

          {/* Stratified K-Fold Cross-Validation */}
          <section>
            <h2>Stratified K-Fold Cross-Validation</h2>
            <p>
              <strong>Stratified K-Fold Cross-Validation</strong> ensures that each fold is a good representative of the whole dataset by preserving the percentage of samples for each class. This is especially important for imbalanced datasets.
            </p>
          </section>

          {/* Leave-One-Out Cross-Validation */}
          <section>
            <h2>Leave-One-Out Cross-Validation (LOOCV)</h2>
            <p>
              In <strong>Leave-One-Out Cross-Validation</strong>, each sample in the dataset is used once as the validation data while the remaining samples form the training data. This is equivalent to K-Fold Cross-Validation with <MathJax inline>{'\\( K = n \\)'}</MathJax>, where <MathJax inline>{'\\( n \\)'}</MathJax> is the number of observations.
            </p>
          </section>

          {/* Leave-P-Out Cross-Validation */}
          <section>
            <h2>Leave-P-Out Cross-Validation</h2>
            <p>
              In <strong>Leave-P-Out Cross-Validation</strong>, <MathJax inline>{'\\( P \\)'}</MathJax> data points are left out for validation, and the model is trained on the remaining data. This process is repeated for all possible combinations. Due to its computational intensity, it's rarely used for large datasets.
            </p>
          </section>

          {/* Holdout Method */}
          <section>
            <h2>Holdout Method</h2>
            <p>
              The <strong>Holdout Method</strong> involves splitting the dataset into a single training set and a single validation set. The model is trained on the training set and evaluated on the validation set. While simple, it can result in high variance in performance estimates.
            </p>
          </section>

          {/* Time Series Cross-Validation */}
          <section>
            <h2>Time Series Cross-Validation</h2>
            <p>
              For time-dependent data, traditional cross-validation methods are not suitable. <strong>Time Series Cross-Validation</strong> respects the temporal ordering by using earlier data to predict later data. One common method is forward-chaining:
            </p>
            <ul>
              <li>First fold: Train on data[1], test on data[2]</li>
              <li>Second fold: Train on data[1,2], test on data[3]</li>
              <li>And so on...</li>
            </ul>
          </section>

          {/* Nested Cross-Validation */}
          <section>
            <h2>Nested Cross-Validation</h2>
            <p>
              <strong>Nested Cross-Validation</strong> is used for hyperparameter tuning and model selection while providing an unbiased estimate of the model's generalization performance. It involves two loops:
            </p>
            <ul>
              <li>Outer loop: Estimates the generalization error.</li>
              <li>Inner loop: Performs hyperparameter tuning.</li>
            </ul>
          </section>

          {/* Repeated K-Fold Cross-Validation */}
          <section>
            <h2>Repeated K-Fold Cross-Validation</h2>
            <p>
              In <strong>Repeated K-Fold Cross-Validation</strong>, the K-Fold Cross-Validation process is repeated multiple times with different random splits. This helps in reducing the variance associated with the random partitioning.
            </p>
          </section>

          {/* Choosing the Right Cross-Validation Technique */}
          <section>
            <h2>Choosing the Right Cross-Validation Technique</h2>
            <p>
              The choice of cross-validation method depends on the dataset size, computational resources, and the specific problem:
            </p>
            <ul>
              <li><strong>Small Datasets:</strong> LOOCV or K-Fold with higher K.</li>
              <li><strong>Large Datasets:</strong> K-Fold with lower K or Holdout Method.</li>
              <li><strong>Imbalanced Data:</strong> Stratified K-Fold.</li>
              <li><strong>Time Series Data:</strong> Time Series Cross-Validation.</li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Computational Cost</h3>
            <p>
              Methods like LOOCV can be computationally expensive. Choose a method that balances computational efficiency with the need for accurate performance estimation.
            </p>
            <h3>Data Leakage</h3>
            <p>
              Ensure that the cross-validation process does not introduce data leakage. Preprocessing steps should be applied within each fold separately.
            </p>
            <h3>Consistency</h3>
            <p>
              Use consistent random seeds for reproducibility when shuffling data in cross-validation.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Cross-Validation in Python</h2>
            <p>Here's how to perform different cross-validation techniques using scikit-learn:</p>
            <pre className="code-block">
              {`from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score, KFold, StratifiedKFold, LeaveOneOut
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# Load data
iris = load_iris()
X = iris.data
y = iris.target

# Define model
model = DecisionTreeClassifier(random_state=42)

# K-Fold Cross-Validation
kf = KFold(n_splits=5, shuffle=True, random_state=42)
scores_kf = cross_val_score(model, X, y, cv=kf)
print("K-Fold CV Scores:", scores_kf)

# Stratified K-Fold Cross-Validation
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores_skf = cross_val_score(model, X, y, cv=skf)
print("Stratified K-Fold CV Scores:", scores_skf)

# Leave-One-Out Cross-Validation
loo = LeaveOneOut()
scores_loo = cross_val_score(model, X, y, cv=loo)
print("LOOCV Score Mean:", scores_loo.mean())
`}
            </pre>
            <p>The output will display the cross-validation scores for each method.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Cross-validation techniques are essential tools for assessing the performance and generalization ability of machine learning models. By selecting the appropriate method, you can obtain reliable estimates and make informed decisions during model development.
            </p>
            <p>Next, let's delve into hyperparameter tuning and model optimization strategies.</p>
            <Link to="/categories/model-evaluation/classification-metrics" className="next-button">
              Proceed to Evaluation Metrics for Classification
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default CrossValidationTechniques;
