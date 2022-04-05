import React from 'react';
import './NewsItem.css';

function NewsItem({ news }) {
  const urlImage = 'https://pbs.twimg.com/media/DDlO-OIUQAAw-8d.jpg';

  return (
    <div className="card news-card">
      <img
        className="card-img-top news-card-img"
        src={news.urlToImage ? news.urlToImage : urlImage}
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.description}</p>
        <h6 className="card-subtitle news-card-subtitle">{news.author}</h6>
        <div className="news-card-box">
          <a
            href={news.url}
            className="btn btn-outline-success"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More+
          </a>
          <div>
            <button type="button" className="btn btn-warning news-card-btn">
              <i className="bi-hand-thumbs-up" role="img" />
            </button>
            <button type="button" className="btn btn-danger news-card-btn">
              <i className="bi-trash" role="img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
