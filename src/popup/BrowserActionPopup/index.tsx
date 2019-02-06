import React = require( 'react' );
import { connect } from 'react-redux';
import { thunkToAction } from 'typescript-fsa-redux-thunk';
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
  Typography,
  Avatar,
  ListItemAvatar,
  Tooltip
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import { setPlaylistSubscriptions, loadPlaylistSubscriptions } from 'store/reducers/storage';
import { retrieveYoutubePlaylists } from 'store/reducers/youtubeApi';

import { YoutubePlaylist, getYoutubeAvatarThumbnail } from 'utils/youtube_api_types';
import { MappedResource, mappedResourceNeedsLoad } from 'utils/resource';

const styles = ( theme: Theme ) => createStyles( {
  root: {
    width: 425,
    padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'column'
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1
  },
  openInNewButton: {
    marginTop: -theme.spacing.unit,
    marginBottom: theme.spacing.unit / 2,
    padding: theme.spacing.unit
  },
  list: {
    maxHeight: 500,
    overflow: 'auto'
  },
  listItemText: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'normal',
    lineClamp: 2
  },
  removeButton: {
    '&:hover': {
      color: theme.palette.secondary.main
    }
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
  youtubePlaylists: MappedResource<YoutubePlaylist>;
}

interface PropsFromDispatch
{
  loadPlaylistSubscriptions: () => Promise<Set<string>>;
  setPlaylistSubscriptions: ( subscriptions: Set<string> ) => void;
  retrieveYoutubePlaylists: ( playlistIds: string[] ) => Promise<void>;
}

type Props = PropsFromState & PropsFromDispatch & WithStyles<typeof styles>;

interface State
{
  playlistIdValue: string;
}

class BrowserActionPopup extends React.PureComponent<Props, State>
{
  public readonly state: State = {
    playlistIdValue: ''
  };

  public componentDidMount()
  {
    chrome.tabs.query( { active: true }, this.onTabsQuery );

    this.props.loadPlaylistSubscriptions();

    this.onUpdate();
  }

  public componentDidUpdate()
  {
    this.onUpdate();
  }

  public render()
  {
    const { classes, playlistSubscriptions } = this.props;
    const { playlistIdValue } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.titleRow}>
          <Typography variant="h6" className={classes.title}>Playlist Subscriptions</Typography>
          <Tooltip title="Open Playlist Subscriber" placement="left" enterDelay={500}>
            <IconButton
              className={classes.openInNewButton}
              href={chrome.extension.getURL( './main.html' )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <OpenInNewIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Paper>
          <List className={classes.list}>
            {( playlistSubscriptions.size === 0 ) ?
              (
                <ListItem>
                  <ListItemText primary="No playlist subscriptions" />
                </ListItem>
              ) :
              (
                Array.from( playlistSubscriptions.values() ).map( ( playlistId ) =>
                {
                  let playlist = this.props.youtubePlaylists.items[ playlistId ];

                  let text = playlistId;
                  let thumbnail = (
                    <Avatar>
                      <PlayArrowIcon />
                    </Avatar>
                  );

                  if( playlist )
                  {
                    text = playlist.snippet.title;

                    let avatarThumbnail = getYoutubeAvatarThumbnail( playlist.snippet.thumbnails );
                    if( avatarThumbnail )
                    {
                      thumbnail = (
                        <Avatar
                          alt={text}
                          src={avatarThumbnail.url}
                        />
                      );
                    }
                  }

                  return (
                    <ListItem
                      key={playlistId}
                      button={true}
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.youtube.com/playlist?list=${playlistId}`}
                    >
                      <ListItemAvatar>
                        {thumbnail}
                      </ListItemAvatar>
                      <ListItemText
                        primary={text}
                        classes={{
                          primary: classes.listItemText
                        }}
                      />
                      <ListItemSecondaryAction>
                        <Tooltip title="Remove" placement="left" enterDelay={500}>
                          <IconButton
                            className={classes.removeButton}
                            onClick={() => this.onRemovePlaylist( playlistId )}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                } )
              )}
          </List>
        </Paper>
        <form
          className={classes.form}
          onSubmit={this.onAddPlaylistSubmit}
        >
          <TextField
            label="Playlist ID"
            value={playlistIdValue}
            onChange={this.onPlaylistIdChange}
            fullWidth={true}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" title="Subscribe" disabled={isTextEmpty( playlistIdValue )}>
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

  private async onUpdate()
  {
    if( this.props.playlistSubscriptions.size > 0 )
    {
      let playlistIds = Array.from( this.props.playlistSubscriptions )
        .filter( ( playlistId ) => mappedResourceNeedsLoad( playlistId, this.props.youtubePlaylists ) );
      if( playlistIds.length > 0 )
      {
        try
        {
          console.log( 'Retrieving youtube playlists' );
          await this.props.retrieveYoutubePlaylists( playlistIds );
        }
        catch( e )
        {
          console.error( 'Failed to retrieve playlists:', e );
        }
      }
    }
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
      this.setState( { playlistIdValue: playlistId } );
    }
  }

  private onPlaylistIdChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
  {
    this.setState( { playlistIdValue: e.target.value } );
  }

  private onAddPlaylistSubmit = ( e: React.FormEvent ) =>
  {
    e.preventDefault();

    if( isTextEmpty( this.state.playlistIdValue ) )
    {
      return;
    }

    console.log( 'Add playlist subscription:', this.state.playlistIdValue );
    let playlistSubscriptions = new Set( this.props.playlistSubscriptions );
    playlistSubscriptions.add( this.state.playlistIdValue );

    this.props.setPlaylistSubscriptions( playlistSubscriptions );
    this.setState( { playlistIdValue: '' } );
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
    playlistSubscriptions: state.storage.playlistSubscriptions,
    youtubePlaylists: state.youtubeApi.playlists
  } ),
  {
    loadPlaylistSubscriptions: thunkToAction( loadPlaylistSubscriptions.action ),
    setPlaylistSubscriptions: thunkToAction( setPlaylistSubscriptions.action ),
    retrieveYoutubePlaylists: thunkToAction( retrieveYoutubePlaylists.action )
  }
)( withStyles( styles )( BrowserActionPopup ) );
