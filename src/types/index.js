import { shape, string, arrayOf } from 'prop-types';

const event = shape({
  id: string,
  activity: string,
  startDate: string,
  endDate: string,
  location: string,
});

const eventList = arrayOf(event);

const themeType = string;

export { event, eventList, themeType };
