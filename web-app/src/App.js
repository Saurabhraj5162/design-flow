import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import SequenceAnalysisPage from "./pages/sequence_analysis_page";
import TopicsOverview from "./pages/topics_overview";
import TopicBlogsPage from "./pages/topic_blog_page";
import BlogWritingPage from "./pages/blog_writing_page";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />,
          <Route path="/categories/sequence-analysis" element={<SequenceAnalysisPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
