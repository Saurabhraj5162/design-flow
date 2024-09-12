// src/components/Blog.js
import React, { useState, useEffect } from "react";
import { getBlog } from "../api";

const Blog = ({ title }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getBlog(title).then((data) => setBlog(data));
  }, [title]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>
        By {blog.author} on {blog.date}
      </p>
      <p>{blog.intro}</p>
      {/* Display sections, external links, etc. */}
    </div>
  );
};

export default Blog;
