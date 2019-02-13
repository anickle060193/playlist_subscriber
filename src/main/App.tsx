import React = require( 'react' );
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import ThemeProvider from 'common/components/ThemeProvider';

import Main from 'main/components/Main';

import { store, persistor } from 'store';

export default class App extends React.PureComponent
{
  public render()
  {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <CssBaseline />
          <PersistGate loading={null} persistor={persistor}>
            <HashRouter hashType="hashbang">
              <Main />
            </HashRouter>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    );
  }
}
