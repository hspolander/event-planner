import React from 'react';
import { ListItem, Avatar, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Work } from '@material-ui/icons';

const EventItem = ({ event }) => {
  const { id, startDate, endDate, location, activity, date } = event;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Work />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        {date} {activity} @ {location}
      </ListItemText>
    </ListItem>
  );
};

export default EventItem;
