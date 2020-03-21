import React, { useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import * as themes from './theme';
import EventBody from './Events/components/EventBody';
import { themeType } from './types';
import { Container, Fab } from '@material-ui/core';

const App = () => {
  const [theme, setTheme] = useState('darkTheme');

  const toggleTheme = () => {
    theme === 'darkTheme' ? setTheme('lightTheme') : setTheme('darkTheme');
  };

  return (
    <MuiThemeProvider theme={createMuiTheme(themes[theme])}>
      <Container>
        <EventBody />
        <Fab color="inherit" variant="extended" onClick={() => toggleTheme()}>
          Toggle theme
        </Fab>
      </Container>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  theme: themeType,
};

export default App;
