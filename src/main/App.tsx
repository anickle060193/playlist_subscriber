import React = require( 'react' );
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import Main from './components/Main';

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
          <PersistGate loading={null} persistor={persistor}>
            <HashRouter hashType="hashbang">
              <Main />
            </HashRouter>
          </PersistGate>
        </MuiThemeProvider>
      </Provider>
    );
  }
}
