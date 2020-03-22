import React from 'react';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../rootReducer';

export default function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

export * from '@testing-library/react';
