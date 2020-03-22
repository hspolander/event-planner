export const common = {
  black: 'rgb(0,0,0)',
  white: 'rgb(255,255,255)',
};

export const colors = {
  light: {
    gray: {
      50: '#F7F7F7',
      100: '#EEEEEE',
      200: '#E2E2E2',
      300: '#CFCFCF',
      400: '#AAAAAA',
      500: '#898989',
      600: '#626262',
      700: '#4F4F4F',
      800: '#313131',
      900: '#111111',
    },
    cyan: {
      50: 'E1F5F3',
      200: '#85D8CC',
      400: '#28B9A7',
      500: '#0AAC97',
      700: '#058D78',
      900: '#035F4C',
    },
    teal: {
      50: 'E5FFFF',
      200: '#9DFEFF',
      400: '#68F8FF',
      500: '#5FF3FE',
      700: '#54CBD0',
      900: '#43908B',
    },
    listItemBorders: [
      '#ff6f60',
      '#76d275',
      '#9162e4',
      '#ff5c8d',
      '#aee571',
      '#c158dc',
      '#6f74dd',
      '#4ebaaa',
      '#6ab7ff',
      '#4c8c4a',
    ],
  },
  dark: {
    gray: {
      50: '#F9F9F9',
      100: '#F3F3F3',
      200: '#EBEBEB',
      300: '#DCDCDC',
      400: '#B8B8B8',
      500: '#999999',
      600: '#707070',
      700: '#5C5C5C',
      800: '#3E3E3E',
      900: '#1D1D1D',
    },
    cyan: {
      50: '#E0F2F1',
      200: '#7FCAC3',
      400: '#25A499',
      500: '#009487',
      700: '#00776A',
      800: '#00675B',
      900: '#014B3F',
    },
    teal: {
      50: 'E0EDF0',
      200: '#81B9BF',
      400: '#268C93',
      500: '#007A7F',
      700: '#005F62',
      800: '#005052',
      900: '#003635',
    },
    listItemBorders: [
      '#ab000d',
      '#00701a',
      '#280680',
      '#a00037',
      '#4b830d',
      '#5c007a',
      '#00227b',
      '#005b4f',
      '#005cb2',
      '#003300',
    ],
  },
};

const lightPalette = colors.light;
const darkPalette = colors.dark;

export const colorTube = {
  secondaryLight: {
    extralight: lightPalette.teal[200],
    light: lightPalette.teal[400],
    main: lightPalette.teal[500],
    dark: lightPalette.teal[700],
    contrastText: common.black,
  },
  primaryLight: {
    extralight: lightPalette.cyan[50],
    light: lightPalette.cyan[200],
    main: lightPalette.cyan[400],
    dark: lightPalette.cyan[500],
    contrastText: common.black,
  },
  grayLight: lightPalette.gray,
  listItemBordersLight: lightPalette.listItemBorders,

  primaryDark: {
    extralight: darkPalette.teal[200],
    light: darkPalette.teal[500],
    main: darkPalette.teal[800],
    dark: darkPalette.teal[900],
    contrastText: common.white,
  },
  secondaryDark: {
    extralight: darkPalette.cyan[50],
    light: darkPalette.cyan[100],
    main: darkPalette.cyan[200],
    dark: darkPalette.cyan[400],
    contrastText: common.black,
  },
  grayDark: darkPalette.gray,
  listItemBordersDark: darkPalette.listItemBorders,
};
