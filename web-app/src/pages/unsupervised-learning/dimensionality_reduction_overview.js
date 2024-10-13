import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the CSS you provided

const DimensionalityReductionOverview = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Dimensionality Reduction</h1>
          <p>Simplifying High-Dimensional Data While Preserving Essential Information</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Dimensionality Reduction</h2>
            <p>
              <strong>Dimensionality Reduction</strong> refers to techniques used to reduce the number of input variables (features) in a dataset while retaining as much essential information as possible. High-dimensional data can be challenging to work with due to the "curse of dimensionality," which can lead to overfitting, increased computational cost, and difficulty in visualizing data.
            </p>
            <p>
              Dimensionality reduction simplifies data models, improves performance, and aids in data visualization, especially when dealing with datasets with hundreds or thousands of features.
            </p>
          </section>

          {/* Types of Dimensionality Reduction */}
          <section>
            <h2>Types of Dimensionality Reduction Techniques</h2>
            <p>There are two main categories of dimensionality reduction techniques:</p>
            <ul>
              <li>
                <strong>Feature Selection:</strong> Selecting a subset of the most important features from the original dataset.
              </li>
              <li>
                <strong>Feature Extraction:</strong> Transforming the data from a high-dimensional space to a lower-dimensional space, creating new features that are combinations of the original features.
              </li>
            </ul>
          </section>

          {/* Principal Component Analysis (PCA) */}
          <section>
            <h2>Principal Component Analysis (PCA)</h2>
            <p>
              <strong>Principal Component Analysis</strong> is one of the most widely used dimensionality reduction techniques. It transforms the original variables into a new set of uncorrelated variables called <em>principal components</em>, ordered by the amount of variance they capture from the data.
            </p>
            <h3>How PCA Works:</h3>
            <ol>
              <li>
                <strong>Standardize the Data:</strong> Center and scale the data to have a mean of zero and a standard deviation of one.
              </li>
              <li>
                <strong>Compute the Covariance Matrix:</strong> Calculate the covariance matrix to understand how variables relate to each other.
              </li>
              <li>
                <strong>Compute Eigenvectors and Eigenvalues:</strong> Determine the eigenvectors (principal components) and eigenvalues of the covariance matrix.
              </li>
              <li>
                <strong>Select Principal Components:</strong> Order the principal components by their eigenvalues in descending order and choose the top <MathJax inline>{'\\( k \\)'}</MathJax> components.
              </li>
              <li>
                <strong>Transform the Data:</strong> Project the original data onto the selected principal components to obtain the reduced-dimensionality data.
              </li>
            </ol>
            <h3>Mathematical Formulation:</h3>
            <p>
              Given a data matrix <MathJax inline>{'\\( X \\)'}</MathJax> with zero mean, PCA solves the following optimization problem:
            </p>
            <MathJax>
              {'\\[ \\max_{\\mathbf{w}} \\quad \\mathbf{w}^T \\Sigma \\mathbf{w} \\quad \\text{subject to} \\quad \\| \\mathbf{w} \\| = 1 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\Sigma \\)'}</MathJax> is the covariance matrix of <MathJax inline>{'\\( X \\)'}</MathJax>.
              </li>
              <li>
                <MathJax inline>{'\\( \\mathbf{w} \\)'}</MathJax> is the eigenvector corresponding to the largest eigenvalue.
              </li>
            </ul>
          </section>

          {/* Example: PCA on Iris Dataset */}
          <section>
            <h2>Example: PCA on the Iris Dataset</h2>
            <p>The Iris dataset consists of 150 samples with four features:</p>
            <ul>
              <li>Sepal Length</li>
              <li>Sepal Width</li>
              <li>Petal Length</li>
              <li>Petal Width</li>
            </ul>
            <p>Using PCA, we can reduce the dimensionality from four to two while retaining most of the variance in the data.</p>
            <img src="/images/iris_pca.png" alt="PCA on Iris Dataset" className="distribution-image" />
            <p className="image-source">Figure: Visualization of the Iris dataset after PCA transformation.</p>
            <p>
              The plot shows that the first two principal components capture a significant portion of the variance, and the different species of Iris can still be distinguished.
            </p>
          </section>

          {/* Advantages and Limitations of PCA */}
          <section>
            <h2>Advantages and Limitations of PCA</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Reduces overfitting by eliminating redundant features.</li>
              <li>Improves computational efficiency.</li>
              <li>Helps in data visualization by reducing dimensions to 2D or 3D.</li>
            </ul>
            <h3>Limitations</h3>
            <ul>
              <li>PCA is sensitive to the scale of the data; standardization is necessary.</li>
              <li>Assumes linearity and may not capture complex relationships.</li>
              <li>Components may be difficult to interpret, as they are combinations of original features.</li>
            </ul>
          </section>

          {/* t-Distributed Stochastic Neighbor Embedding (t-SNE) */}
          <section>
            <h2>t-Distributed Stochastic Neighbor Embedding (t-SNE)</h2>
            <p>
              <strong>t-SNE</strong> is a nonlinear dimensionality reduction technique particularly well-suited for embedding high-dimensional data into a two- or three-dimensional space for visualization.
            </p>
            <h3>How t-SNE Works:</h3>
            <ol>
              <li>
                <strong>Compute Pairwise Similarities:</strong> Calculates the probability of similarity between pairs of data points in high-dimensional space.
              </li>
              <li>
                <strong>Define Low-Dimensional Map:</strong> Constructs a low-dimensional map and defines similarities in this space.
              </li>
              <li>
                <strong>Minimize Kullback-Leibler Divergence:</strong> Adjusts the positions of points in the low-dimensional space to minimize the divergence between the two similarity distributions.
              </li>
            </ol>
            <p>
              t-SNE focuses on preserving local structures and can reveal clusters that may not be visible with linear techniques like PCA.
            </p>
          </section>

          {/* Example: t-SNE on MNIST Dataset */}
          <section>
            <h2>Example: t-SNE on the MNIST Dataset</h2>
            <p>
              The MNIST dataset contains images of handwritten digits (0-9) represented as 28x28 pixel values, resulting in 784 features per image. Visualizing this data is challenging due to its high dimensionality.
            </p>
            <p>Applying t-SNE reduces the dimensionality to 2D, allowing us to visualize the data:</p>
            <img src="/images/mnist_tsne.png" alt="t-SNE on MNIST Dataset" className="distribution-image" />
            <p className="image-source">Figure: t-SNE visualization of the MNIST dataset.</p>
            <p>
              The plot shows distinct clusters for each digit, demonstrating t-SNE's ability to capture complex structures.
            </p>
          </section>

          {/* Linear Discriminant Analysis (LDA) */}
          <section>
            <h2>Linear Discriminant Analysis (LDA)</h2>
            <p>
              <strong>Linear Discriminant Analysis</strong> is a supervised dimensionality reduction technique that projects data onto a lower-dimensional space while maximizing class separability.
            </p>
            <h3>How LDA Works:</h3>
            <ol>
              <li>
                <strong>Compute the Scatter Matrices:</strong> Calculate the within-class scatter matrix <MathJax inline>{'\\( S_W \\)'}</MathJax> and between-class scatter matrix <MathJax inline>{'\\( S_B \\)'}</MathJax>.
              </li>
              <li>
                <strong>Compute Eigenvectors and Eigenvalues:</strong> Solve the generalized eigenvalue problem.
              </li>
              <li>
                <strong>Select Linear Discriminants:</strong> Choose the top eigenvectors to form a projection matrix.
              </li>
              <li>
                <strong>Transform the Data:</strong> Project the data onto the new lower-dimensional space.
              </li>
            </ol>
            <h3>Mathematical Formulation:</h3>
            <p>
              LDA aims to maximize the following objective function:
            </p>
            <MathJax>
              {'\\[ J(\\mathbf{w}) = \\frac{\\mathbf{w}^T S_B \\mathbf{w}}{\\mathbf{w}^T S_W \\mathbf{w}} \\]'}
            </MathJax>
          </section>

          {/* Advantages and Limitations of LDA */}
          <section>
            <h2>Advantages and Limitations of LDA</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Maximizes class separability, which is useful for classification tasks.</li>
              <li>Reduces dimensionality while preserving discriminative information.</li>
            </ul>
            <h3>Limitations</h3>
            <ul>
              <li>Assumes normally distributed classes with equal covariance matrices.</li>
              <li>Not suitable for nonlinear data structures.</li>
            </ul>
          </section>

          {/* Autoencoders */}
          <section>
            <h2>Autoencoders</h2>
            <p>
              <strong>Autoencoders</strong> are neural networks used for unsupervised learning of efficient codings. They aim to learn a compressed representation of the data (encoding) and then reconstruct the original data from this compressed version (decoding).
            </p>
            <h3>Structure of an Autoencoder:</h3>
            <ul>
              <li>
                <strong>Encoder:</strong> Transforms the input data into a lower-dimensional representation.
              </li>
              <li>
                <strong>Decoder:</strong> Reconstructs the original data from the lower-dimensional representation.
              </li>
            </ul>
            <h3>Loss Function:</h3>
            <p>
              The network is trained to minimize the reconstruction error:
            </p>
            <MathJax>
              {'\\[ L = \\| \\mathbf{x} - \\hat{\\mathbf{x}} \\|^2 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\mathbf{x} \\)'}</MathJax>: Original input.
              </li>
              <li>
                <MathJax inline>{'\\( \\hat{\\mathbf{x}} \\)'}</MathJax>: Reconstructed input.
              </li>
            </ul>
          </section>

          {/* Applications of Dimensionality Reduction */}
          <section>
            <h2>Applications of Dimensionality Reduction</h2>
            <ul>
              <li>
                <strong>Data Visualization:</strong> Reducing dimensions to 2D or 3D for plotting and exploring data structures.
              </li>
              <li>
                <strong>Noise Reduction:</strong> Removing noise from data by keeping only the most significant components.
              </li>
              <li>
                <strong>Feature Extraction:</strong> Creating new features that capture the essential information.
              </li>
              <li>
                <strong>Compression:</strong> Reducing storage requirements by representing data with fewer features.
              </li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Standardization and Scaling</h3>
            <p>
              Features should be standardized before applying dimensionality reduction techniques to ensure that each feature contributes equally.
            </p>
            <h3>Choosing the Number of Components</h3>
            <p>
              The number of components to retain can be determined based on the explained variance ratio in PCA or by cross-validation in other methods.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing PCA in Python</h2>
            <p>Here's how to perform PCA using the scikit-learn library:</p>
            <pre className="code-block">
              {`from sklearn.decomposition import PCA
import numpy as np

# Sample data
X = np.array([[2.5, 2.4],
              [0.5, 0.7],
              [2.2, 2.9],
              [1.9, 2.2],
              [3.1, 3.0],
              [2.3, 2.7],
              [2, 1.6],
              [1, 1.1],
              [1.5, 1.6],
              [1.1, 0.9]])

# Create PCA instance
pca = PCA(n_components=1)
principalComponents = pca.fit_transform(X)

# Explained variance
explained_variance = pca.explained_variance_ratio_
print("Explained Variance Ratio:", explained_variance)

# Principal components
print("Principal Components:\\n", principalComponents)
`}
            </pre>
            <p>The output shows the explained variance ratio and the transformed data in reduced dimensions.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Dimensionality reduction techniques like PCA, t-SNE, and autoencoders are powerful tools for simplifying high-dimensional data while retaining essential information. Understanding these methods enables more efficient data analysis and better model performance.
            </p>
            <p>Next, let's explore anomaly detection methods in unsupervised learning.</p>
            <Link to="/categories/unsupervised-learning/anomaly-detection" className="next-button">
              Proceed to Anomaly Detection
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default DimensionalityReductionOverview;
