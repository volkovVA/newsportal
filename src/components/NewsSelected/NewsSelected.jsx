import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedNews } from '../../redux/actions';
import NewsListContainer from '../NewsList/NewsList';

function NewsSelected() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.receivedNews);

  useEffect(() => {
    dispatch(selectedNews());
  }, [dispatch]);

  // if (news.loading) {
  //   return <Spinner />;
  // }
  // if (news.error) {
  //   return <ErrorIndicator />;
  // }

  return <NewsListContainer news={news.selectedNews} />;
}

export default NewsSelected;
