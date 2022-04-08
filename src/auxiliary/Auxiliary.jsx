import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/actions';

import NewsListContainer from '../components/NewsList/NewsList';
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator';
import Spinner from '../components/Spinner/Spinner';

function Auxiliary(url) {
  const dispatch = useDispatch();
  const { receivedNews, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    if (receivedNews[`${url}`].length === 0) {
      dispatch(fetchNews(url));
    }
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

  return <NewsListContainer news={receivedNews[`${url}`]} />;
}

export default Auxiliary;
