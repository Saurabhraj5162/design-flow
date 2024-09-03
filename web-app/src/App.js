import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home_page';
import DiagramPage from './pages/diagram_page';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagram" element={<DiagramPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;