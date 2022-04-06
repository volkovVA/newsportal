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

const fetchNews = (url) => async (dispatch) => {
  dispatch(newsRequested());
  const data = await newsService.getNews(url);
  try {
    const result = data.articles.map((el, idx) => ({
      ...el,
      id: idx,
      like: false
    }));
    dispatch(newsLoaded(url, result));
  } catch (error) {
    dispatch(newsFailure(error));
  }
};

export default fetchNews;
