import { FETCH_EVENTS, FETCH_EVENTS_FULFILLED, FETCH_EVENTS_REJECTED } from './actionTypes';

const initialState = { events: null, fetching: false, error: null };

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS: {
      return { ...state, fetching: true };
    }
    case FETCH_EVENTS_FULFILLED: {
      return { ...state, events: action.events, fetching: false };
    }
    case FETCH_EVENTS_REJECTED: {
      return { ...state, error: action.error, fetching: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default eventReducer;
