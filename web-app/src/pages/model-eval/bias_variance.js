import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const BiasVarianceTradeoff = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Bias-Variance Tradeoff</h1>
          <p>Exploring the Balance Between Bias and Variance to Improve Model Generalization</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              In machine learning, the <strong>Bias-Variance Tradeoff</strong> is a fundamental concept that describes the relationship between a model's complexity and its ability to generalize to new data. Understanding and managing this tradeoff is crucial for building models that perform well on unseen data.
            </p>
            <p>
              This section explores the bias-variance tradeoff, its implications, and strategies to find the optimal balance between underfitting and overfitting.
            </p>
          </section>

          {/* Understanding Bias and Variance */}
          <section>
            <h2>Understanding Bias and Variance</h2>
            <h3>Bias</h3>
            <p>
              <strong>Bias</strong> refers to the error introduced by approximating a real-world problem, which may be complex, by a much simpler model. High bias can cause an algorithm to miss the relevant relations between features and target outputs, leading to underfitting.
            </p>
            <p>
              An example of high bias is using a linear model to fit non-linear data.
            </p>
            <h3>Variance</h3>
            <p>
              <strong>Variance</strong> refers to the error introduced by the model's sensitivity to fluctuations in the training set. High variance can cause an algorithm to model the random noise in the training data, leading to overfitting.
            </p>
            <p>
              An example of high variance is a model that fits every data point perfectly but fails to generalize to new data.
            </p>
          </section>

          {/* Decomposing Error */}
          <section>
            <h2>Decomposing Prediction Error</h2>
            <p>
              The total expected error of a model can be decomposed into three components:
            </p>
            <MathJax>
              {'\\[ \\text{Error}(x) = \\text{Bias}^2 + \\text{Variance} + \\text{Irreducible Error} \\]'}
            </MathJax>
            <p>
              - <strong>Bias<sup>2</sup>:</strong> The squared difference between the average prediction and the true value.
            </p>
            <p>
              - <strong>Variance:</strong> The variability of model prediction for a given data point.
            </p>
            <p>
              - <strong>Irreducible Error:</strong> The noise inherent in the data that cannot be reduced by any model.
            </p>
          </section>

          {/* Visualizing the Tradeoff */}
          <section>
            <h2>Visualizing the Bias-Variance Tradeoff</h2>
            <p>
              The following graph illustrates how error changes with model complexity:
            </p>
            <img src="/images/bias_variance_tradeoff.png" alt="Bias-Variance Tradeoff" className="distribution-image" />
            <p className="image-source">Figure: Bias-Variance Tradeoff as Model Complexity Increases.</p>
            <p>
              - As model complexity increases:
            </p>
            <ul>
              <li><strong>Bias decreases:</strong> The model can capture more complex patterns.</li>
              <li><strong>Variance increases:</strong> The model becomes more sensitive to training data fluctuations.</li>
            </ul>
            <p>
              The goal is to find the sweet spot where the total error is minimized.
            </p>
          </section>

          {/* Examples */}
          <section>
            <h2>Examples of Bias and Variance</h2>
            <h3>High Bias (Underfitting)</h3>
            <p>
              Using a simple model, such as linear regression, to fit complex, non-linear data results in high bias. The model is too simple to capture the underlying patterns.
            </p>
            <img src="/images/high_bias.png" alt="High Bias Example" className="distribution-image" />
            <p className="image-source">Figure: High Bias Leading to Underfitting.</p>
            <h3>High Variance (Overfitting)</h3>
            <p>
              Using a very complex model, such as a high-degree polynomial regression, can fit the training data perfectly but perform poorly on new data.
            </p>
            <img src="/images/high_variance.png" alt="High Variance Example" className="distribution-image" />
            <p className="image-source">Figure: High Variance Leading to Overfitting.</p>
          </section>

          {/* Strategies to Balance Bias and Variance */}
          <section>
            <h2>Strategies to Balance Bias and Variance</h2>
            <h3>Cross-Validation</h3>
            <p>
              Use cross-validation techniques to estimate model performance on unseen data and select models that generalize well.
            </p>
            <h3>Regularization</h3>
            <p>
              Apply regularization methods, such as L1 (Lasso) and L2 (Ridge), to penalize model complexity and prevent overfitting.
            </p>
            <MathJax>
              {'\\[ \\text{Loss} = \\text{Loss}_{\\text{original}} + \\lambda \\| w \\| \\]'}
            </MathJax>
            <h3>Ensemble Methods</h3>
            <p>
              Use techniques like bagging and boosting to reduce variance by combining multiple models.
            </p>
            <h3>Feature Selection</h3>
            <p>
              Reduce the number of features to simplify the model and decrease variance.
            </p>
            <h3>Increase Training Data</h3>
            <p>
              Collect more data to reduce variance by providing the model with a broader sample of the underlying distribution.
            </p>
          </section>

          {/* Mathematical Formulation */}
          <section>
            <h2>Mathematical Formulation</h2>
            <p>
              Let's consider a target variable <MathJax inline>{'\\( y \\)'}</MathJax>, input variables <MathJax inline>{'\\( x \\)'}</MathJax>, and a model's prediction <MathJax inline>{'\\( \\hat{f}(x) \\)'}</MathJax>.
            </p>
            <p>
              The expected squared error at a point <MathJax inline>{'\\( x \\)'}</MathJax> can be decomposed as:
            </p>
            <MathJax>
              {'\\[ \\begin{align*} \\mathbb{E}[ ( y - \\hat{f}(x) )^2 ] &= \\left( \\mathbb{E}[ \\hat{f}(x) ] - f(x) \\right)^2 + \\mathbb{E}[ ( \\hat{f}(x) - \\mathbb{E}[ \\hat{f}(x) ] )^2 ] + \\sigma^2 \\\\ &= \\text{Bias}^2 + \\text{Variance} + \\text{Irreducible Error} \\end{align*} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><strong>Bias<sup>2</sup>:</strong> Squared difference between the true function <MathJax inline>{'\\( f(x) \\)'}</MathJax> and the expected model prediction.</li>
              <li><strong>Variance:</strong> Variability of the model prediction around its expected value.</li>
              <li><strong>Irreducible Error (<MathJax inline>{'\\( \\sigma^2 \\)'}</MathJax>):</strong> Variance of the noise in the data.</li>
            </ul>
          </section>

          {/* Bias-Variance in Different Models */}
          <section>
            <h2>Bias-Variance in Different Models</h2>
            <p>
              Different models have inherent tendencies towards bias or variance:
            </p>
            <ul>
              <li><strong>Linear Models:</strong> Tend to have high bias and low variance.</li>
              <li><strong>Decision Trees:</strong> Can have low bias and high variance.</li>
              <li><strong>k-NN:</strong> With small <MathJax inline>{'\\( k \\)'}</MathJax>, low bias and high variance; with large <MathJax inline>{'\\( k \\)'}</MathJax>, high bias and low variance.</li>
              <li><strong>Ensemble Methods:</strong> Aim to reduce variance without increasing bias significantly.</li>
            </ul>
          </section>

          {/* Practical Example */}
          <section>
            <h2>Practical Example: Polynomial Regression</h2>
            <p>
              Consider fitting polynomial regression models of different degrees to a dataset.
            </p>
            <h3>Low-Degree Polynomial (High Bias)</h3>
            <p>
              A linear model (<MathJax inline>{'\\( \\text{degree} = 1 \\)'}</MathJax>) may underfit the data, missing the underlying patterns.
            </p>
            <h3>High-Degree Polynomial (High Variance)</h3>
            <p>
              A high-degree polynomial may overfit the training data, capturing noise and performing poorly on new data.
            </p>
            <h3>Optimal Degree</h3>
            <p>
              Selecting a polynomial degree that balances bias and variance minimizes the total error.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Bias-Variance Analysis in Python</h2>
            <p>Here's how to visualize the bias-variance tradeoff using polynomial regression:</p>
            <pre className="code-block">
              {`import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score

# Generate sample data
np.random.seed(42)
n_samples = 30
X = np.sort(np.random.rand(n_samples))
y = np.sin(2 * np.pi * X) + np.random.randn(n_samples) * 0.1
X = X[:, np.newaxis]

# Degrees to test
degrees = [1, 3, 9]

plt.figure(figsize=(15, 5))

for i, degree in enumerate(degrees):
    # Create polynomial features
    poly = PolynomialFeatures(degree)
    X_poly = poly.fit_transform(X)
    
    # Fit model
    model = LinearRegression()
    model.fit(X_poly, y)
    
    # Predict
    X_fit = np.linspace(0, 1, 100)[:, np.newaxis]
    X_fit_poly = poly.transform(X_fit)
    y_pred = model.predict(X_fit_poly)
    
    # Cross-validation score
    scores = cross_val_score(model, X_poly, y, scoring='neg_mean_squared_error', cv=5)
    mse = -scores.mean()
    
    # Plot
    plt.subplot(1, 3, i+1)
    plt.scatter(X, y, label='Data')
    plt.plot(X_fit, y_pred, color='red', label='Model')
    plt.title(f'Degree {degree}\\nMSE: {mse:.2f}')
    plt.xlabel('X')
    plt.ylabel('y')
    plt.legend()

plt.tight_layout()
plt.show()
`}
            </pre>
            <p>The output will display plots showing models of different degrees and their mean squared errors.</p>
          </section>

          {/* Conclusion */}

        </div>
      </div>
    </MathJaxContext>
  );
};

export default BiasVarianceTradeoff;
