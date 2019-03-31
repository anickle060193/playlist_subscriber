import React = require( 'react' );
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

import ThemeProvider from 'common/components/ThemeProvider';
import StoreInitializer from 'common/components/StoreInitializer';

import BrowserActionPopup from 'popup/components/BrowserActionPopup';

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
            <BrowserActionPopup />
          </StoreInitializer>
        </ThemeProvider>
      </Provider>
    );
  }
}
