import React = require( 'react' );
import { connect } from 'react-redux';
import
{
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  Paper,
  InputAdornment,
  Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import { setPlaylistSubscriptions, loadPlaylistSubscriptions } from 'store/reducers/storage';
import { thunkToAction } from 'typescript-fsa-redux-thunk';

const styles = ( theme: Theme ) => createStyles( {
  root: {
    width: 425,
    padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column'
  },
  list: {
    maxHeight: 500,
    overflow: 'auto'
  },
  form: {
    marginTop: theme.spacing.unit * 2
  }
} );

function isTextEmpty( text: string | null | undefined )
{
  return !text || /^\s*$/.test( text );
}

interface PropsFromState
{
  playlistSubscriptions: Set<string>;
}

interface PropsFromDispatch
{
  loadPlaylistSubscriptions: () => Promise<Set<string>>;
  setPlaylistSubscriptions: ( subscriptions: Set<string> ) => void;
}

type Props = PropsFromState & PropsFromDispatch & WithStyles<typeof styles>;

interface State
{
  playlistId: string;
}

class BrowserActionPopup extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    playlistId: ''
  };

  public componentDidMount()
  {
    chrome.tabs.query( { active: true }, this.onTabsQuery );

    this.props.loadPlaylistSubscriptions();
  }

  public render()
  {
    const { classes, playlistSubscriptions } = this.props;
    const { playlistId } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h6">Playlist Subscriptions</Typography>
        <Paper>
          <List className={classes.list}>
            {( playlistSubscriptions.size === 0 ) ?
              (
                <ListItem>
                  <ListItemText primary="No playlist subscriptions" />
                </ListItem>
              ) :
              (
                Array.from( playlistSubscriptions.values() ).map( ( playlist ) => (
                  <ListItem
                    key={playlist}
                    button={true}
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.youtube.com/playlist?list=${playlist}`}
                  >
                    <ListItemText primary={playlist} />
                    <ListItemSecondaryAction>
                      <IconButton title="Remove" onClick={() => this.onRemovePlaylist( playlist )}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ) )
              )}
          </List>
        </Paper>
        <form
          className={classes.form}
          onSubmit={this.onAddPlaylistSubmit}
        >
          <TextField
            label="Playlist ID"
            value={playlistId}
            onChange={this.onPlaylistIdChange}
            fullWidth={true}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" title="Subscribe" disabled={isTextEmpty( playlistId )}>
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </form>
      </div>
    );
  }

  private onTabsQuery = ( tabs: chrome.tabs.Tab[] ) =>
  {
    if( chrome.runtime.lastError )
    {
      console.error( 'Failed to retrieve active tab:', chrome.runtime.lastError );
      return;
    }

    if( tabs.length === 0 )
    {
      console.log( 'No active tab' );
      return;
    }

    const [ tab ] = tabs;

    console.log( 'Current Tab:', tab.url );
    const tabUrl = tab.url;
    if( !tabUrl )
    {
      return;
    }

    const url = new URL( tabUrl );

    if( !url.hostname.endsWith( 'youtube.com' ) )
    {
      return;
    }

    const playlistId = url.searchParams.get( 'list' );
    if( playlistId )
    {
      console.log( 'Playlist ID:', playlistId );
      this.setState( { playlistId: playlistId } );
    }
  }

  private onPlaylistIdChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
  {
    this.setState( { playlistId: e.target.value } );
  }

  private onAddPlaylistSubmit = ( e: React.FormEvent ) =>
  {
    e.preventDefault();

    if( isTextEmpty( this.state.playlistId ) )
    {
      return;
    }

    console.log( 'Add playlist subscription:', this.state.playlistId );
    let playlistSubscriptions = new Set( this.props.playlistSubscriptions );
    playlistSubscriptions.add( this.state.playlistId );

    this.props.setPlaylistSubscriptions( playlistSubscriptions );
    this.setState( { playlistId: '' } );
  }

  private onRemovePlaylist = ( playlistId: string ) =>
  {
    console.log( 'Remove playlist subscription:', playlistId );

    let playlistSubscriptions = new Set( this.props.playlistSubscriptions );
    playlistSubscriptions.delete( playlistId );

    this.props.setPlaylistSubscriptions( playlistSubscriptions );
  }
}

export default connect<PropsFromState, PropsFromDispatch, {}, RootState>(
  ( state ) => ( {
    playlistSubscriptions: state.storage.playlistSubscriptions
  } ),
  {
    loadPlaylistSubscriptions: thunkToAction( loadPlaylistSubscriptions.action ),
    setPlaylistSubscriptions: thunkToAction( setPlaylistSubscriptions.action )
  }
)( withStyles( styles )( BrowserActionPopup ) );
