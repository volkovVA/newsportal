import React from 'react';
import { Link } from 'react-router-dom';
import './NewsHeader.css';

function NewsHeader() {
  return (
    <header className="news-header">
      <div className="news-row">
        <a href="/" className="logo">
          <span>news</span>
          portal
        </a>
        <Link to="/selected" className="btn btn-primary show-btn">
          Show Selected
        </Link>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2 border border-secondary rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link link-warning">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link link-warning">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link link-warning">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link link-warning">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link link-warning">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav-link link-warning">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NewsHeader;
