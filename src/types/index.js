import { shape, string, arrayOf, int, func, bool } from 'prop-types';

const eventType = shape({
  id: int,
  activity: string,
  startDate: string,
  endDate: string,
  location: string,
  date: string,
});

const eventListType = arrayOf(eventType);

const themeType = string;

const loadingType = bool;
const errorType = bool;

const fetchEventsType = func;

export { eventType, eventListType, themeType, loadingType, errorType, fetchEventsType };
