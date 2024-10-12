import React from 'react';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Import the CSS file

// const SupervisedLearning = () => {
//     return (
//         <div className="supervised-container">
//           <header className="header">
//             <h1>Supervised Learning</h1>
//             <p>Explore algorithms and techniques for predictive modeling using labeled data.</p>
//           </header>
    
//           <section className="content-section">
//             <div className="card">
//               <h2>Introduction to Supervised Learning</h2>
//               <p>
//                 Learn the basics of supervised learning, where models are trained using labeled data.
//               </p>
//               <Link to="/categories/supervised-learning/introduction" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
    
//             <div className="card">
//               <h2>Regression</h2>
//               <p>
//                 Understand regression algorithms used for predicting continuous outcomes.
//               </p>
//               <Link to="/categories/supervised-learning/regression" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
    
//             <div className="card">
//               <h2>Classification</h2>
//               <p>
//                 Explore classification techniques for predicting categorical outcomes.
//               </p>
//               <Link to="/categories/supervised-learning/classification" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
    
//             <div className="card">
//               <h2>Decision Trees</h2>
//               <p>
//                 Dive into decision trees, a versatile algorithm for both regression and classification tasks.
//               </p>
//               <Link to="/categories/supervised-learning/decision-trees" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
    
//             <div className="card">
//               <h2>Random Forests</h2>
//               <p>
//                 Learn about random forests, an ensemble method that improves accuracy by combining multiple decision trees.
//               </p>
//               <Link to="/categories/supervised-learning/random-forests" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
    
//             <div className="card">
//               <h2>Support Vector Machines</h2>
//               <p>
//                 Understand support vector machines, powerful models for classification and regression tasks.
//               </p>
//               <Link to="/categories/supervised-learning/support-vector-machines" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
    
//             <div className="card">
//               <h2>Neural Networks</h2>
//               <p>
//                 Explore the basics of neural networks and how they are applied in supervised learning.
//               </p>
//               <Link to="/categories/supervised-learning/neural-networks" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
    
//             <div className="card">
//               <h2>Evaluation Metrics</h2>
//               <p>
//                 Learn about metrics used to evaluate the performance of supervised learning models.
//               </p>
//               <Link to="/categories/supervised-learning/evaluation-metrics" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
    
//             <div className="card">
//               <h2>Overfitting and Underfitting</h2>
//               <p>
//                 Understand the concepts of overfitting and underfitting and how to balance model complexity.
//               </p>
//               <Link to="/categories/supervised-learning/overfitting-underfitting" className="start-reading-button">
//                 Start Reading
//               </Link>
//             </div>
//           </section>
    
//           <footer className="footer">
//             <p>&copy; 2024 Your Website Name. All rights reserved.</p>
//           </footer>
//         </div>
//       );
//     };

// export default SupervisedLearning;


const SupervisedLearning = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Supervised Learning</h1>
        <p>Explore algorithms and techniques for predictive modeling using labeled data.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Supervised Learning</h2>
          <p>
            Learn the basics of supervised learning, where models are trained using labeled data.
          </p>
          <Link to="/categories/supervised-learning/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Regression</h2>
          <p>
            Understand regression algorithms used for predicting continuous outcomes.
          </p>
          <Link to="/categories/supervised-learning/regression" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>Classification</h2>
          <p>
            Explore classification techniques for predicting categorical outcomes.
          </p>
          <Link to="/categories/supervised-learning/classification" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Decision Trees</h2>
          <p>
            Dive into decision trees, a versatile algorithm for both regression and classification tasks.
          </p>
          <Link to="/categories/supervised-learning/decision-trees" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>Random Forests</h2>
          <p>
            Learn about random forests, an ensemble method that improves accuracy by combining multiple decision trees.
          </p>
          <Link to="/categories/supervised-learning/random-forests" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>Support Vector Machines</h2>
          <p>
            Understand support vector machines, powerful models for classification and regression tasks.
          </p>
          <Link to="/categories/supervised-learning/support-vector-machines" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>Neural Networks</h2>
          <p>
            Explore the basics of neural networks and how they are applied in supervised learning.
          </p>
          <Link to="/categories/supervised-learning/neural-networks" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Evaluation Metrics</h2>
          <p>
            Learn about metrics used to evaluate the performance of supervised learning models.
          </p>
          <Link to="/categories/supervised-learning/evaluation-metrics" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Overfitting and Underfitting</h2>
          <p>
            Understand the concepts of overfitting and underfitting and how to balance model complexity.
          </p>
          <Link to="/categories/supervised-learning/overfitting-underfitting" className="start-reading-button">
            Start Reading
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SupervisedLearning;
