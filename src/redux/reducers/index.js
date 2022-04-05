import { combineReducers } from 'redux';
import * as types from '../constants/action-type';

const initialState = {
  news: [],
  loading: true,
  error: null
};

const newsReducer = (state = initialState, action = undefined) => {
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
  news: newsReducer
});
