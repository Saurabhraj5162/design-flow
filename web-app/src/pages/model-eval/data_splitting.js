import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Import the CSS file

const TrainingValidationTestSets = () => {
  return (
    <MathJaxContext>
      <div className="container">
        <header className="header">
          <h1>Training, Validation, and Test Sets</h1>
          <p>Understanding Data Splitting for Model Development and Evaluation</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Why Split Data into Training, Validation, and Test Sets?</h2>
            <p>
              In machine learning, it's crucial to assess how well a model generalizes to unseen data. Splitting your dataset into separate subsets helps in:
            </p>
            <ul>
              <li>
                <strong>Training the Model:</strong> Learning patterns from the data.
              </li>
              <li>
                <strong>Validating the Model:</strong> Tuning hyperparameters and preventing overfitting.
              </li>
              <li>
                <strong>Testing the Model:</strong> Evaluating final model performance on unseen data.
              </li>
            </ul>
            <p>
              This approach ensures that the model performs well not just on the data it has seen but also on new, unseen data.
            </p>
          </section>

          {/* Training Set */}
          <section>
            <h2>The Training Set</h2>
            <p>
              The <strong>training set</strong> is the portion of the dataset used to fit the model. The model learns patterns, weights, or parameters from this data.
            </p>
            <p>
              Typically, the training set comprises the majority of the dataset, often around 60-80%.
            </p>
          </section>

          {/* Validation Set */}
          <section>
            <h2>The Validation Set</h2>
            <p>
              The <strong>validation set</strong> is used to tune the model's hyperparameters and make decisions about model architecture. It helps in:
            </p>
            <ul>
              <li>Assessing model performance during training.</li>
              <li>Preventing overfitting by providing feedback on unseen data.</li>
              <li>Selecting the best model among different versions.</li>
            </ul>
            <p>
              The validation set is not used to train the model's parameters but to fine-tune settings like learning rates, number of layers, or regularization strength.
            </p>
          </section>

          {/* Test Set */}
          <section>
            <h2>The Test Set</h2>
            <p>
              The <strong>test set</strong> is used to evaluate the final performance of the model after training and validation. It provides an unbiased assessment of how the model will perform in the real world.
            </p>
            <p>
              The test set should only be used once the model is fully trained and tuned.
            </p>
          </section>

          {/* Visual Representation */}
          <section>
            <h2>Visual Representation of Data Splitting</h2>
            <p>The dataset is split as follows:</p>
            <img src="/images/data_splitting.png" alt="Data Splitting Diagram" className="distribution-image" />
            <p className="image-source">Figure: Splitting data into training, validation, and test sets.</p>
            <p>
              A common split might be 70% training, 15% validation, and 15% testing, but the exact proportions can vary depending on the dataset size and specific needs.
            </p>
          </section>

          {/* Example: Data Splitting */}
          <section>
            <h2>Example: Splitting a Dataset</h2>
            <p>Suppose we have a dataset with 1,000 samples. We can split it as follows:</p>
            <ul>
              <li>Training Set: 700 samples (70%)</li>
              <li>Validation Set: 150 samples (15%)</li>
              <li>Test Set: 150 samples (15%)</li>
            </ul>
            <p>
              The training set is used to train the model, the validation set to tune hyperparameters, and the test set to evaluate the final model performance.
            </p>
          </section>

          {/* Importance of Data Splitting */}
          <section>
            <h2>Importance of Proper Data Splitting</h2>
            <p>
              Proper data splitting is essential to avoid <strong>data leakage</strong>, which occurs when information from the test set influences the model training process, leading to overly optimistic performance estimates.
            </p>
            <p>
              By keeping the test set completely separate until the final evaluation, we ensure that the performance metrics are reliable.
            </p>
          </section>

          {/* Strategies for Data Splitting */}
          <section>
            <h2>Strategies for Data Splitting</h2>
            <h3>Random Splitting</h3>
            <p>
              Randomly assigns samples to each set. Suitable when data is independently and identically distributed (i.i.d).
            </p>
            <h3>Stratified Splitting</h3>
            <p>
              Preserves the class distribution across training, validation, and test sets. Important for imbalanced classification problems.
            </p>
            <h3>Time-Based Splitting</h3>
            <p>
              For time-series data, it's crucial to respect the temporal order. Use earlier data for training and later data for validation and testing.
            </p>
          </section>

          {/* K-Fold Cross-Validation with Validation Set */}
          <section>
            <h2>Using Cross-Validation with a Validation Set</h2>
            <p>
              Sometimes, especially with limited data, it's beneficial to use K-Fold Cross-Validation on the training set while keeping a separate test set for final evaluation.
            </p>
            <img src="/images/cv_with_test_set.png" alt="Cross-Validation with Test Set" className="distribution-image" />
            <p className="image-source">Figure: K-Fold Cross-Validation with an independent test set.</p>
            <p>
              This approach allows for robust hyperparameter tuning and model selection without touching the test set.
            </p>
          </section>

          {/* Avoiding Data Leakage */}
          <section>
            <h2>Avoiding Data Leakage</h2>
            <p>
              Data leakage can occur in various ways, such as when preprocessing steps are applied to the entire dataset before splitting.
            </p>
            <h3>Example of Data Leakage:</h3>
            <ul>
              <li>
                <strong>Incorrect:</strong> Scaling the entire dataset before splitting.
              </li>
              <li>
                <strong>Correct:</strong> Splitting the data first, then fitting the scaler on the training set and transforming the validation and test sets accordingly.
              </li>
            </ul>
            <p>
              Always ensure that any data-dependent transformations are learned only from the training data.
            </p>
          </section>

          {/* Practical Considerations */}
          <section>
            <h2>Practical Considerations</h2>
            <h3>Dataset Size</h3>
            <p>
              With large datasets, a smaller percentage can be allocated to validation and test sets without compromising statistical power.
            </p>
            <h3>Imbalanced Data</h3>
            <p>
              Use stratified splitting to maintain the proportion of classes across all sets.
            </p>
            <h3>Multiple Models and Evaluations</h3>
            <p>
              If multiple models are evaluated on the test set, there's a risk of overfitting to the test data. Consider using a separate holdout set or nested cross-validation.
            </p>
          </section>

          {/* Code Example */}
          <section>
            <h2>Implementing Data Splitting in Python</h2>
            <p>Here's how to split data using scikit-learn:</p>
            <pre className="code-block">
              {`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load data
iris = load_iris()
X = iris.data
y = iris.target

# Split into training + validation and test sets (80% train+val, 20% test)
X_temp, X_test, y_temp, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)

# Split training + validation set into training and validation sets (75% train, 25% val)
X_train, X_val, y_train, y_val = train_test_split(
    X_temp, y_temp, test_size=0.25, random_state=42, stratify=y_temp)

print("Training set size:", X_train.shape[0])
print("Validation set size:", X_val.shape[0])
print("Test set size:", X_test.shape[0])
`}
            </pre>
            <p>The output will show the sizes of each set:</p>
            <ul>
              <li>Training set size: 90</li>
              <li>Validation set size: 30</li>
              <li>Test set size: 30</li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>
              Understanding how to properly split your data into training, validation, and test sets is essential for building reliable machine learning models. It helps in accurate model evaluation and prevents common pitfalls like overfitting and data leakage.
            </p>
            <p>Next, let's explore more advanced techniques for model evaluation and selection.</p>
            <Link to="/categories/model-evaluation/cross-validation" className="next-button">
              Proceed to Cross-Validation Techniques
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default TrainingValidationTestSets;
