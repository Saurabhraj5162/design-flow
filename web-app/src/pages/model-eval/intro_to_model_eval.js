import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const IntroductionToModelEvaluation = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Introduction to Model Evaluation</h1>
          <p>Assessing the Performance and Generalization Ability of Machine Learning Models</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Why Model Evaluation Matters</h2>
            <p>
              In machine learning, building a model is only part of the process. Equally important is evaluating the model to ensure it performs well not just on the training data but also on unseen data. Model evaluation helps in:
            </p>
            <ul>
              <li>Assessing the model's predictive accuracy.</li>
              <li>Identifying overfitting or underfitting.</li>
              <li>Selecting the best model among several candidates.</li>
              <li>Optimizing model parameters.</li>
            </ul>
          </section>

          {/* Train-Test Split */}
          <section>
            <h2>Train-Test Split</h2>
            <p>
              The simplest method of model evaluation involves splitting the dataset into two parts:
            </p>
            <ul>
              <li>
                <strong>Training Set:</strong> Used to train the model.
              </li>
              <li>
                <strong>Test Set:</strong> Used to evaluate the model's performance on unseen data.
              </li>
            </ul>
            <p>
              A common split ratio is 80% for training and 20% for testing.
            </p>
            <img src="/images/train_test_split.png" alt="Train-Test Split" className="distribution-image" />
            <p className="image-source">Figure: Splitting the dataset into training and testing sets.</p>
          </section>

          {/* K-Fold Cross-Validation */}
          <section>
            <h2>K-Fold Cross-Validation</h2>
            <p>
              <strong>K-Fold Cross-Validation</strong> is a more robust method for model evaluation. It involves dividing the dataset into <MathJax inline>{'\\( K \\)'}</MathJax> equal parts (folds) and performing training and validation <MathJax inline>{'\\( K \\)'}</MathJax> times.
            </p>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>Shuffle the dataset randomly.</li>
              <li>Split the dataset into <MathJax inline>{'\\( K \\)'}</MathJax> folds.</li>
              <li>For each fold:
                <ol type="a">
                  <li>Use the fold as the validation set.</li>
                  <li>Use the remaining <MathJax inline>{'\\( K-1 \\)'}</MathJax> folds as the training set.</li>
                  <li>Train the model on the training set and evaluate on the validation set.</li>
                </ol>
              </li>
              <li>Aggregate the performance across all folds.</li>
            </ol>
            <p>
              Common choices for <MathJax inline>{'\\( K \\)'}</MathJax> are 5 or 10.
            </p>
            <img src="/images/k_fold_cv.png" alt="K-Fold Cross-Validation" className="distribution-image" />
            <p className="image-source">Figure: Illustration of K-Fold Cross-Validation.</p>
          </section>

          {/* Evaluation Metrics for Classification */}
          <section>
            <h2>Evaluation Metrics for Classification</h2>
            <p>Several metrics are used to evaluate classification models:</p>
            <h3>Confusion Matrix</h3>
            <p>
              A confusion matrix summarizes the performance by showing the counts of true positive (TP), true negative (TN), false positive (FP), and false negative (FN) predictions.
            </p>
            <table className="data-table confusion-matrix">
              <thead>
                <tr>
                  <th>Actual / Predicted</th>
                  <th>Positive</th>
                  <th>Negative</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Positive</td>
                  <td>True Positive (TP)</td>
                  <td>False Negative (FN)</td>
                </tr>
                <tr>
                  <td>Negative</td>
                  <td>False Positive (FP)</td>
                  <td>True Negative (TN)</td>
                </tr>
              </tbody>
            </table>
            <h3>Accuracy</h3>
            <MathJax>
              {'\\[ \\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN} \\]'}
            </MathJax>
            <h3>Precision</h3>
            <MathJax>
              {'\\[ \\text{Precision} = \\frac{TP}{TP + FP} \\]'}
            </MathJax>
            <h3>Recall (Sensitivity)</h3>
            <MathJax>
              {'\\[ \\text{Recall} = \\frac{TP}{TP + FN} \\]'}
            </MathJax>
            <h3>F1 Score</h3>
            <MathJax>
              {'\\[ \\text{F1 Score} = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} \\]'}
            </MathJax>
            <h3>Example:</h3>
            <p>Suppose we have the following confusion matrix:</p>
            <table className="data-table confusion-matrix">
              <thead>
                <tr>
                  <th>Actual / Predicted</th>
                  <th>Positive</th>
                  <th>Negative</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Positive</td>
                  <td>50</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Negative</td>
                  <td>5</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
            <p>Calculating the metrics:</p>
            <ul>
              <li>Accuracy: (50 + 100) / (50 + 100 + 5 + 10) = 0.93</li>
              <li>Precision: 50 / (50 + 5) = 0.91</li>
              <li>Recall: 50 / (50 + 10) = 0.83</li>
              <li>F1 Score: 2 × (0.91 × 0.83) / (0.91 + 0.83) ≈ 0.87</li>
            </ul>
          </section>

          {/* Evaluation Metrics for Regression */}
          <section>
            <h2>Evaluation Metrics for Regression</h2>
            <p>Common metrics for evaluating regression models include:</p>
            <h3>Mean Absolute Error (MAE)</h3>
            <MathJax>
              {'\\[ \\text{MAE} = \\frac{1}{n} \\sum_{i=1}^{n} | y_i - \\hat{y}_i | \\]'}
            </MathJax>
            <h3>Mean Squared Error (MSE)</h3>
            <MathJax>
              {'\\[ \\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} ( y_i - \\hat{y}_i )^2 \\]'}
            </MathJax>
            <h3>Root Mean Squared Error (RMSE)</h3>
            <MathJax>
              {'\\[ \\text{RMSE} = \\sqrt{\\text{MSE}} \\]'}
            </MathJax>
            <h3>R-squared (Coefficient of Determination)</h3>
            <MathJax>
              {'\\[ R^2 = 1 - \\frac{\\sum_{i=1}^{n} ( y_i - \\hat{y}_i )^2}{\\sum_{i=1}^{n} ( y_i - \\bar{y} )^2} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( y_i \\)'}</MathJax>: Actual value.</li>
              <li><MathJax inline>{'\\( \\hat{y}_i \\)'}</MathJax>: Predicted value.</li>
              <li><MathJax inline>{'\\( \\bar{y} \\)'}</MathJax>: Mean of actual values.</li>
              <li><MathJax inline>{'\\( n \\)'}</MathJax>: Number of data points.</li>
            </ul>
          </section>

          {/* Receiver Operating Characteristic (ROC) Curve */}
          <section>
            <h2>Receiver Operating Characteristic (ROC) Curve</h2>
            <p>
              The ROC curve is a graphical representation of a classifier's performance by plotting the true positive rate (TPR) against the false positive rate (FPR) at various threshold settings.
            </p>
            <h3>Definitions:</h3>
            <ul>
              <li>
                <strong>True Positive Rate (TPR):</strong> Also known as recall.
                <MathJax inline>{'\\[ \\text{TPR} = \\frac{TP}{TP + FN} \\]'}</MathJax>
              </li>
              <li>
                <strong>False Positive Rate (FPR):</strong>
                <MathJax inline>{'\\[ \\text{FPR} = \\frac{FP}{FP + TN} \\]'}</MathJax>
              </li>
            </ul>
            <p>
              The Area Under the Curve (AUC) provides a single measure of performance across all thresholds.
            </p>
            <img src="/images/roc_curve.png" alt="ROC Curve" className="distribution-image" />
            <p className="image-source">Figure: Example of an ROC Curve.</p>
          </section>

          {/* Overfitting and Underfitting */}
          <section>
            <h2>Overfitting and Underfitting</h2>
            <p>
              <strong>Overfitting</strong> occurs when a model learns the training data too well, capturing noise and outliers, resulting in poor generalization to new data.
            </p>
            <p>
              <strong>Underfitting</strong> occurs when a model is too simple to capture the underlying pattern of the data.
            </p>
            <img src="/images/overfitting_underfitting.png" alt="Overfitting and Underfitting" className="distribution-image" />
            <p className="image-source">Figure: Illustration of Overfitting and Underfitting.</p>
          </section>

          {/* Bias-Variance Tradeoff */}
          <section>
            <h2>Bias-Variance Tradeoff</h2>
            <p>
              The bias-variance tradeoff is a fundamental concept in model evaluation:
            </p>
            <ul>
              <li>
                <strong>Bias:</strong> Error due to erroneous assumptions in the learning algorithm. High bias can cause underfitting.
              </li>
              <li>
                <strong>Variance:</strong> Error due to too much complexity in the learning algorithm. High variance can cause overfitting.
              </li>
            </ul>
            <p>
              The goal is to find a balance between bias and variance to minimize the total error.
            </p>
            <img src="/images/bias_variance_tradeoff.png" alt="Bias-Variance Tradeoff" className="distribution-image" />
            <p className="image-source">Figure: Visualizing the Bias-Variance Tradeoff.</p>
          </section>

          {/* Cross-Validation Techniques */}
          <section>
            <h2>Other Cross-Validation Techniques</h2>
            <p>Besides K-Fold Cross-Validation, other techniques include:</p>
            <h3>Leave-One-Out Cross-Validation (LOOCV)</h3>
            <p>
              Each sample in the dataset is used once as the validation data while the remaining samples form the training data. This is equivalent to K-Fold Cross-Validation with <MathJax inline>{'\\( K = n \\)'}</MathJax>.
            </p>
            <h3>Stratified K-Fold Cross-Validation</h3>
            <p>
              Ensures that each fold is a good representative of the whole by preserving the percentage of samples for each class.
            </p>
            <h3>Time Series Cross-Validation</h3>
            <p>
              For time-dependent data, cross-validation is performed by considering the temporal ordering, such as using earlier data to predict later data.
            </p>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Data Leakage</h3>
            <p>
              Occurs when information from outside the training dataset is used to create the model, leading to overly optimistic performance estimates. Ensure that no test data is used during training.
            </p>
            <h3>Imbalanced Datasets</h3>
            <p>
              In classification tasks with imbalanced classes, accuracy may not be a good metric. Metrics like precision, recall, and F1 score are more informative.
            </p>
            <h3>Hyperparameter Tuning</h3>
            <p>
              Use cross-validation to select the best hyperparameters for the model, often through grid search or random search techniques.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Model Evaluation in Python</h2>
            <p>Here's how to perform K-Fold Cross-Validation using scikit-learn:</p>
            <pre className="code-block">
              {`from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score, KFold
from sklearn.tree import DecisionTreeClassifier
import numpy as np

# Load data
iris = load_iris()
X = iris.data
y = iris.target

# Define model
model = DecisionTreeClassifier(random_state=42)

# Define K-Fold Cross-Validation
kf = KFold(n_splits=5, shuffle=True, random_state=42)

# Perform Cross-Validation
scores = cross_val_score(model, X, y, cv=kf)

print("Cross-Validation Scores:", scores)
print("Mean Accuracy:", np.mean(scores))
`}
            </pre>
            <p>The output shows the accuracy scores for each fold and the mean accuracy.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Model evaluation is essential for building reliable and robust machine learning models. By understanding various evaluation techniques and metrics, you can better assess your models and make informed decisions during model development.
            </p>
            <p>Next, let's delve deeper into model evaluation metrics and techniques for classification problems.</p>
            <Link to="/categories/model-evaluation/data-splitting" className="next-button">
              Proceed to Data Splitting (Training, Validation, and Test Sets)
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default IntroductionToModelEvaluation;
