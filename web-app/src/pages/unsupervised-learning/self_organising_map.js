import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the CSS you provided

const SelfOrganizingMaps = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Self-Organizing Maps (SOMs)</h1>
          <p>Visualizing High-Dimensional Data Through Topology-Preserving Maps</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Self-Organizing Maps</h2>
            <p>
              A <strong>Self-Organizing Map (SOM)</strong>, also known as a Kohonen map, is an unsupervised neural network used for dimensionality reduction and visualization of high-dimensional data. SOMs map high-dimensional input data onto a lower-dimensional (typically 2D) grid, preserving the topological properties of the input space.
            </p>
            <p>
              SOMs are particularly useful for exploratory data analysis, clustering, and pattern recognition.
            </p>
          </section>

          {/* How SOMs Work */}
          <section>
            <h2>How Do Self-Organizing Maps Work?</h2>
            <p>
              SOMs consist of neurons arranged in a grid, each associated with a weight vector of the same dimensionality as the input data. During training, the SOM adjusts these weight vectors to approximate the distribution of the input data while preserving the input data's topological structure.
            </p>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>
                <strong>Initialization:</strong> Assign random weight vectors to each neuron in the grid.
              </li>
              <li>
                <strong>Training Iterations:</strong> For each input vector <MathJax inline>{'\\( \\mathbf{x} \\)'}</MathJax>:
                <ol type="a">
                  <li>
                    <strong>Best Matching Unit (BMU):</strong> Find the neuron whose weight vector is closest to the input vector.
                    <MathJax>
                      {'\\[ \\text{BMU} = \\arg\\min_{i} \\| \\mathbf{x} - \\mathbf{w}_i \\| \\]'}
                    </MathJax>
                  </li>
                  <li>
                    <strong>Update Weights:</strong> Adjust the weight vectors of the BMU and its neighbors.
                    <MathJax>
                      {'\\[ \\mathbf{w}_i(t+1) = \\mathbf{w}_i(t) + \\eta(t) \\cdot h_{ci}(t) \\cdot (\\mathbf{x} - \\mathbf{w}_i(t)) \\]'}
                    </MathJax>
                    <p>Where:</p>
                    <ul>
                      <li>
                        <MathJax inline>{'\\( \\eta(t) \\)'}</MathJax>: Learning rate at time <MathJax inline>{'\\( t \\)'}</MathJax>.
                      </li>
                      <li>
                        <MathJax inline>{'\\( h_{ci}(t) \\)'}</MathJax>: Neighborhood function determining the influence of the BMU on neuron <MathJax inline>{'\\( i \\)'}</MathJax>.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>
              <li>
                <strong>Repeat:</strong> Continue the training over several epochs, decreasing the learning rate and neighborhood radius over time.
              </li>
            </ol>
          </section>

          {/* Neighborhood Function */}
          <section>
            <h2>Neighborhood Function</h2>
            <p>
              The neighborhood function <MathJax inline>{'\\( h_{ci}(t) \\)'}</MathJax> determines how the BMU influences its neighboring neurons. A common choice is the Gaussian function:
            </p>
            <MathJax>
              {'\\[ h_{ci}(t) = \\exp\\left( -\\frac{\\| r_c - r_i \\|^2}{2 \\sigma(t)^2} \\right) \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( r_c \\)'}</MathJax>: Position of the BMU on the grid.
              </li>
              <li>
                <MathJax inline>{'\\( r_i \\)'}</MathJax>: Position of neuron <MathJax inline>{'\\( i \\)'}</MathJax> on the grid.
              </li>
              <li>
                <MathJax inline>{'\\( \\sigma(t) \\)'}</MathJax>: Neighborhood radius at time <MathJax inline>{'\\( t \\)'}</MathJax>.
              </li>
            </ul>
            <p>
              The neighborhood radius <MathJax inline>{'\\( \\sigma(t) \\)'}</MathJax> decreases over time, allowing the SOM to fine-tune the map.
            </p>
          </section>

          {/* Example: SOM on Color Data */}
          <section>
            <h2>Example: Visualizing Colors with SOM</h2>
            <p>
              Consider a dataset of RGB color values. We can use a SOM to map these colors onto a 2D grid, organizing similar colors close to each other.
            </p>
            <h3>Steps:</h3>
            <ol>
              <li>
                <strong>Prepare the Data:</strong> Collect RGB values representing different colors.
              </li>
              <li>
                <strong>Initialize the SOM:</strong> Create a 2D grid of neurons with random weight vectors (RGB values).
              </li>
              <li>
                <strong>Train the SOM:</strong> Use the color data to train the SOM over multiple iterations.
              </li>
              <li>
                <strong>Visualize the Map:</strong> Display the grid with the final weight vectors, resulting in a smooth transition of colors.
              </li>
            </ol>
            <img src="/images/som_color_map.png" alt="SOM Color Map" className="distribution-image" />
            <p className="image-source">Figure: Self-Organizing Map of Colors.</p>
          </section>

          {/* Applications of SOMs */}
          <section>
            <h2>Applications of Self-Organizing Maps</h2>
            <ul>
              <li>
                <strong>Data Visualization:</strong> Mapping high-dimensional data to 2D or 3D for visualization.
              </li>
              <li>
                <strong>Clustering:</strong> Grouping similar data points based on proximity on the map.
              </li>
              <li>
                <strong>Pattern Recognition:</strong> Identifying patterns in data such as handwriting recognition.
              </li>
              <li>
                <strong>Feature Extraction:</strong> Reducing dimensionality while preserving topological relationships.
              </li>
              <li>
                <strong>Market Segmentation:</strong> Grouping customers based on purchasing behavior.
              </li>
            </ul>
          </section>

          {/* Advantages and Limitations */}
          <section>
            <h2>Advantages and Limitations of SOMs</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Preserve topological properties of the input space.</li>
              <li>Effective for visualizing high-dimensional data.</li>
              <li>Unsupervised learning; no labeled data required.</li>
              <li>Can handle nonlinear relationships in data.</li>
            </ul>
            <h3>Limitations</h3>
            <ul>
              <li>Requires careful tuning of parameters (learning rate, neighborhood size).</li>
              <li>Training can be time-consuming for large datasets.</li>
              <li>Results may vary depending on the initialization.</li>
              <li>Interpretation of the map can be subjective.</li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Parameter Selection</h3>
            <p>
              Choosing appropriate values for the learning rate, neighborhood function, and grid size is crucial for effective training.
            </p>
            <h3>Data Preprocessing</h3>
            <p>
              Data should be normalized to ensure that all features contribute equally to the distance calculations.
            </p>
            <h3>Training Duration</h3>
            <p>
              The number of training iterations should be sufficient to allow the SOM to converge. Monitoring the quantization error can help determine convergence.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing SOM in Python</h2>
            <p>Here's how to implement a Self-Organizing Map using the MiniSom library:</p>
            <pre className="code-block">
              {`import numpy as np
from minisom import MiniSom
import matplotlib.pyplot as plt

# Sample data: Iris dataset
from sklearn.datasets import load_iris
from sklearn.preprocessing import MinMaxScaler

data = load_iris()
X = data.data

# Normalize data
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)

# Initialize SOM
som = MiniSom(x=7, y=7, input_len=4, sigma=1.0, learning_rate=0.5)
som.random_weights_init(X_scaled)

# Train SOM
som.train_random(X_scaled, num_iteration=1000)

# Visualize the results
plt.figure(figsize=(7, 7))
for i, x in enumerate(X_scaled):
    w = som.winner(x)
    plt.text(w[0]+0.5, w[1]+0.5, str(data.target[i]),
             color=plt.cm.Set1(data.target[i]/2),
             fontdict={'weight': 'bold', 'size': 11})
plt.axis([0, som.get_weights().shape[0], 0, som.get_weights().shape[1]])
plt.title('SOM of Iris Dataset')
plt.show()
`}
            </pre>
            <p>The output is a visualization of the SOM with the Iris dataset projected onto a 2D grid.</p>
          </section>

          {/* Mathematical Properties */}
          <section>
            <h2>Mathematical Properties of SOMs</h2>
            <p>
              SOMs perform a nonlinear projection of the probability density function of the high-dimensional data onto the lower-dimensional grid. The training process can be viewed as an optimization problem where the goal is to minimize the quantization error:
            </p>
            <MathJax>
              {'\\[ E = \\sum_{t} \\sum_{i} h_{ci}(t) \\| \\mathbf{x}(t) - \\mathbf{w}_i \\|^2 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\mathbf{x}(t) \\)'}</MathJax>: Input vector at time <MathJax inline>{'\\( t \\)'}</MathJax>.
              </li>
              <li>
                <MathJax inline>{'\\( \\mathbf{w}_i \\)'}</MathJax>: Weight vector of neuron <MathJax inline>{'\\( i \\)'}</MathJax>.
              </li>
            </ul>
          </section>

          {/* Comparison with Other Methods */}
          <section>
            <h2>Comparison with Other Dimensionality Reduction Methods</h2>
            <p>
              Unlike methods like PCA, which are linear and focus on variance maximization, SOMs are nonlinear and preserve topological structures. This makes SOMs suitable for capturing complex relationships in data.
            </p>
            <p>
              SOMs can be compared to t-SNE and UMAP in terms of visualization capabilities, but SOMs offer the advantage of an organized grid structure that can be used for clustering.
            </p>
          </section>

          {/* Applications in Customer Segmentation */}
          <section>
            <h2>Applications in Customer Segmentation</h2>
            <p>
              SOMs can be used to segment customers based on purchasing behavior, demographics, or other features. By mapping customers onto a 2D grid, businesses can identify clusters representing different customer segments.
            </p>
            <img src="/images/som_customer_segmentation.png" alt="SOM Customer Segmentation" className="distribution-image" />
            <p className="image-source">Figure: SOM used for customer segmentation.</p>
          </section>

          {/* Conclusion */}
        
        </div>
      </div>
    </MathJaxContext>
  );
};

export default SelfOrganizingMaps;
