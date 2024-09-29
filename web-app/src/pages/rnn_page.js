// src/pages/RecurrentNeuralNetworksPage.js
import React from 'react';
import './rnn_page.css';

const RecurrentNeuralNetworksPage = () => {
  return (
    <div className="rnn-page">
      <h1>Recurrent Neural Networks (RNNs)</h1>
      <p>
        Recurrent Neural Networks (RNNs) are a class of neural networks designed to handle sequential data and
        are widely used in time-series analysis, language modeling, and natural language processing tasks.
      </p>

      {/* Section 1: Introduction */}
      <section className="rnn-section">
        <h2>Introduction to RNNs</h2>
        <p>
          RNNs introduce the concept of recurrent connections, where the output from one step is fed as input to
          the next step. This makes them especially suited for processing sequences of data, such as text, speech, or
          time-series.
        </p>
      </section>

      {/* Section 2: How RNNs Work */}
      <section className="rnn-section">
        <h2>How RNNs Work</h2>
        <p>
          In a Recurrent Neural Network, neurons in a layer are connected to themselves or neurons in previous layers,
          allowing information to persist. The same weights are applied to each step in the sequence, meaning that the network
          remembers information across the sequence.
        </p>
        <ul>
          <li>Input is provided at each step of the sequence.</li>
          <li>Hidden states are used to maintain information from previous steps.</li>
          <li>Outputs are generated at each time step, influenced by previous inputs.</li>
        </ul>
      </section>

      {/* Section 3: Challenges with RNNs */}
      <section className="rnn-section">
        <h2>Challenges with RNNs</h2>
        <p>
          One of the major challenges with traditional RNNs is the problem of vanishing and exploding gradients. This
          occurs when gradients used during backpropagation either become too small or too large, making it difficult
          for the model to learn long-term dependencies.
        </p>
        <p>
          To address this, advanced architectures like Long Short-Term Memory (LSTM) networks and Gated Recurrent
          Units (GRUs) were introduced to handle long-term dependencies more effectively.
        </p>
      </section>

      {/* Section 4: Applications of RNNs */}
      <section className="rnn-section">
        <h2>Applications of RNNs</h2>
        <p>RNNs are used in a wide range of applications, including:</p>
        <ul>
          <li>Natural Language Processing (NLP) tasks like language modeling and translation.</li>
          <li>Time-series forecasting in finance and weather prediction.</li>
          <li>Speech recognition and generation.</li>
          <li>Sequence generation tasks such as text generation and music generation.</li>
        </ul>
      </section>

      {/* Section 5: Comparison with LSTMs and GRUs */}
      <section className="rnn-section">
        <h2>Comparison with LSTMs and GRUs</h2>
        <p>
          While RNNs are good for handling sequential data, their inability to learn long-term dependencies effectively led to the
          development of LSTM and GRU networks.
        </p>
        <ul>
          <li>
            <strong>LSTMs:</strong> Introduce memory cells and gating mechanisms (input gate, forget gate, output gate)
            to control what information should be remembered or forgotten over time.
          </li>
          <li>
            <strong>GRUs:</strong> Similar to LSTMs, but with fewer gates (reset gate and update gate), making them computationally
            more efficient in certain cases.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RecurrentNeuralNetworksPage;
