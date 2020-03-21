import { colorTube, common } from './color';

const componentPalette = {
  light: {
    layout: {
      container: common.white,
      paper: colorTube.grayLight[50],
    },
    actionButton: {
      default: colorTube.secondaryLight.light,
      hover: colorTube.secondaryLight.main,
      active: colorTube.secondaryLight.dark,
      contrastText: common.black,
    },
    list: {
      default: colorTube.grayLight[200],
    },
    listItem: {
      default: colorTube.grayLight[100],
      contrastText: common.black,
    },
    listItemText: {
      contrastText: common.black,
    },
    avatar: {
      contrastText: common.black,
    },
    icon: {
      default: colorTube.primaryLight.dark,
    },
  },
  dark: {
    layout: {
      container: colorTube.grayDark[900],
      paper: colorTube.grayDark[700],
    },
    actionButton: {
      default: colorTube.secondaryDark.dark,
      hover: colorTube.secondaryDark.main,
      active: colorTube.secondaryDark.light,
      contrastText: common.black,
    },
    list: {
      default: colorTube.grayDark[600],
    },
    listItem: {
      default: colorTube.grayDark[700],
      contrastText: common.black,
    },
    listItemText: {
      contrastText: common.black,
    },
    avatar: {
      contrastText: common.light,
    },
    icon: {
      default: colorTube.primaryDark.dark,
    },
  },
};

export default componentPalette;
