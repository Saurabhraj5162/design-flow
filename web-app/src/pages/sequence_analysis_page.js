// src/pages/SequenceAnalysisPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './module_chapters.css';

const SequenceAnalysisPage = () => {
  return (
    <div className="module-page">
      <h1>Sequence Analysis</h1>
      <p>Explore the evolution of sequence modeling, from traditional statistical methods to cutting-edge Transformers.</p>

      {/* Chapters with Numbers */}
      <section className="numbered-timeline">
        <div className="timeline-event">
          <div className="number-circle">1</div>
          <div className="timeline-card">
            <h3>n-grams and Statistical Methods</h3>
            <p>Learn about early NLP techniques before deep learning.</p>
            <Link to="/categories/sequence-analysis/n-grams">Read More</Link>
          </div>
        </div>
        <div className="timeline-event">
          <div className="number-circle">2</div>
          <div className="timeline-card">
            <h3>Recurrent Neural Networks</h3>
            <p>Explore the foundation of sequence modeling with RNNs.</p>
            <Link to="/categories/sequence-analysis/rnns">Read More</Link>
          </div>
        </div>
        <div className="timeline-event">
          <div className="number-circle">3</div>
          <div className="timeline-card">
            <h3>Long Short-Term Memory Networks</h3>
            <p>Discover how LSTMs improved upon RNNs for long-term dependencies.</p>
            <Link to="/categories/sequence-analysis/lstms">Read More</Link>
          </div>
        </div>
        <div className="timeline-event">
          <div className="number-circle">4</div>
          <div className="timeline-card">
            <h3>Transformers</h3>
            <p>The breakthrough architecture that changed NLP forever.</p>
            <Link to="/categories/sequence-analysis/transformers">Read More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SequenceAnalysisPage;
