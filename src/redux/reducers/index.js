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
  error: null,
  date: new Date().getDay()
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

    default:
      return state;
  }
};

export default combineReducers({
  receivedNews: receivedNewsReducer
});
