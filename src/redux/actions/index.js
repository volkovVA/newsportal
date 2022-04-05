import { useId } from 'react';
import NewsService from '../../services/news-service';
import * as types from '../constants/action-type';

const newsService = new NewsService();

const newsRequested = () => ({
  type: types.FETCH_NEWS_REQUEST
});

const newsLoaded = (news) => ({
  type: types.FETCH_NEWS_SUCCESS,
  payload: news
});

const newsFailure = (error) => ({
  type: types.FETCH_NEWS_FAILURE,
  payload: error
});

const fetchNews = () => (dispatch) => {
  dispatch(newsRequested());
  newsService
    .getNews()
    .then((data) => {
      const result = data.articles.map((el) => ({
        ...el,
        id: useId(),
        like: false
      }));
      dispatch(newsLoaded(result));
    })
    .catch((err) => dispatch(newsFailure(err)));
};

export default fetchNews;
