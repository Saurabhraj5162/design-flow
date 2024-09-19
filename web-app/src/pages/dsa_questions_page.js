// src/pages/DSAQuestionsPage.js
import React from 'react';
import './dsa_page.css';

const DSAQuestionsPage = () => {
  return (
    <div className="dsa-questions-page">
      <h1>Data Structures and Algorithms (DSA) Questions</h1>
      <p>Practice popular DSA questions from Leetcode, categorized by topics.</p>

      {/* Arrays Section */}
      <section className="dsa-section">
        <h2>Array</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/two-sum/" target="_blank" rel="noopener noreferrer">Two Sum</a></li>
          <li><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" target="_blank" rel="noopener noreferrer">Best Time to Buy and Sell Stock</a></li>
          <li><a href="https://leetcode.com/problems/contains-duplicate/" target="_blank" rel="noopener noreferrer">Contains Duplicate</a></li>
          <li><a href="https://leetcode.com/problems/product-of-array-except-self/" target="_blank" rel="noopener noreferrer">Product of Array Except Self</a></li>
          <li><a href="https://leetcode.com/problems/maximum-subarray/" target="_blank" rel="noopener noreferrer">Maximum Subarray</a></li>
          <li><a href="https://leetcode.com/problems/maximum-product-subarray/" target="_blank" rel="noopener noreferrer">Maximum Product Subarray</a></li>
          <li><a href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" target="_blank" rel="noopener noreferrer">Find Minimum in Rotated Sorted Array</a></li>
          <li><a href="https://leetcode.com/problems/search-in-rotated-sorted-array/" target="_blank" rel="noopener noreferrer">Search in Rotated Sorted Array</a></li>
          <li><a href="https://leetcode.com/problems/3sum/" target="_blank" rel="noopener noreferrer">3 Sum</a></li>
          <li><a href="https://leetcode.com/problems/container-with-most-water/" target="_blank" rel="noopener noreferrer">Container With Most Water</a></li>
        </ul>
      </section>

      {/* Binary Section */}
      <section className="dsa-section">
        <h2>Binary</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/sum-of-two-integers/" target="_blank" rel="noopener noreferrer">Sum of Two Integers</a></li>
          <li><a href="https://leetcode.com/problems/number-of-1-bits/" target="_blank" rel="noopener noreferrer">Number of 1 Bits</a></li>
          <li><a href="https://leetcode.com/problems/counting-bits/" target="_blank" rel="noopener noreferrer">Counting Bits</a></li>
          <li><a href="https://leetcode.com/problems/missing-number/" target="_blank" rel="noopener noreferrer">Missing Number</a></li>
          <li><a href="https://leetcode.com/problems/reverse-bits/" target="_blank" rel="noopener noreferrer">Reverse Bits</a></li>
        </ul>
      </section>

      {/* Dynamic Programming Section */}
      <section className="dsa-section">
        <h2>Dynamic Programming</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/climbing-stairs/" target="_blank" rel="noopener noreferrer">Climbing Stairs</a></li>
          <li><a href="https://leetcode.com/problems/coin-change/" target="_blank" rel="noopener noreferrer">Coin Change</a></li>
          <li><a href="https://leetcode.com/problems/longest-increasing-subsequence/" target="_blank" rel="noopener noreferrer">Longest Increasing Subsequence</a></li>
          <li><a href="https://leetcode.com/problems/longest-common-subsequence/" target="_blank" rel="noopener noreferrer">Longest Common Subsequence</a></li>
          <li><a href="https://leetcode.com/problems/word-break/" target="_blank" rel="noopener noreferrer">Word Break Problem</a></li>
          <li><a href="https://leetcode.com/problems/combination-sum/" target="_blank" rel="noopener noreferrer">Combination Sum</a></li>
          <li><a href="https://leetcode.com/problems/house-robber/" target="_blank" rel="noopener noreferrer">House Robber</a></li>
          <li><a href="https://leetcode.com/problems/house-robber-ii/" target="_blank" rel="noopener noreferrer">House Robber II</a></li>
          <li><a href="https://leetcode.com/problems/decode-ways/" target="_blank" rel="noopener noreferrer">Decode Ways</a></li>
          <li><a href="https://leetcode.com/problems/unique-paths/" target="_blank" rel="noopener noreferrer">Unique Paths</a></li>
          <li><a href="https://leetcode.com/problems/jump-game/" target="_blank" rel="noopener noreferrer">Jump Game</a></li>
        </ul>
      </section>

      {/* Graph Section */}
      <section className="dsa-section">
        <h2>Graph</h2>
        <ul>
          <li><a href="https://leetcode.com/problems/clone-graph/" target="_blank" rel="noopener noreferrer">Clone Graph</a></li>
          <li><a href="https://leetcode.com/problems/course-schedule/" target="_blank" rel="noopener noreferrer">Course Schedule</a></li>
          <li><a href="https://leetcode.com/problems/pacific-atlantic-water-flow/" target="_blank" rel="noopener noreferrer">Pacific Atlantic Water Flow</a></li>
          <li><a href="https://leetcode.com/problems/number-of-islands/" target="_blank" rel="noopener noreferrer">Number of Islands</a></li>
          <li><a href="https://leetcode.com/problems/longest-consecutive-sequence/" target="_blank" rel="noopener noreferrer">Longest Consecutive Sequence</a></li>
          <li><a href="https://leetcode.com/problems/alien-dictionary/" target="_blank" rel="noopener noreferrer">Alien Dictionary (Leetcode Premium)</a></li>
          <li><a href="https://leetcode.com/problems/graph-valid-tree/" target="_blank" rel="noopener noreferrer">Graph Valid Tree (Leetcode Premium)</a></li>
          <li><a href="https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" target="_blank" rel="noopener noreferrer">Number of Connected Components in an Undirected Graph (Leetcode Premium)</a></li>
        </ul>
      </section>
    </div>
  );
};

export default DSAQuestionsPage;
