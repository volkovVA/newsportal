import React from 'react';
import './ErrorIndicator.css';

function ErrorIndicator() {
  return (
    <div className="error-container">
      <div className="card error-card">
        <div className="card-header">
          <i
            className="bi-exclamation-triangle-fill error-card-icon"
            role="img"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title error-card-title">Error!!!</h5>
          <p className="card-text">
            An error has occured while creating a page
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorIndicator;
