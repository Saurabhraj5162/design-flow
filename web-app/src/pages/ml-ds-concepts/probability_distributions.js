import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './ml_ds_concept_pages.css'; // Reusing the CSS file from Linear Algebra

const ProbabilityDistributions = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Probability Distributions</h1>
          <p>Understanding Different Types of Distributions</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              Probability distributions describe how the values of a random variable are
              distributed. They are fundamental in statistics and machine learning for
              modeling uncertainty and making predictions.
            </p>
          </section>

          {/* Normal Distribution */}
          <section>
            <h2>Normal Distribution</h2>
            <p>
              The <strong>Normal Distribution</strong>, also known as the Gaussian distribution,
              is a continuous probability distribution that is symmetric about the mean.
              It's characterized by its bell-shaped curve.
            </p>

            <h3>Probability Density Function (PDF)</h3>
            <MathJax>
              {'\\[ f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2} \\left( \\frac{x - \\mu}{\\sigma} \\right)^2} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\mu \\)'}</MathJax>: Mean (average) of the distribution
              </li>
              <li>
                <MathJax inline>{'\\( \\sigma \\)'}</MathJax>: Standard deviation
              </li>
            </ul>

            <h3>Characteristics</h3>
            <ul>
              <li>Symmetric around the mean</li>
              <li>Mean, median, and mode are equal</li>
              <li>Defined by two parameters: mean and standard deviation</li>
            </ul>

            <h3>Graphical Representation</h3>
            <img
            src={`${process.env.PUBLIC_URL}/images/normal-dist.png`}
            alt="Normal Distribution Curve"
            className="distribution-image"
            style={{ width: '600px', height: 'auto' }}
            />

            <p className="image-source">
              Image source: <a href="https://en.wikipedia.org/wiki/File:Normal_Distribution_PDF.svg?source=post_page-----a868283fa127--------------------------------">Wikipedia</a>
            </p>
          </section>

          {/* Binomial Distribution */}
          <section>
            <h2>Binomial Distribution</h2>
            <p>
              The <strong>Binomial Distribution</strong> is a discrete probability distribution
              that summarizes the number of successes in a fixed number of independent trials,
              each with the same probability of success.
            </p>

            <h3>Probability Mass Function (PMF)</h3>
            <MathJax>
              {'\\[ P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( n \\)'}</MathJax>: Number of trials
              </li>
              <li>
                <MathJax inline>{'\\( k \\)'}</MathJax>: Number of successes
              </li>
              <li>
                <MathJax inline>{'\\( p \\)'}</MathJax>: Probability of success on a single trial
              </li>
            </ul>

            <h3>Characteristics</h3>
            <ul>
              <li>Discrete distribution</li>
              <li>Used for modeling number of successes in a fixed number of trials</li>
              <li>Trials are independent</li>
            </ul>

            <h3>Graphical Representation</h3>
            <img
              src={`${process.env.PUBLIC_URL}/images/Binomial_distribution_pmf.svg.png`}
              alt="Binomial Distribution Histogram"
              className="distribution-image"
              style={{ width: '600px', height: 'auto' }}
            />
            <p className="image-source">
              Image source: <a href="https://en.wikipedia.org/wiki/Binomial_distribution?source=post_page-----a868283fa127--------------------------------#/media/File:Binomial_distribution_pmf.svg">Wikipedia</a>
            </p>
          </section>

          {/* Poisson Distribution */}
          <section>
            <h2>Poisson Distribution</h2>
            <p>
              The <strong>Poisson Distribution</strong> is a discrete probability distribution
              that expresses the probability of a given number of events occurring in a fixed
              interval of time or space.
            </p>

            <h3>Probability Mass Function (PMF)</h3>
            <MathJax>
              {'\\[ P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\lambda \\)'}</MathJax>: The average rate (mean number of occurrences)
              </li>
              <li>
                <MathJax inline>{'\\( k \\)'}</MathJax>: The actual number of occurrences
              </li>
            </ul>

            <h3>Characteristics</h3>
            <ul>
              <li>Discrete distribution</li>
              <li>Models the number of times an event occurs in a fixed interval</li>
              <li>Mean and variance are equal to <MathJax inline>{'\\( \\lambda \\)'}</MathJax></li>
            </ul>

            <h3>Graphical Representation</h3>
            <img
              src={`${process.env.PUBLIC_URL}/images/Poisson_pmf.svg.png`}
              alt="Poisson Distribution Histogram"
              className="distribution-image"
              style={{ width: '600px', height: 'auto' }}
            />
            <p className="image-source">
              Image source: <a href="https://en.wikipedia.org/wiki/Poisson_distribution#/media/File:Poisson_pmf.svg">Wikipedia</a>
            </p>
          </section>

        {/* Log-Normal Distribution */}
        <section>
        <h2>Log-Normal Distribution</h2>
        <p>
            The <strong>Log-Normal Distribution</strong> is a continuous probability distribution of a random variable whose logarithm is normally distributed. It's used to model data that are positively skewed and cannot be negative.
        </p>

        <h3>Probability Density Function (PDF)</h3>
        <MathJax>
            {'\\[ f(x) = \\frac{1}{x \\sigma \\sqrt{2\\pi}} e^{-\\frac{(\\ln x - \\mu)^2}{2 \\sigma^2}} \\quad \\text{for } x > 0 \\]'}
        </MathJax>
        <p>Where:</p>
        <ul>
            <li>
            <MathJax inline>{'\\( \\mu \\)'}</MathJax>: Mean of the logarithm of the variable
            </li>
            <li>
            <MathJax inline>{'\\( \\sigma \\)'}</MathJax>: Standard deviation of the logarithm of the variable
            </li>
        </ul>

        <h3>Characteristics</h3>
        <ul>
            <li>Continuous distribution defined only for positive real numbers (<MathJax inline>{'\\( x > 0 \\)'}</MathJax>)</li>
            <li>Skewed to the right (positively skewed)</li>
            <li>Useful for modeling phenomena with multiplicative effects</li>
        </ul>

        <h3>Graphical Representation</h3>
        <img
            src={`${process.env.PUBLIC_URL}/images/Log-normal-pdfs.png`}
            alt="Log-Normal Distribution Curve"
            className="distribution-image"
            style={{ width: '600px', height: 'auto' }}
        />
        <p className="image-source">
            Image source: <a href="https://en.wikipedia.org/wiki/Log-normal_distribution?source=post_page-----a868283fa127--------------------------------#/media/File:Log-normal-pdfs.png">Wikipedia</a>
        </p>
        </section>

        {/* Power Law Distribution */}
        <section>
        <h2>Power Law Distribution</h2>
        <p>
            The <strong>Power Law Distribution</strong> is a type of probability distribution that has the form <MathJax inline>{'\\( P(x) \\propto x^{-\\alpha} \\)'}</MathJax>, where <MathJax inline>{'\\( \\alpha \\)'}</MathJax> is a positive constant. It's used to model phenomena where large events are rare but significant.
        </p>

        <h3>Probability Density Function (PDF)</h3>
        <MathJax>
            {'\\[ f(x) = \\frac{(\\alpha - 1) x_{\\text{min}}^{\\alpha - 1}}{x^{\\alpha}} \\quad \\text{for } x \\geq x_{\\text{min}} \\]'}
        </MathJax>
        <p>Where:</p>
        <ul>
            <li>
            <MathJax inline>{'\\( \\alpha \\)'}</MathJax>: Shape parameter (typically <MathJax inline>{'\\( \\alpha > 1 \\)'}</MathJax>)
            </li>
            <li>
            <MathJax inline>{'\\( x_{\\text{min}} \\)'}</MathJax>: Minimum value of <MathJax inline>{'\\( x \\)'}</MathJax>
            </li>
        </ul>

        <h3>Characteristics</h3>
        <ul>
            <li>Heavy-tailed distribution</li>
            <li>Models distributions where small occurrences are common, but large occurrences are rare</li>
            <li>Applicable in various fields like physics, economics, and social sciences</li>
        </ul>

        <h3>Graphical Representation</h3>
        <img
            src={`${process.env.PUBLIC_URL}/images/Probability_density_function_of_Pareto_distribution.svg.png`}
            alt="Power Law Distribution Curve"
            className="distribution-image"
            style={{ width: '600px', height: 'auto' }}
        />
        <p className="image-source">
            Image source: <a href="https://en.wikipedia.org/wiki/Pareto_distribution?source=post_page-----a868283fa127--------------------------------#/media/File:Probability_density_function_of_Pareto_distribution.svg">Wikipedia</a>
        </p>
        </section>


          {/* Applications */}
          <section>
            <h2>Applications in Machine Learning</h2>
            <p>
              Understanding probability distributions is crucial in machine learning for:
            </p>
            <ul>
              <li>Building statistical models</li>
              <li>Performing hypothesis testing</li>
              <li>Estimating probabilities and making predictions</li>
              <li>Data preprocessing and normalization</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>Great work! You've learned about key probability distributions used in statistics and machine learning.</p>
            <Link to="/foundational-concepts/statistics-probability" className="next-button">
              Review Statistics & Probability
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default ProbabilityDistributions;
