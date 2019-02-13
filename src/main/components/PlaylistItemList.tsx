import React = require( 'react' );
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Theme, createStyles, WithStyles, withStyles, Snackbar, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import PlaylistItemThumbnail from 'main/components/PlaylistItemThumbnail';

import { hidePlaylistItem, unhidePlaylistItem } from 'store/reducers/stored/user';

import { YoutubePlaylistItem, compareYoutubePlaylistItems } from 'utils/youtube_api_types';

const styles = ( theme: Theme ) => createStyles( {
  playlistItem: {
    '&:not( :last-child )': {
      marginRight: theme.spacing.unit * 2
    }
  },
  rowMargin: {
    marginBottom: theme.spacing.unit * 2
  },
  closeButton: {
    padding: theme.spacing.unit / 2,
  }
} );

interface PropsFromDispatch
{
  hidePlaylistItem: ( playlistItemId: string ) => void;
  unhidePlaylistItem: ( playlistItemId: string ) => void;
}

interface OwnProps
{
  playlistItems: YoutubePlaylistItem[];
  rowMargin?: boolean;
  showChannelTitle?: boolean;
}

type Props = PropsFromDispatch & OwnProps & WithStyles<typeof styles>;

interface State
{
  lastHiddenPlaylistId: string | null;
}

class PlaylistItemsRow extends React.PureComponent<Props, State>
{
  public static defaultProps = {
    rowMargin: false,
    showChannelTitle: false
  };

  public readonly state: State = {
    lastHiddenPlaylistId: null
  };

  public render()
  {
    const { classes, playlistItems, rowMargin, showChannelTitle } = this.props;

    let items = [ ...playlistItems ].sort( compareYoutubePlaylistItems );

    return (
      <>
        {items.map( ( playlistItem ) => (
          <div
            key={`${playlistItem.snippet.playlistId}_${playlistItem.id}`}
            className={classNames( {
              [ classes.playlistItem ]: true,
              [ classes.rowMargin ]: rowMargin
            } )}
          >
            <PlaylistItemThumbnail
              playlistItem={playlistItem}
              showChannelTitle={showChannelTitle}
              hidePlaylistItem={this.onHidePlaylistItem}
            />
          </div>
        ) )}
        <Snackbar
          open={this.state.lastHiddenPlaylistId !== null}
          onClose={this.onPlaylistItemHiddenSnackbarClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          autoHideDuration={6000}
          message="Playlist item hidden"
          action={(
            <>
              <Button
                color="secondary"
                size="small"
                onClick={this.onUndoHidePlaylistItem}
              >
                Undo
              </Button>
              <IconButton
                onClick={this.onPlaylistItemHiddenSnackbarClose}
                color="inherit"
                className={classes.closeButton}
              >
                <CloseIcon />
              </IconButton>
            </>
          )}
        />
      </>
    );
  }

  private onHidePlaylistItem = ( playlistItemId: string ) =>
  {
    this.props.hidePlaylistItem( playlistItemId );
    this.setState( { lastHiddenPlaylistId: playlistItemId } );
  }

  private onUndoHidePlaylistItem = () =>
  {
    if( this.state.lastHiddenPlaylistId )
    {
      this.props.unhidePlaylistItem( this.state.lastHiddenPlaylistId );
      this.setState( { lastHiddenPlaylistId: null } );
    }
  }

  private onPlaylistItemHiddenSnackbarClose = ( e?: React.SyntheticEvent, reason?: string ) =>
  {
    if( reason && reason === 'clickaway' )
    {
      return;
    }

    this.setState( { lastHiddenPlaylistId: null } );
  }
}

export default connect<{}, PropsFromDispatch, OwnProps, RootState>(
  null,
  {
    hidePlaylistItem,
    unhidePlaylistItem
  }
)( withStyles( styles )( PlaylistItemsRow ) );
