// src/pages/BlogWritingPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../api";
import "./blog_writing_page.css";

const BlogWritingPage = () => {
  const navigate = useNavigate();
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    date: "",
    intro: "",
    sections: [{ heading: "", content: "" }],
  });

  // Handle input changes for the blog data
  const handleInputChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  // Handle section change
  const handleSectionChange = (index, e) => {
    const newSections = [...newBlog.sections];
    newSections[index][e.target.name] = e.target.value;
    setNewBlog({ ...newBlog, sections: newSections });
  };

  // Handle adding a new section
  const handleAddSection = () => {
    setNewBlog({
      ...newBlog,
      sections: [...newBlog.sections, { heading: "", content: "" }],
    });
  };

  // Handle creating a new blog
  const handleCreateBlog = (e) => {
    e.preventDefault();
    createBlog(newBlog)
      .then((response) => {
        alert("Blog created successfully!");
        navigate(-1); // Go back to the previous page after creating the blog
      })
      .catch((error) => {
        console.error("Error creating blog:", error);
      });
  };

  return (
    <div className="blog-writing-page">
      <h1>Write a Blog</h1>

      <form onSubmit={handleCreateBlog} className="create-blog-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBlog.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBlog.author}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={newBlog.date}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="intro"
          placeholder="Introduction"
          value={newBlog.intro}
          onChange={handleInputChange}
          required
        />

        <h3>Sections</h3>
        {newBlog.sections.map((section, index) => (
          <div key={index} className="section-group">
            <input
              type="text"
              name="heading"
              placeholder="Section Heading"
              value={section.heading}
              onChange={(e) => handleSectionChange(index, e)}
              required
            />
            <textarea
              name="content"
              placeholder="Section Content"
              value={section.content}
              onChange={(e) => handleSectionChange(index, e)}
              required
            />
          </div>
        ))}

        {/* Separate buttons for adding section and submitting blog */}
        <div className="button-group">
          <button
            type="button"
            onClick={handleAddSection}
            className="add-section-button"
          >
            Add Section
          </button>
          <button type="submit" className="submit-blog-button">
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogWritingPage;
