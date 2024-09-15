// src/pages/TopicBlogsPage.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlog } from "../api";
import "./topic_blog_page.css";

const TopicBlogsPage = () => {
  const { slug } = useParams(); // The topic slug is actually the blog title
  const [blog, setBlog] = useState(null); // Initialize blog as null

  // Fetch the blog by title using the updated API
  useEffect(() => {
    getBlog(slug) // Fetch blog by title
      .then((data) => {
        if (data) {
          setBlog(data); // Set blog if found
        } else {
          setBlog(null); // No blog found
        }
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setBlog(null); // Handle error by setting blog to null
      });
  }, [slug]);

  return (
    <div className="topic-blogs-page">
      <h1>{slug.replace("-", " ")} Blog</h1>

      {/* Display the blog content */}
      <div className="blogs-list">
        {blog ? (
          <div className="blog-card">
            <h2>{blog.title}</h2>
            <p>By {blog.author}</p>
            <p>{blog.intro}</p>
            {/* Optionally display more content like sections */}
          </div>
        ) : (
          <p>No blog found for this title.</p>
        )}
      </div>

      {/* Write a Blog button */}
      <button
        onClick={() => (window.location.href = `/topics/${slug}/write`)}
        className="write-blog-button"
      >
        Write a Blog
      </button>
    </div>
  );
};

export default TopicBlogsPage;
