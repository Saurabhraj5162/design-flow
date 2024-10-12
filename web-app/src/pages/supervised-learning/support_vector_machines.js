import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the existing CSS

const SupportVectorMachines = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Support Vector Machines (SVM) in Supervised Learning</h1>
          <p>A Powerful Algorithm for Classification and Regression Tasks</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Support Vector Machines</h2>
            <p>
              <strong>Support Vector Machines (SVM)</strong> are supervised learning algorithms used for classification and regression tasks. They are particularly well-suited for classification of complex but small- or medium-sized datasets. SVMs aim to find the optimal hyperplane that separates data points of different classes with the maximum margin.
            </p>
            <p>
              The main idea behind SVM is to transform the data into a higher-dimensional space where it becomes easier to segregate using a hyperplane. SVMs are effective in high-dimensional spaces and are versatile thanks to the use of different kernel functions.
            </p>
          </section>

          {/* The Concept of Hyperplanes and Margins */}
          <section>
            <h2>The Concept of Hyperplanes and Margins</h2>
            <p>
              A <strong>hyperplane</strong> is a decision boundary that separates different classes in the feature space. In a two-dimensional space, a hyperplane is a line; in three dimensions, it is a plane; and in higher dimensions, it is called a hyperplane.
            </p>
            <p>
              The <strong>margin</strong> is the distance between the hyperplane and the nearest data point from each class. SVM aims to find the hyperplane that maximizes this margin, which leads to better generalization on unseen data.
            </p>

            <h3>Mathematical Representation</h3>
            <p>
              For a binary classification problem, the equation of the hyperplane in the feature space can be represented as:
            </p>
            <MathJax>
              {'\\[ w^T x + b = 0 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( w \\)'}</MathJax>: Weight vector perpendicular to the hyperplane.</li>
              <li><MathJax inline>{'\\( x \\)'}</MathJax>: Input feature vector.</li>
              <li><MathJax inline>{'\\( b \\)'}</MathJax>: Bias term.</li>
            </ul>
          </section>

          {/* Support Vectors */}
          <section>
            <h2>Support Vectors</h2>
            <p>
              The data points that are closest to the hyperplane are called <strong>support vectors</strong>. These points influence the position and orientation of the hyperplane. The optimal hyperplane is determined based only on these support vectors.
            </p>
            <p>
              By focusing on the support vectors, SVM becomes robust to outliers and provides better generalization.
            </p>
          </section>

          {/* The Optimization Problem */}
          <section>
            <h2>The Optimization Problem</h2>
            <p>
              SVM aims to solve the following optimization problem to find the hyperplane with the maximum margin:
            </p>
            <MathJax>
              {'\\[ \\min_{w, b} \\; \\frac{1}{2} \\| w \\|^2 \\]'}
            </MathJax>
            <p>Subject to the constraints:</p>
            <MathJax>
              {'\\[ y_i (w^T x_i + b) \\geq 1 \\quad \\text{for all } i \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( y_i \\)'}</MathJax>: Class label of the <MathJax inline>{'\\( i \\)'}</MathJax>-th training example (either +1 or -1).</li>
              <li><MathJax inline>{'\\( x_i \\)'}</MathJax>: Feature vector of the <MathJax inline>{'\\( i \\)'}</MathJax>-th training example.</li>
            </ul>
            <p>
              The objective is to minimize the norm of the weight vector <MathJax inline>{'\\( \\| w \\|'}</MathJax>, which maximizes the margin between the two classes.
            </p>
          </section>

          {/* Soft Margin and Slack Variables */}
          <section>
            <h2>Soft Margin and Slack Variables</h2>
            <p>
              In real-world data, perfect separation of classes may not be possible due to noise or overlapping classes. To handle this, SVM introduces a <strong>soft margin</strong> by allowing some misclassifications. This is achieved using <strong>slack variables</strong> <MathJax inline>{'\\( \\xi_i \\geq 0 \\)'}</MathJax>.
            </p>
            <p>The optimization problem becomes:</p>
            <MathJax>
              {'\\[ \\min_{w, b} \\; \\frac{1}{2} \\| w \\|^2 + C \\sum_{i=1}^{n} \\xi_i \\]'}
            </MathJax>
            <p>Subject to:</p>
            <MathJax>
              {'\\[ y_i (w^T x_i + b) \\geq 1 - \\xi_i \\quad \\text{for all } i \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( \\xi_i \\)'}</MathJax>: Slack variable for the <MathJax inline>{'\\( i \\)'}</MathJax>-th example.</li>
              <li><MathJax inline>{'\\( C \\)'}</MathJax>: Regularization parameter that controls the trade-off between maximizing the margin and minimizing the misclassification error.</li>
            </ul>
          </section>

          {/* Kernel Trick */}
          <section>
            <h2>The Kernel Trick</h2>
            <p>
              Often, data is not linearly separable in the original feature space. To address this, SVM uses the <strong>kernel trick</strong> to map data into a higher-dimensional space where it becomes linearly separable.
            </p>
            <p>
              A kernel function computes the inner product of two data points in the higher-dimensional space without explicitly performing the transformation. Common kernel functions include:
            </p>
            <ul>
              <li>
                <strong>Linear Kernel:</strong> <MathJax inline>{'\\( K(x_i, x_j) = x_i^T x_j \\)'}</MathJax>
              </li>
              <li>
                <strong>Polynomial Kernel:</strong> <MathJax inline>{'\\( K(x_i, x_j) = (\\gamma x_i^T x_j + r)^d \\)'}</MathJax>
              </li>
              <li>
                <strong>Radial Basis Function (RBF) Kernel:</strong> <MathJax inline>{'\\( K(x_i, x_j) = \\exp(-\\gamma \\| x_i - x_j \\|^2) \\)'}</MathJax>
              </li>
              <li>
                <strong>Sigmoid Kernel:</strong> <MathJax inline>{'\\( K(x_i, x_j) = \\tanh(\\gamma x_i^T x_j + r) \\)'}</MathJax>
              </li>
            </ul>
            <p>
              By choosing an appropriate kernel function, SVM can handle complex, non-linear relationships in the data.
            </p>
          </section>

          {/* SVM for Regression (SVR) */}
          <section>
            <h2>SVM for Regression (Support Vector Regression)</h2>
            <p>
              Support Vector Machines can also be used for regression tasks, known as <strong>Support Vector Regression (SVR)</strong>. SVR attempts to fit the best line within a threshold value, called <MathJax inline>{'\\( \\epsilon \\)'}</MathJax>-insensitive tube, where deviations smaller than <MathJax inline>{'\\( \\epsilon \\)'}</MathJax> are ignored.
            </p>
            <p>The optimization problem for SVR is:</p>
            <MathJax>
              {'\\[ \\min_{w, b} \\; \\frac{1}{2} \\| w \\|^2 + C \\sum_{i=1}^{n} (\\xi_i + \\xi_i^*) \\]'}
            </MathJax>
            <p>Subject to:</p>
            <MathJax>
              {'\\[ \\begin{cases} y_i - w^T x_i - b \\leq \\epsilon + \\xi_i \\\\ w^T x_i + b - y_i \\leq \\epsilon + \\xi_i^* \\\\ \\xi_i, \\xi_i^* \\geq 0 \\end{cases} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( \\xi_i, \\xi_i^* \\)'}</MathJax>: Slack variables for exceeding the <MathJax inline>{'\\( \\epsilon \\)'}</MathJax>-insensitive zone.</li>
              <li><MathJax inline>{'\\( \\epsilon \\)'}</MathJax>: Width of the margin (tube) where no penalty is given to errors.</li>
            </ul>
          </section>

          {/* Advantages and Disadvantages */}
          <section>
            <h2>Advantages and Disadvantages of SVM</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Effective in high-dimensional spaces.</li>
              <li>Works well when the number of dimensions exceeds the number of samples.</li>
              <li>Uses a subset of training points (support vectors), making it memory efficient.</li>
              <li>Versatile with different kernel functions for decision functions.</li>
            </ul>
            <h3>Disadvantages</h3>
            <ul>
              <li>Not suitable for very large datasets due to high computational complexity.</li>
              <li>Less effective on noisy data with overlapping classes.</li>
              <li>Choice of kernel and hyperparameters is crucial and may require extensive cross-validation.</li>
            </ul>
          </section>

          {/* Example */}
          <section>
            <h2>Example: Classifying Handwritten Digits</h2>
            <p>
              Consider the task of classifying handwritten digits (0-9) using pixel intensity values as features. The data is complex and not linearly separable in the original feature space.
            </p>
            <p>
              By using an SVM with an RBF kernel, we can map the data into a higher-dimensional space where a hyperplane can effectively separate the digits. The SVM model can achieve high accuracy in classifying new, unseen handwritten digits.
            </p>
          </section>

          {/* Applications */}
          <section>
            <h2>Applications of Support Vector Machines</h2>
            <p>SVMs are widely used in various domains due to their effectiveness:</p>
            <ul>
              <li><strong>Text Classification:</strong> Spam detection, sentiment analysis.</li>
              <li><strong>Image Recognition:</strong> Object detection, facial recognition.</li>
              <li><strong>Bioinformatics:</strong> Protein classification, gene expression analysis.</li>
              <li><strong>Finance:</strong> Stock price prediction, risk assessment.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>You've gained a comprehensive understanding of Support Vector Machines in supervised learning.</p>
            <Link to="/categories/supervised-learning/neural-networks" className="next-button">
              Proceed to Neural Networks
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default SupportVectorMachines;
