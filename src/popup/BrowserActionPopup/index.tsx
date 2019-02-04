import React = require( 'react' );
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, TextField, createStyles, Theme, withStyles, WithStyles, Paper, InputAdornment, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

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

type Props = WithStyles<typeof styles>;

interface State
{
  playlists: Set<string>;
  playlistId: string;
}

class BrowserActionPopup extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    playlists: new Set(),
    playlistId: ''
  };

  public componentDidMount()
  {
    chrome.tabs.query( { active: true }, this.onTabsQuery );

    chrome.storage.sync.get( 'playlists', this.onStorage );

    chrome.storage.onChanged.addListener( this.onStorageChange );
  }

  public componentWillUnmount()
  {
    chrome.storage.onChanged.removeListener( this.onStorageChange );
  }

  public render()
  {
    const { classes } = this.props;
    const { playlists, playlistId } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="h6">Playlists</Typography>
        <Paper>
          <List className={classes.list}>
            {( playlists.size === 0 ) ?
              (
                <ListItem>
                  <ListItemText primary="No playlist subscriptions" />
                </ListItem>
              ) :
              (
                Array.from( playlists.values() ).map( ( playlist ) => (
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

  private onStorage = ( data: { [ key: string ]: any } ) => // tslint:disable-line:no-any
  {
    if( chrome.runtime.lastError )
    {
      console.error( 'Failed to retrieve stored playlists:', chrome.runtime.lastError );
      return;
    }

    const playlists = data && data.playlists;

    if( !Array.isArray( playlists ) )
    {
      console.log( 'No stored playlists:', playlists );
      return;
    }

    this.setState( { playlists: new Set( playlists ) } );
  }

  private onStorageChange = () =>
  {
    chrome.storage.sync.get( 'playlists', this.onStorage );
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

    let playlists = new Set( this.state.playlists );
    playlists.add( this.state.playlistId );

    this.savePlaylists( playlists );

    this.setState( { playlistId: '' } );
  }

  private onRemovePlaylist = ( playlistId: string ) =>
  {
    console.log( 'Remove Playlist:', playlistId );
    let playlists = new Set( this.state.playlists );
    playlists.delete( playlistId );
    this.savePlaylists( playlists );
  }

  private savePlaylists( playlists: Set<string> )
  {
    chrome.storage.sync.set( { playlists: Array.from( playlists ) }, () =>
    {
      if( chrome.runtime.lastError )
      {
        console.error( 'Failed to save playlists:', chrome.runtime.lastError );
      }
    } );
  }
}

export default withStyles( styles )( BrowserActionPopup );
