import React = require( 'react' );
import { connect } from 'react-redux';
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
  Snackbar,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

import { lightRedTheme, darkRedTheme } from 'common/theme';

import { State as StoredData } from 'store/reducers/stored';
import { State as UserData, clearUserData, setUserData } from 'store/reducers/stored/user';
import { State as SettingsData, clearSettingsData, setSettingsData, setUseDarkTheme, setMarkVideoWatchedOnOpen } from 'store/reducers/stored/settings';

import { formatExportStoredDataAsDatUrl, parseExportStoredData } from 'utils/stored_data';
import { readFile } from 'utils/file';

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
  storedData: StoredData;
  useDarkTheme: boolean;
  markVideoWatchedOnOpen: boolean;
}

interface PropsFromDispatch
{
  setUserData: ( userData: UserData ) => void;
  clearUserData: () => void;
  setSettingsData: ( settingsData: SettingsData ) => void;
  clearSettingsData: () => void;
  setUseDarkTheme: ( useDarkTheme: boolean ) => void;
  setMarkVideoWatchedOnOpen: ( markVideoWatchedOnOpen: boolean ) => void;
}

interface State
{
  clearDataDialogOpen: boolean;
  userDataImportSnackbarOpen: boolean;
  userDataImportDialogOpen: boolean;
  userDataImportResult: string;
}

type Props = PropsFromState & PropsFromDispatch & WithStyles<typeof styles>;

class SettingsPage extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    clearDataDialogOpen: false,
    userDataImportSnackbarOpen: false,
    userDataImportDialogOpen: false,
    userDataImportResult: ''
  };

  public render()
  {
    const { classes, storedData } = this.props;
    const {
      userDataImportSnackbarOpen, userDataImportDialogOpen, userDataImportResult,
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
          <Typography variant="h5">Export User Data</Typography>
          <Divider />
          <Typography>Export your user data to easily transfer data.</Typography>
          <div>
            <Button
              href={formatExportStoredDataAsDatUrl( storedData )}
              download="user_data.json"
              variant="outlined"
              color="primary"
            >
              Export Your User Data
            </Button>
          </div>
        </div>

        <div className={classes.group}>
          <Typography variant="h5">Import User Data</Typography>
          <Divider />
          <Typography>Import previously exported user data.</Typography>
          <div>
            <input
              className={classes.importFileInput}
              id="user-data-file"
              type="file"
              accept=".json"
              onChange={this.onImportUserDataFileChange}
            />
            <label htmlFor="user-data-file">
              <Button
                component="span"
                variant="outlined"
                color="primary"
              >
                Import User Data
              </Button>
            </label>
          </div>
          <Snackbar
            open={userDataImportSnackbarOpen}
            onClose={this.onUserDataImportSnackbarClose}
            anchorOrigin={{
              horizontal: 'center',
              vertical: 'bottom'
            }}
            message="User data succesfully imported"
            autoHideDuration={2000}
            disableWindowBlurListener={true}
          />
          <Dialog
            open={userDataImportDialogOpen}
            onClose={this.onUserDataImportDialogClose}
          >
            <DialogContent>
              <DialogContentText>
                {userDataImportResult}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onUserDataImportDialogClose} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
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

  private onImportUserDataFileChange = async ( e: React.ChangeEvent<HTMLInputElement> ) =>
  {
    const fileInput = e.target;

    const file = fileInput.files && fileInput.files[ 0 ];
    fileInput.value = '';

    if( !file )
    {
      console.log( 'No files selected' );
      return;
    }

    let result: string;
    try
    {
      result = await readFile( file );
    }
    catch( e )
    {
      console.error( 'Failed to read user data file:', e );
      this.setState( {
        userDataImportDialogOpen: true,
        userDataImportResult: 'Failed to read user data file.'
      } );
      return;
    }

    let storedData = parseExportStoredData( result );
    if( !storedData )
    {
      this.setState( {
        userDataImportDialogOpen: true,
        userDataImportResult: 'Imported user data did not match expected format.'
      } );
      return;
    }

    this.props.setUserData( storedData.user );
    this.props.setSettingsData( storedData.settings );

    window.setTimeout( () =>
    {
      this.setState( { userDataImportSnackbarOpen: true } );
    }, 100 );
  }

  private onUserDataImportSnackbarClose = ( e: React.SyntheticEvent, reason: string ) =>
  {
    this.setState( { userDataImportSnackbarOpen: false } );
  }

  private onUserDataImportDialogClose = () =>
  {
    this.setState( {
      userDataImportDialogOpen: false
    } );
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
    storedData: state.stored,
    useDarkTheme: state.stored.settings.useDarkTheme,
    markVideoWatchedOnOpen: state.stored.settings.markVideoWatchedOnOpen,
  } ),
  {
    setUseDarkTheme,
    setUserData,
    clearUserData,
    setSettingsData,
    clearSettingsData,
    setMarkVideoWatchedOnOpen,
  }
)( withStyles( styles )( SettingsPage ) );
