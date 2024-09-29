import React from 'react';
import { Link } from 'react-router-dom';
import './foundational_maths.css';

const FoundationalMaths = () => {
    return (
        <div className="foundational-container">
          <header className="header">
            <h1>Foundational Concepts in Machine Learning</h1>
            <p>Understanding the building blocks of ML: Statistics, Probability, and Mathematics.</p>
          </header>
    
          <section className="content-section">
            <div className="card">
              <h2>Statistics & Probability</h2>
              <p>
                Dive into the fundamentals of data analysis, including probability distributions,
                hypothesis testing, and statistical significance.
              </p>
              <Link to="/categories/foundational-maths/statistics-probability" className="start-reading-button">
                Start Reading
              </Link>
            </div>
    
            <div className="card">
              <h2>Linear Algebra</h2>
              <p>
                Learn about vectors, matrices, and operations that are essential for understanding ML
                algorithms.
              </p>
              <Link to="/categories/foundational-maths/linear-algebra" className="start-reading-button">
                Start Reading
              </Link>
            </div>
    
            <div className="card">
              <h2>Calculus for ML</h2>
              <p>
                Understand differentiation and integration concepts that power optimization techniques
                like gradient descent.
              </p>
              <Link to="/categories/foundational-maths/calculus-for-ml" className="start-reading-button">
                Start Reading
              </Link>
            </div>
    
            <div className="card">
              <h2>Probability Distributions</h2>
              <p>
                Explore different types of distributions like Normal, Binomial, and Poisson, which are
                crucial for statistical modeling.
              </p>
              <Link to="/categories/foundational-maths/probability-distributions" className="start-reading-button">
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

export default FoundationalMaths;
