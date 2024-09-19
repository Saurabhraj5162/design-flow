import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';


const DSAPage = () => {
    return (
        <section className="categories">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
        <div className="category-card">
            <h3>DSA LeetCode Questions</h3>
            <p>Links for popular leetcode questions.</p>
            <Link to="/categories/dsa/dsa-questions">Explore</Link>
          </div>
         
        </div>
      </section>
    );
  };
  
  export default DSAPage;