import React from 'react';
import './NewsHeader.css';

function NewsHeader() {
  return (
    <header className="news-header">
      <a href="/" className="logo">
        <span>news</span>
        portal
      </a>
      <button type="button" className="btn btn-primary show-btn">
        Show Selected
      </button>
    </header>
  );
}

export default NewsHeader;
