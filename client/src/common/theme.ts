import { createMuiTheme, colors } from '@material-ui/core';

export const theme = createMuiTheme( {
  palette: {
    primary: colors.blue,
    secondary: colors.deepOrange
  },
  typography: {
    useNextVariants: true
  }
} );
