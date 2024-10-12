import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the existing CSS

const OverfittingUnderfitting = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Overfitting and Underfitting in Machine Learning</h1>
          <p>Balancing Model Complexity and Generalization</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              In supervised learning, creating models that generalize well to unseen data is crucial. Two common pitfalls that hinder this goal are <strong>overfitting</strong> and <strong>underfitting</strong>. Understanding these concepts helps in building models that not only perform well on training data but also on new, unseen data.
            </p>
          </section>

          {/* What is Overfitting? */}
          <section>
            <h2>What is Overfitting?</h2>
            <p>
              Overfitting occurs when a model learns the training data too well, including its noise and outliers, to the point where it negatively impacts the model's performance on new data. An overfitted model has high variance and low bias.
            </p>
            <p>
              Essentially, the model becomes overly complex and captures the random fluctuations in the training data as if they were significant patterns. This results in poor generalization.
            </p>

            <h3>Illustration of Overfitting</h3>
            <p>
              Consider fitting a high-degree polynomial to a dataset. The polynomial passes through all data points, including noise, resulting in a convoluted curve that doesn't capture the true underlying relationship.
            </p>
            {/* You can include an illustrative image here */}

            <h3>Consequences of Overfitting</h3>
            <ul>
              <li>Poor performance on test data.</li>
              <li>Complex models that are difficult to interpret.</li>
              <li>Sensitive to small changes in the training data.</li>
            </ul>
          </section>

          {/* What is Underfitting? */}
          <section>
            <h2>What is Underfitting?</h2>
            <p>
              Underfitting occurs when a model is too simple to capture the underlying patterns in the data. An underfitted model has high bias and low variance.
            </p>
            <p>
              The model fails to learn the relationships in the training data, leading to poor performance on both training and test data.
            </p>

            <h3>Illustration of Underfitting</h3>
            <p>
              Using a linear model to fit data that has a quadratic relationship results in a straight line that doesn't capture the curvature of the data.
            </p>
            {/* You can include an illustrative image here */}

            <h3>Consequences of Underfitting</h3>
            <ul>
              <li>Poor performance on training and test data.</li>
              <li>Fails to capture important trends.</li>
              <li>Oversimplified models.</li>
            </ul>
          </section>

          {/* The Bias-Variance Tradeoff */}
          <section>
            <h2>The Bias-Variance Tradeoff</h2>
            <p>
              The bias-variance tradeoff is a fundamental concept that describes the balance between model complexity and generalization.
            </p>
            <p>
              <strong>Bias</strong> refers to the error introduced by approximating a real-world problem, which may be complex, by a simplified model. High bias leads to underfitting.
            </p>
            <p>
              <strong>Variance</strong> refers to the error introduced by the model's sensitivity to fluctuations in the training data. High variance leads to overfitting.
            </p>
            <p>
              The goal is to find a balance that minimizes the total error:
            </p>
            <MathJax>
              {'\\[ \\text{Total Error} = \\text{Bias}^2 + \\text{Variance} + \\text{Irreducible Error} \\]'}
            </MathJax>
          </section>

          {/* Diagnosing Overfitting and Underfitting */}
          <section>
            <h2>Diagnosing Overfitting and Underfitting</h2>
            <p>
              To determine whether a model is overfitting or underfitting, we can analyze its performance on training and validation datasets.
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Training Error</th>
                  <th>Validation Error</th>
                  <th>Conclusion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Underfitting</td>
                  <td>High</td>
                  <td>High</td>
                  <td>Model is too simple (high bias)</td>
                </tr>
                <tr>
                  <td>Good Fit</td>
                  <td>Low</td>
                  <td>Low</td>
                  <td>Model generalizes well</td>
                </tr>
                <tr>
                  <td>Overfitting</td>
                  <td>Low</td>
                  <td>High</td>
                  <td>Model is too complex (high variance)</td>
                </tr>
              </tbody>
            </table>
            <p>
              A large gap between training and validation error indicates overfitting, while high errors in both suggest underfitting.
            </p>
          </section>

          {/* Techniques to Prevent Overfitting */}
          <section>
            <h2>Techniques to Prevent Overfitting</h2>
            <p>Several methods can help reduce overfitting:</p>

            <h3>Cross-Validation</h3>
            <p>
              Use techniques like k-fold cross-validation to evaluate model performance on different subsets of data, ensuring the model generalizes well.
            </p>

            <h3>Regularization</h3>
            <p>
              Introduce a penalty for model complexity by adding a regularization term to the loss function. Common types are:
            </p>
            <ul>
              <li><strong>L1 Regularization (Lasso):</strong> Encourages sparsity by adding the absolute value of coefficients.</li>
              <li><strong>L2 Regularization (Ridge):</strong> Penalizes large coefficients by adding the squared value of coefficients.</li>
            </ul>
            <MathJax>
              {'\\[ \\text{Regularized Loss} = \\text{Loss} + \\lambda \\sum_{i} \\| w_i \\|^p \\]'}
            </MathJax>
            <p>Where <MathJax inline>{'\\( p = 1 \\)'}</MathJax> for L1 and <MathJax inline>{'\\( p = 2 \\)'}</MathJax> for L2 regularization.</p>

            <h3>Pruning (in Decision Trees)</h3>
            <p>
              Remove branches that have little importance to reduce complexity and improve generalization.
            </p>

            <h3>Early Stopping</h3>
            <p>
              Halt training when performance on a validation set begins to degrade, preventing the model from learning noise.
            </p>

            <h3>Data Augmentation</h3>
            <p>
              Increase the size of the training dataset by adding modified versions of existing data, which helps the model generalize better.
            </p>

            <h3>Ensemble Methods</h3>
            <p>
              Combine predictions from multiple models to reduce variance. Techniques include bagging and boosting.
            </p>
          </section>

          {/* Techniques to Address Underfitting */}
          <section>
            <h2>Techniques to Address Underfitting</h2>
            <p>To combat underfitting, consider the following approaches:</p>

            <h3>Increase Model Complexity</h3>
            <p>
              Use a more complex model that can capture the underlying patterns in the data, such as adding more layers or neurons in a neural network.
            </p>

            <h3>Feature Engineering</h3>
            <p>
              Create new features or transform existing ones to provide more information to the model.
            </p>

            <h3>Decrease Regularization</h3>
            <p>
              Reduce the regularization strength to allow the model to fit the training data more closely.
            </p>

            <h3>Increase Training Time</h3>
            <p>
              Train the model for more epochs or iterations to allow it to learn more from the data.
            </p>

            <h3>Collect More Data</h3>
            <p>
              Gathering more data can help the model learn the underlying patterns better.
            </p>
          </section>

          {/* Example: Polynomial Regression */}
          <section>
            <h2>Example: Polynomial Regression</h2>
            <p>
              Suppose we have a dataset with a non-linear relationship between the independent variable <MathJax inline>{'\\( x \\)'}</MathJax> and the dependent variable <MathJax inline>{'\\( y \\)'}</MathJax>.
            </p>
            <p>
              Fitting different degrees of polynomials illustrates underfitting and overfitting:
            </p>
            <ul>
              <li><strong>Degree 1 (Linear Regression):</strong> Underfits the data.</li>
              <li><strong>Degree 4:</strong> Fits the data well.</li>
              <li><strong>Degree 15:</strong> Overfits the data, capturing noise.</li>
            </ul>
            <p>
              By plotting the training and validation errors against the degree of the polynomial, we can identify the optimal complexity.
            </p>
          </section>

          {/* Conclusion */}
          <section>
            <h2>Conclusion</h2>
            <p>
              Balancing bias and variance is essential in machine learning. Understanding overfitting and underfitting allows us to apply appropriate techniques to improve model performance and generalization.
            </p>
          </section>

          
        </div>
      </div>
    </MathJaxContext>
  );
};

export default OverfittingUnderfitting;
