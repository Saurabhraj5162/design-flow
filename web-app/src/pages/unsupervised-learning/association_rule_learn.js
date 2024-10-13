import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const AssociationRuleLearning = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Association Rule Learning</h1>
          <p>Discovering Interesting Relations Between Variables in Large Databases</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction to Association Rule Learning</h2>
            <p>
              <strong>Association Rule Learning</strong> is an unsupervised learning method used to uncover hidden patterns or relationships between variables in large datasets. It is widely used in market basket analysis, recommendation systems, and cross-marketing strategies.
            </p>
            <p>
              The goal is to find interesting associations and correlations among data items, which can help businesses make data-driven decisions.
            </p>
          </section>

          {/* Basic Concepts */}
          <section>
            <h2>Basic Concepts and Terminology</h2>
            <p>Before diving into the algorithms, let's understand some key terms:</p>
            <ul>
              <li>
                <strong>Item:</strong> An object or attribute in the dataset (e.g., a product in a store).
              </li>
              <li>
                <strong>Itemset:</strong> A collection of one or more items (e.g., a set of products purchased together).
              </li>
              <li>
                <strong>Transaction:</strong> A record containing a set of items (e.g., a customer's purchase).
              </li>
              <li>
                <strong>Support:</strong> The proportion of transactions that contain an itemset.
                <MathJax inline>{'\\[ \\text{Support}(A) = \\frac{\\text{Number of transactions containing } A}{\\text{Total number of transactions}} \\]'}</MathJax>
              </li>
              <li>
                <strong>Confidence:</strong> The likelihood that itemset B is purchased when itemset A is purchased.
                <MathJax inline>{'\\[ \\text{Confidence}(A \\rightarrow B) = \\frac{\\text{Support}(A \\cup B)}{\\text{Support}(A)} \\]'}</MathJax>
              </li>
              <li>
                <strong>Lift:</strong> The ratio of observed support to that expected if A and B were independent.
                <MathJax inline>{'\\[ \\text{Lift}(A \\rightarrow B) = \\frac{\\text{Support}(A \\cup B)}{\\text{Support}(A) \\times \\text{Support}(B)} \\]'}</MathJax>
              </li>
            </ul>
          </section>

          {/* Association Rules */}
          <section>
            <h2>Association Rules</h2>
            <p>
              An <strong>association rule</strong> is an implication of the form <MathJax inline>{'\\( A \\rightarrow B \\)'}</MathJax>, where A and B are itemsets, and A ∩ B = ∅. The rule suggests that if a transaction contains A, it is likely to contain B as well.
            </p>
            <p>
              For example, in a supermarket, an association rule could be "If a customer buys bread and butter, they are likely to buy milk."
            </p>
          </section>

          {/* Apriori Algorithm */}
          <section>
            <h2>Apriori Algorithm</h2>
            <p>
              The <strong>Apriori algorithm</strong> is a classic algorithm used to mine frequent itemsets and generate association rules. It operates on the principle that if an itemset is frequent, all of its subsets are also frequent.
            </p>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>
                <strong>Generate Frequent 1-Itemsets:</strong> Identify all items that meet the minimum support threshold.
              </li>
              <li>
                <strong>Generate Candidate Itemsets:</strong> Use the frequent (k-1)-itemsets to generate candidate k-itemsets.
              </li>
              <li>
                <strong>Prune Candidates:</strong> Remove itemsets that have infrequent subsets.
              </li>
              <li>
                <strong>Calculate Support:</strong> Count the support of remaining candidate itemsets.
              </li>
              <li>
                <strong>Repeat:</strong> Repeat steps 2-4 until no more frequent itemsets can be found.
              </li>
              <li>
                <strong>Generate Association Rules:</strong> For each frequent itemset, generate all possible association rules that meet the minimum confidence threshold.
              </li>
            </ol>
          </section>

          {/* Example: Market Basket Analysis */}
          <section>
            <h2>Example: Market Basket Analysis</h2>
            <p>Consider the following transactional dataset:</p>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Items Purchased</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>T1</td>
                  <td>Bread, Milk</td>
                </tr>
                <tr>
                  <td>T2</td>
                  <td>Bread, Diapers, Beer, Eggs</td>
                </tr>
                <tr>
                  <td>T3</td>
                  <td>Milk, Diapers, Beer, Cola</td>
                </tr>
                <tr>
                  <td>T4</td>
                  <td>Bread, Milk, Diapers, Beer</td>
                </tr>
                <tr>
                  <td>T5</td>
                  <td>Bread, Milk, Diapers, Cola</td>
                </tr>
              </tbody>
            </table>
            <h3>Finding Frequent Itemsets:</h3>
            <p>Assuming a minimum support threshold of 60% (support ≥ 3 transactions):</p>
            <ul>
              <li>
                <strong>Frequent 1-Itemsets:</strong> Bread (4), Milk (4), Diapers (4), Beer (3)
              </li>
              <li>
                <strong>Frequent 2-Itemsets:</strong> Bread &amp; Milk (3), Milk &amp; Diapers (4), Bread &amp; Diapers (3), Diapers &amp; Beer (3)
              </li>
              <li>
                <strong>Frequent 3-Itemsets:</strong> Bread, Milk &amp; Diapers (3)
              </li>
            </ul>
            <h3>Generating Association Rules:</h3>
            <p>From the frequent itemsets, we can generate rules like:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\text{Bread, Milk} \\rightarrow \\text{Diapers} \\)'}</MathJax>
              </li>
              <li>
                <MathJax inline>{'\\( \\text{Diapers} \\rightarrow \\text{Beer} \\)'}</MathJax>
              </li>
              <li>
                <MathJax inline>{'\\( \\text{Milk} \\rightarrow \\text{Diapers} \\)'}</MathJax>
              </li>
            </ul>
            <h3>Calculating Confidence and Lift:</h3>
            <p>For the rule <MathJax inline>{'\\( \\text{Milk} \\rightarrow \\text{Diapers} \\)'}</MathJax>:</p>
            <ul>
              <li>
                <strong>Support:</strong> 4/5 = 80%
              </li>
              <li>
                <strong>Confidence:</strong> Support(Milk &amp; Diapers) / Support(Milk) = 4/4 = 100%
              </li>
              <li>
                <strong>Lift:</strong> Confidence / Support(Diapers) = 1.0 / 0.8 = 1.25
              </li>
            </ul>
          </section>

          {/* Evaluation Metrics */}
          <section>
            <h2>Evaluation Metrics</h2>
            <p>To assess the strength of association rules, we use metrics like:</p>
            <ul>
              <li>
                <strong>Support:</strong> Indicates how frequently the itemset appears in the dataset.
              </li>
              <li>
                <strong>Confidence:</strong> Measures the reliability of the inference made by a rule.
              </li>
              <li>
                <strong>Lift:</strong> Indicates the strength of a rule over the random co-occurrence of A and B.
              </li>
              <li>
                <strong>Leverage:</strong> The difference between the observed frequency and expected frequency if A and B were independent.
                <MathJax inline>{'\\[ \\text{Leverage}(A \\rightarrow B) = \\text{Support}(A \\cup B) - \\text{Support}(A) \\times \\text{Support}(B) \\]'}</MathJax>
              </li>
              <li>
                <strong>Conviction:</strong> Measures the degree of implication of a rule.
                <MathJax inline>{'\\[ \\text{Conviction}(A \\rightarrow B) = \\frac{1 - \\text{Support}(B)}{1 - \\text{Confidence}(A \\rightarrow B)} \\]'}</MathJax>
              </li>
            </ul>
          </section>

          {/* Limitations and Challenges */}
          <section>
            <h2>Limitations and Challenges</h2>
            <ul>
              <li>
                <strong>Large Number of Rules:</strong> Can generate an overwhelming number of rules, making it difficult to identify the most relevant ones.
              </li>
              <li>
                <strong>Rare Item Problem:</strong> Items with low support may be of interest but are often discarded.
              </li>
              <li>
                <strong>Computational Complexity:</strong> The algorithm can be computationally intensive with large datasets.
              </li>
              <li>
                <strong>Interpreting Rules:</strong> Some rules may be coincidental and not meaningful.
              </li>
            </ul>
          </section>

          {/* Frequent Pattern (FP) Growth Algorithm */}
          <section>
            <h2>Frequent Pattern (FP) Growth Algorithm</h2>
            <p>
              The <strong>FP-Growth algorithm</strong> is an efficient alternative to the Apriori algorithm. It compresses the dataset into a structure called an FP-tree, avoiding the costly candidate generation step.
            </p>
            <h3>Algorithm Steps:</h3>
            <ol>
              <li>
                <strong>Build FP-Tree:</strong> Scan the dataset and build the FP-tree by inserting transactions.
              </li>
              <li>
                <strong>Mine Frequent Patterns:</strong> Recursively find frequent itemsets from the FP-tree.
              </li>
            </ol>
            <p>
              The FP-Growth algorithm is faster and more scalable than Apriori, especially with large datasets.
            </p>
          </section>

          {/* Applications of Association Rule Learning */}
          <section>
            <h2>Applications of Association Rule Learning</h2>
            <ul>
              <li>
                <strong>Market Basket Analysis:</strong> Identifying products frequently purchased together to optimize store layouts and promotions.
              </li>
              <li>
                <strong>Recommendation Systems:</strong> Suggesting items to users based on association rules.
              </li>
              <li>
                <strong>Fraud Detection:</strong> Identifying unusual patterns that may indicate fraudulent activity.
              </li>
              <li>
                <strong>Web Usage Mining:</strong> Understanding user navigation patterns on websites.
              </li>
            </ul>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Setting Thresholds</h3>
            <p>
              Choosing appropriate minimum support and confidence thresholds is crucial. Too high thresholds may miss important rules; too low thresholds may produce too many insignificant rules.
            </p>
            <h3>Data Preprocessing</h3>
            <p>
              Data needs to be prepared in a transactional format. Consider binarization of continuous variables and handling of missing values.
            </p>
            <h3>Rule Pruning</h3>
            <p>
              Use additional metrics like lift and leverage to filter out less interesting rules.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Association Rule Learning in Python</h2>
            <p>Here's how to perform association rule learning using the <code>mlxtend</code> library:</p>
            <pre className="code-block">
              {`import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori, association_rules

# Sample dataset
transactions = [
    ['Bread', 'Milk'],
    ['Bread', 'Diapers', 'Beer', 'Eggs'],
    ['Milk', 'Diapers', 'Beer', 'Cola'],
    ['Bread', 'Milk', 'Diapers', 'Beer'],
    ['Bread', 'Milk', 'Diapers', 'Cola'],
]

# Convert to one-hot encoded DataFrame
te = TransactionEncoder()
te_ary = te.fit(transactions).transform(transactions)
df = pd.DataFrame(te_ary, columns=te.columns_)

# Find frequent itemsets
frequent_itemsets = apriori(df, min_support=0.6, use_colnames=True)

# Generate association rules
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)
print(rules)
`}
            </pre>
            <p>The output will display the frequent itemsets and the generated association rules with their metrics.</p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Association rule learning is a powerful technique for discovering meaningful patterns and relationships in large datasets. By understanding its concepts and algorithms, you can apply it effectively to various domains like marketing, finance, and web analytics.
            </p>
            <p>Next, let's explore anomaly detection methods in unsupervised learning.</p>
            <Link to="/categories/unsupervised-learning/anomaly-detection" className="next-button">
              Proceed to Anomaly Detection
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default AssociationRuleLearning;
