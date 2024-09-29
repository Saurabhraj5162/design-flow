import React from 'react';
import { Link } from 'react-router-dom';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import './statistics_probability.css';

const StatisticsProbability = () => {
    return (
        <MathJaxContext>
      <div className="stats-prob-container">
        <header className="header">
          <h1>Statistics & Probability</h1>
          <p>An Introduction to the Basics</p>
        </header>
  
        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to the world of <strong>Statistics</strong> and <strong>Probability</strong>!
              These are the foundational tools we use to make sense of data and uncertainty in the
              world around us.
            </p>
          </section>
  
          {/* What is Statistics? */}
          <section>
            <h2>What is Statistics?</h2>
            <p>
              <strong>Statistics</strong> is the study of collecting, organizing, analyzing, and
              interpreting data. It helps us understand and draw conclusions from data by providing
              methods to summarize and visualize information.
            </p>
          </section>
  
          {/* Key Concepts in Statistics */}
          <section>
            <h4>Key Concepts in Statistics</h4>
            <ul>
              <li>
                <strong>Mean</strong>: The average value of a set of numbers.
              </li>
              <li>
                <strong>Median</strong>: The middle value when a set of numbers is ordered from least
                to greatest.
              </li>
              <li>
                <strong>Mode</strong>: The number that appears most frequently in a set.
              </li>
              <li>
                <strong>Variance</strong>: A measure of how spread out the numbers are in a set.
              </li>
              <li>
                <strong>Standard Deviation</strong>: The square root of the variance; it shows how much
                the numbers in a set deviate from the mean on average.
              </li>
            </ul>
          </section>

          {/* Section with equations */}

          {/* Mean */}
          <section>
            <h3>Mean</h3>
            <p>
              The <strong>mean</strong> (average) of a set of numbers is calculated using the formula:
            </p>
            <MathJax>
              {'\\[ \\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\bar{x} \\)'}</MathJax>: The mean value
              </li>
              <li>
                <MathJax inline>{'\\( n \\)'}</MathJax>: The number of observations
              </li>
              <li>
                <MathJax inline>{'\\( x_i \\)'}</MathJax>: Each individual value
              </li>
            </ul>
          </section>

          {/* Median */}
          <section>
            <h3>Median</h3>
            <p>
              The <strong>median</strong> is the middle value in a list of numbers sorted in
              ascending or descending order.
            </p>
            <p>
              If the number of observations (<MathJax inline>{'\\( n \\)'}</MathJax>) is odd:
            </p>
            <MathJax>
              {'\\[ \\text{Median} = x_{(\\frac{n+1}{2})} \\]'}
            </MathJax>
            <p>
              If <MathJax inline>{'\\( n \\)'}</MathJax> is even:
            </p>
            <MathJax>
              {'\\[ \\text{Median} = \\frac{ x_{(\\frac{n}{2})} + x_{(\\frac{n}{2} + 1)} }{2} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( x_{(k)} \\)'}</MathJax>: The k-th smallest value in the ordered list
              </li>
            </ul>
          </section>

          {/* Mode */}
          <section>
            <h3>Mode</h3>
            <p>
              The <strong>mode</strong> is the value that appears most frequently in a data set.
            </p>
            <p>
              While there isn't a specific formula for mode, it can be represented as:
            </p>
            <MathJax>
              {'\\[ \\text{Mode} = \\text{Value of } x_i \\text{ with highest frequency} \\]'}
            </MathJax>
          </section>

          {/* Variance */}
          <section>
            <h3>Variance</h3>
            <p>
              The <strong>variance</strong> measures how spread out the numbers are in a data set. It's calculated as:
            </p>
            <MathJax>
              {'\\[ \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} \\left( x_i - \\bar{x} \\right)^2 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\sigma^2 \\)'}</MathJax>: Variance
              </li>
              <li>
                <MathJax inline>{'\\( x_i \\)'}</MathJax>: Each individual value
              </li>
              <li>
                <MathJax inline>{'\\( \\bar{x} \\)'}</MathJax>: The mean value
              </li>
              <li>
                <MathJax inline>{'\\( n \\)'}</MathJax>: The number of observations
              </li>
            </ul>
          </section>

          {/* Standard Deviation */}
          <section>
            <h3>Standard Deviation</h3>
            <p>
              The <strong>standard deviation</strong> is the square root of the variance:
            </p>
            <MathJax>
              {'\\[ \\sigma = \\sqrt{ \\sigma^2 } \\]'}
            </MathJax>
            <p>It represents the average distance of each data point from the mean.</p>
          </section>

          {/* Example Calculation */}
          <section>
            <h3>Example: Calculating Mean, Median, Mode, and Standard Deviation</h3>
            <p>Let's consider the following data set:</p>
            <MathJax>
              {'\\[ \\text{Data Set} = \\{2,\\ 4,\\ 4,\\ 6,\\ 8,\\ 10\\} \\]'}
            </MathJax>

            {/* Mean */}
            <h3>Mean</h3>
            <p>
              The <strong>mean</strong> is calculated using the formula:
            </p>
            <MathJax>
              {'\\[ \\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i \\]'}
            </MathJax>
            <p>Calculating the mean:</p>
            <MathJax>
              {'\\[ \\bar{x} = \\frac{1}{6} (2 + 4 + 4 + 6 + 8 + 10) = \\frac{34}{6} \\approx 5.6667 \\]'}
            </MathJax>

            {/* Median */}
            <h3>Median</h3>
            <p>
              To find the <strong>median</strong>, we arrange the data in ascending order (already ordered):
            </p>
            <MathJax>
              {'\\[ 2,\\ 4,\\ 4,\\ 6,\\ 8,\\ 10 \\]'}
            </MathJax>
            <p>
              Since there are 6 data points (an even number), the median is the average of the
              3rd and 4th values:
            </p>
            <MathJax>
              {'\\[ \\text{Median} = \\frac{4 + 6}{2} = 5 \\]'}
            </MathJax>

            {/* Mode */}
            <h3>Mode</h3>
            <p>
              The <strong>mode</strong> is the number that appears most frequently. In this data set,
              the number 4 appears twice:
            </p>
            <MathJax>
              {'\\[ \\text{Mode} = 4 \\]'}
            </MathJax>

            {/* Standard Deviation */}
            <h3>Standard Deviation</h3>
            <p>
              First, calculate each data point's deviation from the mean and square it:
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th><MathJax inline>{'\\( x_i \\)'}</MathJax></th>
                  <th><MathJax inline>{'\\( x_i - \\bar{x} \\)'}</MathJax></th>
                  <th><MathJax inline>{'\\( (x_i - \\bar{x})^2 \\)'}</MathJax></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2</td>
                  <td><MathJax inline>{'2 - 5.6667 = -3.6667'}</MathJax></td>
                  <td><MathJax inline>{'(-3.6667)^2 = 13.4445'}</MathJax></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><MathJax inline>{'4 - 5.6667 = -1.6667'}</MathJax></td>
                  <td><MathJax inline>{'(-1.6667)^2 = 2.7778'}</MathJax></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><MathJax inline>{'4 - 5.6667 = -1.6667'}</MathJax></td>
                  <td><MathJax inline>{'(-1.6667)^2 = 2.7778'}</MathJax></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><MathJax inline>{'6 - 5.6667 = 0.3333'}</MathJax></td>
                  <td><MathJax inline>{'(0.3333)^2 = 0.1111'}</MathJax></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td><MathJax inline>{'8 - 5.6667 = 2.3333'}</MathJax></td>
                  <td><MathJax inline>{'(2.3333)^2 = 5.4445'}</MathJax></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td><MathJax inline>{'10 - 5.6667 = 4.3333'}</MathJax></td>
                  <td><MathJax inline>{'(4.3333)^2 = 18.7778'}</MathJax></td>
                </tr>
              </tbody>
            </table>
            <p>
              Sum of squared deviations:
            </p>
            <MathJax>
              {'\\[ \\sum_{i=1}^{n} (x_i - \\bar{x})^2 = 13.4445 + 2.7778 + 2.7778 + 0.1111 + 5.4445 + 18.7778 = 43.3335 \\]'}
            </MathJax>
            <p>
              Variance is calculated as:
            </p>
            <MathJax>
              {'\\[ \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2 = \\frac{43.3335}{6} \\approx 7.2223 \\]'}
            </MathJax>
            <p>
              The <strong>standard deviation</strong> is the square root of the variance:
            </p>
            <MathJax>
              {'\\[ \\sigma = \\sqrt{ \\sigma^2 } = \\sqrt{7.2223} \\approx 2.6870 \\]'}
            </MathJax>
          </section>
  
          {/* What is Probability? */}
          <section>
            <h2>What is Probability?</h2>
            <p>
              <strong>Probability</strong> is the study of how likely events are to happen. It gives us
              a way to quantify uncertainty and make predictions about future events based on known
              information.
            </p>
          </section>
  
          {/* Key Concepts in Probability */}
          <section>
            <h4>Key Concepts in Probability</h4>
            <ul>
              <li>
                <strong>Experiment</strong>: An action or process that leads to one or several
                outcomes.
              </li>
              <li>
                <strong>Outcome</strong>: A possible result of an experiment.
              </li>
              <li>
                <strong>Event</strong>: A set of one or more outcomes.
              </li>
              <li>
                <strong>Probability of an Event</strong>: A number between 0 and 1 that represents how
                likely the event is to occur.
              </li>
            </ul>
          </section>
  
          {/* Basic Probability Rules */}
          <section>
            <h3>Basic Probability Rules</h3>
            <ul>
              <li>
                <strong>Addition Rule</strong>: Used to find the probability of either of two events
                happening.
              </li>
              <li>
                <strong>Multiplication Rule</strong>: Used to find the probability of two events
                happening together.
              </li>
            </ul>
          </section>

          <h3>Basic Probability Formula</h3>
            <p>
              The probability of an event <MathJax inline>{'\\( A \\)'}</MathJax> occurring is given by:
            </p>
            <MathJax>
              {'\\[ P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( P(A) \\)'}</MathJax>: Probability of event <MathJax inline>{'\\( A \\)'}</MathJax>
              </li>
              <li>
                <strong>Favorable outcomes</strong>: Outcomes that satisfy event <MathJax inline>{'\\( A \\)'}</MathJax>
              </li>
              <li>
                <strong>Total possible outcomes</strong>: All possible outcomes of the experiment
              </li>
            </ul>

            {/* Example 1 */}
            <h3>Example 1: Rolling a Die</h3>
            <p>
              What is the probability of rolling a 4 on a fair six-sided die?
            </p>
            <p>
              <strong>Solution:</strong>
            </p>
            <ul>
              <li>
                Total possible outcomes: <MathJax inline>{'\\( 6 \\)'}</MathJax> (numbers 1 through 6)
              </li>
              <li>
                Favorable outcomes: <MathJax inline>{'\\( 1 \\)'}</MathJax> (only the number 4)
              </li>
            </ul>
            <p>
              So, the probability is:
            </p>
            <MathJax>
              {'\\[ P(\\text{rolling a 4}) = \\frac{1}{6} \\approx 0.1667 \\]'}
            </MathJax>

            {/* Example 2 */}
            <h3>Example 2: Flipping a Coin</h3>
            <p>
              What is the probability of getting heads when flipping a fair coin?
            </p>
            <p>
              <strong>Solution:</strong>
            </p>
            <ul>
              <li>
                Total possible outcomes: <MathJax inline>{'\\( 2 \\)'}</MathJax> (heads or tails)
              </li>
              <li>
                Favorable outcomes: <MathJax inline>{'\\( 1 \\)'}</MathJax> (heads)
              </li>
            </ul>
            <p>
              So, the probability is:
            </p>
            <MathJax>
              {'\\[ P(\\text{getting heads}) = \\frac{1}{2} = 0.5 \\]'}
            </MathJax>

            {/* Addition Rule of Probability */}
            <h3>Addition Rule</h3>
            <p>
              The probability of event <MathJax inline>{'\\( A \\)'}</MathJax> or event <MathJax inline>{'\\( B \\)'}</MathJax> occurring is:
            </p>
            <MathJax>
              {'\\[ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( P(A \\cup B) \\)'}</MathJax>: Probability of <strong>A or B</strong> occurring
              </li>
              <li>
                <MathJax inline>{'\\( P(A \\cap B) \\)'}</MathJax>: Probability of <strong>both A and B</strong> occurring
              </li>
            </ul>

            {/* Example 3 */}
            <h3>Example 3: Drawing a Card</h3>
            <p>
              In a standard deck of 52 cards, what is the probability of drawing a King or a Heart?
            </p>
            <p>
              <strong>Solution:</strong>
            </p>
            <ul>
              <li>
                <MathJax inline>{'\\( P(\\text{King}) = \\frac{4}{52} \\)'}</MathJax> (since there are 4 Kings)
              </li>
              <li>
                <MathJax inline>{'\\( P(\\text{Heart}) = \\frac{13}{52} \\)'}</MathJax> (since there are 13 Hearts)
              </li>
              <li>
                <MathJax inline>{'\\( P(\\text{King of Hearts}) = \\frac{1}{52} \\)'}</MathJax> (since it's both a King and a Heart)
              </li>
            </ul>
            <p>
              Using the addition rule:
            </p>
            <MathJax>
              {'\\[ P(\\text{King or Heart}) = \\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13} \\approx 0.3077 \\]'}
            </MathJax>

            {/* Multiplication Rule of Probability */}
            <h3>Multiplication Rule</h3>
            <p>
              The probability of both event <MathJax inline>{'\\( A \\)'}</MathJax> and event <MathJax inline>{'\\( B \\)'}</MathJax> occurring is:
            </p>
            <MathJax>
              {'\\[ P(A \\cap B) = P(A) \\times P(B | A) \\]'}
            </MathJax>
            <p>For independent events, where <MathJax inline>{'\\( P(B | A) = P(B) \\)'}</MathJax>, this simplifies to:</p>
            <MathJax>
              {'\\[ P(A \\cap B) = P(A) \\times P(B) \\]'}
            </MathJax>

            {/* Example 4 */}
            <h3>Example 4: Drawing Two Aces</h3>
            <p>
              What is the probability of drawing two Aces in a row from a deck of 52 cards without replacement?
            </p>
            <p>
              <strong>Solution:</strong>
            </p>
            <ul>
              <li>
                Probability of first Ace: <MathJax inline>{'\\( P(\\text{First Ace}) = \\frac{4}{52} \\)'}</MathJax>
              </li>
              <li>
                After removing one Ace, there are 3 Aces left and 51 cards total.
              </li>
              <li>
                Probability of second Ace: <MathJax inline>{'\\( P(\\text{Second Ace} | \\text{First Ace}) = \\frac{3}{51} \\)'}</MathJax>
              </li>
            </ul>
            <p>
              So, the combined probability is:
            </p>
            <MathJax>
              {'\\[ P(\\text{Two Aces}) = \\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221} \\approx 0.0045 \\]'}
            </MathJax>
         
  
  
          {/* Conclusion */}
          <section>
            <h2>Conclusion</h2>
            <p>
              Understanding statistics and probability is essential for analyzing data and making
              informed decisions. These basics form the foundation for more advanced topics in data
              science and machine learning.
            </p>
          </section>
  
          {/* Next Steps */}
          <section className="next-steps">
            <p>Ready to continue your learning journey?</p>
            <Link to="/foundational-concepts/linear-algebra" className="next-button">
              Proceed to Linear Algebra
            </Link>
          </section>
        </div>
      </div>
      </MathJaxContext>
    );
  };
export default StatisticsProbability;
