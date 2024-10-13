import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the CSS you provided

const HierarchicalClustering = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Hierarchical Clustering</h1>
          <p>Building a Hierarchy of Clusters Through Agglomerative and Divisive Methods</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Hierarchical Clustering</h2>
            <p>
              <strong>Hierarchical Clustering</strong> is an unsupervised learning method used to build a hierarchy of clusters. It creates a tree-like structure called a <em>dendrogram</em>, which represents the nested grouping of patterns and similarity levels at which groupings change.
            </p>
            <p>
              Unlike partitioning methods like K-Means, hierarchical clustering does not require specifying the number of clusters in advance. It can be divided into two main types:
            </p>
            <ul>
              <li>
                <strong>Agglomerative (Bottom-Up) Approach:</strong> Each data point starts as a singleton cluster, and pairs of clusters are merged as one moves up the hierarchy.
              </li>
              <li>
                <strong>Divisive (Top-Down) Approach:</strong> All data points start in one cluster, and splits are performed recursively as one moves down the hierarchy.
              </li>
            </ul>
          </section>

          {/* Agglomerative Hierarchical Clustering */}
          <section>
            <h2>Agglomerative Hierarchical Clustering</h2>
            <p>
              The agglomerative approach is more commonly used. The algorithm proceeds by merging the closest pair of clusters at each step, based on a distance or similarity metric.
            </p>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>
                <strong>Initialization:</strong> Start with <MathJax inline>{'\\( n \\)'}</MathJax> clusters, each containing one data point.
              </li>
              <li>
                <strong>Compute Proximity Matrix:</strong> Calculate the distance matrix (proximity matrix) for all pairs of clusters.
              </li>
              <li>
                <strong>Merge Clusters:</strong> Find the pair of clusters with the smallest distance and merge them into a single cluster.
              </li>
              <li>
                <strong>Update Proximity Matrix:</strong> Recalculate distances between the new cluster and all other clusters.
              </li>
              <li>
                <strong>Repeat:</strong> Repeat steps 3 and 4 until all data points are merged into a single cluster or until a stopping criterion is met.
              </li>
            </ol>
          </section>

          {/* Linkage Criteria */}
          <section>
            <h2>Linkage Criteria</h2>
            <p>
              The way distances between clusters are calculated during the merging process depends on the linkage criteria. Common linkage methods include:
            </p>
            <ul>
              <li>
                <strong>Single Linkage:</strong> Distance between the closest pair of points in two clusters.
                <MathJax>
                  {'\\[ D_{\\text{single}}(A, B) = \\min_{a \\in A, b \\in B} d(a, b) \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Complete Linkage:</strong> Distance between the farthest pair of points in two clusters.
                <MathJax>
                  {'\\[ D_{\\text{complete}}(A, B) = \\max_{a \\in A, b \\in B} d(a, b) \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Average Linkage:</strong> Average distance between all pairs of points in two clusters.
                <MathJax>
                  {'\\[ D_{\\text{average}}(A, B) = \\frac{1}{|A||B|} \\sum_{a \\in A} \\sum_{b \\in B} d(a, b) \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Centroid Linkage:</strong> Distance between the centroids of two clusters.
                <MathJax>
                  {'\\[ D_{\\text{centroid}}(A, B) = d(\\mathbf{\\mu}_A, \\mathbf{\\mu}_B) \\]'}
                </MathJax>
                <p>Where <MathJax inline>{'\\( \\mathbf{\\mu}_A \\)'}</MathJax> and <MathJax inline>{'\\( \\mathbf{\\mu}_B \\)'}</MathJax> are the centroids of clusters A and B.</p>
              </li>
            </ul>
          </section>

          {/* Distance Measures */}
          <section>
            <h2>Distance Measures</h2>
            <p>
              The choice of distance measure affects how the similarity between data points is calculated. Common distance measures include:
            </p>
            <ul>
              <li><strong>Euclidean Distance:</strong> Suitable for continuous variables.</li>
              <li><strong>Manhattan Distance:</strong> Sum of absolute differences.</li>
              <li><strong>Correlation Distance:</strong> Useful when the magnitude of the variables is not important, only their correlation.</li>
            </ul>
          </section>

          {/* Example: Hierarchical Clustering of Data Points */}
          <section>
            <h2>Example: Hierarchical Clustering of Data Points</h2>
            <p>Consider the following dataset with five data points:</p>
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
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>P2</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>P3</td>
                  <td>6</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>P4</td>
                  <td>7</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>P5</td>
                  <td>8</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
            <p>We will perform agglomerative hierarchical clustering using single linkage and Euclidean distance.</p>
            <h3>Step-by-Step Execution:</h3>
            <ol>
              <li>
                <strong>Compute Initial Distance Matrix:</strong> Calculate the Euclidean distances between all pairs of data points.
                <table className="data-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>P1</th>
                      <th>P2</th>
                      <th>P3</th>
                      <th>P4</th>
                      <th>P5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>P1</td>
                      <td>0</td>
                      <td>1.41</td>
                      <td>6.40</td>
                      <td>7.81</td>
                      <td>9.22</td>
                    </tr>
                    <tr>
                      <td>P2</td>
                      <td>1.41</td>
                      <td>0</td>
                      <td>5.00</td>
                      <td>6.40</td>
                      <td>7.81</td>
                    </tr>
                    <tr>
                      <td>P3</td>
                      <td>6.40</td>
                      <td>5.00</td>
                      <td>0</td>
                      <td>1.41</td>
                      <td>2.83</td>
                    </tr>
                    <tr>
                      <td>P4</td>
                      <td>7.81</td>
                      <td>6.40</td>
                      <td>1.41</td>
                      <td>0</td>
                      <td>1.41</td>
                    </tr>
                    <tr>
                      <td>P5</td>
                      <td>9.22</td>
                      <td>7.81</td>
                      <td>2.83</td>
                      <td>1.41</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <strong>First Merge:</strong> Merge the closest pair (P4 and P5) with distance 1.41.
              </li>
              <li>
                <strong>Update Distance Matrix:</strong> Recalculate distances between the new cluster (P4,P5) and other points using single linkage.
                <ul>
                  <li>
                    Distance between (P4,P5) and P3: <MathJax inline>{'\\( \\min(1.41, 2.83) = 1.41 \\)'}</MathJax>
                  </li>
                  <li>
                    Distance between (P4,P5) and P2: <MathJax inline>{'\\( \\min(6.40, 7.81) = 6.40 \\)'}</MathJax>
                  </li>
                  <li>
                    Distance between (P4,P5) and P1: <MathJax inline>{'\\( \\min(7.81, 9.22) = 7.81 \\)'}</MathJax>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Second Merge:</strong> Merge the new cluster (P4,P5) with P3 at distance 1.41.
              </li>
              <li>
                <strong>Update Distance Matrix:</strong> Recalculate distances between the new cluster ((P3,P4,P5)) and P1, P2.
              </li>
              <li>
                <strong>Continue Merging:</strong> Proceed with merging clusters based on the smallest distances until all points are in one cluster.
              </li>
            </ol>
            <img src="/images/hierarchical_dendrogram.png" alt="Hierarchical Clustering Dendrogram" className="distribution-image" />
            <p className="image-source">Figure: Dendrogram representing the hierarchical clustering of data points.</p>
          </section>

          {/* Dendrogram Interpretation */}
          <section>
            <h2>Interpreting the Dendrogram</h2>
            <p>
              A dendrogram visually represents the process of hierarchical clustering. The vertical axis represents the distance or dissimilarity at which clusters are merged. By cutting the dendrogram at a certain height, we can choose the number of clusters.
            </p>
            <img src="/images/dendrogram_cut.png" alt="Dendrogram Cut" className="distribution-image" />
            <p className="image-source">Figure: Cutting the dendrogram to obtain clusters.</p>
            <p>
              In the example, cutting the dendrogram at a distance of 5 would result in two clusters: one containing P1 and P2, and another containing P3, P4, and P5.
            </p>
          </section>

          {/* Advantages and Limitations */}
          <section>
            <h2>Advantages and Limitations of Hierarchical Clustering</h2>
            <h3>Advantages</h3>
            <ul>
              <li>No need to specify the number of clusters in advance.</li>
              <li>Dendrograms provide a visual representation of data similarity.</li>
              <li>Can capture nested clusters and complex relationships.</li>
            </ul>
            <h3>Limitations</h3>
            <ul>
              <li>Computationally intensive for large datasets (<MathJax inline>{'\\( O(n^3) \\)'}</MathJax> complexity).</li>
              <li>Once a merge or split is done, it cannot be undone (greedy algorithm).</li>
              <li>Sensitive to noise and outliers.</li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Standardization of Data</h3>
            <p>
              Variables should be standardized if they are on different scales to prevent bias in distance calculations.
            </p>
            <h3>Choice of Linkage and Distance Measures</h3>
            <p>
              The results of hierarchical clustering can vary significantly depending on the linkage criterion and distance measure used. It's advisable to experiment with different options.
            </p>
            <h3>Dealing with Large Datasets</h3>
            <p>
              For large datasets, approximate algorithms or sampling methods may be necessary due to computational constraints.
            </p>
          </section>

          {/* Applications of Hierarchical Clustering */}
          <section>
            <h2>Applications of Hierarchical Clustering</h2>
            <ul>
              <li>
                <strong>Bioinformatics:</strong> Gene expression analysis and phylogenetic tree construction.
              </li>
              <li>
                <strong>Document Clustering:</strong> Organizing documents into a hierarchical structure based on content similarity.
              </li>
              <li>
                <strong>Image Segmentation:</strong> Grouping pixels with similar characteristics.
              </li>
              <li>
                <strong>Market Research:</strong> Segmenting consumers based on purchasing behavior.
              </li>
            </ul>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Hierarchical Clustering in Python</h2>
            <p>Here's how to perform hierarchical clustering using the scikit-learn library:</p>
            <pre className="code-block">
              {`from sklearn.cluster import AgglomerativeClustering
import numpy as np

# Sample data
X = np.array([[1, 2],
              [2, 3],
              [6, 6],
              [7, 7],
              [8, 8]])

# Create AgglomerativeClustering instance
cluster = AgglomerativeClustering(n_clusters=2, affinity='euclidean', linkage='single')
cluster.fit(X)

# Cluster labels
labels = cluster.labels_
print("Cluster Labels:", labels)
`}
            </pre>
            <p>The output will display the cluster labels assigned to each data point.</p>
          </section>

          {/* Divisive Hierarchical Clustering */}
          <section>
            <h2>Divisive Hierarchical Clustering</h2>
            <p>
              The divisive approach starts with all data points in one cluster and recursively splits them into smaller clusters. While less commonly used due to computational complexity, it can be more efficient for certain types of data.
            </p>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>
                <strong>Start:</strong> All data points are in a single cluster.
              </li>
              <li>
                <strong>Split Clusters:</strong> At each step, choose a cluster to split based on a criterion (e.g., largest cluster, cluster with highest variance).
              </li>
              <li>
                <strong>Repeat:</strong> Continue splitting until each data point is in its own singleton cluster or a stopping criterion is met.
              </li>
            </ol>
            <p>
              Divisive methods are generally more computationally intensive, but they can be more accurate since they consider all possible splits.
            </p>
          </section>

          {/* Limitations and Alternatives */}
          <section>
            <h2>When to Use Hierarchical Clustering and Alternatives</h2>
            <p>Hierarchical clustering is suitable when:</p>
            <ul>
              <li>You want to obtain a hierarchy of clusters.</li>
              <li>The dataset is small to medium-sized.</li>
              <li>You are unsure of the number of clusters.</li>
            </ul>
            <p>Alternatives to consider include:</p>
            <ul>
              <li>
                <strong>K-Means Clustering:</strong> For large datasets where a flat clustering is sufficient.
              </li>
              <li>
                <strong>DBSCAN:</strong> When dealing with clusters of arbitrary shape and noise.
              </li>
              <li>
                <strong>Gaussian Mixture Models:</strong> For probabilistic clustering approaches.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Hierarchical clustering offers a versatile approach to grouping data without the need to specify the number of clusters in advance. By understanding its mechanisms, advantages, and limitations, you can apply it effectively to various datasets.
            </p>
            <p>Next, let's explore density-based clustering methods like DBSCAN.</p>
            <Link to="/categories/unsupervised-learning/dimensionality-reduction" className="next-button">
              Proceed to Dimensionality Reduction
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default HierarchicalClustering;
