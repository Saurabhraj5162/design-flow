// src/components/CreateBlog.js
import React, { useState } from "react";
import { createBlog } from "../api";

const CreateBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    date: "",
    intro: "",
    sections: [],
    externalLinks: [],
  });

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog(blogData).then((response) => {
      if (response.message === "Blog created") {
        alert("Blog successfully created!");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={blogData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={blogData.author}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={blogData.date}
        onChange={handleChange}
        required
      />
      <textarea
        name="intro"
        placeholder="Introduction"
        value={blogData.intro}
        onChange={handleChange}
        required
      />
      {/* Additional fields for sections, external links, etc. */}
      <button type="submit">Create Blog</button>
    </form>
  );
};

export default CreateBlog;
