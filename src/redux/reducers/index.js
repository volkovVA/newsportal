/* eslint-disable */
import { combineReducers } from 'redux';
import * as types from '../constants';

const initialState = {
  receivedNews: {
    general: [],
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: []
  },
  selectedNews: [],
  loading: true,
  error: null
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case types.FETCH_NEWS_SUCCESS: {
      return {
        ...state,
        receivedNews: {
          ...state.receivedNews,
          [action.payload[0]]: action.payload[1]
        },
        loading: false
      };
    }

    case types.FETCH_NEWS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    case types.NEWS_LIKE: {
      const newsId = action.payload;
      const setLike = (news) =>
        news.id === newsId ? { ...news, like: !news.like } : news;
      const likeNews = Object.fromEntries(
        Object.entries(state.receivedNews).map((item) => {
          return [
            item[0],
            item[1].map((news) => {
              return setLike(news);
            })
          ];
        })
      );

      const likeSelectedNews = state.selectedNews
        .map((news) => {
          return setLike(news);
        })
        .filter((news) => news.id !== newsId);

      return {
        ...state,
        receivedNews: likeNews,
        selectedNews: likeSelectedNews
      };
    }

    case types.DELETE_CARD: {
      const newsId = action.payload;
      const deletedNews = Object.fromEntries(
        Object.entries(state.receivedNews).map((item) => {
          return [item[0], item[1].filter((news) => news.id !== newsId)];
        })
      );

      const deleteSelectedNews = state.selectedNews.filter(
        (news) => news.id !== newsId
      );

      return {
        ...state,
        receivedNews: deletedNews,
        selectedNews: deleteSelectedNews
      };
    }

    case types.SELECTED_NEWS: {
      const selectedNews = Object.values(state.receivedNews)
        .map((item) => {
          return item.filter((news) => news.like);
        })
        .flat();

      return {
        ...state,
        selectedNews
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  news: newsReducer
});
