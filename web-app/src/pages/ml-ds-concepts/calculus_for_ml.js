import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './ml_ds_concept_pages.css'; // Reusing the CSS file from Linear Algebra

const CalculusForML = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Calculus for Machine Learning</h1>
          <p>Understanding Derivatives and Optimization</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              Calculus is a branch of mathematics that studies how things change.
              In machine learning, calculus is used for optimization, helping us
              find the best parameters for our models by minimizing error functions.
            </p>
          </section>

          {/* Derivatives */}
          <section>
            <h2>Derivatives</h2>
            <p>
              The <strong>derivative</strong> of a function measures how the function's
              output value changes as its input changes. It's the fundamental tool for
              finding the slope or rate of change at any point on a curve.
            </p>
            <h3>Notation</h3>
            <p>
              If we have a function <MathJax inline>{'\\( f(x) \\)'}</MathJax>, the derivative
              is denoted as:
            </p>
            <MathJax>
              {'\\[ f\'(x) = \\frac{df}{dx} \\]'}
            </MathJax>

            <h3>Example</h3>
            <p>
              Given <MathJax inline>{'\\( f(x) = x^2 \\)'}</MathJax>, the derivative is:
            </p>
            <MathJax>
              {'\\[ f\'(x) = \\frac{d}{dx} x^2 = 2x \\]'}
            </MathJax>
          </section>

          {/* Partial Derivatives */}
          <section>
            <h2>Partial Derivatives</h2>
            <p>
              In functions with multiple variables, a <strong>partial derivative</strong>
              measures how the function changes as one variable changes, keeping the
              other variables constant.
            </p>
            <h3>Notation</h3>
            <p>
              For a function <MathJax inline>{'\\( f(x, y) \\)'}</MathJax>, the partial
              derivative with respect to <MathJax inline>{'\\( x \\)'}</MathJax> is:
            </p>
            <MathJax>
              {'\\[ \\frac{\\partial f}{\\partial x} \\]'}
            </MathJax>

            <h3>Example</h3>
            <p>
              Given <MathJax inline>{'\\( f(x, y) = x^2 y + y^3 \\)'}</MathJax>, the partial
              derivative with respect to <MathJax inline>{'\\( x \\)'}</MathJax> is:
            </p>
            <MathJax>
              {'\\[ \\frac{\\partial f}{\\partial x} = 2x y \\]'}
            </MathJax>
            <p>
              And the partial derivative with respect to <MathJax inline>{'\\( y \\)'}</MathJax> is:
            </p>
            <MathJax>
              {'\\[ \\frac{\\partial f}{\\partial y} = x^2 + 3y^2 \\]'}
            </MathJax>
          </section>

          {/* Gradient */}
          <section>
            <h2>Gradient</h2>
            <p>
              The <strong>gradient</strong> of a function is a vector that contains all
              the partial derivatives of the function with respect to its variables.
              It points in the direction of the greatest rate of increase of the function.
            </p>
            <h3>Notation</h3>
            <p>
              For a function <MathJax inline>{'\\( f(x, y, z) \\)'}</MathJax>, the gradient is:
            </p>
            <MathJax>
              {'\\[ \\nabla f = \\begin{bmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\\\ \\frac{\\partial f}{\\partial z} \\end{bmatrix} \\]'}
            </MathJax>

            <h3>Example</h3>
            <p>
              Given <MathJax inline>{'\\( f(x, y) = 3x + 4y \\)'}</MathJax>, the gradient is:
            </p>
            <MathJax>
              {'\\[ \\nabla f = \\begin{bmatrix} \\frac{\\partial f}{\\partial x} \\\\ \\frac{\\partial f}{\\partial y} \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix} \\]'}
            </MathJax>
          </section>

          {/* Chain Rule */}
          <section>
            <h2>Chain Rule</h2>
            <p>
              The <strong>chain rule</strong> is used to compute the derivative of a
              composite function. It allows us to differentiate complex functions by
              breaking them down into their constituent parts.
            </p>
            <h3>Formula</h3>
            <p>
              If <MathJax inline>{'\\( y = f(u) \\)'}</MathJax> and <MathJax inline>{'\\( u = g(x) \\)'}</MathJax>,
              then the derivative of <MathJax inline>{'\\( y \\)'}</MathJax> with respect to <MathJax inline>{'\\( x \\)'}</MathJax> is:
            </p>
            <MathJax>
              {'\\[ \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} \\]'}
            </MathJax>

            <h3>Example</h3>
            <p>
              Given <MathJax inline>{'\\( y = (2x + 3)^2 \\)'}</MathJax>, find <MathJax inline>{'\\( \\frac{dy}{dx} \\)'}</MathJax>.
            </p>
            <p>
              Let <MathJax inline>{'\\( u = 2x + 3 \\)'}</MathJax>, so <MathJax inline>{'\\( y = u^2 \\)'}</MathJax>.
            </p>
            <p>
              Then:
            </p>
            <MathJax>
              {'\\[ \\frac{dy}{du} = 2u \\quad \\text{and} \\quad \\frac{du}{dx} = 2 \\]'}
            </MathJax>
            <p>
              Therefore:
            </p>
            <MathJax>
              {'\\[ \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} = 2u \\times 2 = 4(2x + 3) \\]'}
            </MathJax>
          </section>

          {/* Optimization in Machine Learning */}
          <section>
            <h2>Optimization in Machine Learning</h2>
            <p>
              In machine learning, we often aim to minimize a loss function to improve
              the performance of a model. Calculus provides the tools to find the minimum
              of functions using derivatives.
            </p>

            <h3>Gradient Descent</h3>
            <p>
              <strong>Gradient Descent</strong> is an optimization algorithm that iteratively
              moves towards the minimum of a function by taking steps proportional to the
              negative of the gradient.
            </p>
            <h4>Update Rule</h4>
            <MathJax>
              {'\\[ \\theta = \\theta - \\alpha \\nabla J(\\theta) \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\theta \\)'}</MathJax>: Parameters of the model
              </li>
              <li>
                <MathJax inline>{'\\( \\alpha \\)'}</MathJax>: Learning rate (step size)
              </li>
              <li>
                <MathJax inline>{'\\( \\nabla J(\\theta) \\)'}</MathJax>: Gradient of the loss function with respect to the parameters
              </li>
            </ul>

            <h3>Example</h3>
            <p>
              Suppose we have a loss function <MathJax inline>{'\\( J(\\theta) = (\\theta - 3)^2 \\)'}</MathJax>.
              We want to find the value of <MathJax inline>{'\\( \\theta \\)'}</MathJax> that minimizes this function.
            </p>
            <p>
              The derivative is:
            </p>
            <MathJax>
              {'\\[ \\frac{dJ}{d\\theta} = 2(\\theta - 3) \\]'}
            </MathJax>
            <p>
              Using gradient descent, we update <MathJax inline>{'\\( \\theta \\)'}</MathJax> as:
            </p>
            <MathJax>
              {'\\[ \\theta_{\text{new}} = \\theta_{\text{old}} - \\alpha \\times 2(\\theta_{\text{old}} - 3) \\]'}
            </MathJax>
            <p>
              By iteratively applying this update, <MathJax inline>{'\\( \\theta \\)'}</MathJax> will converge to 3.
            </p>
          </section>

          {/* Integrals */}
          <section>
            <h2>Integrals</h2>
            <p>
              An <strong>integral</strong> represents the area under a curve and can be
              thought of as the accumulation of quantities. In machine learning, integrals
              are used in probability and in computing expectations.
            </p>
            <h3>Notation</h3>
            <p>
              The definite integral of a function <MathJax inline>{'\\( f(x) \\)'}</MathJax> from <MathJax inline>{'\\( a \\)'}</MathJax> to <MathJax inline>{'\\( b \\)'}</MathJax> is:
            </p>
            <MathJax>
              {'\\[ \\int_{a}^{b} f(x) \\, dx \\]'}
            </MathJax>

            <h3>Example</h3>
            <p>
              Compute the integral of <MathJax inline>{'\\( f(x) = x \\)'}</MathJax> from 0 to 2:
            </p>
            <MathJax>
              {'\\[ \\int_{0}^{2} x \\, dx = \\left[ \\frac{1}{2} x^2 \\right]_0^2 = \\frac{1}{2} (2)^2 - \\frac{1}{2} (0)^2 = 2 \\]'}
            </MathJax>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>Well done! You've covered the basics of calculus for machine learning.</p>
            <Link to="/categories/foundational-maths/probability-distributions" className="next-button">
              Proceed to Probability Distributions
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default CalculusForML;
