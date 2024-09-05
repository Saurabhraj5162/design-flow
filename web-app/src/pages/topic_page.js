import React from 'react';
import { useParams } from 'react-router-dom';
import './topic_page.css';

// Detailed information for each topic
const topicData = {
  databases: {
    name: 'Databases',
    description: 'Databases are used to store, retrieve, and manage data in a structured format.',
    details: `
      A database is an organized collection of structured information, or data, typically stored electronically in a computer system.
      Different types of databases include relational databases (like MySQL and PostgreSQL), NoSQL databases (like MongoDB), and distributed databases.
      Understanding ACID properties, CAP theorem, and database replication strategies is crucial for system design.
    `,
    keyConcepts: [
      'Relational vs NoSQL Databases',
      'ACID Properties',
      'CAP Theorem',
      'Database Replication',
    ],
  },
  'load-balancers': {
    name: 'Load Balancers',
    description: 'Load balancers distribute incoming network traffic across multiple servers to ensure high availability.',
    details: `
      A load balancer sits between the client and the backend servers, distributing client requests across all available servers to avoid overloading any single server.
      Load balancing strategies include round-robin, least connections, and IP hash. Load balancers also help with fault tolerance by rerouting traffic from failed servers to healthy ones.
    `,
    keyConcepts: [
      'Round-Robin Load Balancing',
      'Least Connections Load Balancing',
      'Health Checks',
      'Sticky Sessions',
    ],
  },
  'api-gateways': {
    name: 'API Gateways',
    description: 'API Gateways manage API requests and act as a reverse proxy to distribute them to backend services.',
    details: `
      API Gateways serve as a single entry point for API requests, performing tasks like request routing, security enforcement, and rate limiting.
      API gateways are especially useful in microservice architectures, where they simplify communication between clients and services.
    `,
    keyConcepts: [
      'API Management',
      'Microservices Architecture',
      'Rate Limiting',
      'Request Routing',
    ],
  },
  caching: {
    name: 'Caching',
    description: 'Caching is a technique to store frequently accessed data in memory to reduce latency and load on the backend.',
    details: `
      Caching helps to reduce load on the database or backend service by storing frequently requested data in memory (like Redis or Memcached).
      Cache invalidation strategies are important to ensure data freshness while maximizing performance.
    `,
    keyConcepts: [
      'In-Memory Caching',
      'Cache Invalidation',
      'Distributed Caching',
      'Write-Through Cache',
    ],
  },
  sharding: {
    name: 'Sharding',
    description: 'Sharding is a technique to split data across multiple databases to improve scalability and performance.',
    details: `
      Sharding distributes data across different database nodes, allowing horizontal scaling as the data grows. Each shard is an independent database that contains a portion of the total dataset.
      Sharding strategies include range-based sharding, hash-based sharding, and geolocation-based sharding.
    `,
    keyConcepts: [
      'Range-Based Sharding',
      'Hash-Based Sharding',
      'Geolocation Sharding',
      'Shard Key Design',
    ],
  },
};

const TopicPage = () => {
  const { slug } = useParams();
  const topic = topicData[slug];

  if (!topic) {
    return <div>Topic not found!</div>;
  }

  return (
    <div className="topic-page">
      <h1>{topic.name}</h1>
      <p>{topic.description}</p>
      <div className="topic-details">
        <h2>Details</h2>
        <p>{topic.details}</p>
      </div>
      <div className="key-concepts">
        <h2>Key Concepts</h2>
        <ul>
          {topic.keyConcepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicPage;
