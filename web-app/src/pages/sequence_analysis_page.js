// src/pages/SequenceAnalysisPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sequence_analysis_page.css';

const SequenceAnalysisPage = () => {
    return (
      <div className="sequence-analysis-page">
        <h1>Sequence Analysis</h1>
        <p>Follow the timeline of key advancements in NLP and Language Models.</p>
  
        {/* Chapters Timeline */}
        <section className="timeline">
          <div className="timeline-event">
            <div className="timeline-card">
              <h3>n-grams and Statistical Methods</h3>
              <p>Learn about early NLP techniques before deep learning.</p>
              <Link to="/sequence-analysis/n-grams">Read More</Link>
            </div>
          </div>
          <div className="timeline-event">
            <div className="timeline-card">
              <h3>Recurrent Neural Networks</h3>
              <p>Explore the foundation of sequence modeling with RNNs.</p>
              <Link to="/sequence-analysis/rnns">Read More</Link>
            </div>
          </div>
          <div className="timeline-event">
            <div className="timeline-card">
              <h3>Long Short-Term Memory Networks</h3>
              <p>Discover how LSTMs improved upon RNNs for long-term dependencies.</p>
              <Link to="/sequence-analysis/lstms">Read More</Link>
            </div>
          </div>
          <div className="timeline-event">
            <div className="timeline-card">
              <h3>Transformers</h3>
              <p>The breakthrough architecture that changed NLP forever.</p>
              <Link to="/sequence-analysis/transformers">Read More</Link>
            </div>
          </div>
          {/* Add more chapters here */}
        </section>
      </div>
    );
  };
  
// const SequenceAnalysisPage = () => {
//   return (
//     <div className="sequence-analysis-page">
//       <h1>Sequence Analysis</h1>
//       <p>Explore the advancements in NLP and Language Models over the years.</p>

//       {/* Chapters */}
//       <section className="chapters">
//         <h2>Chapters</h2>
//         <div className="chapters-list">
//           <div className="chapter-card">
//             <h3>n-grams and Statistical Methods</h3>
//             <p>Learn about early NLP techniques before deep learning.</p>
//             <Link to="/sequence-analysis/n-grams">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>Recurrent Neural Networks</h3>
//             <p>Explore the foundation of sequence modeling with RNNs.</p>
//             <Link to="/sequence-analysis/rnns">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>Long Short-Term Memory Networks</h3>
//             <p>Discover how LSTMs improved upon RNNs for long-term dependencies.</p>
//             <Link to="/sequence-analysis/lstms">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>Gated Recurrent Units</h3>
//             <p>A simplified alternative to LSTMs.</p>
//             <Link to="/sequence-analysis/grus">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>Attention Mechanisms</h3>
//             <p>Learn how attention mechanisms revolutionized sequence modeling.</p>
//             <Link to="/sequence-analysis/attention">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>Transformers</h3>
//             <p>The breakthrough architecture that changed NLP forever.</p>
//             <Link to="/sequence-analysis/transformers">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>BERT and Pre-trained Language Models</h3>
//             <p>Explore the world of bidirectional transformers with BERT.</p>
//             <Link to="/sequence-analysis/bert">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>GPT and Causal Language Models</h3>
//             <p>Learn about the evolution of GPT and autoregressive models.</p>
//             <Link to="/sequence-analysis/gpt">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>T5 and Seq2Seq Models</h3>
//             <p>Understand how Seq2Seq models are applied in NLP tasks.</p>
//             <Link to="/sequence-analysis/t5">Read More</Link>
//           </div>
//           <div className="chapter-card">
//             <h3>Recent Developments and Large-Scale Language Models</h3>
//             <p>Discover the advancements in large-scale models like GPT-3.</p>
//             <Link to="/sequence-analysis/gpt-3">Read More</Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

export default SequenceAnalysisPage;
