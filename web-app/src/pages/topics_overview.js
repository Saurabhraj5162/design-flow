// src/app/pages/TopicsOverview.js
import React from 'react';
import { Link } from 'react-router-dom';
import './topics_overview.css';


// Dummy data for system design topics
const topics = [
    {
      name: 'Databases',
      slug: 'databases',
      description: 'Learn about different types of databases and best practices for choosing the right one.',
    },
    {
      name: 'Load Balancers',
      slug: 'load-balancers',
      description: 'Understand how load balancers distribute traffic and ensure high availability.',
    },
    {
      name: 'API Gateways',
      slug: 'api-gateways',
      description: 'Discover how API gateways manage API traffic, security, and scaling.',
    },
    {
      name: 'Caching',
      slug: 'caching',
      description: 'Explore caching techniques to reduce latency and improve system performance.',
    },
    {
      name: 'Sharding',
      slug: 'sharding',
      description: 'Understand how sharding works to distribute data across multiple databases.',
    },
  ];
  
  const TopicsOverview = () => {
    return (
      <div className="topics-overview">
        <h1>System Design Topics</h1>
        <p>Select a topic to explore and learn more about system design principles.</p>
        <ul className="topics-grid">
          {topics.map((topic) => (
            <li key={topic.slug} className="topic-item">
              <h2>{topic.name}</h2>
              <p>{topic.description}</p>
              <Link to={`/topics/${topic.slug}`} className="learn-more-link">Learn More</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TopicsOverview;
