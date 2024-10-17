import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const ConfusionMatrix = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Confusion Matrix</h1>
          <p>Understanding and Interpreting Confusion Matrices in Model Evaluation</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              A <strong>Confusion Matrix</strong> is a table that is often used to describe the performance of a classification model on a set of test data for which the true values are known. It allows you to see how your classification model is performing, and provides insight not only into the errors being made but more importantly the types of errors.
            </p>
          </section>

          {/* Structure of a Confusion Matrix */}
          <section>
            <h2>Structure of a Confusion Matrix</h2>
            <p>
              In binary classification, the confusion matrix is a 2x2 table with four entries:
            </p>
            <table className="data-table confusion-matrix">
              <thead>
                <tr>
                  <th>Actual / Predicted</th>
                  <th>Positive (1)</th>
                  <th>Negative (0)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Positive (1)</td>
                  <td>True Positive (TP)</td>
                  <td>False Negative (FN)</td>
                </tr>
                <tr>
                  <td>Negative (0)</td>
                  <td>False Positive (FP)</td>
                  <td>True Negative (TN)</td>
                </tr>
              </tbody>
            </table>
            <p>
              Each cell of the matrix has the following meaning:
            </p>
            <ul>
              <li>
                <strong>True Positive (TP):</strong> The model correctly predicted the positive class.
              </li>
              <li>
                <strong>True Negative (TN):</strong> The model correctly predicted the negative class.
              </li>
              <li>
                <strong>False Positive (FP):</strong> The model incorrectly predicted the positive class (Type I error).
              </li>
              <li>
                <strong>False Negative (FN):</strong> The model incorrectly predicted the negative class (Type II error).
              </li>
            </ul>
          </section>

          {/* Evaluation Metrics from Confusion Matrix */}
          <section>
            <h2>Evaluation Metrics Derived from the Confusion Matrix</h2>
            <p>
              Several important evaluation metrics can be calculated using the values from the confusion matrix.
            </p>
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
            <h3>Specificity</h3>
            <MathJax>
              {'\\[ \\text{Specificity} = \\frac{TN}{TN + FP} \\]'}
            </MathJax>
            <h3>F1 Score</h3>
            <MathJax>
              {'\\[ \\text{F1 Score} = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} \\]'}
            </MathJax>
          </section>

          {/* Example */}
          <section>
            <h2>Example: Interpreting a Confusion Matrix</h2>
            <p>
              Suppose we have the following confusion matrix from a binary classification problem:
            </p>
            <table className="data-table confusion-matrix">
              <thead>
                <tr>
                  <th>Actual / Predicted</th>
                  <th>Positive (1)</th>
                  <th>Negative (0)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Positive (1)</td>
                  <td>50</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Negative (0)</td>
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
              <li>Specificity: 100 / (100 + 5) = 0.95</li>
              <li>F1 Score: 2 × (0.91 × 0.83) / (0.91 + 0.83) ≈ 0.87</li>
            </ul>
          </section>

          {/* Multiclass Confusion Matrix */}
          <section>
            <h2>Confusion Matrix for Multiclass Classification</h2>
            <p>
              In multiclass classification, the confusion matrix is extended to an <MathJax inline>{'\\( N \\times N \\)'}</MathJax> matrix, where <MathJax inline>{'\\( N \\)'}</MathJax> is the number of classes.
            </p>
            <p>
              Each row represents the instances in an actual class, while each column represents the instances in a predicted class.
            </p>
            <p>
              For example, with three classes (A, B, C), the confusion matrix looks like:
            </p>
            <table className="data-table confusion-matrix">
              <thead>
                <tr>
                  <th>Actual / Predicted</th>
                  <th>A</th>
                  <th>B</th>
                  <th>C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>50</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>4</td>
                  <td>45</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>5</td>
                  <td>3</td>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Importance of Confusion Matrix */}
          <section>
            <h2>Why is the Confusion Matrix Important?</h2>
            <p>
              The confusion matrix provides detailed information about how your classification model is performing. It helps in:
            </p>
            <ul>
              <li>Identifying types of errors made by the model.</li>
              <li>Evaluating model performance beyond accuracy.</li>
              <li>Informing decisions on threshold settings.</li>
              <li>Understanding class-wise performance in multiclass problems.</li>
            </ul>
          </section>

          {/* Limitations */}
          <section>
            <h2>Limitations of the Confusion Matrix</h2>
            <p>
              While useful, the confusion matrix has some limitations:
            </p>
            <ul>
              <li>Does not provide a single metric to compare models.</li>
              <li>Can be less informative in cases of class imbalance.</li>
              <li>Interpretation can become complex with a large number of classes.</li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Imbalanced Datasets</h3>
            <p>
              In datasets where one class significantly outnumbers others, relying solely on accuracy can be misleading. The confusion matrix helps to understand the performance on minority classes.
            </p>
            <h3>Threshold Adjustment</h3>
            <p>
              For models that output probabilities, adjusting the decision threshold can help balance precision and recall according to the problem's needs.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Confusion Matrix in Python</h2>
            <p>Here's how to compute and display the confusion matrix using scikit-learn:</p>
            <pre className="code-block">
              {`from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Load data
iris = load_iris()
X = iris.data
y = iris.target

# Binary classification (class 0 vs. rest)
y_binary = (y == 0).astype(int)

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y_binary, test_size=0.3, random_state=42, stratify=y_binary)

# Train classifier
clf = LogisticRegression()
clf.fit(X_train, y_train)

# Predict
y_pred = clf.predict(X_test)

# Compute confusion matrix
cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:\\n", cm)

# Display confusion matrix
disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=['Not Class 0', 'Class 0'])
disp.plot()
plt.show()
`}
            </pre>
            <p>The output will display the confusion matrix and print it in the console.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              The confusion matrix is a fundamental tool in evaluating classification models. It provides detailed insights into the types of errors made by the model and helps in selecting appropriate metrics and thresholds.
            </p>
            <p>Next, let's explore more advanced evaluation metrics and techniques for classification.</p>
            <Link to="/categories/model-evaluation/model-selection" className="next-button">
              Proceed to Model Selection and Hyperparameter Tuning
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default ConfusionMatrix;
