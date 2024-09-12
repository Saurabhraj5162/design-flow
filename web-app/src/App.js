import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import TopicsOverview from "./pages/topics_overview";
import TopicBlogsPage from "./pages/topic_blog_page";
import BlogWritingPage from "./pages/blog_writing_page";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Topics Overview Page */}
          <Route path="/topics" element={<TopicsOverview />} />

          {/* Topic Blogs Page */}
          <Route path="/topics/:slug" element={<TopicBlogsPage />} />

          {/* Blog Writing Page */}
          <Route path="/topics/:slug/write" element={<BlogWritingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
