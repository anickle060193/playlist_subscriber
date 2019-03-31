import React = require( 'react' );
import { connect } from 'react-redux';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
import
{
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  MuiThemeProvider,
  Typography,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

import { lightRedTheme, darkRedTheme } from 'common/theme';

import { clearUserData } from 'store/reducers/stored/user';
import { clearSettingsData, setUseDarkTheme, setMarkVideoWatchedOnOpen } from 'store/reducers/stored/settings';

const styles = ( theme: Theme ) => createStyles( {
  root: {
    height: '100%',
    padding: theme.spacing.unit * 4,
    overflowY: 'auto',
    '& > *:not( :first-child )': {
      marginTop: theme.spacing.unit * 4
    }
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    '& > *:not( :first-child )': {
      marginTop: theme.spacing.unit
    }
  },
  importFileInput: {
    display: 'none'
  }
} );

const CheckboxSetting: React.SFC<{
  label: string;
  value: boolean;
  setValue: ( value: boolean ) => void;
}> = ( { label, value, setValue } ) => (
  <FormGroup row={true}>
    <FormControlLabel
      control={(
        <Checkbox
          checked={value}
          onChange={( e ) => setValue( e.target.checked )}
        />
      )}
      label={label}
    />
  </FormGroup>
);

interface PropsFromState
{
  useDarkTheme: boolean;
  markVideoWatchedOnOpen: boolean;
}

interface PropsFromDispatch
{
  clearUserData: () => void;
  clearSettingsData: () => void;
  setUseDarkTheme: ( useDarkTheme: boolean ) => void;
  setMarkVideoWatchedOnOpen: ( markVideoWatchedOnOpen: boolean ) => void;
}

interface State
{
  clearDataDialogOpen: boolean;
}

type Props = PropsFromState & PropsFromDispatch & WithStyles<typeof styles>;

class SettingsPage extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    clearDataDialogOpen: false,
  };

  public render()
  {
    const { classes } = this.props;
    const {
      clearDataDialogOpen
    } = this.state;

    return (
      <div className={classes.root}>

        <div className={classes.group}>
          <Typography variant="h5">Settings</Typography>
          <Divider />
          <CheckboxSetting
            label="Use dark theme for Playlist Subscriber"
            value={this.props.useDarkTheme}
            setValue={this.props.setUseDarkTheme}
          />
          <CheckboxSetting
            label="Mark video as watched within Playlist Subscriber when opened from Home or Subscriptions page"
            value={this.props.markVideoWatchedOnOpen}
            setValue={this.props.setMarkVideoWatchedOnOpen}
          />
        </div>

        <div className={classes.group}>
          <MuiThemeProvider theme={this.props.useDarkTheme ? darkRedTheme : lightRedTheme}>
            <Typography variant="h5" color="secondary">Clear User Data</Typography>
            <Divider />
            <Typography>Once you clear your user data, there is no recovering it. Proceed cautiously.</Typography>
            <div>
              <Button
                onClick={this.onClearDataDialogOpen}
                variant="outlined"
                color="secondary"
              >
                Clear Your User Data
              </Button>
            </div>
            <Dialog
              open={clearDataDialogOpen}
              onClose={this.onClearDataDialogClose}
            >
              <DialogTitle>Clear User Data?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This will clear all user data saved by Playlist Subscriber including playlist subscriptions.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.onClearDataDialogClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.onClearData} color="secondary">
                  Clear Data
                </Button>
              </DialogActions>
            </Dialog>
          </MuiThemeProvider>
        </div>

      </div>
    );
  }

  private onClearDataDialogOpen = () =>
  {
    this.setState( { clearDataDialogOpen: true } );
  }

  private onClearDataDialogClose = () =>
  {
    this.setState( { clearDataDialogOpen: false } );
  }

  private onClearData = () =>
  {
    this.props.clearUserData();
    this.props.clearSettingsData();
    this.setState( { clearDataDialogOpen: false } );
  }
}

export default connect<PropsFromState, PropsFromDispatch, {}, RootState>(
  ( state ) => ( {
    useDarkTheme: state.stored.settings.useDarkTheme,
    markVideoWatchedOnOpen: state.stored.settings.markVideoWatchedOnOpen,
  } ),
  {
    setUseDarkTheme: thunkToAction( setUseDarkTheme.action ),
    clearUserData: thunkToAction( clearUserData.action ),
    clearSettingsData: thunkToAction( clearSettingsData.action ),
    setMarkVideoWatchedOnOpen: thunkToAction( setMarkVideoWatchedOnOpen.action ),
  }
)( withStyles( styles )( SettingsPage ) );
