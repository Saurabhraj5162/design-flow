import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the existing CSS

const EvaluationMetrics = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Evaluation Metrics in Supervised Learning</h1>
          <p>Understanding How to Assess Model Performance</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Evaluation Metrics</h2>
            <p>
              In supervised learning, evaluating the performance of a model is crucial to understand how well it generalizes to new, unseen data. Different tasks (classification or regression) require different metrics to assess the accuracy and effectiveness of the model.
            </p>
            <p>
              Evaluation metrics help in selecting the best model, tuning hyperparameters, and comparing different algorithms.
            </p>
          </section>

          {/* Evaluation Metrics for Classification */}
          <section>
            <h2>Evaluation Metrics for Classification</h2>
            <p>
              Classification metrics are used when the target variable is categorical. Key metrics include accuracy, precision, recall, F1 score, and more.
            </p>

            <h3>Confusion Matrix</h3>
            <p>
              A confusion matrix is a table that summarizes the performance of a classification model by comparing the predicted and actual classes.
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
            <p>
              Accuracy measures the proportion of correctly classified instances among all instances.
            </p>
            <MathJax>
              {'\\[ \\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN} \\]'}
            </MathJax>

            <h3>Precision</h3>
            <p>
              Precision is the proportion of true positives among all predicted positives. It answers the question: "Out of all instances predicted as positive, how many are actually positive?"
            </p>
            <MathJax>
              {'\\[ \\text{Precision} = \\frac{TP}{TP + FP} \\]'}
            </MathJax>

            <h3>Recall (Sensitivity)</h3>
            <p>
              Recall is the proportion of true positives among all actual positives. It answers the question: "Out of all actual positive instances, how many did the model correctly identify?"
            </p>
            <MathJax>
              {'\\[ \\text{Recall} = \\frac{TP}{TP + FN} \\]'}
            </MathJax>

            <h3>F1 Score</h3>
            <p>
              The F1 score is the harmonic mean of precision and recall. It provides a balance between the two metrics.
            </p>
            <MathJax>
              {'\\[ \\text{F1 Score} = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} \\]'}
            </MathJax>

            <h3>Specificity</h3>
            <p>
              Specificity measures the proportion of true negatives among all actual negatives. It answers the question: "Out of all actual negative instances, how many did the model correctly identify?"
            </p>
            <MathJax>
              {'\\[ \\text{Specificity} = \\frac{TN}{TN + FP} \\]'}
            </MathJax>

            <h3>Receiver Operating Characteristic (ROC) Curve</h3>
            <p>
              The ROC curve plots the True Positive Rate (Recall) against the False Positive Rate at various threshold settings. It illustrates the trade-off between sensitivity and specificity.
            </p>

            <h3>Area Under the Curve (AUC)</h3>
            <p>
              The AUC represents the probability that the model ranks a random positive instance higher than a random negative one. An AUC of 0.5 suggests no discriminative ability, while an AUC of 1.0 indicates perfect discrimination.
            </p>

            <h3>Example</h3>
            <p>
              Consider a spam detection system that classifies emails as "Spam" or "Not Spam." Using the confusion matrix, we can calculate precision, recall, and other metrics to assess the model's performance.
            </p>
          </section>

          {/* Evaluation Metrics for Regression */}
          <section>
            <h2>Evaluation Metrics for Regression</h2>
            <p>
              Regression metrics are used when the target variable is continuous. Key metrics include Mean Squared Error, Root Mean Squared Error, Mean Absolute Error, and R-squared.
            </p>

            <h3>Mean Squared Error (MSE)</h3>
            <p>
              MSE measures the average squared difference between the actual and predicted values. It penalizes larger errors more severely.
            </p>
            <MathJax>
              {'\\[ \\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} (Y_i - \\hat{Y}_i)^2 \\]'}
            </MathJax>

            <h3>Root Mean Squared Error (RMSE)</h3>
            <p>
              RMSE is the square root of MSE, bringing the metric back to the original units of the target variable.
            </p>
            <MathJax>
              {'\\[ \\text{RMSE} = \\sqrt{\\text{MSE}} \\]'}
            </MathJax>

            <h3>Mean Absolute Error (MAE)</h3>
            <p>
              MAE measures the average absolute difference between actual and predicted values. It is less sensitive to outliers compared to MSE.
            </p>
            <MathJax>
              {'\\[ \\text{MAE} = \\frac{1}{n} \\sum_{i=1}^{n} |Y_i - \\hat{Y}_i| \\]'}
            </MathJax>

            <h3>R-squared (Coefficient of Determination)</h3>
            <p>
              R-squared represents the proportion of variance in the dependent variable that is predictable from the independent variables.
            </p>
            <MathJax>
              {'\\[ R^2 = 1 - \\frac{\\sum_{i=1}^{n} (Y_i - \\hat{Y}_i)^2}{\\sum_{i=1}^{n} (Y_i - \\bar{Y})^2} \\]'}
            </MathJax>
            <p>
              An R-squared value of 1 indicates perfect prediction, while 0 indicates that the model does not explain any variability in the target variable.
            </p>

            <h3>Adjusted R-squared</h3>
            <p>
              Adjusted R-squared adjusts the statistic based on the number of predictors in the model, preventing overestimation of the goodness of fit in models with many variables.
            </p>
            <MathJax>
              {'\\[ \\text{Adjusted } R^2 = 1 - \\left(1 - R^2\\right) \\times \\frac{n - 1}{n - p - 1} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( n \\)'}</MathJax>: Number of observations.</li>
              <li><MathJax inline>{'\\( p \\)'}</MathJax>: Number of predictors.</li>
            </ul>

            <h3>Example</h3>
            <p>
              Suppose we have a model predicting house prices based on various features. We can use MSE, RMSE, MAE, and R-squared to evaluate how well the model predicts prices.
            </p>
          </section>

          {/* Choosing the Right Metric */}
          <section>
            <h2>Choosing the Right Metric</h2>
            <p>
              Selecting the appropriate evaluation metric depends on the problem context and the specific aspects of model performance that are most important.
            </p>
            <p>
              For example, in medical diagnosis, recall (sensitivity) may be more critical to ensure that positive cases are not missed. In financial fraud detection, precision might be prioritized to reduce false positives.
            </p>
          </section>

          {/* Cross-Validation */}
          <section>
            <h2>Cross-Validation</h2>
            <p>
              Cross-validation is a technique for assessing how a model will generalize to an independent dataset. It involves partitioning the data into complementary subsets, training the model on one subset, and validating it on another.
            </p>
            <p>
              The most common method is k-fold cross-validation, where the data is divided into k subsets, and the model is trained and validated k times, each time using a different subset for validation.
            </p>
          </section>

          {/* ROC and Precision-Recall Curves */}
          <section>
            <h2>ROC and Precision-Recall Curves</h2>
            <p>
              ROC and Precision-Recall curves provide a graphical representation of a classifier's performance across different thresholds.
            </p>

            <h3>ROC Curve</h3>
            <p>
              Plots True Positive Rate (Recall) against False Positive Rate. Useful when the classes are balanced.
            </p>

            <h3>Precision-Recall Curve</h3>
            <p>
              Plots Precision against Recall. More informative than ROC when dealing with imbalanced classes.
            </p>
          </section>

          {/* Confusion Matrix for Multiclass Classification */}
          <section>
            <h2>Confusion Matrix for Multiclass Classification</h2>
            <p>
              In multiclass classification, the confusion matrix extends to an n x n matrix, where n is the number of classes. Each cell [i][j] represents the number of instances of class i predicted as class j.
            </p>
            <p>
              Metrics can be computed per class or averaged across classes using methods like macro averaging (unweighted mean) and micro averaging (weighted mean).
            </p>
          </section>

          {/* Matthews Correlation Coefficient (MCC) */}
          <section>
            <h2>Matthews Correlation Coefficient (MCC)</h2>
            <p>
              MCC is a metric that takes into account true and false positives and negatives and is generally regarded as a balanced measure, even if the classes are of very different sizes.
            </p>
            <MathJax>
              {'\\[ \\text{MCC} = \\frac{TP \\times TN - FP \\times FN}{\\sqrt{(TP + FP)(TP + FN)(TN + FP)(TN + FN)}} \\]'}
            </MathJax>
            <p>
              MCC values range from -1 (perfect misclassification) to +1 (perfect classification), with 0 indicating random prediction.
            </p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>You've learned about various evaluation metrics used in supervised learning.</p>
            <Link to="/categories/supervised-learning/overfitting-underfitting" className="next-button">
              Proceed to Overfitting and Underfitting
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default EvaluationMetrics;
