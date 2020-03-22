import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import EventList from './EventList';

const useStyles = makeStyles(() => ({
  eventListPaper: {
    margin: 'auto',
    width: '40%',
    maxHeight: '90%',
    overflow: 'auto',
  },
}));

const EventBody = () => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.eventListPaper}>
      <EventList />
    </Paper>
  );
};

export default EventBody;
