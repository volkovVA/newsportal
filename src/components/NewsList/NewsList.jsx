import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-css';
import fetchNews from '../../redux/actions';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1
};

function NewsList({ news }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {news.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </Masonry>
  );
}

function NewsListContainer({ url }) {
  const dispatch = useDispatch();
  const { receivedNews } = useSelector((state) => state.receivedNews);

  useEffect(() => {
    dispatch(fetchNews(url));
  }, []);

  receivedNews.map((item) => ({
    title: item.author,
    description: item.description,
    url: item.url,
    urlToImage: item.urlToImage,
    like: item.like,
    id: item.id
  }));

  return <NewsList news={receivedNews} />;
}

export default NewsListContainer;
