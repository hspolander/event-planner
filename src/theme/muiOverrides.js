import componentPalette from './palette';

const overrides = (theme) => ({
  MuiContainer: {
    root: {
      backgroundColor: componentPalette[theme].layout.container,
      padding: 50,
      width: '100%',
      height: '100%',
    },
  },
  MuiPaper: {
    root: {
      backgroundColor: componentPalette[theme].layout.paper,
    },
  },
  MuiList: {
    root: {
      padding: '10px',
      backgroundColor: componentPalette[theme].list.default,
    },
  },
  MuiListItem: {
    root: {
      padding: '5px 7px',
      margin: '5px 0px',
      backgroundColor: componentPalette[theme].listItem.default,
    },
  },
  MuiListItemText: {
    root: {
      color: componentPalette[theme].listItemText.contrastText,
    },
  },
  MuiAvatar: {
    root: {
      color: componentPalette[theme].avatar.contrastText,
    },
  },
  MuiSvgIcon: {
    root: {
      color: componentPalette[theme].icon.default,
    },
  },
  MuiFab: {
    root: {
      color: componentPalette[theme].actionButton.contrastText,
      secondary: {
        backgroundColor: componentPalette[theme].actionButton.default,
        '&:hover': {
          backgroundColor: componentPalette[theme].actionButton.hover,
        },
        '&:active': {
          backgroundColor: componentPalette[theme].actionButton.active,
        },
      },
      primary: {
        backgroundColor: componentPalette[theme].actionButton.default,
        '&:hover': {
          backgroundColor: componentPalette[theme].actionButton.hover,
        },
        '&:active': {
          backgroundColor: componentPalette[theme].actionButton.active,
        },
      },
    },
  },
});

const muiOverrides = {
  lightTheme: overrides('light'),
  darkTheme: overrides('dark'),
};

export default muiOverrides;
