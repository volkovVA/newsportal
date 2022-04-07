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
  loading: true,
  error: null
};

const receivedNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_REQUEST: {
      return {
        ...state
      };
    }

    case types.FETCH_NEWS_SUCCESS: {
      return {
        ...state,
        receivedNews: {
          ...state.receivedNews,
          [action.payload[0]]: action.payload[1]
        },
        loading: false,
        error: null
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
      const receivedNews = Object.fromEntries(
        Object.entries(state.receivedNews).map((el) => {
          return [
            el[0],
            el[1].map((news) => {
              return news.id === newsId ? { ...news, like: !news.like } : news;
            })
          ];
        })
      );

      return {
        ...state,
        receivedNews
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  receivedNews: receivedNewsReducer
});
