import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNews } from '../../redux/actions';

import NewsListContainer from '../NewsList/NewsList';
import Spinner from '../Spinner/Spinner';

function NewsSelected() {
  const dispatch = useDispatch();
  const { selectedNews, loading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(selectNews());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return <NewsListContainer news={selectedNews} />;
}

export default NewsSelected;
