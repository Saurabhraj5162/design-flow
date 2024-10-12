import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './supervised_learning.css'; // Reusing the existing CSS

const DecisionTrees = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Decision Trees in Supervised Learning</h1>
          <p>A Versatile Algorithm for Classification and Regression Tasks</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Decision Trees</h2>
            <p>
              <strong>Decision Trees</strong> are supervised learning algorithms used for both classification and regression tasks. They model decisions and their possible consequences in a tree-like structure, resembling a flowchart.
            </p>
            <p>
              The main goal of a decision tree is to create a model that predicts the value of a target variable by learning simple decision rules inferred from the data features.
            </p>
          </section>

          {/* Structure of a Decision Tree */}
          <section>
            <h2>Structure of a Decision Tree</h2>
            <p>A decision tree consists of the following components:</p>
            <ul>
              <li>
                <strong>Root Node:</strong> Represents the entire dataset and initiates the splitting process.
              </li>
              <li>
                <strong>Internal Nodes:</strong> Represent tests on features, leading to further splits.
              </li>
              <li>
                <strong>Branches:</strong> Outcomes of the tests, connecting nodes.
              </li>
              <li>
                <strong>Leaf Nodes (Terminal Nodes):</strong> Represent the final decision or output.
              </li>
            </ul>
            <p>
              At each node, the algorithm selects the best feature to split the data based on certain criteria, aiming to maximize the purity of the nodes.
            </p>
          </section>

          {/* Splitting Criteria */}
          <section>
            <h2>Splitting Criteria</h2>
            <p>
              To decide where to split the data, decision trees use measures of impurity or homogeneity. The most common criteria are:
            </p>
            <ul>
              <li>
                <strong>Gini Impurity:</strong> Measures the likelihood of incorrect classification of a new instance if it was randomly labeled according to the distribution of labels in the dataset.
              </li>
              <li>
                <strong>Entropy (Information Gain):</strong> Measures the amount of information needed to classify a sample and aims to reduce uncertainty.
              </li>
            </ul>

            <h3>Gini Impurity</h3>
            <p>For a binary classification, the Gini impurity is calculated as:</p>
            <MathJax>
              {'\\[ Gini = 1 - \\left( p_1^2 + p_2^2 \\right) \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( p_1 \\)'}</MathJax> and <MathJax inline>{'\\( p_2 \\)'}</MathJax> are the probabilities of each class.</li>
            </ul>

            <h3>Entropy and Information Gain</h3>
            <p>The entropy for a set of probabilities is calculated as:</p>
            <MathJax>
              {'\\[ Entropy = - \\sum_{i=1}^{n} p_i \\log_2 p_i \\]'}
            </MathJax>
            <p>
              Information Gain is the reduction in entropy achieved by partitioning the dataset according to a given attribute:
            </p>
            <MathJax>
              {'\\[ Information\\ Gain = Entropy_{parent} - \\sum_{k} \\frac{N_k}{N_{parent}} \\times Entropy_k \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( N_k \\)'}</MathJax>: Number of samples in child node <MathJax inline>{'\\( k \\)'}</MathJax>.</li>
              <li><MathJax inline>{'\\( N_{parent} \\)'}</MathJax>: Number of samples in the parent node.</li>
              <li><MathJax inline>{'\\( Entropy_k \\)'}</MathJax>: Entropy of child node <MathJax inline>{'\\( k \\)'}</MathJax>.</li>
            </ul>
          </section>

          {/* Algorithm Steps */}
          <section>
            <h2>Algorithm Steps</h2>
            <p>The process of building a decision tree involves the following steps:</p>
            <ol>
              <li>
                <strong>Start at the Root Node:</strong> Use the entire dataset.
              </li>
              <li>
                <strong>Select the Best Feature to Split:</strong> Evaluate all features to find the one that results in the highest information gain or lowest Gini impurity.
              </li>
              <li>
                <strong>Split the Data:</strong> Divide the dataset into subsets based on the selected feature.
              </li>
              <li>
                <strong>Repeat Recursively:</strong> Apply steps 2 and 3 to each child node until a stopping criterion is met.
              </li>
              <li>
                <strong>Create Leaf Nodes:</strong> Assign a class label based on the majority class in the leaf node.
              </li>
            </ol>
            <p>
              Stopping criteria can include a maximum tree depth, minimum number of samples required to split, or if all samples in a node belong to the same class.
            </p>
          </section>

          {/* Example */}
          <section>
            <h2>Example: Classifying Weather for Playing Tennis</h2>
            <p>
              Consider a dataset where we want to decide whether to play tennis based on weather conditions. The features are <em>Outlook</em>, <em>Temperature</em>, <em>Humidity</em>, and <em>Windy</em>, and the target variable is <em>PlayTennis</em> (Yes or No).
            </p>
            <p>The dataset might look like this:</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Outlook</th>
                  <th>Temperature</th>
                  <th>Humidity</th>
                  <th>Windy</th>
                  <th>PlayTennis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sunny</td>
                  <td>Hot</td>
                  <td>High</td>
                  <td>False</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Overcast</td>
                  <td>Hot</td>
                  <td>High</td>
                  <td>True</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Rain</td>
                  <td>Mild</td>
                  <td>High</td>
                  <td>False</td>
                  <td>Yes</td>
                </tr>
                
              </tbody>
            </table>
            <p>
              The decision tree algorithm will analyze the data to find the best features to split on, aiming to classify whether we should play tennis based on the weather conditions.
            </p>
          </section>

          {/* Advantages and Disadvantages */}
          <section>
            <h2>Advantages and Disadvantages of Decision Trees</h2>
            <h3>Advantages</h3>
            <ul>
              <li>Easy to understand and interpret.</li>
              <li>Can handle both numerical and categorical data.</li>
              <li>Requires little data preprocessing (no need for normalization or scaling).</li>
              <li>Capable of capturing non-linear relationships.</li>
            </ul>
            <h3>Disadvantages</h3>
            <ul>
              <li>Prone to overfitting if not properly pruned.</li>
              <li>Can be unstable; small changes in data might lead to different trees.</li>
              <li>Greedy algorithms used may not find the optimal tree globally.</li>
              <li>Biased with imbalanced datasets.</li>
            </ul>
          </section>

          {/* Pruning */}
          <section>
            <h2>Pruning Decision Trees</h2>
            <p>
              <strong>Pruning</strong> is the process of reducing the size of a decision tree by removing sections that provide little power in predicting target variables. It helps in combating overfitting.
            </p>
            <p>There are two types of pruning:</p>
            <ul>
              <li>
                <strong>Pre-Pruning (Early Stopping):</strong> Stop growing the tree before it perfectly classifies the training set, based on criteria like maximum depth or minimum samples per leaf.
              </li>
              <li>
                <strong>Post-Pruning:</strong> Grow the full tree and then remove nodes that do not provide significant information gain, often using cross-validation to determine which nodes to prune.
              </li>
            </ul>
          </section>

          {/* Mathematical Formulation */}
          <section>
            <h2>Mathematical Formulation</h2>
            <p>
              The goal is to select the attribute that best splits the data into pure subsets. For classification trees, this involves maximizing the decrease in impurity:
            </p>
            <MathJax>
              {'\\[ \\Delta Impurity = Impurity_{parent} - \\sum_{k} \\frac{N_k}{N_{parent}} \\times Impurity_k \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( Impurity \\)'}</MathJax>: Can be Gini impurity or entropy.</li>
              <li><MathJax inline>{'\\( N_k \\)'}</MathJax>: Number of samples in child node <MathJax inline>{'\\( k \\)'}</MathJax>.</li>
              <li><MathJax inline>{'\\( N_{parent} \\)'}</MathJax>: Number of samples in the parent node.</li>
            </ul>
          </section>

          {/* Decision Trees for Regression */}
          <section>
            <h2>Decision Trees for Regression</h2>
            <p>
              Decision trees can also be used for regression tasks, where the target variable is continuous. The main difference lies in the splitting criteria and prediction:
            </p>
            <ul>
              <li>
                <strong>Splitting Criteria:</strong> Use measures like <strong>Mean Squared Error (MSE)</strong> to determine the best splits.
              </li>
              <li>
                <strong>Leaf Nodes:</strong> Instead of class labels, leaf nodes contain the mean of the target values in that node.
              </li>
            </ul>
            <p>The MSE for a node is calculated as:</p>
            <MathJax>
              {'\\[ MSE = \\frac{1}{N} \\sum_{i=1}^{N} (Y_i - \\bar{Y})^2 \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li><MathJax inline>{'\\( Y_i \\)'}</MathJax>: Actual target value.</li>
              <li><MathJax inline>{'\\( \\bar{Y} \\)'}</MathJax>: Mean target value in the node.</li>
              <li><MathJax inline>{'\\( N \\)'}</MathJax>: Number of samples in the node.</li>
            </ul>
          </section>

          {/* Applications */}
          <section>
            <h2>Applications of Decision Trees</h2>
            <p>Decision trees are widely used in various fields due to their simplicity and interpretability:</p>
            <ul>
              <li><strong>Medical Diagnosis:</strong> Determining the presence of a disease based on symptoms.</li>
              <li><strong>Credit Scoring:</strong> Assessing the risk of lending to a borrower.</li>
              <li><strong>Customer Segmentation:</strong> Grouping customers based on purchasing behavior.</li>
              <li><strong>Fraud Detection:</strong> Identifying fraudulent transactions.</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>You've gained a comprehensive understanding of decision trees in supervised learning.</p>
            <Link to="/categories/supervised-learning/random-forests" className="next-button">
              Proceed to Random Forests
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default DecisionTrees;
