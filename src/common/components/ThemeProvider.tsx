import React = require( 'react' );
import { connect } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';

import { lightTheme, darkTheme } from 'common/theme';

interface PropsFromState
{
  useDarkTheme: boolean;
}

type Props = PropsFromState;

class ThemeProvider extends React.PureComponent<Props>
{
  public render()
  {
    const { useDarkTheme, children } = this.props;

    return (
      <MuiThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
        {children}
      </MuiThemeProvider>
    );
  }
}

export default connect<PropsFromState, {}, {}, RootState>(
  ( state ) => ( {
    useDarkTheme: state.stored.settings.useDarkTheme
  } )
)( ThemeProvider );
