import React from 'react';
import './rnn_page.css';
import img1 from "../assets/images/rnns-v-trans.png"


const TransformerPage = () => {
    return (
      <div className="rnn-page">

       
        <section className="rnn-section">
          <h2>1. What is the difference between Attention and Self-Attention?</h2>
         <ul>
          <li>Attention is a mechanism in neural networks that allows the model to focus on different parts of the input data when producing each part of the output. For example, in language translation, when generating a word in the translated sentence, the model can "attend" to the most relevant words in the original sentence.</li> 

          <li>Self-Attention is a specific type of attention where the model focuses on different parts of the same input sequence to understand the context better. Each word in a sentence considers other words in that same sentence to capture relationships and dependencies, regardless of their positions.</li>
          </ul>
        </section>


        <section className="rnn-section">
          <h2>2. What is the most basic difference between transformers and RNNs? Answer with respect to recurrence.</h2>
         <ul>
          <li>In RNNs, we process word by word. So each time step has a bottleneck. To compute the output at a particular time step, we have to compute the outputs at all the previous time steps.</li> 

          <li>Whereas in transformers, we can run a lot more of the computations in parallel rather than in sequence.</li>
          <img src={img1} alt="RNNs vs Transformer Processing" className="image-style" />
   
          </ul>
        </section>
  

      </div>
    );
  };
  
  export default TransformerPage;
  