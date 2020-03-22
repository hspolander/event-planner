import React from 'react';
import renderWithRedux, { cleanup } from '../../testUtils/testUtils';
import { mockedEmptyState } from '../../testUtils/mockedStates';

import EventBody from './EventBody';

describe('DashboardDetails', () => {
  afterEach(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    const { container } = renderWithRedux(<EventBody />, {
      mockedEmptyState,
    });
    expect(container).toMatchSnapshot();
  });
});
