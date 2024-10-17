import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const ClassificationMetrics = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Evaluation Metrics for Classification</h1>
          <p>Understanding Accuracy, Precision, Recall, F1 Score, and More</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              In classification tasks, evaluating the performance of a model is crucial to understand how well it can predict unseen data. Various metrics provide different perspectives on the model's performance, helping to diagnose issues like class imbalance, overfitting, and underfitting.
            </p>
            <p>
              This section covers key evaluation metrics for classification models, including accuracy, precision, recall, F1 score, and more.
            </p>
          </section>

          {/* Confusion Matrix */}
          <section>
            <h2>Confusion Matrix</h2>
            <p>
              A confusion matrix is a table that summarizes the performance of a classification model by displaying the counts of true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN).
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
            <p>
              The confusion matrix helps visualize the performance and identify the types of errors the model is making.
            </p>
          </section>

          {/* Accuracy */}
          <section>
            <h2>Accuracy</h2>
            <p>
              <strong>Accuracy</strong> measures the proportion of correct predictions over the total number of instances.
            </p>
            <MathJax>
              {'\\[ \\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN} \\]'}
            </MathJax>
            <h3>Example:</h3>
            <p>
              If a model correctly predicts 90 out of 100 instances, the accuracy is 90%.
            </p>
            <h3>Limitations:</h3>
            <p>
              Accuracy can be misleading in imbalanced datasets where one class dominates.
            </p>
          </section>

          {/* Precision */}
          <section>
            <h2>Precision</h2>
            <p>
              <strong>Precision</strong> measures the proportion of true positives among all predicted positives.
            </p>
            <MathJax>
              {'\\[ \\text{Precision} = \\frac{TP}{TP + FP} \\]'}
            </MathJax>
            <h3>Example:</h3>
            <p>
              If a model predicts 50 positive instances, and 40 of them are correct (true positives), the precision is 80%.
            </p>
            <h3>Interpretation:</h3>
            <p>
              High precision indicates a low rate of false positives.
            </p>
          </section>

          {/* Recall */}
          <section>
            <h2>Recall (Sensitivity)</h2>
            <p>
              <strong>Recall</strong>, also known as sensitivity or true positive rate, measures the proportion of true positives among all actual positives.
            </p>
            <MathJax>
              {'\\[ \\text{Recall} = \\frac{TP}{TP + FN} \\]'}
            </MathJax>
            <h3>Example:</h3>
            <p>
              If there are 100 actual positive instances, and the model correctly identifies 80 of them, the recall is 80%.
            </p>
            <h3>Interpretation:</h3>
            <p>
              High recall indicates a low rate of false negatives.
            </p>
          </section>

          {/* F1 Score */}
          <section>
            <h2>F1 Score</h2>
            <p>
              The <strong>F1 Score</strong> is the harmonic mean of precision and recall, providing a balance between the two.
            </p>
            <MathJax>
              {'\\[ \\text{F1 Score} = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} \\]'}
            </MathJax>
            <h3>Example:</h3>
            <p>
              If a model has a precision of 75% and a recall of 80%, the F1 score is approximately 77.14%.
            </p>
            <h3>Interpretation:</h3>
            <p>
              The F1 score is useful when seeking a balance between precision and recall.
            </p>
          </section>

          {/* Specificity */}
          <section>
            <h2>Specificity</h2>
            <p>
              <strong>Specificity</strong>, also known as true negative rate, measures the proportion of true negatives among all actual negatives.
            </p>
            <MathJax>
              {'\\[ \\text{Specificity} = \\frac{TN}{TN + FP} \\]'}
            </MathJax>
            <h3>Interpretation:</h3>
            <p>
              High specificity indicates a low rate of false positives.
            </p>
          </section>

          {/* ROC Curve and AUC */}
          <section>
            <h2>ROC Curve and AUC</h2>
            <p>
              The <strong>Receiver Operating Characteristic (ROC) Curve</strong> plots the true positive rate (recall) against the false positive rate at various threshold settings.
            </p>
            <p>
              The <strong>Area Under the Curve (AUC)</strong> quantifies the overall ability of the model to discriminate between positive and negative classes.
            </p>
            <img src="/images/roc_curve.png" alt="ROC Curve" className="distribution-image" />
            <p className="image-source">Figure: Example of an ROC Curve with AUC.</p>
            <h3>Interpretation:</h3>
            <ul>
              <li>An AUC of 0.5 indicates a model with no discriminative ability (random guessing).</li>
              <li>An AUC of 1.0 indicates a perfect model.</li>
            </ul>
          </section>

          {/* Precision-Recall Curve */}
          <section>
            <h2>Precision-Recall Curve</h2>
            <p>
              The <strong>Precision-Recall Curve</strong> plots precision against recall at different threshold settings. It's especially useful for imbalanced datasets.
            </p>
            <img src="/images/precision_recall_curve.png" alt="Precision-Recall Curve" className="distribution-image" />
            <p className="image-source">Figure: Example of a Precision-Recall Curve.</p>
            <h3>Interpretation:</h3>
            <p>
              A model with a high area under the precision-recall curve indicates good performance.
            </p>
          </section>

          {/* Matthews Correlation Coefficient */}
          <section>
            <h2>Matthews Correlation Coefficient (MCC)</h2>
            <p>
              The <strong>MCC</strong> is a balanced measure that takes into account true and false positives and negatives. It is useful even if the classes are of very different sizes.
            </p>
            <MathJax>
              {'\\[ \\text{MCC} = \\frac{ (TP \\times TN) - (FP \\times FN) }{ \\sqrt{ (TP + FP)(TP + FN)(TN + FP)(TN + FN) } } \\]'}
            </MathJax>
            <h3>Interpretation:</h3>
            <ul>
              <li>MCC = 1: Perfect prediction</li>
              <li>MCC = 0: No better than random prediction</li>
              <li>MCC = -1: Total disagreement between prediction and observation</li>
            </ul>
          </section>

          {/* Log Loss */}
          <section>
            <h2>Logarithmic Loss (Log Loss)</h2>
            <p>
              <strong>Log Loss</strong> measures the performance of a classification model where the prediction output is a probability value between 0 and 1.
            </p>
            <MathJax>
              {'\\[ \\text{Log Loss} = -\\frac{1}{n} \\sum_{i=1}^{n} \\left[ y_i \\log(\\hat{y}_i) + (1 - y_i) \\log(1 - \\hat{y}_i) \\right] \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( y_i \\)'}</MathJax>: Actual label (0 or 1)</li>
              <li><MathJax inline>{'\\( \\hat{y}_i \\)'}</MathJax>: Predicted probability of the positive class</li>
            </ul>
            <h3>Interpretation:</h3>
            <p>
              Lower log loss values indicate better models. Log loss penalizes confident but wrong predictions more than less confident wrong predictions.
            </p>
          </section>

          {/* Classification Report */}
          <section>
            <h2>Classification Report</h2>
            <p>
              A classification report provides a comprehensive summary of precision, recall, F1 score, and support for each class in multiclass classification.
            </p>
            <pre className="code-block">
              {`              precision    recall  f1-score   support

           0       0.90      0.85      0.87        20
           1       0.80      0.88      0.84        16
           2       0.95      0.90      0.92        24

    avg / total   0.89      0.88      0.88        60`}
            </pre>
            <p>Where:</p>
            <ul>
              <li><strong>Precision:</strong> For each class</li>
              <li><strong>Recall:</strong> For each class</li>
              <li><strong>F1-Score:</strong> For each class</li>
              <li><strong>Support:</strong> Number of occurrences of each class</li>
            </ul>
          </section>

          {/* When to Use Each Metric */}
          <section>
            <h2>When to Use Each Metric</h2>
            <ul>
              <li>
                <strong>Accuracy:</strong> When classes are balanced and all errors have the same cost.
              </li>
              <li>
                <strong>Precision:</strong> When the cost of false positives is high (e.g., spam detection).
              </li>
              <li>
                <strong>Recall:</strong> When the cost of false negatives is high (e.g., disease screening).
              </li>
              <li>
                <strong>F1 Score:</strong> When seeking a balance between precision and recall.
              </li>
              <li>
                <strong>AUC-ROC:</strong> When evaluating the overall performance across all classification thresholds.
              </li>
              <li>
                <strong>Log Loss:</strong> When probability estimates are important.
              </li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Threshold Selection</h3>
            <p>
              Many classifiers output probabilities. Selecting an appropriate threshold for converting probabilities to class labels can impact metrics like precision and recall.
            </p>
            <h3>Imbalanced Datasets</h3>
            <p>
              Metrics like accuracy can be misleading. Focus on metrics like precision, recall, F1 score, and use techniques like resampling or adjusting class weights.
            </p>
            <h3>Cross-Validation</h3>
            <p>
              Use cross-validation to get a more reliable estimate of the model's performance metrics.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Metrics in Python</h2>
            <p>Here's how to compute classification metrics using scikit-learn:</p>
            <pre className="code-block">
              {`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score, roc_curve
from sklearn.linear_model import LogisticRegression
import matplotlib.pyplot as plt

# Load data
iris = load_iris()
X = iris.data
y = iris.target

# Binary classification for simplicity
X = X[y != 2]
y = y[y != 2]

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)
y_proba = model.predict_proba(X_test)[:, 1]

# Confusion Matrix
print("Confusion Matrix:")
print(confusion_matrix(y_test, y_pred))

# Classification Report
print("Classification Report:")
print(classification_report(y_test, y_pred))

# ROC Curve
fpr, tpr, thresholds = roc_curve(y_test, y_proba)
auc_score = roc_auc_score(y_test, y_proba)

# Plot ROC Curve
plt.figure()
plt.plot(fpr, tpr, label='ROC Curve (area = %0.2f)' % auc_score)
plt.plot([0, 1], [0, 1], 'k--')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('ROC Curve')
plt.legend(loc='lower right')
plt.show()
`}
            </pre>
            <p>This code trains a logistic regression model, computes evaluation metrics, and plots the ROC curve.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Understanding and selecting the appropriate evaluation metrics is crucial for assessing and improving classification models. Each metric provides unique insights into model performance, especially in different contexts like imbalanced datasets or varying costs of misclassification.
            </p>
            <p>Next, let's explore evaluation metrics for regression models.</p>
            <Link to="/categories/model-evaluation/regression-metrics" className="next-button">
              Proceed to Regression Metrics
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default ClassificationMetrics;
