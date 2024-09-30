import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scroll_to_top";
import HomePage from "./pages/homepage";
import SequenceAnalysisPage from "./pages/sequence_analysis_page";
import DSAQuestionsPage from "./pages/dsa_questions_page";
import DSAPage from "./pages/dsa_page"
import RecurrentNeuralNetworksPage from "./pages/rnn_page"
import TransformerPage from "./pages/transformer_page"
import MLDSConceptsPage from "./pages/ml_ds_concepts_page";
import FoundationalMaths from "./pages/ml-ds-concepts/foundational_maths";
import StatisticsProbability from "./pages/ml-ds-concepts/statistics_probability";
import LinearAlgebra from "./pages/ml-ds-concepts/linear_algebra";
import CalculusForML from "./pages/ml-ds-concepts/calculus_for_ml";
import ProbabilityDistributions from "./pages/ml-ds-concepts/probability_distributions";
import SupervisedLearning from "./pages/supervised-learning/supervised_learning";
import IntroductionToSupervisedLearning from "./pages/supervised-learning/intro-to-supervised-learning";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
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
          <Route path="/categories/foundational-maths/linear-algebra" element={<LinearAlgebra />} />
          <Route path="/categories/foundational-maths/calculus-for-ml" element={<CalculusForML />} />
          <Route path="/categories/foundational-maths/probability-distributions" element={<ProbabilityDistributions />} />
          <Route path="/categories/ml-ds-concepts/supervised-learning" element={<SupervisedLearning />} />
          <Route path="/categories/supervised-learning/introduction" element={<IntroductionToSupervisedLearning />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
