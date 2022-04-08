import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../сontext';
import './NewsHeader.css';

function NewsHeader() {
  const { onChange } = useContext(Context);

  return (
    <header className="news-header">
      <div className="news-row">
        <a href="/" className="logo">
          <span>news</span>
          portal
        </a>
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav-link">
                Technology
              </Link>
            </li>
            <li className="nav-item show-btn">
              <Link
                to="/selected"
                className="nav-link link-warning border border-info rounded btn-outline-info"
              >
                Show Selected
              </Link>
            </li>
          </ul>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onChange}
            />
          </form>
        </div>
      </nav>
    </header>
  );
}

export default NewsHeader;
