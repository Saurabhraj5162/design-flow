import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import SequenceAnalysisPage from "./pages/sequence_analysis_page";
import DSAQuestionsPage from "./pages/dsa_questions_page";
import DSAPage from "./pages/dsa_page"
import RecurrentNeuralNetworksPage from "./pages/rnn_page"
import TransformerPage from "./pages/transformer_page"
import MLDSConceptsPage from "./pages/ml_ds_concepts_page";
import FoundationalMaths from "./pages/ml-ds-concepts/foundational_maths";
import StatisticsProbability from "./pages/ml-ds-concepts/statistics_probability";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/sequence-analysis" element={<SequenceAnalysisPage />} />
          <Route path="/categories/dsa/dsa-questions" element={<DSAQuestionsPage />} />
          <Route path="/categories/dsa" element={<DSAPage />} />
          <Route path="/categories/sequence-analysis/rnns" element={<RecurrentNeuralNetworksPage />} />
          <Route path="/categories/sequence-analysis/transformers" element={<TransformerPage />} />
          <Route path="/categories/ml-ds-concepts" element={<MLDSConceptsPage />} />
          <Route path="/categories/ml-ds-concepts/foundational-maths" element={<FoundationalMaths />} />
          <Route path="/categories/foundational-maths/statistics-probability" element={<StatisticsProbability />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
