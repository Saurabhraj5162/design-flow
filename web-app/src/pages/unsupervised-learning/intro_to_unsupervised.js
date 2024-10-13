import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the CSS you provided

const IntroductionToUnsupervisedLearning = () => {
    return (
      <MathJaxContext>
        <div className="container">
          <header className="header">
            <h1>Introduction to Unsupervised Learning</h1>
            <p>Discovering Hidden Patterns in Unlabeled Data</p>
          </header>
  
          <div className="content">
            {/* What is Unsupervised Learning */}
            <section>
              <h2>What is Unsupervised Learning?</h2>
              <p>
                <strong>Unsupervised learning</strong> is a type of machine learning where models are trained using unlabeled data. The algorithm tries to learn the inherent structure from the input data <MathJax inline>{'\\( X \\)'}</MathJax> without any corresponding output labels.
              </p>
              <p>
                The goal is to model the underlying distribution or to find patterns in the data.
              </p>
            </section>
  
            {/* Types of Unsupervised Learning */}
            <section>
              <h2>Types of Unsupervised Learning</h2>
              <p>Unsupervised learning can be broadly categorized into two types:</p>
              <ul>
                <li>
                  <strong>Clustering:</strong> Grouping similar data points together.
                </li>
                <li>
                  <strong>Dimensionality Reduction:</strong> Reducing the number of variables while preserving important information.
                </li>
              </ul>
            </section>
  
            {/* Examples of Unsupervised Learning */}
            <section>
              <h2>Examples of Unsupervised Learning</h2>
              <h3>Clustering Example</h3>
              <p>
                Grouping customers based on purchasing behavior for market segmentation.
              </p>
              <h3>Dimensionality Reduction Example</h3>
              <p>
                Compressing image data using techniques like Principal Component Analysis (PCA).
              </p>
            </section>
  
            {/* How Does Unsupervised Learning Work */}
            <section>
              <h2>How Does Unsupervised Learning Work?</h2>
              <p>
                Unsupervised learning involves the following steps:
              </p>
              <ol>
                <li>
                  <strong>Data Collection:</strong> Gather a dataset with input features without labels.
                </li>
                <li>
                  <strong>Data Preprocessing:</strong> Clean and prepare the data for analysis.
                </li>
                <li>
                  <strong>Model Selection:</strong> Choose an appropriate algorithm (e.g., K-means, Hierarchical Clustering).
                </li>
                <li>
                  <strong>Training:</strong> Allow the model to find patterns or groupings in the data.
                </li>
                <li>
                  <strong>Evaluation:</strong> Assess the results, often using domain knowledge or visualization techniques.
                </li>
              </ol>
            </section>
  
            {/* Mathematical Formulation */}
            <section>
              <h2>Mathematical Formulation</h2>
              <p>
                In clustering, the aim is to partition data into <MathJax inline>{'\\( K \\)'}</MathJax> clusters. For example, in K-means clustering, we minimize the within-cluster sum of squares:
              </p>
              <MathJax>
                {'\\[ \\min_{C} \\sum_{k=1}^{K} \\sum_{x_i \\in C_k} \\| x_i - \\mu_k \\|^2 \\]'}
              </MathJax>
              <p>Where:</p>
              <ul>
                <li><MathJax inline>{'\\( C_k \\)'}</MathJax>: The set of points in cluster <MathJax inline>{'\\( k \\)'}</MathJax>.</li>
                <li><MathJax inline>{'\\( \\mu_k \\)'}</MathJax>: The centroid of cluster <MathJax inline>{'\\( k \\)'}</MathJax>.</li>
                <li><MathJax inline>{'\\( x_i \\)'}</MathJax>: Data point <MathJax inline>{'\\( i \\)'}</MathJax>.</li>
              </ul>
            </section>
  
            {/* Common Algorithms */}
            <section>
              <h2>Common Algorithms in Unsupervised Learning</h2>
              <ul>
                <li><strong>K-Means Clustering:</strong> Partitioning data into K clusters.</li>
                <li><strong>Hierarchical Clustering:</strong> Building a hierarchy of clusters.</li>
                <li><strong>DBSCAN:</strong> Density-based clustering algorithm.</li>
                <li><strong>Principal Component Analysis (PCA):</strong> Reducing dimensionality by projecting data onto principal components.</li>
                <li><strong>Autoencoders:</strong> Neural networks used for dimensionality reduction and feature learning.</li>
                <li><strong>t-Distributed Stochastic Neighbor Embedding (t-SNE):</strong> Visualization of high-dimensional data.</li>
              </ul>
            </section>
  
            {/* Advantages and Disadvantages */}
            <section>
              <h2>Advantages and Disadvantages of Unsupervised Learning</h2>
              <h3>Advantages</h3>
              <ul>
                <li>Can discover hidden patterns or intrinsic structures in data.</li>
                <li>No need for labeled data, which saves time and resources.</li>
                <li>Useful for exploratory data analysis.</li>
              </ul>
              <h3>Disadvantages</h3>
              <ul>
                <li>Results can be more subjective and harder to evaluate.</li>
                <li>May find patterns that are not meaningful or useful.</li>
                <li>Computationally intensive for large datasets.</li>
              </ul>
            </section>
  
            {/* When to Use Unsupervised Learning */}
            <section>
              <h2>When to Use Unsupervised Learning</h2>
              <p>
                Unsupervised learning is ideal when you have data without labels and want to explore the data to find hidden structures. It's commonly used in:
              </p>
              <ul>
                <li>Customer segmentation in marketing.</li>
                <li>Anomaly detection (e.g., fraud detection).</li>
                <li>Recommender systems.</li>
                <li>Data compression.</li>
              </ul>
            </section>
  
            {/* Conclusion */}
            <section className="next-steps">
              <p>Now that you have an understanding of unsupervised learning, let's explore clustering techniques in more detail.</p>
              <Link to="/categories/unsupervised-learning/clustering" className="next-button">
                Proceed to Clustering
              </Link>
            </section>
          </div>
        </div>
      </MathJaxContext>
    );
  };
  
  export default IntroductionToUnsupervisedLearning;