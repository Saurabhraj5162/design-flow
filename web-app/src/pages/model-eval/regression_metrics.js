import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const RegressionMetrics = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Evaluation Metrics for Regression</h1>
          <p>Understanding MSE, RMSE, MAE, R-squared, and More</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              In regression tasks, evaluating the performance of a model is essential to understand how well it predicts continuous outcomes. Various metrics help quantify the difference between predicted and actual values, enabling us to assess the model's accuracy and generalization ability.
            </p>
            <p>
              This section covers key evaluation metrics for regression models, including Mean Squared Error (MSE), Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), R-squared (<MathJax inline>{'\\( R^2 \\)'}</MathJax>), and more.
            </p>
          </section>

          {/* Mean Squared Error (MSE) */}
          <section>
            <h2>Mean Squared Error (MSE)</h2>
            <p>
              <strong>Mean Squared Error (MSE)</strong> measures the average of the squares of the errors—that is, the average squared difference between the predicted values (<MathJax inline>{'\\( \\hat{y}_i \\)'}</MathJax>) and the actual values (<MathJax inline>{'\\( y_i \\)'}</MathJax>).
            </p>
            <MathJax>
              {'\\[ \\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} ( y_i - \\hat{y}_i )^2 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( n \\)'}</MathJax>: Number of data points.</li>
              <li><MathJax inline>{'\\( y_i \\)'}</MathJax>: Actual value.</li>
              <li><MathJax inline>{'\\( \\hat{y}_i \\)'}</MathJax>: Predicted value.</li>
            </ul>
            <p>
              MSE penalizes larger errors more severely due to the squaring of the differences, making it sensitive to outliers.
            </p>
          </section>

          {/* Root Mean Squared Error (RMSE) */}
          <section>
            <h2>Root Mean Squared Error (RMSE)</h2>
            <p>
              <strong>Root Mean Squared Error (RMSE)</strong> is the square root of MSE. It brings the error metric back to the same unit as the target variable, making it more interpretable.
            </p>
            <MathJax>
              {'\\[ \\text{RMSE} = \\sqrt{\\text{MSE}} = \\sqrt{ \\frac{1}{n} \\sum_{i=1}^{n} ( y_i - \\hat{y}_i )^2 } \\]'}
            </MathJax>
            <p>
              RMSE is widely used and provides a measure of how spread out the residuals are.
            </p>
          </section>

          {/* Mean Absolute Error (MAE) */}
          <section>
            <h2>Mean Absolute Error (MAE)</h2>
            <p>
              <strong>Mean Absolute Error (MAE)</strong> calculates the average absolute differences between the predicted and actual values.
            </p>
            <MathJax>
              {'\\[ \\text{MAE} = \\frac{1}{n} \\sum_{i=1}^{n} | y_i - \\hat{y}_i | \\]'}
            </MathJax>
            <p>
              MAE is less sensitive to outliers compared to MSE and RMSE because it doesn't square the errors.
            </p>
          </section>

          {/* R-squared (Coefficient of Determination) */}
          <section>
            <h2>R-squared (<MathJax inline>{'\\( R^2 \\)'}</MathJax>)</h2>
            <p>
              <strong>R-squared</strong> measures the proportion of the variance in the dependent variable that is predictable from the independent variables.
            </p>
            <MathJax>
              {'\\[ R^2 = 1 - \\frac{ \\sum_{i=1}^{n} ( y_i - \\hat{y}_i )^2 }{ \\sum_{i=1}^{n} ( y_i - \\bar{y} )^2 } \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( \\bar{y} \\)'}</MathJax>: Mean of the actual values.</li>
            </ul>
            <p>
              An <MathJax inline>{'\\( R^2 \\)'}</MathJax> value of 1 indicates perfect prediction, while 0 indicates that the model does not explain any of the variability in the response data.
            </p>
          </section>

          {/* Adjusted R-squared */}
          <section>
            <h2>Adjusted R-squared</h2>
            <p>
              <strong>Adjusted R-squared</strong> adjusts the <MathJax inline>{'\\( R^2 \\)'}</MathJax> value based on the number of predictors in the model. It penalizes the addition of irrelevant features.
            </p>
            <MathJax>
              {'\\[ \\text{Adjusted } R^2 = 1 - \\left(1 - R^2\\right) \\frac{n - 1}{n - p - 1} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( n \\)'}</MathJax>: Number of observations.</li>
              <li><MathJax inline>{'\\( p \\)'}</MathJax>: Number of predictors (independent variables).</li>
            </ul>
          </section>

          {/* Mean Absolute Percentage Error (MAPE) */}
          <section>
            <h2>Mean Absolute Percentage Error (MAPE)</h2>
            <p>
              <strong>Mean Absolute Percentage Error (MAPE)</strong> expresses the error as a percentage of the actual values.
            </p>
            <MathJax>
              {'\\[ \\text{MAPE} = \\frac{100\\%}{n} \\sum_{i=1}^{n} \\left| \\frac{ y_i - \\hat{y}_i }{ y_i } \\right| \\]'}
            </MathJax>
            <p>
              MAPE is useful when the scale of the data is important, but it has limitations when actual values are zero or close to zero.
            </p>
          </section>

          {/* Explained Variance Score */}
          <section>
            <h2>Explained Variance Score</h2>
            <p>
              The <strong>Explained Variance Score</strong> measures the proportion of variance explained by the model, similar to <MathJax inline>{'\\( R^2 \\)'}</MathJax>.
            </p>
            <MathJax>
              {'\\[ \\text{Explained Variance} = 1 - \\frac{ \\text{Var}( y - \\hat{y} ) }{ \\text{Var}( y ) } \\]'}
            </MathJax>
            <p>
              Values range from 1 (perfect prediction) to negative values (worse than predicting the mean).
            </p>
          </section>

          {/* Comparison of Metrics */}
          <section>
            <h2>Comparison of Regression Metrics</h2>
            <p>The following table summarizes the key characteristics of each metric:</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Interpretation</th>
                  <th>Sensitivity to Outliers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MSE</td>
                  <td>Average squared error</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>RMSE</td>
                  <td>Square root of MSE</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>MAE</td>
                  <td>Average absolute error</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td><MathJax inline>{'\\( R^2 \\)'}</MathJax></td>
                  <td>Proportion of variance explained</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>Adjusted <MathJax inline>{'\\( R^2 \\)'}</MathJax></td>
                  <td>Adjusted for number of predictors</td>
                  <td>Moderate</td>
                </tr>
                <tr>
                  <td>MAPE</td>
                  <td>Average percentage error</td>
                  <td>Can be high</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Example: Calculating Metrics */}
          <section>
            <h2>Example: Calculating Regression Metrics</h2>
            <p>Consider the following actual and predicted values:</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Data Point</th>
                  <th>Actual Value (<MathJax inline>{'\\( y_i \\)'}</MathJax>)</th>
                  <th>Predicted Value (<MathJax inline>{'\\( \\hat{y}_i \\)'}</MathJax>)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>3.0</td>
                  <td>2.5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>7.0</td>
                  <td>7.5</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>5.0</td>
                  <td>5.0</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>9.0</td>
                  <td>10.0</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>11.0</td>
                  <td>11.5</td>
                </tr>
              </tbody>
            </table>
            <h3>Calculations:</h3>
            <ul>
              <li>
                <strong>MSE:</strong>
                <MathJax>
                  {'\\[ \\text{MSE} = \\frac{1}{5} \\left( (3.0 - 2.5)^2 + (7.0 - 7.5)^2 + (5.0 - 5.0)^2 + (9.0 - 10.0)^2 + (11.0 - 11.5)^2 \\right) = 0.5 \\]'}
                </MathJax>
              </li>
              <li>
                <strong>RMSE:</strong>
                <MathJax>
                  {'\\[ \\text{RMSE} = \\sqrt{0.5} \\approx 0.707 \\]'}
                </MathJax>
              </li>
              <li>
                <strong>MAE:</strong>
                <MathJax>
                  {'\\[ \\text{MAE} = \\frac{1}{5} \\left( |3.0 - 2.5| + |7.0 - 7.5| + |5.0 - 5.0| + |9.0 - 10.0| + |11.0 - 11.5| \\right) = 0.6 \\]'}
                </MathJax>
              </li>
              <li>
                <strong><MathJax inline>{'\\( R^2 \\)'}</MathJax>:</strong>
                <MathJax>
                  {'\\[ R^2 = 1 - \\frac{ \\sum_{i=1}^{5} ( y_i - \\hat{y}_i )^2 }{ \\sum_{i=1}^{5} ( y_i - \\bar{y} )^2 } \\]'}
                </MathJax>
                <p>
                  First, calculate the mean of actual values:
                  <MathJax inline>{'\\( \\bar{y} = \\frac{3.0 + 7.0 + 5.0 + 9.0 + 11.0}{5} = 7.0 \\)'}</MathJax>
                </p>
                <p>
                  Then calculate the sums:
                  <MathJax inline>{'\\( \\sum ( y_i - \\hat{y}_i )^2 = 2.5 \\)'}</MathJax>, <MathJax inline>{'\\( \\sum ( y_i - \\bar{y} )^2 = 40 \\)'}</MathJax>
                </p>
                <MathJax>
                  {'\\[ R^2 = 1 - \\frac{2.5}{40} = 1 - 0.0625 = 0.9375 \\]'}
                </MathJax>
              </li>
            </ul>
          </section>

          {/* When to Use Each Metric */}
          <section>
            <h2>When to Use Each Metric</h2>
            <ul>
              <li>
                <strong>MSE/RMSE:</strong> When you want to penalize larger errors more severely; sensitive to outliers.
              </li>
              <li>
                <strong>MAE:</strong> When you prefer all errors to contribute proportionally; less sensitive to outliers.
              </li>
              <li>
                <strong><MathJax inline>{'\\( R^2 \\)'}</MathJax>:</strong> When you want to understand the proportion of variance explained by the model.
              </li>
              <li>
                <strong>Adjusted <MathJax inline>{'\\( R^2 \\)'}</MathJax>:</strong> When comparing models with different numbers of predictors.
              </li>
              <li>
                <strong>MAPE:</strong> When you need to express errors as percentages; avoid when actual values can be zero.
              </li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Scale of the Data</h3>
            <p>
              Metrics like MSE and RMSE are scale-dependent. If comparing models on different datasets or scales, consider using normalized metrics.
            </p>
            <h3>Outliers</h3>
            <p>
              Choose metrics based on the presence of outliers. MAE is more robust to outliers than MSE or RMSE.
            </p>
            <h3>Interpreting <MathJax inline>{'\\( R^2 \\)'}</MathJax></h3>
            <p>
              A high <MathJax inline>{'\\( R^2 \\)'}</MathJax> does not necessarily mean the model is good. It does not account for overfitting or the appropriateness of the model.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Regression Metrics in Python</h2>
            <p>Here's how to compute regression metrics using scikit-learn:</p>
            <pre className="code-block">
              {`from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
import numpy as np

# Actual and predicted values
y_true = np.array([3.0, 7.0, 5.0, 9.0, 11.0])
y_pred = np.array([2.5, 7.5, 5.0, 10.0, 11.5])

# Calculate metrics
mse = mean_squared_error(y_true, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_true, y_pred)
r2 = r2_score(y_true, y_pred)

print(f"MSE: {mse}")
print(f"RMSE: {rmse}")
print(f"MAE: {mae}")
print(f"R-squared: {r2}")
`}
            </pre>
            <p>The output will display the calculated metrics.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Understanding evaluation metrics for regression is essential for selecting and fine-tuning models that predict continuous outcomes. By choosing appropriate metrics, you can better assess model performance and make informed decisions during model development.
            </p>
            <p>Next, let's explore techniques for improving regression models and handling common challenges.</p>
            <Link to="/categories/model-evaluation/roc-auc" className="next-button">
              Proceed to ROC Curve and AUC
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default RegressionMetrics;
