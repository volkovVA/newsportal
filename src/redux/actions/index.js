import NewsService from '../../services';
import * as types from '../constants';

const newsService = new NewsService();

const newsRequested = () => ({
  type: types.FETCH_NEWS_REQUEST
});

const newsLoaded = (url, result) => ({
  type: types.FETCH_NEWS_SUCCESS,
  payload: [url, result]
});

const newsFailure = (error) => ({
  type: types.FETCH_NEWS_FAILURE,
  payload: error
});

export const newsLike = (newsId) => ({
  type: types.NEWS_LIKE,
  payload: newsId
});

export const deleteCard = (newsId) => ({
  type: types.DELETE_CARD,
  payload: newsId
});

export const selectNews = () => ({
  type: types.SELECTED_NEWS
});

export const fetchNews = (url) => async (dispatch) => {
  dispatch(newsRequested());
  const data = await newsService.getNews(url);
  try {
    const result = data.articles.map((el, idx) => ({
      ...el,
      like: false,
      id: idx + Math.random().toString(16).slice(2)
    }));
    dispatch(newsLoaded(url, result));
  } catch (error) {
    dispatch(newsFailure(error));
  }
};
