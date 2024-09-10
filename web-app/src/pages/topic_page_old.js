import React from 'react';
import { useParams } from 'react-router-dom';
import './topic_page.css';

// Detailed information for each topic
const topicData = {
  databases: {
    name: 'Databases',
    description: 'Learn about databases, their types, key concepts, and best practices in system design.',
    details: `
      Databases are used to store, retrieve, and manage data in structured formats. They are the backbone of most software systems, 
      enabling efficient storage and retrieval of data. Understanding database design and management is crucial for building scalable, 
      reliable, and performant applications.
    `,
    keyConcepts: [
      'Relational vs NoSQL Databases',
      'ACID Properties',
      'CAP Theorem',
      'Database Replication',
    ],
    externalLinks: {
      blogs: [
        { name: 'Martin Fowler’s Introduction to NoSQL', url: 'https://martinfowler.com/articles/nosql-intro.html' },
        { name: 'PostgreSQL vs MySQL', url: 'https://www.digitalocean.com/community/tutorials/postgresql-vs-mysql' },
      ],
      videos: [
        { name: 'What is NoSQL?', url: 'https://www.youtube.com/watch?v=qI_g07C_Q5I' },
        { name: 'Understanding CAP Theorem', url: 'https://www.youtube.com/watch?v=k-Yaq8AHlFA' },
      ],
    },
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
      <div className="external-links">
        <h2>Further Reading</h2>
        <h3>Blogs</h3>
        <ul>
          {topic.externalLinks.blogs.map((blog, index) => (
            <li key={index}><a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.name}</a></li>
          ))}
        </ul>
        <h3>Videos</h3>
        <ul>
          {topic.externalLinks.videos.map((video, index) => (
            <li key={index}><a href={video.url} target="_blank" rel="noopener noreferrer">{video.name}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicPage;