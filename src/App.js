import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import * as themes from './theme';
import EventBody from './Events/components/EventBody';
import { themeType } from './types';
import './App.css';

const App = ({ theme }) => (
  <MuiThemeProvider theme={createMuiTheme(themes[theme])}>
    <EventBody />
  </MuiThemeProvider>
);

App.propTypes = {
  theme: themeType,
};

export default App;
