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
import IntroductionToSupervisedLearning from "./pages/supervised-learning/intro_to_supervised_learning";
import Regression from "./pages/supervised-learning/regression";
import Classification from "./pages/supervised-learning/classification";
import DecisionTrees from "./pages/supervised-learning/decision_trees";
import RandomForests from "./pages/supervised-learning/random_forests";
import SupportVectorMachines from "./pages/supervised-learning/support_vector_machines";
import NeuralNetworks from "./pages/supervised-learning/neural_networks";
import EvaluationMetrics from "./pages/supervised-learning/evaluation_metrics";
import OverfittingUnderfitting from "./pages/supervised-learning/overfitting_underfitting";
import UnsupervisedLearning from "./pages/unsupervised-learning/unsupervised_learning";
import ModelEvaluation from "./pages/model-eval/model_eval";
import OptimizationTechniques from "./pages/optimization-techniques/optimization_techniques";
import EnsembleMethods from "./pages/ensemble/ensemble_methods";
import FeatureEngineering from "./pages/feature-engineering/feature_eng";
import DimensionalityReduction from "./pages/dimensionality-reduction/dimensionality_reduction";
import TimeSeriesAnalysis from "./pages/time-series-analysis/time_series_analysis";
import ModelDeployment from "./pages/model-deployment/model_deploy";
import EthicsAndInterpretability from "./pages/ethics/ethics_interpretibility";
import IntroductionToUnsupervisedLearning from "./pages/unsupervised-learning/intro_to_unsupervised";
import Clustering from "./pages/unsupervised-learning/clustering";
import KMeansClustering from "./pages/unsupervised-learning/k_means";
import HierarchicalClustering from "./pages/unsupervised-learning/hierarchical_clustering";
import DimensionalityReductionOverview from "./pages/unsupervised-learning/dimensionality_reduction_overview";
import AssociationRuleLearning from "./pages/unsupervised-learning/association_rule_learn";
import AnomalyDetection from "./pages/unsupervised-learning/anomaly_detection";
import SelfOrganizingMaps from "./pages/unsupervised-learning/self_organising_map";
import IntroductionToModelEvaluation from "./pages/model-eval/intro_to_model_eval";
import TrainingValidationTestSets from "./pages/model-eval/data_splitting";
import CrossValidationTechniques from "./pages/model-eval/cross_valid";
import ClassificationMetrics from "./pages/model-eval/classification_metrics";
import RegressionMetrics from "./pages/model-eval/regression_metrics";
import ROCCurveAndAUC from "./pages/model-eval/roc_auc";
import ConfusionMatrix from "./pages/model-eval/confusion_matrix";
import ModelSelectionAndHyperparameterTuning from "./pages/model-eval/model_selection";
import BiasVarianceTradeoff from "./pages/model-eval/bias_variance";
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
          <Route path="/categories/supervised-learning/regression" element={<Regression />} />
          <Route path="/categories/supervised-learning/classification" element={<Classification />} />
          <Route path="/categories/supervised-learning/decision-trees" element={<DecisionTrees />} />
          <Route path="/categories/supervised-learning/random-forests" element={<RandomForests />} />
          <Route path="/categories/supervised-learning/support-vector-machines" element={<SupportVectorMachines />} />
          <Route path="/categories/supervised-learning/neural-networks" element={<NeuralNetworks />} />
          <Route path="/categories/supervised-learning/evaluation-metrics" element={<EvaluationMetrics />} />
          <Route path="/categories/supervised-learning/overfitting-underfitting" element={<OverfittingUnderfitting />} />
          <Route path="/categories/ml-ds-concepts/unsupervised-learning" element={<UnsupervisedLearning />} />
          <Route path="/categories/ml-ds-concepts/model-evaluation" element={<ModelEvaluation />} />
          <Route path="/categories/ml-ds-concepts/optimization-technique" element={<OptimizationTechniques />} />
          <Route path="/categories/ml-ds-concepts/ensemble-methods" element={<EnsembleMethods />} />
          <Route path="/categories/ml-ds-concepts/feature-engineering" element={<FeatureEngineering />} />
          <Route path="/categories/ml-ds-concepts/dimensionality-reduction" element={<DimensionalityReduction />} />
          <Route path="/categories/ml-ds-concepts/time-series" element={<TimeSeriesAnalysis />} />
          <Route path="/categories/ml-ds-concepts/model-deployment" element={<ModelDeployment />} />
          <Route path="/categories/ml-ds-concepts/ethics-interpretability" element={<EthicsAndInterpretability />} />
          <Route path="/categories/unsupervised-learning/introduction" element={<IntroductionToUnsupervisedLearning />} />
          <Route path="/categories/unsupervised-learning/clustering" element={<Clustering />} />
          <Route path="/categories/unsupervised-learning/k-means-clustering" element={<KMeansClustering />} />
          <Route path="/categories/unsupervised-learning/hierarchical-clustering" element={<HierarchicalClustering />} />
          <Route path="/categories/unsupervised-learning/dimensionality-reduction" element={<DimensionalityReductionOverview />} />
          <Route path="/categories/unsupervised-learning/association-rule-learning" element={<AssociationRuleLearning />} />
          <Route path="/categories/unsupervised-learning/anomaly-detection" element={<AnomalyDetection />} />
          <Route path="/categories/unsupervised-learning/self-organizing-maps" element={<SelfOrganizingMaps />} />
          <Route path="/categories/model-evaluation/introduction" element={<IntroductionToModelEvaluation />} />
          <Route path="/categories/model-evaluation/data-splitting" element={<TrainingValidationTestSets />} />
          <Route path="/categories/model-evaluation/cross-validation" element={<CrossValidationTechniques />} />
          <Route path="/categories/model-evaluation/classification-metrics" element={<ClassificationMetrics />} />
          <Route path="/categories/model-evaluation/regression-metrics" element={<RegressionMetrics />} />
          <Route path="/categories/model-evaluation/roc-auc" element={<ROCCurveAndAUC />} />
          <Route path="/categories/model-evaluation/confusion-matrix" element={<ConfusionMatrix />} />
          <Route path="/categories/model-evaluation/model-selection" element={<ModelSelectionAndHyperparameterTuning />} />
          <Route path="/categories/model-evaluation/bias-variance-tradeoff" element={<BiasVarianceTradeoff />} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
