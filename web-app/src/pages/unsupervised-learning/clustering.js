import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the CSS you provided

const Clustering = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Clustering in Unsupervised Learning</h1>
          <p>Grouping Similar Data Points Without Labeled Examples</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Clustering</h2>
            <p>
              <strong>Clustering</strong> is a fundamental task in unsupervised learning that involves grouping a set of data points into clusters such that data points in the same cluster are more similar to each other than to those in other clusters. It's widely used for exploratory data analysis, customer segmentation, image processing, and more.
            </p>
            <p>
              The main objective is to find a partition <MathJax inline>{'\\( \\{C_1, C_2, \\dots, C_K\\} \\)'}</MathJax> of the data such that the data points within each cluster <MathJax inline>{'\\( C_k \\)'}</MathJax> are similar according to some distance or similarity measure.
            </p>
          </section>

          {/* Types of Clustering Methods */}
          <section>
            <h2>Types of Clustering Methods</h2>
            <p>Clustering algorithms can be broadly categorized into the following types:</p>
            <ul>
              <li>
                <strong>Partitioning Methods:</strong> Divides data into non-overlapping subsets (clusters) such that each data point is in exactly one cluster. Example: K-Means Clustering.
              </li>
              <li>
                <strong>Hierarchical Methods:</strong> Creates a hierarchy of clusters in a tree-like structure. Examples: Agglomerative and Divisive Clustering.
              </li>
              <li>
                <strong>Density-Based Methods:</strong> Forms clusters based on areas of high density. Example: DBSCAN.
              </li>
              <li>
                <strong>Grid-Based Methods:</strong> Uses a multi-resolution grid data structure. Example: STING.
              </li>
              <li>
                <strong>Model-Based Methods:</strong> Assumes a model for each cluster and finds the best fit of data to the given model. Example: Gaussian Mixture Models (GMM).
              </li>
            </ul>
          </section>

          {/* Distance Measures */}
          <section>
            <h2>Distance Measures</h2>
            <p>
              The choice of distance (or similarity) measure is crucial in clustering as it defines how the similarity between two data points is computed. Common distance measures include:
            </p>
            <ul>
              <li>
                <strong>Euclidean Distance:</strong> The straight-line distance between two points in Euclidean space.
                <MathJax>
                  {'\\[ d(\\mathbf{x}, \\mathbf{y}) = \\sqrt{\\sum_{i=1}^{n} (x_i - y_i)^2} \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Manhattan Distance:</strong> The sum of the absolute differences of their coordinates.
                <MathJax>
                  {'\\[ d(\\mathbf{x}, \\mathbf{y}) = \\sum_{i=1}^{n} |x_i - y_i| \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Cosine Similarity:</strong> Measures the cosine of the angle between two vectors.
                <MathJax>
                  {'\\[ \\text{Similarity}(\\mathbf{x}, \\mathbf{y}) = \\frac{\\mathbf{x} \\cdot \\mathbf{y}}{\\| \\mathbf{x} \\| \\| \\mathbf{y} \\|} \\]'}
                </MathJax>
              </li>
            </ul>
          </section>

          {/* K-Means Clustering */}
          <section>
            <h2>K-Means Clustering</h2>
            <p>
              <strong>K-Means</strong> is one of the simplest and most popular clustering algorithms. It aims to partition <MathJax inline>{'\\( n \\)'}</MathJax> data points into <MathJax inline>{'\\( K \\)'}</MathJax> clusters in which each data point belongs to the cluster with the nearest mean.
            </p>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>Initialize <MathJax inline>{'\\( K \\)'}</MathJax> centroids randomly.</li>
              <li>Assign each data point to the nearest centroid.</li>
              <li>Recalculate the centroids as the mean of all data points assigned to each centroid.</li>
              <li>Repeat steps 2 and 3 until convergence (no change in assignments).</li>
            </ol>
            <h3>Mathematical Formulation:</h3>
            <p>
              The objective is to minimize the total within-cluster variance (sum of squared distances):
            </p>
            <MathJax>
            {'\\[ \\min_{\\{C_k\\}} \\sum_{k=1}^{K} \\sum_{\\mathbf{x}_i \\in C_k} \\| \\mathbf{x}_i - \\mathbf{\\mu}_k \\|^2 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( \\mathbf{x}_i \\)'}</MathJax>: Data point <MathJax inline>{'\\( i \\)'}</MathJax>.</li>
              <li><MathJax inline>{'\\( \\mathbf{\\mu}_k \\)'}</MathJax>: Centroid of cluster <MathJax inline>{'\\( k \\)'}</MathJax>.</li>
              <li><MathJax inline>{'\\( C_k \\)'}</MathJax>: Set of points assigned to cluster <MathJax inline>{'\\( k \\)'}</MathJax>.</li>
            </ul>
          </section>

          {/* Example: Clustering Customers */}
          <section>
            <h2>Example: Clustering Customers Based on Purchase Behavior</h2>
            <p>
              Suppose a retail company wants to segment its customers based on their purchasing behavior to target marketing efforts effectively. The dataset includes features like:
            </p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Customer ID</th>
                  <th>Annual Income (k$)</th>
                  <th>Spending Score (1-100)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>C1</td>
                  <td>15</td>
                  <td>39</td>
                </tr>
                <tr>
                  <td>C2</td>
                  <td>16</td>
                  <td>81</td>
                </tr>
                <tr>
                  <td>C3</td>
                  <td>17</td>
                  <td>6</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <p>
              By applying K-Means clustering with <MathJax inline>{'\\( K = 3 \\)'}</MathJax>, we might discover three distinct customer segments:
            </p>
            <ul>
              <li>Low income, low spending score.</li>
              <li>Medium income, medium spending score.</li>
              <li>High income, high spending score.</li>
            </ul>
            <img src="/images/customer_clustering.png" alt="Customer Clustering" className="distribution-image" />
            <p className="image-source">Figure: Visualization of customer clusters.</p>
          </section>

          {/* Hierarchical Clustering */}
          <section>
            <h2>Hierarchical Clustering</h2>
            <p>
              Hierarchical clustering builds a multilevel hierarchy of clusters by creating a cluster tree or dendrogram. It can be agglomerative (bottom-up) or divisive (top-down).
            </p>
            <h3>Agglomerative Clustering Steps:</h3>
            <ol>
              <li>Start with each data point as a single cluster.</li>
              <li>At each step, merge the two closest clusters.</li>
              <li>Repeat until all points are merged into a single cluster.</li>
            </ol>
            <h3>Linkage Criteria:</h3>
            <p>
              The distance between clusters can be calculated using different linkage methods:
            </p>
            <ul>
              <li><strong>Single Linkage:</strong> Minimum distance between points.</li>
              <li><strong>Complete Linkage:</strong> Maximum distance between points.</li>
              <li><strong>Average Linkage:</strong> Average distance between all pairs of points.</li>
            </ul>
            <img src="/images/dendrogram.png" alt="Dendrogram" className="distribution-image" />
            <p className="image-source">Figure: Dendrogram representing hierarchical clustering.</p>
          </section>

          {/* Density-Based Clustering */}
          <section>
            <h2>Density-Based Clustering</h2>
            <p>
              Density-based clustering algorithms like DBSCAN (Density-Based Spatial Clustering of Applications with Noise) group together data points that are closely packed together while marking as outliers the points that lie alone in low-density regions.
            </p>
            <h3>Key Concepts:</h3>
            <ul>
              <li><strong>ε (Epsilon):</strong> The radius of the neighborhood around a data point.</li>
              <li><strong>MinPts:</strong> Minimum number of data points required to form a dense region.</li>
            </ul>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>For each data point, retrieve its ε-neighborhood.</li>
              <li>If the ε-neighborhood contains at least MinPts, create a cluster.</li>
              <li>Expand clusters by recursively including density-reachable points.</li>
            </ol>
          </section>

          {/* Advantages and Disadvantages */}
          <section>
            <h2>Advantages and Disadvantages of Clustering Algorithms</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Helps to identify hidden patterns and structures in data.</li>
              <li>Useful for summarizing data and reducing complexity.</li>
              <li>Applicable to a wide range of fields (marketing, biology, social sciences).</li>
            </ul>
            <h3>Disadvantages</h3>
            <ul>
              <li>Results can be sensitive to the choice of distance measure and parameters.</li>
              <li>Clusters may not be well-defined or may overlap.</li>
              <li>High computational cost for large datasets, especially in hierarchical methods.</li>
            </ul>
          </section>

          {/* Applications of Clustering */}
          <section>
            <h2>Applications of Clustering</h2>
            <p>Clustering techniques are used in various domains:</p>
            <ul>
              <li><strong>Marketing:</strong> Customer segmentation for targeted advertising.</li>
              <li><strong>Biology:</strong> Classification of species or gene expression data.</li>
              <li><strong>Image Processing:</strong> Image segmentation and compression.</li>
              <li><strong>Anomaly Detection:</strong> Identifying unusual data patterns (e.g., fraud detection).</li>
              <li><strong>Social Network Analysis:</strong> Community detection within networks.</li>
            </ul>
          </section>

          {/* Choosing the Right Number of Clusters */}
          <section>
            <h2>Choosing the Right Number of Clusters</h2>
            <p>
              Determining the optimal number of clusters <MathJax inline>{'\\( K \\)'}</MathJax> is a critical step. Common methods include:
            </p>
            <ul>
              <li>
                <strong>Elbow Method:</strong> Plotting the explained variance as a function of the number of clusters and selecting the elbow point where the marginal gain drops.
                <img src="/images/elbow_method.png" alt="Elbow Method" className="distribution-image" />
                <p className="image-source">Figure: Elbow method to determine optimal K.</p>
              </li>
              <li>
                <strong>Silhouette Analysis:</strong> Measures how similar a data point is to its own cluster compared to other clusters.
                <MathJax>
                  {'\\[ s(i) = \\frac{b(i) - a(i)}{\\max\\{a(i), b(i)\\}} \\]'}
                </MathJax>
                <p>Where:</p>
                <ul>
                  <li><MathJax inline>{'\\( a(i) \\)'}</MathJax>: Mean intra-cluster distance for data point <MathJax inline>{'\\( i \\)'}</MathJax>.</li>
                  <li><MathJax inline>{'\\( b(i) \\)'}</MathJax>: Mean nearest-cluster distance for data point <MathJax inline>{'\\( i \\)'}</MathJax>.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Clustering is a powerful tool for discovering structures in unlabeled data. By grouping similar data points, we can gain valuable insights and make informed decisions.
            </p>
            <p>Next, let's delve into dimensionality reduction techniques to simplify complex datasets.</p>
            <Link to="/categories/unsupervised-learning/k-means-clustering" className="next-button">
              Proceed to K-Means Clustering
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default Clustering;
