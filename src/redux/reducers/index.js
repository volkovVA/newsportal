import { combineReducers } from 'redux';
import * as types from '../constants';

const initialState = {
  news: [],
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
        news: action.payload,
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
