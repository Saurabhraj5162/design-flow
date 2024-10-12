import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const ModelDeployment = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Model Deployment</h1>
        <p>Learn how to deploy machine learning models into production environments.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Model Deployment</h2>
          <p>
            Learn the fundamentals of deploying machine learning models to make them accessible for use.
          </p>
          <Link to="/categories/model-deployment/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Deployment Strategies</h2>
          <p>
            Understand different deployment strategies, including batch and real-time deployments.
          </p>
          <Link to="/categories/model-deployment/deployment-strategies" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>API-Based Model Deployment</h2>
          <p>
            Learn how to expose your machine learning model as an API using frameworks like Flask and FastAPI.
          </p>
          <Link to="/categories/model-deployment/api-based-deployment" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Containerization with Docker</h2>
          <p>
            Discover how to use Docker to containerize your model, making it portable and easy to deploy.
          </p>
          <Link to="/categories/model-deployment/docker" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>Serverless Deployment</h2>
          <p>
            Explore serverless deployment options using cloud services like AWS Lambda.
          </p>
          <Link to="/categories/model-deployment/serverless" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>Model Deployment with Kubernetes</h2>
          <p>
            Learn how to use Kubernetes for managing model deployments at scale.
          </p>
          <Link to="/categories/model-deployment/kubernetes" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>Model Monitoring and Management</h2>
          <p>
            Understand the importance of monitoring models in production and handling concept drift.
          </p>
          <Link to="/categories/model-deployment/monitoring-management" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Model Versioning</h2>
          <p>
            Learn techniques for model versioning to manage updates and improvements.
          </p>
          <Link to="/categories/model-deployment/versioning" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Scaling Model Deployment</h2>
          <p>
            Discover strategies for scaling model deployments to handle increased load.
          </p>
          <Link to="/categories/model-deployment/scaling" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">10</div>
          <h2>Security in Model Deployment</h2>
          <p>
            Understand the security considerations when deploying machine learning models.
          </p>
          <Link to="/categories/model-deployment/security" className="start-reading-button">
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

export default ModelDeployment;
