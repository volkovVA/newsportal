import React from 'react';
import { useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';
import { newsLike } from '../../redux/actions';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1
};

function NewsList({ news, onAddedLike }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {news.map((item) => (
        <NewsItem key={item.id} news={item} onAddedLike={onAddedLike} />
      ))}
    </Masonry>
  );
}

function NewsListContainer({ news }) {
  const dispatch = useDispatch();
  // const { receivedNews } = useSelector((state) => state.receivedNews);

  const onAddedLike = (id) => dispatch(newsLike(id));

  news.map((item) => ({
    title: item.author,
    description: item.description,
    url: item.url,
    urlToImage: item.urlToImage,
    like: item.like,
    id: item.id
  }));

  return <NewsList news={news} onAddedLike={onAddedLike} />;
}

export default NewsListContainer;
