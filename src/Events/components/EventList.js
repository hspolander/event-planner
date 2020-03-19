import React, { useEffect } from 'react';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';

import EventItem from './EventItem';
import Loading from './Loading';
import Error from './Error';
import { fetchEvents } from '../actions';

const EventBody = ({ events, loading, error, fetchEvents }) => {
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);
  return (
    <List>
      {loading ? (
        <Loading loading={loading} />
      ) : error ? (
        <Error error={error} />
      ) : events ? (
        events.map((event, index) => <EventItem event={event} index={index} />)
      ) : null}
    </List>
  );
};

const mapStateToProps = ({ eventReducer }) => ({
  events: eventReducer.events,
  loading: eventReducer.loading,
  error: eventReducer.error,
});
const mapDispatchToProps = { fetchEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventBody);
