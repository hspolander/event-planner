import React from 'react';
import App from './App';
import renderWithRedux, { getByRole, cleanup } from './testUtils/testUtils';
import { emptyState } from './testUtils/mockedStates';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders with dark theme', () => {
    const { container } = renderWithRedux(<App />, {
      emptyState,
    });
    const rootDiv = getByRole(container, 'main');
    expect(rootDiv).toHaveStyle('background-color: rgb(29, 29, 29);');
  });

  it('should match snapshot', () => {
    const { container } = renderWithRedux(<App />, {
      emptyState,
    });
    expect(container).toMatchSnapshot();
  });
});
