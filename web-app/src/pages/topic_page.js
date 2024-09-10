// src/app/pages/TopicPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './topic_page.css';

// Dynamic content for each topic (this can be extended or moved to a database)
const topicData = {
  databases: {
    title: 'The Complete Guide to Databases',
    author: 'John Doe',
    date: 'January 5, 2024',
    intro: `
      Databases are the core of most software systems, providing structured storage and retrieval for data. This guide explores different types of databases, 
      their architectures, and how to choose the right one for your needs.
    `,
    sections: [
      {
        heading: 'What is a Database?',
        content: `
          A database is a structured collection of data that allows for efficient storage, retrieval, and management. 
          Databases are essential for modern applications, including web platforms, mobile apps, and enterprise systems.
        `,
      },
      {
        heading: 'Types of Databases',
        content: `
          There are several types of databases, each with its own strengths and use cases:
          - **Relational Databases** (e.g., MySQL, PostgreSQL): Store data in tables with predefined schemas.
          - **NoSQL Databases** (e.g., MongoDB, Cassandra): Provide flexibility for unstructured data.
          - **Distributed Databases** (e.g., Google Spanner): Scale horizontally across multiple nodes.
        `,
      },
      {
        heading: 'Key Concepts in Databases',
        content: `
          It's important to understand key database concepts such as:
          - **ACID Transactions**: Ensure consistency and reliability in data transactions.
          - **CAP Theorem**: Explains the trade-offs between consistency, availability, and partition tolerance in distributed systems.
          - **Sharding**: A technique for scaling databases horizontally by distributing data across multiple servers.
        `,
      },
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
  // Add more topics here...
};

const TopicPage = () => {
  const { slug } = useParams();
  const topic = topicData[slug];

  if (!topic) {
    return <div>Topic not found!</div>;
  }

  return (
    <div className="topic-page">
      <h1>{topic.title}</h1>
      <p className="topic-meta">By {topic.author} | {topic.date}</p>
      <p className="topic-intro">{topic.intro}</p>

      {topic.sections.map((section, index) => (
        <div key={index} className="topic-section">
          <h2>{section.heading}</h2>
          <p>{section.content}</p>
        </div>
      ))}

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
