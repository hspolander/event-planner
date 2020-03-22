import React from 'react';
import renderWithRedux, { cleanup } from '../../testUtils/testUtils';
import { stateWithEvents } from '../../testUtils/mockedStates';

import EventList from './EventList';

describe('EventList', () => {
  afterEach(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    const { container } = renderWithRedux(<EventList />, {
      stateWithEvents,
    });
    expect(container).toMatchSnapshot();
  });
});
