import NewsService from '../../services';
import * as types from '../constants';

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

const fetchNews = () => async (dispatch) => {
  dispatch(newsRequested());
  const data = await newsService.getNews();
  try {
    const result = data.articles.map((el, idx) => ({
      ...el,
      id: idx,
      like: false
    }));
    dispatch(newsLoaded(result));
  } catch (error) {
    dispatch(newsFailure(error));
  }
};

export default fetchNews;
