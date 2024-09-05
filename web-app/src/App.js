import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import TopicsOverview from './pages/topics_overview';
import TopicPage from './pages/topic_page';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Topics Overview Page */}
          <Route path="/topics" element={<TopicsOverview />} />

          {/* Individual Topic Page (using slug to dynamically render the correct topic) */}
          <Route path="/topics/:slug" element={<TopicPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;