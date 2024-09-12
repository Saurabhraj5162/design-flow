// src/api.js

import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000/api/blog"; // Backend API URL

// Create Blog
export const createBlog = (blogData) => {
  return axios
    .post(`${API_BASE_URL}`, blogData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error creating the blog!", error);
    });
};

// Get Blog by Title
export const getBlog = (title) => {
  return axios
    .get(`${API_BASE_URL}/${title}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error fetching the blog!", error);
    });
};

// Update Blog by Title
export const updateBlog = (title, updatedData) => {
  return axios
    .put(`${API_BASE_URL}/${title}`, updatedData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error updating the blog!", error);
    });
};

// Delete Blog by Title
export const deleteBlog = (title) => {
  return axios
    .delete(`${API_BASE_URL}/${title}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error deleting the blog!", error);
    });
};
