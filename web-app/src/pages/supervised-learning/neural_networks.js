import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the existing CSS

const NeuralNetworks = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Neural Networks in Supervised Learning</h1>
          <p>Understanding the Basics of Artificial Neural Networks</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Neural Networks</h2>
            <p>
              <strong>Artificial Neural Networks (ANNs)</strong> are computational models inspired by the human brain's structure and function. They consist of interconnected processing units called neurons that work together to solve complex problems. Neural networks are capable of capturing non-linear relationships in data, making them powerful tools for supervised learning tasks such as classification and regression.
            </p>
          </section>

          {/* Structure of a Neural Network */}
          <section>
            <h2>Structure of a Neural Network</h2>
            <p>
              A typical neural network consists of three types of layers:
            </p>
            <ul>
              <li>
                <strong>Input Layer:</strong> Receives the input data.
              </li>
              <li>
                <strong>Hidden Layers:</strong> Perform computations and feature transformations.
              </li>
              <li>
                <strong>Output Layer:</strong> Produces the final output or prediction.
              </li>
            </ul>
            <p>
              Each layer contains neurons (also called nodes or units) that are connected to neurons in the subsequent layer. The connections have associated weights that are adjusted during the training process to minimize prediction errors.
            </p>
          </section>

          {/* Neuron Function */}
          <section>
            <h2>The Neuron Function</h2>
            <p>
              Each neuron computes a weighted sum of its inputs and applies an activation function to introduce non-linearity:
            </p>
            <MathJax>
              {'\\[ a = \\phi \\left( \\sum_{i=1}^{n} w_i x_i + b \\right) \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( a \\)'}</MathJax>: Output of the neuron (activation).</li>
              <li><MathJax inline>{'\\( \\phi \\)'}</MathJax>: Activation function.</li>
              <li><MathJax inline>{'\\( w_i \\)'}</MathJax>: Weight of the <MathJax inline>{'\\( i^{th} \\)'}</MathJax> input.</li>
              <li><MathJax inline>{'\\( x_i \\)'}</MathJax>: Value of the <MathJax inline>{'\\( i^{th} \\)'}</MathJax> input.</li>
              <li><MathJax inline>{'\\( b \\)'}</MathJax>: Bias term.</li>
            </ul>
          </section>

          {/* Activation Functions */}
          <section>
            <h2>Activation Functions</h2>
            <p>
              Activation functions introduce non-linearity into the network, enabling it to learn complex patterns. Common activation functions include:
            </p>
            <ul>
              <li>
                <strong>Sigmoid Function:</strong>
                <MathJax inline>{'\\( \\sigma(z) = \\frac{1}{1 + e^{-z}} \\)'}</MathJax>
              </li>
              <li>
                <strong>Hyperbolic Tangent (Tanh):</strong>
                <MathJax inline>{'\\( \\tanh(z) = \\frac{e^{z} - e^{-z}}{e^{z} + e^{-z}} \\)'}</MathJax>
              </li>
              <li>
                <strong>Rectified Linear Unit (ReLU):</strong>
                <MathJax inline>{'\\( \\text{ReLU}(z) = \\max(0, z) \\)'}</MathJax>
              </li>
              <li>
                <strong>Leaky ReLU:</strong>
                <MathJax inline>{'\\( \\text{Leaky ReLU}(z) = \\begin{cases} z & \\text{if } z > 0 \\\\ \\alpha z & \\text{if } z \\leq 0 \\end{cases} \\)'}</MathJax>
              </li>
              <li>
                <strong>Softmax Function:</strong> Used in the output layer for multi-class classification to produce probabilities.
              </li>
            </ul>
          </section>

          {/* Forward Propagation */}
          <section>
            <h2>Forward Propagation</h2>
            <p>
              In <strong>forward propagation</strong>, input data passes through the network layer by layer, and activations are computed using the neuron function. The output layer produces the final prediction.
            </p>
            <p>
              Mathematically, for each layer <MathJax inline>{'\\( l \\)'}</MathJax>:
            </p>
            <MathJax>
              {'\\[ a^{(l)} = \\phi^{(l)} \\left( W^{(l)} a^{(l-1)} + b^{(l)} \\right) \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( a^{(l-1)} \\)'}</MathJax>: Activations from the previous layer.</li>
              <li><MathJax inline>{'\\( W^{(l)} \\)'}</MathJax>: Weight matrix for layer <MathJax inline>{'\\( l \\)'}</MathJax>.</li>
              <li><MathJax inline>{'\\( b^{(l)} \\)'}</MathJax>: Bias vector for layer <MathJax inline>{'\\( l \\)'}</MathJax>.</li>
              <li><MathJax inline>{'\\( \\phi^{(l)} \\)'}</MathJax>: Activation function for layer <MathJax inline>{'\\( l \\)'}</MathJax>.</li>
            </ul>
          </section>

          {/* Loss Function */}
          <section>
            <h2>Loss Function</h2>
            <p>
              The <strong>loss function</strong> measures the discrepancy between the predicted outputs and the actual targets. Common loss functions include:
            </p>
            <ul>
              <li>
                <strong>Mean Squared Error (MSE):</strong> Used for regression tasks.
                <MathJax>
                  {'\\[ \\text{MSE} = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2 \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Cross-Entropy Loss:</strong> Used for classification tasks.
                <MathJax>
                  {'\\[ \\text{CrossEntropy} = -\\sum_{i=1}^{n} y_i \\log(\\hat{y}_i) \\]'}
                </MathJax>
              </li>
            </ul>
          </section>

          {/* Backpropagation and Training */}
          <section>
            <h2>Backpropagation and Training</h2>
            <p>
              <strong>Backpropagation</strong> is the algorithm used to train neural networks. It involves computing the gradient of the loss function with respect to each weight and bias in the network and updating them to minimize the loss.
            </p>
            <p>
              The steps are:
            </p>
            <ol>
              <li>Compute the loss using the current weights and biases.</li>
              <li>Calculate the gradients of the loss with respect to the weights and biases using the chain rule.</li>
              <li>Update the weights and biases using an optimization algorithm (e.g., gradient descent).</li>
            </ol>
            <p>
              The weights are updated as:
            </p>
            <MathJax>
              {'\\[ w_{ij}^{(l)} \\leftarrow w_{ij}^{(l)} - \\eta \\frac{\\partial L}{\\partial w_{ij}^{(l)}} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( \\eta \\)'}</MathJax>: Learning rate.</li>
              <li><MathJax inline>{'\\( L \\)'}</MathJax>: Loss function.</li>
              <li><MathJax inline>{'\\( w_{ij}^{(l)} \\)'}</MathJax>: Weight from neuron <MathJax inline>{'\\( j \\)'}</MathJax> in layer <MathJax inline>{'\\( l-1 \\)'}</MathJax> to neuron <MathJax inline>{'\\( i \\)'}</MathJax> in layer <MathJax inline>{'\\( l \\)'}</MathJax>.</li>
            </ul>
          </section>

          {/* Optimization Algorithms */}
          <section>
            <h2>Optimization Algorithms</h2>
            <p>
              Optimization algorithms adjust the network's weights and biases to minimize the loss function. Common algorithms include:
            </p>
            <ul>
              <li><strong>Stochastic Gradient Descent (SGD):</strong> Updates weights using gradients from a single or mini-batch of samples.</li>
              <li><strong>Momentum:</strong> Accelerates SGD by adding a fraction of the previous update vector.</li>
              <li><strong>Adaptive Learning Rate Methods:</strong> Adjust the learning rate during training (e.g., AdaGrad, RMSProp, Adam).</li>
            </ul>
          </section>

          {/* Example */}
          <section>
            <h2>Example: Image Classification with Neural Networks</h2>
            <p>
              Suppose we want to classify images of handwritten digits (0-9). We can use a neural network with an input layer corresponding to the pixel values, one or more hidden layers for feature extraction, and an output layer with 10 neurons (one for each digit) using the softmax activation function.
            </p>
            <p>
              The network learns to recognize patterns in the pixel data that correspond to each digit through training on labeled examples.
            </p>
          </section>

          {/* Overfitting and Regularization */}
          <section>
            <h2>Overfitting and Regularization</h2>
            <p>
              Neural networks can overfit the training data, especially if they have many parameters relative to the amount of training data. To prevent overfitting, we can use regularization techniques:
            </p>
            <ul>
              <li><strong>Early Stopping:</strong> Stop training when performance on a validation set starts to degrade.</li>
              <li><strong>Weight Decay (L2 Regularization):</strong> Add a penalty term to the loss function proportional to the squared magnitude of the weights.</li>
              <li><strong>Dropout:</strong> Randomly drop units (along with their connections) during training to prevent co-adaptation.</li>
              <li><strong>Data Augmentation:</strong> Increase the amount of training data by applying transformations to existing data.</li>
            </ul>
          </section>

          {/* Deep Neural Networks */}
          <section>
            <h2>Deep Neural Networks</h2>
            <p>
              Neural networks with multiple hidden layers are called <strong>deep neural networks</strong>. Deep learning refers to training these large neural networks, which can model complex patterns in data.
            </p>
            <p>
              Advances in computational power and algorithms have enabled the successful training of deep networks, leading to breakthroughs in areas such as image recognition, natural language processing, and speech recognition.
            </p>
          </section>

          {/* Applications */}
          <section>
            <h2>Applications of Neural Networks</h2>
            <p>Neural networks are used in a wide range of applications:</p>
            <ul>
              <li><strong>Computer Vision:</strong> Image classification, object detection, facial recognition.</li>
              <li><strong>Natural Language Processing:</strong> Language translation, sentiment analysis, text generation.</li>
              <li><strong>Speech Recognition:</strong> Voice assistants, transcription services.</li>
              <li><strong>Healthcare:</strong> Disease diagnosis, medical image analysis.</li>
              <li><strong>Finance:</strong> Fraud detection, stock price prediction.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>You've gained a comprehensive understanding of neural networks in supervised learning.</p>
            <Link to="/categories/supervised-learning/evaluation-metrics" className="next-button">
              Proceed to Evaluation Metrics
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default NeuralNetworks;
