import React from 'react';
import * as moment from 'moment';
import {
  ListItem,
  Avatar,
  makeStyles,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Work, Fastfood } from '@material-ui/icons';
import { eventType } from '../../types';

/*
Show different border depending on the lst number in the event id
This should help the user see what entities are associated to the the same event
*/
const useStyles = makeStyles((theme) => ({
  listItem: (id) => ({
    borderColor: theme.palette.listItem.borderColorArray[id],
  }),
}));

const EventItem = ({ event }) => {
  const { id, startDate, endDate, location, activity, date } = event;

  const lastNumberinId = id.toString().substring(-1);
  const classes = useStyles(parseInt(lastNumberinId));

  const momentDate = moment(date);
  const dayOfWeekAbbr = momentDate.format('ddd');
  const dayOfMonth = momentDate.date();
  const monthAbbr = momentDate.format('MMM');
  const eventTitle = `${dayOfWeekAbbr} ${dayOfMonth} ${monthAbbr}`;
  const eventSpanSeveralDays =
    moment(startDate).format('YYYY-MM-DD') === moment(endDate).format('YYYY-MM-DD') ? false : true;

  const getAvatarIcon = (activity) => {
    return activity === 'lunch' ? <Fastfood /> : activity === 'meeting' ? <Work /> : null;
  };

  return (
    <ListItem className={classes.listItem} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>{getAvatarIcon(activity)}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={eventTitle}
        disableTypography={true}
        secondary={
          <>
            <Typography variant="body1">
              {activity} @ {location}{' '}
            </Typography>
            <Typography variant="body2">{`Event lasts ${startDate} until ${endDate}`}</Typography>
            {eventSpanSeveralDays && 'This event span several days'}
          </>
        }
      ></ListItemText>
    </ListItem>
  );
};

EventItem.propTypes = {
  event: eventType,
};

export default EventItem;
