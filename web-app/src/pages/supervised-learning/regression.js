import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the existing CSS

const Regression = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Regression in Supervised Learning</h1>
          <p>Predicting Continuous Outcomes Using Regression Algorithms</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Regression</h2>
            <p>
              <strong>Regression</strong> is a type of supervised learning algorithm used for predicting continuous numerical values. It involves modeling the relationship between a dependent variable and one or more independent variables.
            </p>
            <p>
              The main goal of regression is to find the best-fitting line or curve that represents the data, allowing us to make predictions on new, unseen data.
            </p>
          </section>

          {/* Types of Regression */}
          <section>
            <h2>Types of Regression</h2>
            <p>There are several types of regression algorithms, each suitable for different kinds of data and relationships:</p>
            <ul>
              <li><strong>Linear Regression</strong></li>
              <li><strong>Polynomial Regression</strong></li>
              <li><strong>Ridge Regression</strong></li>
              <li><strong>Lasso Regression</strong></li>
              <li><strong>Elastic Net Regression</strong></li>
            </ul>
          </section>

          {/* Linear Regression */}
          <section>
            <h2>Linear Regression</h2>
            <p>
              Linear regression models the relationship between two variables by fitting a straight line to the data. It assumes a linear relationship between the independent variable <MathJax inline>{'\\( X \\)'}</MathJax> and the dependent variable <MathJax inline>{'\\( Y \\)'}</MathJax>.
            </p>

            <h3>Mathematical Formulation</h3>
            <p>The simple linear regression equation is:</p>
            <MathJax>
              {'\\[ Y = \\beta_0 + \\beta_1 X + \\varepsilon \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( Y \\)'}</MathJax>: Dependent variable (target)</li>
              <li><MathJax inline>{'\\( X \\)'}</MathJax>: Independent variable (feature)</li>
              <li><MathJax inline>{'\\( \\beta_0 \\)'}</MathJax>: Intercept (the value of <MathJax inline>{'\\( Y \\)'}</MathJax> when <MathJax inline>{'\\( X = 0 \\)'}</MathJax>)</li>
              <li><MathJax inline>{'\\( \\beta_1 \\)'}</MathJax>: Slope of the line (the change in <MathJax inline>{'\\( Y \\)'}</MathJax> for a one-unit change in <MathJax inline>{'\\( X \\)'}</MathJax>)</li>
              <li><MathJax inline>{'\\( \\varepsilon \\)'}</MathJax>: Error term (residuals)</li>
            </ul>

            <h3>Example</h3>
            <p>
              Suppose we want to predict the salary of an employee based on years of experience. We collect data on several employees:
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Years of Experience (<MathJax inline>{'\\( X \\)'}</MathJax>)</th>
                  <th>Salary ($) (<MathJax inline>{'\\( Y \\)'}</MathJax>)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>45,000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>50,000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>55,000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>60,000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>65,000</td>
                </tr>
              </tbody>
            </table>
            <p>
              Using linear regression, we fit a line to this data to find the relationship between years of experience and salary. The model might find:
            </p>
            <MathJax>
              {'\\[ \\hat{Y} = 40,000 + 5,000X \\]'}
            </MathJax>
            <p>
              This means that the starting salary is $40,000, and for each additional year of experience, the salary increases by $5,000.
            </p>
          </section>

          {/* Polynomial Regression */}
          <section>
            <h2>Polynomial Regression</h2>
            <p>
              When the relationship between the independent and dependent variables is non-linear, polynomial regression can be used. It models the relationship as an <strong>nth degree polynomial</strong>.
            </p>

            <h3>Mathematical Formulation</h3>
            <p>The polynomial regression equation is:</p>
            <MathJax>
              {'\\[ Y = \\beta_0 + \\beta_1 X + \\beta_2 X^2 + \\beta_3 X^3 + \\dots + \\beta_n X^n + \\varepsilon \\]'}
            </MathJax>
            <p>Where <MathJax inline>{'\\( n \\)'}</MathJax> is the degree of the polynomial.</p>

            <h3>Example</h3>
            <p>
              Suppose we are modeling the growth of a plant over time, and the growth accelerates as time passes. A polynomial regression with a degree of 2 (quadratic) might better fit the data than a straight line.
            </p>
          </section>

          {/* Evaluation Metrics for Regression */}
          <section>
            <h2>Evaluation Metrics for Regression Models</h2>
            <p>To assess the performance of regression models, we use various metrics:</p>

            <h3>Mean Squared Error (MSE)</h3>
            <MathJax>
              {'\\[ \\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} (Y_i - \\hat{Y}_i)^2 \\]'}
            </MathJax>
            <p>
              Measures the average squared difference between the actual and predicted values. Lower MSE indicates a better fit.
            </p>

            <h3>Root Mean Squared Error (RMSE)</h3>
            <MathJax>
              {'\\[ \\text{RMSE} = \\sqrt{\\text{MSE}} \\]'}
            </MathJax>
            <p>
              Provides the standard deviation of the residuals. It is in the same units as the dependent variable.
            </p>

            <h3>Mean Absolute Error (MAE)</h3>
            <MathJax>
              {'\\[ \\text{MAE} = \\frac{1}{n} \\sum_{i=1}^{n} |Y_i - \\hat{Y}_i| \\]'}
            </MathJax>
            <p>
              Calculates the average absolute difference between actual and predicted values.
            </p>

            <h3>Coefficient of Determination (<MathJax inline>{'\\( R^2 \\)'}</MathJax>)</h3>
            <MathJax>
              {'\\[ R^2 = 1 - \\frac{\\sum_{i=1}^{n} (Y_i - \\hat{Y}_i)^2}{\\sum_{i=1}^{n} (Y_i - \\bar{Y})^2} \\]'}
            </MathJax>
            <p>
              Indicates the proportion of variance in the dependent variable that is predictable from the independent variable(s). <MathJax inline>{'\\( R^2 \\)'}</MathJax> ranges from 0 to 1.
            </p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>You've learned the basics of regression in supervised learning.</p>
            <Link to="/categories/supervised-learning/classification" className="next-button">
              Proceed to Classification
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Regression;
