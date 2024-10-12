import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the CSS you provided

const IntroductionToSupervisedLearning = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Introduction to Supervised Learning</h1>
          <p>Understanding the Basics of Predictive Modeling with Labeled Data</p>
        </header>

        <div className="content">
         {/* What is Supervised Learning */}
         <section>
            <h2>What is Supervised Learning?</h2>
            <p>
              <strong>Supervised learning</strong> is a type of machine learning where models are trained using labeled data. In this approach, the algorithm learns a mapping from input variables <MathJax inline>{'\\( X \\)'}</MathJax> to an output variable <MathJax inline>{'\\( Y \\)'}</MathJax> by analyzing many input-output pairs.
            </p>
            <p>
              The goal is to learn a function <MathJax inline>{'\\( f: X \\rightarrow Y \\)'}</MathJax> that makes accurate predictions of <MathJax inline>{'\\( Y \\)'}</MathJax> for new, unseen inputs <MathJax inline>{'\\( X \\)'}</MathJax>.
            </p>
          </section>

          
          {/* Types of Supervised Learning */}
          <section>
            <h2>Types of Supervised Learning</h2>
            <p>Supervised learning can be broadly categorized into two types:</p>
            <ul>
              <li>
                <strong>Regression:</strong> Predicting continuous numerical values.
              </li>
              <li>
                <strong>Classification:</strong> Predicting discrete categories or class labels.
              </li>
            </ul>
          </section>

          {/* Examples of Supervised Learning */}
          <section>
            <h2>Examples of Supervised Learning</h2>
            <h3>Regression Example</h3>
            <p>
              Predicting housing prices based on features like size, location, and number of bedrooms.
            </p>
            <h3>Classification Example</h3>
            <p>
              Classifying emails as spam or not spam based on their content.
            </p>
          </section>

          {/* How Does Supervised Learning Work */}
          <section>
            <h2>How Does Supervised Learning Work?</h2>
            <p>
              Supervised learning involves the following steps:
            </p>
            <ol>
              <li>
                <strong>Data Collection:</strong> Gather a dataset with input features and corresponding labels.
              </li>
              <li>
                <strong>Data Preprocessing:</strong> Clean and prepare the data for training.
              </li>
              <li>
                <strong>Model Selection:</strong> Choose an appropriate algorithm (e.g., linear regression, decision tree).
              </li>
              <li>
                <strong>Training:</strong> Use the training data to teach the model to make predictions.
              </li>
              <li>
                <strong>Evaluation:</strong> Assess the model's performance on a separate test dataset.
              </li>
              <li>
                <strong>Prediction:</strong> Use the trained model to make predictions on new data.
              </li>
            </ol>
          </section>

          {/* Mathematical Formulation */}
          <section>
            <h2>Mathematical Formulation</h2>
            <p>
              The supervised learning problem can be formulated as finding a function <MathJax inline>{'\\( f \\)'}</MathJax> that minimizes the loss function over the training data:
            </p>
            <MathJax>
              {'\\[ \\min_f \\; \\frac{1}{n} \\sum_{i=1}^{n} L\\left( f(x_i), y_i \\right) \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( n \\)'}</MathJax>: Number of training examples.</li>
              <li><MathJax inline>{'\\( L \\)'}</MathJax>: Loss function measuring the difference between predicted and actual values.</li>
              <li><MathJax inline>{'\\( x_i \\)'}</MathJax>: Input features for the <MathJax inline>{'\\( i \\)'}</MathJax>-th example.</li>
              <li><MathJax inline>{'\\( y_i \\)'}</MathJax>: Actual output (label) for the <MathJax inline>{'\\( i \\)'}</MathJax>-th example.</li>
            </ul>
          </section>

          {/* Common Algorithms */}
          <section>
            <h2>Common Algorithms in Supervised Learning</h2>
            <ul>
              <li><strong>Linear Regression:</strong> For regression tasks predicting continuous outcomes.</li>
              <li><strong>Logistic Regression:</strong> For binary classification tasks.</li>
              <li><strong>Decision Trees:</strong> Tree-like models for both regression and classification.</li>
              <li><strong>Support Vector Machines (SVM):</strong> Powerful models for classification and regression.</li>
              <li><strong>k-Nearest Neighbors (k-NN):</strong> A simple algorithm that predicts based on closest training examples.</li>
              <li><strong>Neural Networks:</strong> Models inspired by the human brain, capable of capturing complex patterns.</li>
            </ul>
          </section>

          {/* Advantages and Disadvantages */}
          <section>
            <h2>Advantages and Disadvantages of Supervised Learning</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Produces accurate models for many types of problems.</li>
              <li>Can handle both linear and non-linear relationships.</li>
              <li>Wide range of algorithms to choose from.</li>
            </ul>
            <h3>Disadvantages</h3>
            <ul>
              <li>Requires labeled data, which can be time-consuming and costly to obtain.</li>
              <li>Performance depends heavily on the quality of the data.</li>
              <li>May not generalize well to unseen data if overfitting occurs.</li>
            </ul>
          </section>

          {/* When to Use Supervised Learning */}
          <section>
            <h2>When to Use Supervised Learning</h2>
            <p>
              Supervised learning is ideal when you have a clear idea of what you want to predict and have historical data with labels. It's commonly used in:
            </p>
            <ul>
              <li>Predictive modeling (e.g., forecasting sales, stock prices).</li>
              <li>Classification tasks (e.g., image recognition, sentiment analysis).</li>
              <li>Risk assessment (e.g., credit scoring).</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>Now that you have an understanding of supervised learning, let's dive deeper into regression techniques.</p>
            <Link to="/categories/supervised-learning/regression" className="next-button">
              Proceed to Regression
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default IntroductionToSupervisedLearning;
