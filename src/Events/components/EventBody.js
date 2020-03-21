import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

import EventList from './EventList';

const useStyles = makeStyles((theme) => ({
  root: {},
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
    <div className={classes.root}>
      <Paper elevation={2} className={classes.eventListPaper}>
        <EventList />
      </Paper>
    </div>
  );
};

export default EventBody;
