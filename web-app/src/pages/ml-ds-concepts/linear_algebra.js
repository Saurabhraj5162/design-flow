import React from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Link } from 'react-router-dom';
import './ml_ds_concept_pages.css';

const LinearAlgebra = () => {
  return (
    <MathJaxContext>
      <div className="linear-algebra-container">
        <header className="header">
          <h1>Linear Algebra</h1>
          <p>An Introduction to Vectors and Matrices</p>
        </header>

        <div className="content">
          {/* Introduction */}
          <section>
            <h2>Introduction</h2>
            <p>
              Linear algebra is a branch of mathematics that deals with vectors, matrices, and linear
              transformations. It's a foundational tool in machine learning, helping us understand and
              compute complex operations efficiently.
            </p>
          </section>

          {/* Vectors */}
          <section>
            <h2>Vectors</h2>
            <p>
              A <strong>vector</strong> is a quantity that has both magnitude and direction. In linear
              algebra, we represent vectors as ordered lists of numbers, which can be visualized as arrows
              in space.
            </p>
            <h3>Notation</h3>
            <p>
              A vector is typically written as:
            </p>
            <MathJax>
              {'\\[ \\mathbf{v} = \\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_n \\end{bmatrix} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\mathbf{v} \\)'}</MathJax>: The vector
              </li>
              <li>
                <MathJax inline>{'\\( v_i \\)'}</MathJax>: The components (elements) of the vector
              </li>
              <li>
                <MathJax inline>{'\\( n \\)'}</MathJax>: The number of dimensions
              </li>
            </ul>

            <h3>Example</h3>
            <p>
              A 3-dimensional vector:
            </p>
            <MathJax>
              {'\\[ \\mathbf{v} = \\begin{bmatrix} 2 \\\\ -1 \\\\ 5 \\end{bmatrix} \\]'}
            </MathJax>

            <h3>Vector Operations</h3>
            <ul>
              <li>
                <strong>Vector Addition:</strong> Adding two vectors by adding their corresponding components.
                <MathJax>
                  {'\\[ \\mathbf{a} + \\mathbf{b} = \\begin{bmatrix} a_1 + b_1 \\\\ a_2 + b_2 \\\\ \\vdots \\\\ a_n + b_n \\end{bmatrix} \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Scalar Multiplication:</strong> Multiplying a vector by a scalar (a real number).
                <MathJax>
                  {'\\[ c \\mathbf{v} = \\begin{bmatrix} c \\times v_1 \\\\ c \\times v_2 \\\\ \\vdots \\\\ c \\times v_n \\end{bmatrix} \\]'}
                </MathJax>
              </li>
            </ul>

            <h3>Example of Vector Addition</h3>
            <p>
              Given:
            </p>
            <MathJax>
              {'\\[ \\mathbf{a} = \\begin{bmatrix} 1 \\\\ 3 \\\\ 5 \\end{bmatrix}, \\quad \\mathbf{b} = \\begin{bmatrix} 2 \\\\ -1 \\\\ 4 \\end{bmatrix} \\]'}
            </MathJax>
            <p>
              Then:
            </p>
            <MathJax>
              {'\\[ \\mathbf{a} + \\mathbf{b} = \\begin{bmatrix} 1 + 2 \\\\ 3 + (-1) \\\\ 5 + 4 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 2 \\\\ 9 \\end{bmatrix} \\]'}
            </MathJax>
          </section>

          {/* Dot Product */}
          <section>
            <h2>Dot Product</h2>
            <p>
              The <strong>dot product</strong> (also known as the scalar product) is an operation that takes
              two vectors and returns a scalar (a single number). It's calculated by multiplying corresponding
              components and summing the results.
            </p>
            <p>
              The dot product of vectors <MathJax inline>{'\\( \\mathbf{a} \\)'}</MathJax> and <MathJax inline>{'\\( \\mathbf{b} \\)'}</MathJax> is:
            </p>
            <MathJax>
              {'\\[ \\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + \\dots + a_n b_n = \\sum_{i=1}^{n} a_i b_i \\]'}
            </MathJax>

            <h3>Example</h3>
            <p>
              Given:
            </p>
            <MathJax>
              {'\\[ \\mathbf{a} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}, \\quad \\mathbf{b} = \\begin{bmatrix} 4 \\\\ -5 \\\\ 6 \\end{bmatrix} \\]'}
            </MathJax>
            <p>
              Then:
            </p>
            <MathJax>
              {'\\[ \\mathbf{a} \\cdot \\mathbf{b} = (1)(4) + (2)(-5) + (3)(6) = 4 -10 +18 = 12 \\]'}
            </MathJax>
          </section>

          {/* Matrices */}
          <section>
            <h2>Matrices</h2>
            <p>
              A <strong>matrix</strong> is a rectangular array of numbers arranged in rows and columns. Matrices
              are used to represent linear transformations and solve systems of linear equations.
            </p>
            <h3>Notation</h3>
            <p>
              A matrix is denoted as:
            </p>
            <MathJax>
              {'\\[ \\mathbf{A} = \\begin{bmatrix} a_{11} & a_{12} & \\dots & a_{1n} \\\\ a_{21} & a_{22} & \\dots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\dots & a_{mn} \\end{bmatrix} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\mathbf{A} \\)'}</MathJax>: The matrix
              </li>
              <li>
                <MathJax inline>{'\\( a_{ij} \\)'}</MathJax>: The element in the <MathJax inline>{'\\( i \\)'}</MathJax>-th row and <MathJax inline>{'\\( j \\)'}</MathJax>-th column
              </li>
              <li>
                <MathJax inline>{'\\( m \\)'}</MathJax>: Number of rows
              </li>
              <li>
                <MathJax inline>{'\\( n \\)'}</MathJax>: Number of columns
              </li>
            </ul>

            <h3>Matrix Operations</h3>
            <ul>
              <li>
                <strong>Matrix Addition:</strong> Adding two matrices by adding their corresponding elements.
                <MathJax>
                  {'\\[ \\mathbf{C} = \\mathbf{A} + \\mathbf{B} \\quad \\text{where} \\quad c_{ij} = a_{ij} + b_{ij} \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Scalar Multiplication:</strong> Multiplying each element of a matrix by a scalar.
                <MathJax>
                  {'\\[ \\mathbf{B} = c \\mathbf{A} \\quad \\text{where} \\quad b_{ij} = c \\times a_{ij} \\]'}
                </MathJax>
              </li>
              <li>
                <strong>Matrix Multiplication:</strong> Multiplying two matrices involves summing the products of
                rows and columns.
                <MathJax>
                  {'\\[ \\mathbf{C} = \\mathbf{A} \\mathbf{B} \\quad \\text{where} \\quad c_{ik} = \\sum_{j=1}^{n} a_{ij} b_{jk} \\]'}
                </MathJax>
              </li>
            </ul>

            <h3>Example of Matrix Multiplication</h3>
            <p>
              Given:
            </p>
            <MathJax>
              {'\\[ \\mathbf{A} = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}, \\quad \\mathbf{B} = \\begin{bmatrix} 5 & 6 \\\\ 7 & 8 \\end{bmatrix} \\]'}
            </MathJax>
            <p>
              Then, the product <MathJax inline>{'\\( \\mathbf{C} = \\mathbf{A} \\mathbf{B} \\)'}</MathJax> is:
            </p>
            <MathJax>
              {'\\[ \\mathbf{C} = \\begin{bmatrix} (1)(5) + (2)(7) & (1)(6) + (2)(8) \\\\ (3)(5) + (4)(7) & (3)(6) + (4)(8) \\end{bmatrix} = \\begin{bmatrix} 19 & 22 \\\\ 43 & 50 \\end{bmatrix} \\]'}
            </MathJax>
          </section>

          {/* Determinants */}
          <section>
            <h2>Determinants</h2>
            <p>
              The <strong>determinant</strong> is a scalar value that can be computed from a square matrix. It
              provides important properties of the matrix, such as whether it is invertible.
            </p>
            <h3>Determinant of a 2x2 Matrix</h3>
            <p>
              For a 2x2 matrix:
            </p>
            <MathJax>
              {'\\[ \\mathbf{A} = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\]'}
            </MathJax>
            <p>
              The determinant is:
            </p>
            <MathJax>
              {'\\[ \\det(\\mathbf{A}) = ad - bc \\]'}
            </MathJax>

            <h3>Example</h3>
            <p>
              Given:
            </p>
            <MathJax>
              {'\\[ \\mathbf{A} = \\begin{bmatrix} 3 & 8 \\\\ 4 & 6 \\end{bmatrix} \\]'}
            </MathJax>
            <p>
              The determinant is:
            </p>
            <MathJax>
              {'\\[ \\det(\\mathbf{A}) = (3)(6) - (8)(4) = 18 - 32 = -14 \\]'}
            </MathJax>
          </section>

          {/* Eigenvalues and Eigenvectors */}
          <section>
            <h2>Eigenvalues and Eigenvectors</h2>
            <p>
              An <strong>eigenvector</strong> of a matrix is a non-zero vector that only changes by a scalar factor
              when that matrix is applied to it. The scalar is known as the <strong>eigenvalue</strong>.
            </p>
            <p>
              Mathematically, this is expressed as:
            </p>
            <MathJax>
              {'\\[ \\mathbf{A} \\mathbf{v} = \\lambda \\mathbf{v} \\]'}
            </MathJax>
            <p>Where:</p>
            <ul>
              <li>
                <MathJax inline>{'\\( \\mathbf{A} \\)'}</MathJax>: A square matrix
              </li>
              <li>
                <MathJax inline>{'\\( \\mathbf{v} \\)'}</MathJax>: The eigenvector
              </li>
              <li>
                <MathJax inline>{'\\( \\lambda \\)'}</MathJax>: The eigenvalue
              </li>
            </ul>

            <h3>Finding Eigenvalues</h3>
            <p>
              To find the eigenvalues of a matrix, we solve the characteristic equation:
            </p>
            <MathJax>
              {'\\[ \\det( \\mathbf{A} - \\lambda \\mathbf{I} ) = 0 \\]'}
            </MathJax>
            <p>Where <MathJax inline>{'\\( \\mathbf{I} \\)'}</MathJax> is the identity matrix.</p>

            <h3>Example for a 2x2 Matrix</h3>
            <p>
              Given:
            </p>
            <MathJax>
              {'\\[ \\mathbf{A} = \\begin{bmatrix} 4 & 2 \\\\ 1 & 3 \\end{bmatrix} \\]'}
            </MathJax>
            <p>
              The characteristic equation is:
            </p>
            <MathJax>
              {'\\[ \\det \\left( \\begin{bmatrix} 4 & 2 \\\\ 1 & 3 \\end{bmatrix} - \\lambda \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\right) = 0 \\]'}
            </MathJax>
            <p>
              Simplify:
            </p>
            <MathJax>
              {'\\[ \\det \\begin{bmatrix} 4 - \\lambda & 2 \\\\ 1 & 3 - \\lambda \\end{bmatrix} = 0 \\]'}
            </MathJax>
            <p>
              Compute the determinant:
            </p>
            <MathJax>
              {'\\[ (4 - \\lambda)(3 - \\lambda) - (2)(1) = 0 \\]'}
            </MathJax>
            <p>
              Expand:
            </p>
            <MathJax>
              {'\\[ (4 - \\lambda)(3 - \\lambda) - 2 = (12 - 7\\lambda + \\lambda^2) - 2 = \\lambda^2 - 7\\lambda +10 = 0 \\]'}
            </MathJax>
            <p>
              Solve for <MathJax inline>{'\\( \\lambda \\)'}</MathJax>:
            </p>
            <MathJax>
              {'\\[ \\lambda^2 - 7\\lambda +10 = 0 \\]'}
            </MathJax>
            <p>
              Factoring:
            </p>
            <MathJax>
              {'\\[ (\\lambda - 5)(\\lambda - 2) = 0 \\]'}
            </MathJax>
            <p>
              So, the eigenvalues are <MathJax inline>{'\\( \\lambda = 5 \\)'}</MathJax> and <MathJax inline>{'\\( \\lambda = 2 \\)'}</MathJax>.
            </p>
          </section>

          {/* Conclusion */}
          <section className="next-steps">
            <p>Great job exploring the basics of linear algebra!</p>
            <Link to="/categories/foundational-maths/calculus-for-ml" className="next-button">
              Proceed to Calculus for ML
            </Link>
          </section>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default LinearAlgebra;
