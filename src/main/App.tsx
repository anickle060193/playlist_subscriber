import React = require( 'react' );
import { Provider } from 'react-redux';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import Main from './components/Main';

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
          <Main />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
