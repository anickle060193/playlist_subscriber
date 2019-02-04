import React = require( 'react' );
import { Provider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import BrowserActionPopup from './BrowserActionPopup';

import store from 'store';

import { theme } from 'common/theme';

export default class App extends React.PureComponent
{
  public render()
  {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserActionPopup />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
