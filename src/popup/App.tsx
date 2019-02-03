import React = require( 'react' );
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import BrowserActionPopup from './BrowserActionPopup';

import { theme } from 'common/theme';

export default class App extends React.PureComponent
{
  public render()
  {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserActionPopup />
      </MuiThemeProvider>
    );
  }
}
