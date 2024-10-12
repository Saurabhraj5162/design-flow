import React from 'react';
import { Link } from 'react-router-dom';
import '../all_chapter_css.css'; // Reusing the same CSS file

const TimeSeriesAnalysis = () => {
  return (
    <div className="supervised-container">
      <header className="header">
        <h1>Time Series Analysis</h1>
        <p>Explore methods to analyze time-dependent data and predict future trends.</p>
      </header>

      <section className="content-section">
        <div className="card">
          <div className="card-number">1</div>
          <h2>Introduction to Time Series Analysis</h2>
          <p>
            Learn the fundamentals of time series analysis, including what makes time series data unique.
          </p>
          <Link to="/categories/time-series-analysis/introduction" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">2</div>
          <h2>Time Series Components</h2>
          <p>
            Understand the main components of a time series: trend, seasonality, and noise.
          </p>
          <Link to="/categories/time-series-analysis/components" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">3</div>
          <h2>Stationarity in Time Series</h2>
          <p>
            Learn what makes a time series stationary and why stationarity is important in modeling.
          </p>
          <Link to="/categories/time-series-analysis/stationarity" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">4</div>
          <h2>Autocorrelation and Partial Autocorrelation</h2>
          <p>
            Explore how autocorrelation functions (ACF) and partial autocorrelation functions (PACF) help in identifying patterns in time series.
          </p>
          <Link to="/categories/time-series-analysis/acf-pacf" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">5</div>
          <h2>ARIMA Models</h2>
          <p>
            Learn about ARIMA models and how to use them to make forecasts based on time series data.
          </p>
          <Link to="/categories/time-series-analysis/arima" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">6</div>
          <h2>Seasonal Decomposition</h2>
          <p>
            Understand how seasonal decomposition breaks down time series into trend, seasonality, and residuals.
          </p>
          <Link to="/categories/time-series-analysis/seasonal-decomposition" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">7</div>
          <h2>Exponential Smoothing</h2>
          <p>
            Explore exponential smoothing techniques for modeling time series data, including SES, Holt, and Holt-Winters methods.
          </p>
          <Link to="/categories/time-series-analysis/exponential-smoothing" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">8</div>
          <h2>Long Short-Term Memory Networks (LSTMs)</h2>
          <p>
            Learn about LSTMs, a type of recurrent neural network, and how they are used for time series forecasting.
          </p>
          <Link to="/categories/time-series-analysis/lstm" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">9</div>
          <h2>Prophet by Facebook</h2>
          <p>
            Discover Prophet, an open-source time series forecasting tool developed by Facebook.
          </p>
          <Link to="/categories/time-series-analysis/prophet" className="start-reading-button">
            Start Reading
          </Link>
        </div>

        <div className="card">
          <div className="card-number">10</div>
          <h2>Evaluating Time Series Models</h2>
          <p>
            Understand how to evaluate the accuracy of time series models using various metrics.
          </p>
          <Link to="/categories/time-series-analysis/evaluation" className="start-reading-button">
            Start Reading
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TimeSeriesAnalysis;
