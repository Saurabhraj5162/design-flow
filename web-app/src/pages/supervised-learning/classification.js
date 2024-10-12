import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the existing CSS

const Classification = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Classification in Supervised Learning</h1>
          <p>Predicting Categorical Outcomes Using Classification Algorithms</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Classification</h2>
            <p>
              <strong>Classification</strong> is a type of supervised learning algorithm used to predict categorical outcomes. It involves assigning input data to one of several predefined classes or categories based on its features.
            </p>
            <p>
              The main goal of classification is to learn a decision boundary that separates different classes in the feature space, allowing us to classify new, unseen data accurately.
            </p>
          </section>

          {/* Types of Classification Algorithms */}
          <section>
            <h2>Types of Classification Algorithms</h2>
            <p>There are various classification algorithms, each suitable for different types of data and problems:</p>
            <ul>
              <li><strong>Logistic Regression</strong></li>
              <li><strong>k-Nearest Neighbors (k-NN)</strong></li>
              <li><strong>Support Vector Machines (SVM)</strong></li>
              <li><strong>Decision Trees</strong></li>
              <li><strong>Random Forests</strong></li>
              <li><strong>Naive Bayes</strong></li>
              <li><strong>Neural Networks</strong></li>
            </ul>
          </section>

          {/* Logistic Regression */}
          <section>
            <h2>Logistic Regression</h2>
            <p>
              Despite its name, <strong>Logistic Regression</strong> is used for classification tasks. It models the probability that an input belongs to a particular class.
            </p>

            <h3>Mathematical Formulation</h3>
            <p>The logistic regression model uses the logistic function (also known as the sigmoid function):</p>
            <MathJax>
              {'\\[ \\sigma(z) = \\frac{1}{1 + e^{-z}} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( z = \\beta_0 + \\beta_1 X \\)'}</MathJax></li>
              <li><MathJax inline>{'\\( \\beta_0, \\beta_1 \\)'}</MathJax>: Model coefficients</li>
              <li><MathJax inline>{'\\( X \\)'}</MathJax>: Input features</li>
            </ul>
            <p>
              The probability that an instance belongs to the positive class (<MathJax inline>{'\\( Y = 1 \\)'}</MathJax>) is given by:
            </p>
            <MathJax>
              {'\\[ P(Y = 1 | X) = \\sigma(z) \\]'}
            </MathJax>

            <h3>Decision Boundary</h3>
            <p>
              The decision boundary is where the probability is 0.5. Instances with probability greater than 0.5 are classified as the positive class, and those with less are classified as the negative class.
            </p>

            <h3>Example</h3>
            <p>
              Predicting whether a student will pass or fail an exam based on the number of hours studied.
            </p>
          </section>

          {/* k-Nearest Neighbors */}
          <section>
            <h2>k-Nearest Neighbors (k-NN)</h2>
            <p>
              The <strong>k-NN</strong> algorithm classifies instances based on the majority class of their <em>k</em> nearest neighbors in the feature space.
            </p>

            <h3>Algorithm Steps</h3>
            <ol>
              <li>Choose the number of neighbors <MathJax inline>{'\\( k \\)'}</MathJax>.</li>
              <li>Calculate the distance between the new instance and all training instances.</li>
              <li>Select the <MathJax inline>{'\\( k \\)'}</MathJax> nearest neighbors.</li>
              <li>Assign the class that is most common among these neighbors.</li>
            </ol>

            <h3>Example</h3>
            <p>
              Classifying a flower species based on its petal and sepal measurements using the Iris dataset.
            </p>
          </section>

          {/* Support Vector Machines */}
          <section>
            <h2>Support Vector Machines (SVM)</h2>
            <p>
              <strong>Support Vector Machines</strong> are powerful classifiers that find the optimal hyperplane which maximally separates different classes.
            </p>

            <h3>Mathematical Formulation</h3>
            <p>
              For linearly separable data, SVM aims to solve:
            </p>
            <MathJax>
              {'\\[ \\min_{w,b} \\frac{1}{2} \\| w \\|^2 \\]'}
            </MathJax>
            <p>Subject to:</p>
            <MathJax>
              {'\\[ y_i (w^T x_i + b) \\geq 1 \\quad \\forall i \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( w \\)'}</MathJax>: Weight vector</li>
              <li><MathJax inline>{'\\( b \\)'}</MathJax>: Bias term</li>
              <li><MathJax inline>{'\\( y_i \\)'}</MathJax>: Class label (+1 or -1)</li>
              <li><MathJax inline>{'\\( x_i \\)'}</MathJax>: Input features</li>
            </ul>

            <h3>Example</h3>
            <p>
              Classifying emails as spam or not spam based on word frequencies.
            </p>
          </section>

          {/* Evaluation Metrics for Classification */}
          <section>
            <h2>Evaluation Metrics for Classification Models</h2>
            <p>To assess the performance of classification models, we use various metrics:</p>

            <h3>Confusion Matrix</h3>
            <p>
              A confusion matrix is a table that describes the performance of a classification model by comparing actual and predicted classes.
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Predicted Positive</th>
                  <th>Predicted Negative</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Actual Positive</strong></td>
                  <td>True Positive (TP)</td>
                  <td>False Negative (FN)</td>
                </tr>
                <tr>
                  <td><strong>Actual Negative</strong></td>
                  <td>False Positive (FP)</td>
                  <td>True Negative (TN)</td>
                </tr>
              </tbody>
            </table>

            <h3>Accuracy</h3>
            <MathJax>
              {'\\[ \\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN} \\]'}
            </MathJax>
            <p>
              Measures the proportion of correct predictions.
            </p>

            <h3>Precision</h3>
            <MathJax>
              {'\\[ \\text{Precision} = \\frac{TP}{TP + FP} \\]'}
            </MathJax>
            <p>
              Indicates how many of the positive predictions were actually correct.
            </p>

            <h3>Recall (Sensitivity)</h3>
            <MathJax>
              {'\\[ \\text{Recall} = \\frac{TP}{TP + FN} \\]'}
            </MathJax>
            <p>
              Measures the proportion of actual positives correctly identified.
            </p>

            <h3>F1 Score</h3>
            <MathJax>
              {'\\[ \\text{F1 Score} = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} \\]'}
            </MathJax>
            <p>
              The harmonic mean of precision and recall. Useful when you need a balance between precision and recall.
            </p>

            <h3>Receiver Operating Characteristic (ROC) Curve</h3>
            <p>
              A plot of True Positive Rate (Recall) against False Positive Rate at various threshold settings.
            </p>

            <h3>Area Under the Curve (AUC)</h3>
            <p>
              Measures the entire two-dimensional area underneath the ROC curve. A higher AUC indicates better model performance.
            </p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>You've learned the basics of classification in supervised learning.</p>
            <Link to="/categories/supervised-learning/decision-trees" className="next-button">
              Proceed to Decision Trees
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Classification;
