export const emptystate = {
  eventReducer: { events: null, fetching: false, error: false },
};

export const stateWithEvents = {
  eventReducer: {
    fetching: false,
    error: false,
    events: [
      {
        id: 3,
        startDate: '2019-02-26 10:00',
        endDate: '2019-02-26 12:00',
        location: 'Lagerhuset',
        activity: 'meeting',
        date: '2019-02-26 10:00:00',
      },
      {
        id: 1,
        startDate: '2019-02-26 12:00',
        endDate: '2019-02-26 13:00',
        location: 'Lagerhuset',
        activity: 'lunch',
        date: '2019-02-26 12:00:00',
      },
      {
        id: 2,
        startDate: '2019-02-26 22:00',
        endDate: '2019-02-28 07:00',
        location: 'online',
        activity: 'meeting',
        date: '2019-02-26 22:00:00',
      },
      {
        id: 2,
        startDate: '2019-02-26 22:00',
        endDate: '2019-02-28 07:00',
        location: 'online',
        activity: 'meeting',
        date: '2019-02-27 00:00:01',
      },
      {
        id: 2,
        startDate: '2019-02-26 22:00',
        endDate: '2019-02-28 07:00',
        location: 'online',
        activity: 'meeting',
        date: '2019-02-28 00:00:01',
      },
    ],
  },
};

export const stateWithError = {
  eventReducer: { events: null, fetching: false, error: true },
};

export const stateWhileLoading = {
  eventReducer: { events: null, fetching: true, error: false },
};
