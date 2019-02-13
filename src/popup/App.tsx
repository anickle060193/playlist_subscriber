import React = require( 'react' );
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@material-ui/core';

import ThemeProvider from 'common/components/ThemeProvider';

import BrowserActionPopup from 'popup/components/BrowserActionPopup';

import { store, persistor } from 'store';

export default class App extends React.PureComponent
{
  public render()
  {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <CssBaseline />
          <PersistGate persistor={persistor}>
            <BrowserActionPopup />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    );
  }
}
