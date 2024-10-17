import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const ROCCurveAndAUC = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>ROC Curve and AUC</h1>
          <p>Understanding ROC Curves and AUC for Evaluating Binary Classifiers</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              In binary classification tasks, evaluating the performance of a classifier is crucial. The Receiver Operating Characteristic (ROC) curve and the Area Under the Curve (AUC) are powerful tools for visualizing and quantifying the performance of binary classifiers at various threshold settings.
            </p>
            <p>
              This section explains what ROC curves and AUC are, how they are constructed, and how to interpret them.
            </p>
          </section>

          {/* Confusion Matrix Review */}
          <section>
            <h2>Confusion Matrix Review</h2>
            <p>
              To understand ROC curves, it's helpful to revisit the confusion matrix for binary classification:
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
          </section>

          {/* True Positive Rate and False Positive Rate */}
          <section>
            <h2>True Positive Rate and False Positive Rate</h2>
            <p>
              The ROC curve plots the True Positive Rate (TPR) against the False Positive Rate (FPR) at various threshold settings.
            </p>
            <h3>True Positive Rate (TPR) - Sensitivity</h3>
            <MathJax>
              {'\\[ \\text{TPR} = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}} \\]'}
            </MathJax>
            <h3>False Positive Rate (FPR)</h3>
            <MathJax>
              {'\\[ \\text{FPR} = \\frac{\\text{FP}}{\\text{FP} + \\text{TN}} \\]'}
            </MathJax>
          </section>

          {/* ROC Curve */}
          <section>
            <h2>ROC Curve</h2>
            <p>
              The ROC curve is created by plotting the TPR against the FPR at various threshold settings. Each point on the ROC curve represents a TPR/FPR pair corresponding to a particular decision threshold.
            </p>
            <img src="/images/roc_curve.png" alt="ROC Curve" className="distribution-image" />
            <p className="image-source">Figure: Example of an ROC Curve.</p>
            <p>
              A classifier that randomly guesses will produce a diagonal ROC curve, while a perfect classifier will reach the top-left corner of the plot.
            </p>
          </section>

          {/* Area Under the Curve (AUC) */}
          <section>
            <h2>Area Under the Curve (AUC)</h2>
            <p>
              The AUC quantifies the overall ability of the classifier to discriminate between positive and negative classes. It is equal to the probability that the classifier will rank a randomly chosen positive instance higher than a randomly chosen negative instance.
            </p>
            <p>
              The AUC ranges from 0 to 1:
            </p>
            <ul>
              <li>AUC = 1: Perfect classifier.</li>
              <li>AUC = 0.5: No discriminative power (random guessing).</li>
              <li>AUC &lt; 0.5: Performs worse than random guessing.</li>
            </ul>
          </section>

          {/* Example Calculation */}
          <section>
            <h2>Example: Calculating TPR and FPR</h2>
            <p>
              Suppose we have the following predicted probabilities and actual labels:
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Instance</th>
                  <th>Actual Label</th>
                  <th>Predicted Probability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>0.9</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>0</td>
                  <td>0.8</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1</td>
                  <td>0.7</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>0</td>
                  <td>0.6</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>1</td>
                  <td>0.4</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>0</td>
                  <td>0.3</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>1</td>
                  <td>0.2</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>0</td>
                  <td>0.1</td>
                </tr>
              </tbody>
            </table>
            <p>
              By varying the threshold from 1.0 to 0.0, we can compute TPR and FPR at each threshold and plot the ROC curve.
            </p>
          </section>

          {/* Interpreting the ROC Curve */}
          <section>
            <h2>Interpreting the ROC Curve</h2>
            <p>
              The ROC curve helps in selecting a threshold that balances TPR and FPR according to the problem's requirements. For example, in medical diagnostics, it's often crucial to have a high TPR (sensitivity) even if it means a higher FPR.
            </p>
            <p>
              The shape of the ROC curve indicates the classifier's performance. A curve closer to the top-left corner indicates better performance.
            </p>
          </section>

          {/* ROC Curve vs. Precision-Recall Curve */}
          <section>
            <h2>ROC Curve vs. Precision-Recall Curve</h2>
            <p>
              While ROC curves are useful, in cases of class imbalance, Precision-Recall (PR) curves can provide a more informative picture. PR curves plot Precision against Recall and are more sensitive to the minority class performance.
            </p>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Threshold Selection</h3>
            <p>
              The choice of threshold depends on the specific application and the costs associated with false positives and false negatives.
            </p>
            <h3>Balanced Datasets</h3>
            <p>
              ROC curves assume a balanced dataset. For imbalanced datasets, consider using PR curves in addition to ROC curves.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing ROC Curve and AUC in Python</h2>
            <p>Here's how to plot the ROC curve and compute AUC using scikit-learn:</p>
            <pre className="code-block">
              {`import numpy as np
from sklearn.metrics import roc_curve, auc
import matplotlib.pyplot as plt
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# Generate sample data
X, y = make_classification(n_samples=1000, n_classes=2, random_state=42, shuffle=True)

# Split into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)

# Train classifier
clf = LogisticRegression()
clf.fit(X_train, y_train)

# Predict probabilities
y_scores = clf.predict_proba(X_test)[:, 1]

# Compute ROC curve and AUC
fpr, tpr, thresholds = roc_curve(y_test, y_scores)
roc_auc = auc(fpr, tpr)

# Plot ROC curve
plt.figure()
plt.plot(fpr, tpr, color='darkorange', lw=2, label='ROC curve (area = %0.2f)' % roc_auc)
plt.plot([0, 1], [0, 1], color='navy', lw=2, linestyle='--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('Receiver Operating Characteristic')
plt.legend(loc='lower right')
plt.show()
`}
            </pre>
            <p>The output will display the ROC curve and print the AUC value.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Understanding ROC curves and AUC is essential for evaluating the performance of binary classifiers, especially when dealing with varying classification thresholds. These tools help in selecting models and thresholds that best suit the application's requirements.
            </p>
            <p>Next, let's explore Precision-Recall curves and their applications.</p>
            <Link to="/categories/model-evaluation/confusion-matrix" className="next-button">
              Proceed to Confusion Matrix
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default ROCCurveAndAUC;
