import React = require( 'react' );
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import ThemeProvider from 'common/components/ThemeProvider';
import StoreInitializer from 'common/components/StoreInitializer';

import Main from 'main/components/Main';

import { store } from 'store';

export default class App extends React.PureComponent
{
  public render()
  {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <CssBaseline />
          <StoreInitializer>
            <HashRouter hashType="hashbang">
              <Main />
            </HashRouter>
          </StoreInitializer>
        </ThemeProvider>
      </Provider>
    );
  }
}
