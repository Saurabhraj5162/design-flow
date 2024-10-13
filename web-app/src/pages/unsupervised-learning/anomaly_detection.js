import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const AnomalyDetection = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Anomaly Detection</h1>
          <p>Identifying Unusual Patterns That Do Not Conform to Expected Behavior</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Anomaly Detection</h2>
            <p>
              <strong>Anomaly Detection</strong> is an unsupervised learning technique used to identify rare items, events, or observations that raise suspicions by differing significantly from the majority of the data. These anomalies can indicate critical incidents, such as technical glitches, fraud, or cybersecurity threats.
            </p>
            <p>
              The primary goal is to model normal behavior and then detect deviations from it.
            </p>
          </section>

          {/* Types of Anomalies */}
          <section>
            <h2>Types of Anomalies</h2>
            <p>Anomalies can be broadly categorized into three types:</p>
            <ul>
              <li>
                <strong>Point Anomalies:</strong> An individual data point is anomalous if it deviates significantly from the rest of the data.
              </li>
              <li>
                <strong>Contextual Anomalies:</strong> A data point is anomalous in a specific context but not otherwise (e.g., high temperature readings during winter).
              </li>
              <li>
                <strong>Collective Anomalies:</strong> A collection of related data points is anomalous even if individual data points are not (e.g., a series of transactions indicating fraud).
              </li>
            </ul>
          </section>

          {/* Applications of Anomaly Detection */}
          <section>
            <h2>Applications of Anomaly Detection</h2>
            <ul>
              <li>
                <strong>Fraud Detection:</strong> Identifying fraudulent transactions in finance.
              </li>
              <li>
                <strong>Cybersecurity:</strong> Detecting network intrusions or malicious activities.
              </li>
              <li>
                <strong>Healthcare:</strong> Monitoring vital signs to detect health issues.
              </li>
              <li>
                <strong>Manufacturing:</strong> Identifying defects or malfunctions in machinery.
              </li>
              <li>
                <strong>Environmental Monitoring:</strong> Detecting unusual patterns in climate data.
              </li>
            </ul>
          </section>

          {/* Anomaly Detection Techniques */}
          <section>
            <h2>Anomaly Detection Techniques</h2>
            <p>Common techniques for anomaly detection include:</p>
            <ul>
              <li>
                <strong>Statistical Methods:</strong> Assume data follows a statistical distribution and identify anomalies based on deviation from this distribution.
              </li>
              <li>
                <strong>Distance-Based Methods:</strong> Measure the distance of data points from a central point or other data points.
              </li>
              <li>
                <strong>Density-Based Methods:</strong> Identify anomalies as data points in low-density regions.
              </li>
              <li>
                <strong>Clustering-Based Methods:</strong> Use clustering algorithms to detect small clusters or outliers.
              </li>
              <li>
                <strong>Machine Learning Methods:</strong> Use algorithms like Isolation Forests, One-Class SVM, or autoencoders.
              </li>
            </ul>
          </section>

          {/* Gaussian Distribution Method */}
          <section>
            <h2>Statistical Method: Gaussian Distribution</h2>
            <p>
              If the data is assumed to follow a Gaussian (normal) distribution, anomalies can be detected by calculating the probability density function (PDF) and flagging data points with low probability.
            </p>
            <h3>Mathematical Formulation:</h3>
            <p>The Gaussian PDF for a univariate case is:</p>
            <MathJax>
              {'\\[ p(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} \\exp\\left( -\\frac{(x - \\mu)^2}{2\\sigma^2} \\right) \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\mu \\)'}</MathJax>: Mean of the data.
              </li>
              <li>
                <MathJax inline>{'\\( \\sigma^2 \\)'}</MathJax>: Variance of the data.
              </li>
            </ul>
            <p>
              Data points with <MathJax inline>{'\\( p(x) < \\epsilon \\)'}</MathJax> are considered anomalies, where <MathJax inline>{'\\( \\epsilon \\)'}</MathJax> is a threshold.
            </p>
          </section>

          {/* Example: Anomaly Detection in Manufacturing */}
          <section>
            <h2>Example: Detecting Defective Products in Manufacturing</h2>
            <p>
              Suppose a factory monitors the diameter of produced ball bearings. The diameters are expected to follow a normal distribution with a mean of 5mm and a standard deviation of 0.1mm.
            </p>
            <p>Data collected:</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Sample ID</th>
                  <th>Diameter (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S1</td>
                  <td>5.01</td>
                </tr>
                <tr>
                  <td>S2</td>
                  <td>4.98</td>
                </tr>
                <tr>
                  <td>S3</td>
                  <td>5.15</td> {/* Potential anomaly */}
                </tr>
                <tr>
                  <td>S4</td>
                  <td>5.02</td>
                </tr>
                <tr>
                  <td>S5</td>
                  <td>4.96</td> {/* Potential anomaly */}
                </tr>
              </tbody>
            </table>
            <h3>Calculating Probability:</h3>
            <p>
              For sample S3 (Diameter = 5.15mm):
            </p>
            <MathJax>
              {'\\[ p(5.15) = \\frac{1}{\\sqrt{2\\pi \\times 0.01}} \\exp\\left( -\\frac{(5.15 - 5.0)^2}{2 \\times 0.01} \\right) \\approx 0.00014 \\]'}
            </MathJax>
            <p>
              Since the probability is very low, S3 is considered an anomaly.
            </p>
          </section>

          {/* Distance-Based Method: K-Nearest Neighbors */}
          <section>
            <h2>Distance-Based Method: K-Nearest Neighbors (K-NN)</h2>
            <p>
              The K-NN method for anomaly detection calculates the distance of a data point to its K nearest neighbors. Data points with large average distances are considered anomalies.
            </p>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>
                <strong>Calculate Distances:</strong> Compute the distance between each data point and all other points.
              </li>
              <li>
                <strong>Find Neighbors:</strong> Identify the K nearest neighbors for each data point.
              </li>
              <li>
                <strong>Compute Anomaly Score:</strong> Calculate the average distance to the K neighbors.
              </li>
              <li>
                <strong>Flag Anomalies:</strong> Data points with anomaly scores above a threshold are anomalies.
              </li>
            </ol>
          </section>

          {/* Density-Based Method: Local Outlier Factor (LOF) */}
          <section>
            <h2>Density-Based Method: Local Outlier Factor (LOF)</h2>
            <p>
              The LOF algorithm measures the local deviation of a data point with respect to its neighbors. It compares the local density of a point to the densities of its neighbors.
            </p>
            <h3>Key Concepts:</h3>
            <ul>
              <li>
                <strong>Local Reachability Density (LRD):</strong> Inverse of the average reachability distance of a point.
              </li>
              <li>
                <strong>LOF Score:</strong> Ratio of the LRD of a point to the LRDs of its neighbors.
              </li>
            </ul>
            <p>
              A data point with an LOF score significantly greater than 1 is considered an anomaly.
            </p>
          </section>

          {/* Machine Learning Method: Isolation Forest */}
          <section>
            <h2>Machine Learning Method: Isolation Forest</h2>
            <p>
              <strong>Isolation Forest</strong> is an ensemble method specifically designed for anomaly detection. It works on the principle that anomalies are more susceptible to isolation than normal points.
            </p>
            <h3>How It Works:</h3>
            <ol>
              <li>
                <strong>Random Partitioning:</strong> Construct isolation trees by randomly selecting features and splitting values.
              </li>
              <li>
                <strong>Path Length:</strong> Measure the number of splits required to isolate a data point.
              </li>
              <li>
                <strong>Anomaly Score:</strong> Data points with shorter average path lengths are considered anomalies.
              </li>
            </ol>
            <p>
              The anomaly score is calculated as:
            </p>
            <MathJax>
              {'\\[ s(x, n) = 2^{- \\frac{E(h(x))}{c(n)}} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( E(h(x)) \\)'}</MathJax>: Average path length of point <MathJax inline>{'\\( x \\)'}</MathJax>.
              </li>
              <li>
                <MathJax inline>{'\\( c(n) \\)'}</MathJax>: Average path length of unsuccessful searches in a binary tree, given by:
                {' '}
                <MathJax inline>{'\\( c(n) = 2H(n-1) - (2(n-1)/n) \\)'}</MathJax>, where <MathJax inline>{'\\( H(i) \\)'}</MathJax> is the harmonic number.
              </li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Choice of Method</h3>
            <p>
              The choice of anomaly detection method depends on the data characteristics:
            </p>
            <ul>
              <li>
                <strong>Data Distribution:</strong> Use statistical methods if data follows a known distribution.
              </li>
              <li>
                <strong>High-Dimensional Data:</strong> Isolation Forests and autoencoders are suitable.
              </li>
              <li>
                <strong>Real-Time Detection:</strong> Methods with lower computational complexity are preferred.
              </li>
            </ul>
            <h3>Threshold Selection</h3>
            <p>
              Selecting appropriate thresholds for anomaly scores is critical and may require domain knowledge or validation datasets.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Anomaly Detection in Python</h2>
            <p>Here's how to perform anomaly detection using the Isolation Forest from scikit-learn:</p>
            <pre className="code-block">
              {`import numpy as np
from sklearn.ensemble import IsolationForest

# Sample data
X = np.array([[5.01], [4.98], [5.15], [5.02], [4.96]])

# Create IsolationForest instance
iso_forest = IsolationForest(contamination=0.4, random_state=42)
iso_forest.fit(X)

# Predict anomalies
labels = iso_forest.predict(X)
print("Labels:", labels)  # -1 for anomalies, 1 for normal points

# Anomaly scores
scores = iso_forest.decision_function(X)
print("Anomaly Scores:", scores)
`}
            </pre>
            <p>The output will indicate which samples are considered anomalies.</p>
          </section>

          {/* Applications in Cybersecurity */}
          <section>
            <h2>Applications in Cybersecurity</h2>
            <p>
              Anomaly detection is crucial in cybersecurity for identifying unusual patterns that may indicate attacks or breaches.
            </p>
            <h3>Examples:</h3>
            <ul>
              <li>
                <strong>Network Intrusion Detection:</strong> Monitoring network traffic to detect malicious activities.
              </li>
              <li>
                <strong>User Behavior Analytics:</strong> Detecting insider threats by analyzing deviations in user activities.
              </li>
              <li>
                <strong>Malware Detection:</strong> Identifying malicious software based on anomalous behavior.
              </li>
            </ul>
          </section>

          {/* Limitations and Challenges */}
          <section>
            <h2>Limitations and Challenges</h2>
            <ul>
              <li>
                <strong>Imbalanced Data:</strong> Anomalies are rare, making it difficult to model them effectively.
              </li>
              <li>
                <strong>Dynamic Environments:</strong> Normal behavior may change over time, requiring models to adapt.
              </li>
              <li>
                <strong>High False Positives:</strong> Incorrectly flagging normal data as anomalies can be costly.
              </li>
              <li>
                <strong>Interpretability:</strong> Understanding why a data point is considered anomalous can be challenging.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Anomaly detection is a vital tool in identifying unusual patterns that may indicate critical issues across various domains. By selecting appropriate methods and understanding their strengths and limitations, you can effectively detect and address anomalies in your data.
            </p>
            <p>Next, let's explore reinforcement learning as a different paradigm in machine learning.</p>
            <Link to="/categories/unsupervised-learning/self-organizing-maps" className="next-button">
              Proceed to Self Organizing Maps
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default AnomalyDetection;
