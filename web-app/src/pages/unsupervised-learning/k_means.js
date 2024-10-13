import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the CSS you provided

const KMeansClustering = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>K-Means Clustering</h1>
          <p>A Simple and Efficient Algorithm for Partitioning Data into Clusters</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to K-Means Clustering</h2>
            <p>
              <strong>K-Means Clustering</strong> is one of the most popular unsupervised machine learning algorithms used for clustering tasks. It aims to partition a set of <MathJax inline>{'\\( n \\)'}</MathJax> data points into <MathJax inline>{'\\( K \\)'}</MathJax> clusters, where each data point belongs to the cluster with the nearest mean (centroid).
            </p>
            <p>
              The algorithm is simple, easy to implement, and computationally efficient, making it suitable for large datasets.
            </p>
          </section>

          {/* How K-Means Works */}
          <section>
            <h2>How Does K-Means Clustering Work?</h2>
            <p>The K-Means algorithm follows these basic steps:</p>
            <ol>
              <li>
                <strong>Initialization:</strong> Select <MathJax inline>{'\\( K \\)'}</MathJax> initial centroids randomly from the dataset.
              </li>
              <li>
                <strong>Assignment Step:</strong> Assign each data point to the nearest centroid based on the Euclidean distance.
              </li>
              <li>
                <strong>Update Step:</strong> Recalculate the centroids as the mean of all data points assigned to each cluster.
              </li>
              <li>
                <strong>Convergence Check:</strong> Repeat steps 2 and 3 until the centroids no longer change significantly or a maximum number of iterations is reached.
              </li>
            </ol>
          </section>

          {/* Mathematical Formulation */}
          <section>
            <h2>Mathematical Formulation</h2>
            <p>
              The objective of K-Means clustering is to minimize the within-cluster sum of squares (WCSS), also known as the inertia:
            </p>
            <MathJax>
              {'\\[ \\min_{\\{C_k\\}} \\sum_{k=1}^{K} \\sum_{\\mathbf{x}_i \\in C_k} \\| \\mathbf{x}_i - \\mathbf{\\mu}_k \\|^2 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\mathbf{x}_i \\)'}</MathJax>: The <MathJax inline>{'\\( i \\)'}</MathJax>-th data point.
              </li>
              <li>
                <MathJax inline>{'\\( \\mathbf{\\mu}_k \\)'}</MathJax>: The centroid of the <MathJax inline>{'\\( k \\)'}</MathJax>-th cluster.
              </li>
              <li>
                <MathJax inline>{'\\( C_k \\)'}</MathJax>: The set of data points assigned to the <MathJax inline>{'\\( k \\)'}</MathJax>-th cluster.
              </li>
            </ul>
          </section>

          {/* Example: Clustering Data Points */}
          <section>
            <h2>Example: Clustering Simple Data Points</h2>
            <p>Let's consider a simple dataset with the following 2D data points:</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Data Point</th>
                  <th>X-coordinate</th>
                  <th>Y-coordinate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>P1</td>
                  <td>1.0</td>
                  <td>1.0</td>
                </tr>
                <tr>
                  <td>P2</td>
                  <td>1.5</td>
                  <td>2.0</td>
                </tr>
                <tr>
                  <td>P3</td>
                  <td>3.0</td>
                  <td>4.0</td>
                </tr>
                <tr>
                  <td>P4</td>
                  <td>5.0</td>
                  <td>7.0</td>
                </tr>
                <tr>
                  <td>P5</td>
                  <td>3.5</td>
                  <td>5.0</td>
                </tr>
                <tr>
                  <td>P6</td>
                  <td>4.5</td>
                  <td>5.0</td>
                </tr>
                <tr>
                  <td>P7</td>
                  <td>3.5</td>
                  <td>4.5</td>
                </tr>
              </tbody>
            </table>
            <p>We will apply K-Means clustering with <MathJax inline>{'\\( K = 2 \\)'}</MathJax> to partition these data points into two clusters.</p>
            <h3>Step-by-Step Execution:</h3>
            <ol>
              <li>
                <strong>Initialization:</strong> Randomly select two initial centroids. Let's choose P2 and P4.
              </li>
              <li>
                <strong>First Assignment:</strong> Assign each data point to the nearest centroid.
                <ul>
                  <li>Cluster 1 (Centroid at P2): P1, P2</li>
                  <li>Cluster 2 (Centroid at P4): P3, P4, P5, P6, P7</li>
                </ul>
              </li>
              <li>
                <strong>First Update:</strong> Recalculate centroids.
                <ul>
                  <li>New Centroid 1: Mean of P1 and P2</li>
                  <li>
                    <MathJax inline>{'\\( \\mathbf{\\mu}_1 = \\left( \\frac{1.0 + 1.5}{2}, \\frac{1.0 + 2.0}{2} \\right) = (1.25, 1.5) \\)'}</MathJax>
                  </li>
                  <li>New Centroid 2: Mean of P3, P4, P5, P6, P7</li>
                  <li>
                    <MathJax inline>{'\\( \\mathbf{\\mu}_2 = \\left( \\frac{3.0 + 5.0 + 3.5 + 4.5 + 3.5}{5}, \\frac{4.0 + 7.0 + 5.0 + 5.0 + 4.5}{5} \\right) = (3.9, 5.1) \\)'}</MathJax>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Second Assignment:</strong> Reassign data points based on the new centroids.
                <ul>
                  <li>Cluster 1: P1, P2</li>
                  <li>Cluster 2: P3, P4, P5, P6, P7</li>
                </ul>
                <p>The assignments did not change, so the algorithm has converged.</p>
              </li>
            </ol>
            <img src="/images/kmeans_example.png" alt="K-Means Clustering Example" className="distribution-image" />
            <p className="image-source">Figure: Visualization of K-Means clustering on the example dataset.</p>
          </section>

          {/* Advantages and Limitations */}
          <section>
            <h2>Advantages and Limitations of K-Means Clustering</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Simple and easy to implement.</li>
              <li>Computationally efficient for large datasets.</li>
              <li>Works well when clusters are spherical and well-separated.</li>
            </ul>
            <h3>Limitations</h3>
            <ul>
              <li>Requires the number of clusters <MathJax inline>{'\\( K \\)'}</MathJax> to be specified in advance.</li>
              <li>Sensitive to the initial placement of centroids.</li>
              <li>Not suitable for clusters with non-convex shapes or varying densities.</li>
              <li>Can be affected by outliers and noise.</li>
            </ul>
          </section>

          {/* Choosing the Number of Clusters */}
          <section>
            <h2>Choosing the Number of Clusters (<MathJax inline>{'\\( K \\)'}</MathJax>)</h2>
            <p>Determining the optimal number of clusters is a critical aspect of K-Means clustering. Common methods include:</p>
            <ul>
              <li>
                <strong>Elbow Method:</strong> Plot the WCSS against different values of <MathJax inline>{'\\( K \\)'}</MathJax> and look for an "elbow" point where the rate of decrease sharply changes.
                <img src="/images/elbow_method_kmeans.png" alt="Elbow Method" className="distribution-image" />
                <p className="image-source">Figure: Elbow method to determine the optimal number of clusters.</p>
              </li>
              <li>
                <strong>Silhouette Analysis:</strong> Measures how similar a data point is to its own cluster compared to other clusters.
                <MathJax>
                  {'\\[ s(i) = \\frac{b(i) - a(i)}{\\max\\{a(i), b(i)\\}} \\]'}
                </MathJax>
                <p>Where:</p>
                <ul>
                  <li>
                    <MathJax inline>{'\\( a(i) \\)'}</MathJax>: Average distance between <MathJax inline>{'\\( i \\)'}</MathJax> and all other points in the same cluster.
                  </li>
                  <li>
                    <MathJax inline>{'\\( b(i) \\)'}</MathJax>: Average distance between <MathJax inline>{'\\( i \\)'}</MathJax> and all points in the nearest cluster.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Data Preprocessing</h3>
            <p>
              It's important to preprocess the data before applying K-Means clustering:
            </p>
            <ul>
              <li>
                <strong>Feature Scaling:</strong> Since K-Means uses distance calculations, features should be scaled (e.g., using standardization or normalization) to prevent bias towards variables with larger scales.
              </li>
              <li>
                <strong>Handling Outliers:</strong> Outliers can distort cluster centroids. Consider removing or transforming outliers.
              </li>
            </ul>
            <h3>Initialization Techniques</h3>
            <p>
              Different initialization methods can affect the outcome:
            </p>
            <ul>
              <li>
                <strong>Random Initialization:</strong> Centroids are chosen randomly. May lead to different results on different runs.
              </li>
              <li>
                <strong>K-Means++ Initialization:</strong> An improved method that chooses initial centroids in a way that speeds up convergence and improves cluster quality.
              </li>
            </ul>
          </section>

          {/* Applications of K-Means Clustering */}
          <section>
            <h2>Applications of K-Means Clustering</h2>
            <ul>
              <li>
                <strong>Customer Segmentation:</strong> Grouping customers based on purchasing behavior for targeted marketing.
              </li>
              <li>
                <strong>Image Compression:</strong> Reducing the number of colors in an image by clustering pixel values.
              </li>
              <li>
                <strong>Document Clustering:</strong> Organizing documents into topics based on word frequencies.
              </li>
              <li>
                <strong>Anomaly Detection:</strong> Identifying data points that do not belong to any cluster.
              </li>
            </ul>
          </section>

          {/* Limitations and Alternatives */}
          <section>
            <h2>When Not to Use K-Means and Alternatives</h2>
            <p>K-Means may not be suitable in the following scenarios:</p>
            <ul>
              <li>
                <strong>Non-Spherical Clusters:</strong> When clusters are not spherical or have complex shapes.
              </li>
              <li>
                <strong>Different Cluster Sizes:</strong> When clusters vary significantly in size and density.
              </li>
              <li>
                <strong>High-Dimensional Data:</strong> Distance measures become less meaningful in high dimensions.
              </li>
            </ul>
            <p>In such cases, consider alternative clustering algorithms:</p>
            <ul>
              <li>
                <strong>DBSCAN:</strong> Density-based clustering suitable for arbitrary-shaped clusters.
              </li>
              <li>
                <strong>Agglomerative Hierarchical Clustering:</strong> Builds clusters incrementally and doesn't require specifying <MathJax inline>{'\\( K \\)'}</MathJax> upfront.
              </li>
              <li>
                <strong>Gaussian Mixture Models (GMM):</strong> Probabilistic model that assumes data is generated from a mixture of Gaussian distributions.
              </li>
            </ul>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing K-Means Clustering in Python</h2>
            <p>Here's a simple example of how to implement K-Means clustering using the scikit-learn library:</p>
            <pre className="code-block">
              {`from sklearn.cluster import KMeans
import numpy as np

# Sample data
X = np.array([[1.0, 1.0],
              [1.5, 2.0],
              [3.0, 4.0],
              [5.0, 7.0],
              [3.5, 5.0],
              [4.5, 5.0],
              [3.5, 4.5]])

# Create KMeans instance with K=2
kmeans = KMeans(n_clusters=2, random_state=0)
kmeans.fit(X)

# Cluster labels
labels = kmeans.labels_
print("Cluster Labels:", labels)

# Centroids
centroids = kmeans.cluster_centers_
print("Centroids:", centroids)
`}
            </pre>
            <p>The output will display the cluster labels for each data point and the coordinates of the centroids.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              K-Means clustering is a powerful tool for partitioning data into meaningful clusters. Understanding its workings, strengths, and limitations allows for effective application in various domains.
            </p>
            <p>Next, let's explore another important unsupervised learning technique: Principal Component Analysis (PCA) for dimensionality reduction.</p>
            <Link to="/categories/unsupervised-learning/hierarchical-clustering" className="next-button">
              Proceed to Hierarchical Clustering
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default KMeansClustering;
