import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the existing CSS

const RandomForests = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Random Forests in Supervised Learning</h1>
          <p>An Ensemble Method for Improved Prediction Accuracy</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Random Forests</h2>
            <p>
              <strong>Random Forests</strong> are an ensemble learning method used for both classification and regression tasks. They operate by constructing multiple decision trees during training and outputting the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees.
            </p>
            <p>
              The main idea behind random forests is to combine the predictions of several base estimators to improve generalization and robustness over a single estimator.
            </p>
          </section>

          {/* How Random Forests Work */}
          <section>
            <h2>How Random Forests Work</h2>
            <p>The random forest algorithm involves the following steps:</p>
            <ol>
              <li>
                <strong>Bootstrap Sampling:</strong> From the original dataset, multiple samples are drawn with replacement to create several subsets.
              </li>
              <li>
                <strong>Building Decision Trees:</strong> For each subset, a decision tree is built using a random subset of features at each split.
              </li>
              <li>
                <strong>Aggregation:</strong> The predictions from all trees are combined to make the final prediction.
              </li>
            </ol>
            <p>
              This process reduces variance and helps prevent overfitting, leading to better model performance.
            </p>
          </section>

          {/* Key Concepts */}
          <section>
            <h2>Key Concepts in Random Forests</h2>
            <h3>Bagging (Bootstrap Aggregating)</h3>
            <p>
              Bagging involves training each decision tree on a random subset of the data (with replacement). This introduces diversity among the trees.
            </p>

            <h3>Feature Randomness</h3>
            <p>
              At each split in a tree, a random subset of features is considered. This further decorrelates the trees, improving the ensemble's performance.
            </p>

            <h3>Out-of-Bag (OOB) Error Estimation</h3>
            <p>
              Since each tree is trained on a bootstrap sample, about one-third of the data is not used in training (out-of-bag samples). These OOB samples can be used to estimate the model's performance without the need for a separate validation set.
            </p>
          </section>

          {/* Mathematical Formulation */}
          <section>
            <h2>Mathematical Formulation</h2>
            <p>
              Let's denote the training data as <MathJax inline>{'\\( \\{ (X_i, Y_i) \\}_{i=1}^{n} \\)'}</MathJax>, where <MathJax inline>{'\\( X_i \\)'}</MathJax> is the feature vector and <MathJax inline>{'\\( Y_i \\)'}</MathJax> is the target variable.
            </p>
            <p>The random forest prediction for a new instance <MathJax inline>{'\\( X \\)'}</MathJax> is given by:</p>

            <h3>For Classification</h3>
            <MathJax>
              {'\\[ \\hat{Y} = \\text{mode} \\{ h_b(X) \\}_{b=1}^{B} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( h_b(X) \\)'}</MathJax>: The prediction of the <MathJax inline>{'\\( b^{th} \\)'}</MathJax> tree.</li>
              <li><MathJax inline>{'\\( B \\)'}</MathJax>: Total number of trees.</li>
              <li><MathJax inline>{'\\( \\text{mode} \\)'}</MathJax>: The most frequent class among the predictions.</li>
            </ul>

            <h3>For Regression</h3>
            <MathJax>
              {'\\[ \\hat{Y} = \\frac{1}{B} \\sum_{b=1}^{B} h_b(X) \\]'}
            </MathJax>
            <p>The final prediction is the average of the individual tree predictions.</p>
          </section>

          {/* Advantages and Disadvantages */}
          <section>
            <h2>Advantages and Disadvantages of Random Forests</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Reduces overfitting by averaging multiple trees.</li>
              <li>Handles both numerical and categorical features.</li>
              <li>Provides estimates of feature importance.</li>
              <li>Robust to outliers and noise.</li>
            </ul>
            <h3>Disadvantages</h3>
            <ul>
              <li>Can be computationally intensive with many trees.</li>
              <li>Less interpretable than a single decision tree.</li>
              <li>May not perform well on high-dimensional sparse data.</li>
            </ul>
          </section>

          {/* Feature Importance */}
          <section>
            <h2>Feature Importance in Random Forests</h2>
            <p>
              Random forests can provide estimates of feature importance, which help in understanding the data and model. The importance of a feature can be calculated by measuring the increase in the model's prediction error when the feature's values are permuted.
            </p>
          </section>

          {/* Hyperparameters */}
          <section>
            <h2>Hyperparameters in Random Forests</h2>
            <p>Important hyperparameters to tune include:</p>
            <ul>
              <li><strong>Number of Trees (<MathJax inline>{'\\( B \\)'}</MathJax>):</strong> More trees can improve performance but increase computation time.</li>
              <li><strong>Maximum Depth:</strong> Limits the depth of the trees to prevent overfitting.</li>
              <li><strong>Minimum Samples per Leaf:</strong> The minimum number of samples required to be at a leaf node.</li>
              <li><strong>Number of Features:</strong> Controls the number of features to consider when looking for the best split.</li>
            </ul>
          </section>

          {/* Example */}
          <section>
            <h2>Example: Predicting Customer Churn</h2>
            <p>
              Suppose we have customer data for a telecom company and want to predict whether a customer will churn (leave the service). The dataset includes features like usage patterns, customer service calls, and contract details.
            </p>
            <p>
              By training a random forest classifier on historical data, we can build a model that predicts churn with high accuracy. The ensemble approach helps capture complex patterns in the data.
            </p>
          </section>

          {/* Out-of-Bag Error Estimation */}
          <section>
            <h2>Out-of-Bag Error Estimation</h2>
            <p>
              Out-of-bag (OOB) error estimation is an internal validation method in random forests. Since each tree is trained on a bootstrap sample, about one-third of the data is left out and can be used to test the model. The OOB error is computed as the average error for each training sample using predictions from the trees that did not include that sample.
            </p>
          </section>

          {/* Applications */}
          <section>
            <h2>Applications of Random Forests</h2>
            <p>Random forests are widely used in various domains:</p>
            <ul>
              <li><strong>Finance:</strong> Credit scoring, fraud detection.</li>
              <li><strong>Healthcare:</strong> Disease prediction, patient risk assessment.</li>
              <li><strong>E-commerce:</strong> Recommendation systems, customer segmentation.</li>
              <li><strong>Environmental Science:</strong> Predicting climate patterns, species distribution.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>You've explored the key concepts of random forests in supervised learning.</p>
            <Link to="/categories/supervised-learning/support-vector-machines" className="next-button">
              Proceed to Support Vector Machines
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default RandomForests;
