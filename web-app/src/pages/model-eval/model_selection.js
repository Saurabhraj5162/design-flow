import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const ModelSelectionAndHyperparameterTuning = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Model Selection and Hyperparameter Tuning</h1>
          <p>Learn How to Select the Best Model and Tune Hyperparameters Effectively</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              In machine learning, choosing the right model and tuning its hyperparameters are critical steps to achieving optimal performance. Model selection involves comparing different algorithms to find the best fit for your data, while hyperparameter tuning focuses on optimizing the settings of a specific model.
            </p>
          </section>

          {/* Model Selection */}
          <section>
            <h2>Model Selection</h2>
            <p>
              Model selection is the process of selecting a model from a set of candidate models. It involves:
            </p>
            <ul>
              <li>Comparing different algorithms (e.g., linear regression, decision trees, SVMs).</li>
              <li>Evaluating models using cross-validation.</li>
              <li>Choosing the model that best generalizes to unseen data.</li>
            </ul>
            <p>
              Factors to consider during model selection include:
            </p>
            <ul>
              <li><strong>Bias-Variance Tradeoff:</strong> Balancing model complexity and generalization.</li>
              <li><strong>Computational Efficiency:</strong> Considering training time and resource usage.</li>
              <li><strong>Interpretability:</strong> Understanding the model's decisions.</li>
              <li><strong>Scalability:</strong> Handling large datasets.</li>
            </ul>
          </section>

          {/* Hyperparameter Tuning */}
          <section>
            <h2>Hyperparameter Tuning</h2>
            <p>
              Hyperparameters are parameters that are not learned from the data but set prior to the training process. Examples include:
            </p>
            <ul>
              <li>Learning rate in neural networks.</li>
              <li>Number of neighbors in K-NN.</li>
              <li>Depth of a decision tree.</li>
              <li>Regularization strength in linear models.</li>
            </ul>
            <p>
              Tuning hyperparameters involves searching for the optimal set of hyperparameters that result in the best model performance.
            </p>
          </section>

          {/* Techniques for Hyperparameter Tuning */}
          <section>
            <h2>Techniques for Hyperparameter Tuning</h2>
            <h3>Grid Search</h3>
            <p>
              <strong>Grid Search</strong> involves specifying a set of hyperparameter values and trying every possible combination. It's exhaustive but can be computationally expensive.
            </p>
            <h3>Random Search</h3>
            <p>
              <strong>Random Search</strong> randomly samples hyperparameter combinations from specified distributions. It can find good results with fewer iterations compared to grid search.
            </p>
            <h3>Bayesian Optimization</h3>
            <p>
              <strong>Bayesian Optimization</strong> builds a probabilistic model of the objective function and uses it to select the most promising hyperparameters to evaluate.
            </p>
            <h3>Gradient-Based Optimization</h3>
            <p>
              Techniques like <strong>Gradient Descent</strong> can be used for differentiable hyperparameters, adjusting them in the direction that minimizes the validation loss.
            </p>
          </section>

          {/* Cross-Validation in Hyperparameter Tuning */}
          <section>
            <h2>Cross-Validation in Hyperparameter Tuning</h2>
            <p>
              Cross-validation is often used to assess the performance of different hyperparameter settings. By using techniques like K-Fold Cross-Validation, we can obtain a more reliable estimate of model performance.
            </p>
          </section>

          {/* Nested Cross-Validation */}
          <section>
            <h2>Nested Cross-Validation</h2>
            <p>
              <strong>Nested Cross-Validation</strong> is used to evaluate how well a hyperparameter tuning process generalizes to an independent dataset. It involves two loops:
            </p>
            <ul>
              <li>Outer loop: Splits data to assess generalization error.</li>
              <li>Inner loop: Performs hyperparameter tuning.</li>
            </ul>
          </section>

          {/* Regularization */}
          <section>
            <h2>Regularization</h2>
            <p>
              Regularization techniques add a penalty to the loss function to prevent overfitting. Common regularization methods include:
            </p>
            <ul>
              <li><strong>L1 Regularization (Lasso):</strong> Encourages sparsity in the model parameters.</li>
              <li><strong>L2 Regularization (Ridge):</strong> Penalizes large weights to reduce model complexity.</li>
            </ul>
            <MathJax>
              {'\\[ \\text{Loss} = \\text{Loss}_{\\text{original}} + \\lambda \\| w \\| \\]'}
            </MathJax>
            <p>Where <MathJax inline>{'\\( \\lambda \\)'}</MathJax> is the regularization parameter.</p>
          </section>

          {/* Early Stopping */}
          <section>
            <h2>Early Stopping</h2>
            <p>
              <strong>Early Stopping</strong> involves monitoring the model's performance on a validation set during training and stopping when the performance starts to degrade. This helps prevent overfitting.
            </p>
            <img src="/images/early_stopping.png" alt="Early Stopping" className="distribution-image" />
            <p className="image-source">Figure: Illustration of Early Stopping.</p>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Computational Resources</h3>
            <p>
              Hyperparameter tuning can be computationally intensive. Consider using techniques like random search or Bayesian optimization to reduce the number of evaluations.
            </p>
            <h3>Parallelization</h3>
            <p>
              Many hyperparameter tuning methods can be parallelized to speed up the search process.
            </p>
            <h3>Evaluation Metrics</h3>
            <p>
              Choose appropriate evaluation metrics that align with the problem's objectives (e.g., accuracy, precision, recall, F1 score).
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Hyperparameter Tuning in Python</h2>
            <p>Here's how to perform grid search for hyperparameter tuning using scikit-learn:</p>
            <pre className="code-block">
              {`from sklearn.datasets import load_iris
from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

# Load data
iris = load_iris()
X = iris.data
y = iris.target

# Define model
model = SVC()

# Define hyperparameters to tune
param_grid = {
    'C': [0.1, 1, 10],
    'kernel': ['linear', 'rbf'],
    'gamma': ['scale', 'auto']
}

# Perform grid search
grid_search = GridSearchCV(model, param_grid, cv=5, scoring='accuracy')
grid_search.fit(X, y)

print("Best Parameters:", grid_search.best_params_)
print("Best Score:", grid_search.best_score_)
`}
            </pre>
            <p>The output will display the best hyperparameters and the corresponding score.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Model selection and hyperparameter tuning are critical steps in building effective machine learning models. By systematically exploring different models and tuning their hyperparameters, you can achieve optimal performance tailored to your specific problem.
            </p>
            <p>Next, let's explore techniques for model ensembling and boosting.</p>
            <Link to="/categories/model-evaluation/bias-variance-tradeoff" className="next-button">
              Proceed to Bias-Variance Tradeoff
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default ModelSelectionAndHyperparameterTuning;
