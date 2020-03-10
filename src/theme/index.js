import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import mixins from './mixins';
import spacing from './spacing';
import breakpoints from './breakpoints';
import shadows from './shadows';

const theme = {
  mixins,
  spacing,
  breakpoints,
  shadows,
};

const lightTheme = {
  ...theme,
  palette: palette.light,
  typography: typography.light,
  overrides: overrides.light,
};
const darkTheme = {
  ...theme,
  palette: palette.dark,
  typography: typography.dark,
  overrides: overrides.dark,
};

export { lightTheme, darkTheme };
