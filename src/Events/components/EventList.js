import React, { useEffect } from 'react';
import { List, ListSubheader } from '@material-ui/core';
import { connect } from 'react-redux';

import EventItem from './EventItem';
import Loading from './Loading';
import Error from './Error';
import { eventListType, errorType, loadingType, fetchEventsType } from '../../types';
import { fetchEvents } from '../actions';

const EventList = ({ events, loading, error, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);
  return (
    <List
      aria-labelledby="events-subheader"
      subheader={
        <ListSubheader component="div" id="events-subheader">
          Events
        </ListSubheader>
      }
    >
      {loading ? (
        <Loading loading={loading} />
      ) : error ? (
        <Error error={error} />
      ) : events ? (
        events.map((event, index) => <EventItem key={index} event={event} />)
      ) : null}
    </List>
  );
};

EventList.propTypes = {
  events: eventListType,
  loading: loadingType,
  error: errorType,
  fetchEvents: fetchEventsType,
};

const mapStateToProps = ({ eventReducer }) => ({
  events: eventReducer.events,
  loading: eventReducer.loading,
  error: eventReducer.error,
});
const mapDispatchToProps = { fetchEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
