import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../redux/actions';
import NewsListContainer from '../components/NewsList/NewsList';
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator';
import Spinner from '../components/Spinner/Spinner';

function Auxiliary(url) {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.receivedNews);

  useEffect(() => {
    if (news.receivedNews[`${url}`].length === 0) {
      dispatch(fetchNews(url));
    }
  }, [dispatch]);

  if (news.loading) {
    return <Spinner />;
  }
  if (news.error) {
    return <ErrorIndicator />;
  }

  return <NewsListContainer news={news.receivedNews[`${url}`]} />;
}

export default Auxiliary;
