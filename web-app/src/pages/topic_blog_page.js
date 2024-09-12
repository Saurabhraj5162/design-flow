// src/pages/TopicBlogsPage.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlog } from "../api";
import "./topic_blog_page.css";

const TopicBlogsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlog(slug).then((data) => {
      if (data) {
        setBlogs([data]);
      }
    });
  }, [slug]);

  return (
    <div className="topic-blogs-page">
      <h1>{slug.replace("-", " ")} Blogs</h1>

      {/* Display existing blogs for the topic */}
      <div className="blogs-list">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <h2>{blog.title}</h2>
              <p>By {blog.author}</p>
              <p>{blog.intro}</p>
            </div>
          ))
        ) : (
          <p>No blogs found for this topic.</p>
        )}
      </div>

      {/* Navigate to the new Blog Writing Page */}
      <button
        onClick={() => navigate(`/topics/${slug}/write`)}
        className="write-blog-button"
      >
        Write a Blog
      </button>
    </div>
  );
};

export default TopicBlogsPage;
