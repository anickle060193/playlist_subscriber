import React = require( 'react' );
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import BrowserActionPopup from 'popup/components/BrowserActionPopup';

import { store, persistor } from 'store';

import { theme } from 'common/theme';

export default class App extends React.PureComponent
{
  public render()
  {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <PersistGate persistor={persistor}>
            <BrowserActionPopup />
          </PersistGate>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
