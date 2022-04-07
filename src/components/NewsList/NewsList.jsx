import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';
import { newsLike, deleteCard } from '../../redux/actions';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';
import Context from '../../сontext';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1
};

function NewsList({ news, onAddedLike, onDeleteCard }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {news.map((item) => (
        <NewsItem
          key={item.id}
          news={item}
          onAddedLike={onAddedLike}
          onDeleteCard={onDeleteCard}
        />
      ))}
    </Masonry>
  );
}

function NewsListContainer({ news }) {
  const { value } = useContext(Context);
  const dispatch = useDispatch();
  const onAddedLike = (id) => dispatch(newsLike(id));
  const onDeleteCard = (id) => dispatch(deleteCard(id));

  const newsSelector = news.map((item) => ({
    title: item.title,
    author: item.author,
    description: item.description,
    url: item.url,
    urlToImage: item.urlToImage,
    like: item.like,
    id: item.id
  }));

  const newsFilter = newsSelector.filter((el) =>
    el.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <NewsList
      news={newsFilter}
      onAddedLike={onAddedLike}
      onDeleteCard={onDeleteCard}
    />
  );
}

export default NewsListContainer;
