import { createMuiTheme, colors } from '@material-ui/core';

export const lightTheme = createMuiTheme( {
  palette: {
    primary: colors.blue,
    secondary: colors.deepOrange
  },
  typography: {
    useNextVariants: true
  }
} );

export const darkTheme = createMuiTheme( {
  palette: {
    type: 'dark',
    primary: {
      main: colors.blue[ 800 ]
    },
    secondary: colors.deepOrange,
    background: {
      default: 'rgb( 18, 18, 18 )',
      paper: 'rgb( 28, 28, 28 )'
    }
  },
  typography: {
    useNextVariants: true
  }
} );

export const lightRedTheme = createMuiTheme( {
  palette: {
    primary: colors.blue,
    secondary: colors.red
  },
  typography: {
    useNextVariants: true
  }
} );

export const darkRedTheme = createMuiTheme( {
  palette: {
    type: 'dark',
    primary: {
      main: colors.blue[ 800 ]
    },
    secondary: colors.red,
    background: {
      default: 'rgb( 18, 18, 18 )',
      paper: 'rgb( 28, 28, 28 )'
    }
  },
  typography: {
    useNextVariants: true
  }
} );
