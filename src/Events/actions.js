import { FETCH_EVENTS, FETCH_EVENTS_FULFILLED, FETCH_EVENTS_REJECTED } from './actionTypes';

export const fetchEvents = () => async (dispatch) => {
  dispatch({ type: FETCH_EVENTS });
  try {
    const response = await fetch('/api/getEventsWithDates');
    const body = await response.json();
    await dispatch({ type: FETCH_EVENTS_FULFILLED, events: body.eventsWithDates });
  } catch (error) {
    dispatch({
      type: FETCH_EVENTS_REJECTED,
      error: 'I wish I had more time to do error handling.',
    });
  }
};
