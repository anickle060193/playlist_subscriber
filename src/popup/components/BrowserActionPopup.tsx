import React = require( 'react' );
import
{
  IconButton,
  TextField,
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  InputAdornment,
  Typography,
  Tooltip
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import withPlaylistSubscriptions, { WithPlaylistSubscriptionsProps } from 'common/hoc/withPlaylistSubscriptions';

import PlaylistSubscriptionsList from 'common/components/PlaylistSubscriptionsList';

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
  form: {
    marginTop: theme.spacing.unit * 2
  }
} );

function isTextEmpty( text: string | null | undefined )
{
  return !text || /^\s*$/.test( text );
}

type Props = WithPlaylistSubscriptionsProps & WithStyles<typeof styles>;

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
  }

  public render()
  {
    const { classes } = this.props;
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

        <PlaylistSubscriptionsList />

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

    const playlistId = this.state.playlistIdValue.trim();

    if( isTextEmpty( playlistId ) )
    {
      return;
    }

    let index = this.props.playlistSubscriptions.indexOf( playlistId );
    if( index === -1 )
    {
      console.log( 'Add playlist subscription:', playlistId );
      this.props.setPlaylistSubscriptions( [ ...this.props.playlistSubscriptions, playlistId ] );
    }
    else
    {
      console.log( 'Already subscribed to playlist:', playlistId );
    }

    this.setState( { playlistIdValue: '' } );
  }
}

export default withPlaylistSubscriptions( withStyles( styles )( BrowserActionPopup ) );
