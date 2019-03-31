import React = require( 'react' );
import { connect } from 'react-redux';
import moment from 'moment';
import classNames from 'classnames';
import { Theme, createStyles, WithStyles, withStyles, Typography, IconButton, MenuItem } from '@material-ui/core';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import NoReferrerAnchor from 'common/components/NoReferrerAnchor';
import SimpleMenu from 'common/components/SimpleMenu';

import { markVideoAsWatched, unmarkVideoAsWatched } from 'store/reducers/stored/user';

import { YoutubePlaylistItem, getYoutubePlaylistItemThumbnail } from 'utils/youtube_api_types';
import { thunkToAction } from 'typescript-fsa-redux-thunk';

const THUMBNAIL_WIDTH = 230;
const THUMBNAIL_HEIGHT = THUMBNAIL_WIDTH * ( 9 / 16 );

const styles = ( theme: Theme ) => createStyles( {
  root: {
    width: THUMBNAIL_WIDTH,
    display: 'flex',
    flexDirection: 'column'
  },
  thumbnailContainer: {
    position: 'relative'
  },
  thumbnail: {
    display: 'block',
    width: THUMBNAIL_WIDTH,
    minHeight: THUMBNAIL_HEIGHT,
  },
  thumbnailOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    borderRadius: 0
  },
  thumbnailOverlayIcon: {
    width: '3rem',
    height: '3rem',
    color: theme.palette.secondary.main,
    transition: theme.transitions.create( 'opacity', { duration: 200, easing: 'ease-in-out' } ),
    opacity: 0,
    '$thumbnailOverlay:hover &': {
      opacity: 0.8
    }
  },
  watchedIndicator: {
    ...theme.typography.button,
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: theme.spacing.unit / 2,
    padding: theme.spacing.unit / 2,
    borderRadius: 3,
    lineHeight: theme.typography.button.fontSize,
    background: 'rgba( 35, 35, 35, 0.8 )',
    color: theme.palette.secondary.main,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  detailsContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit,
  },
  itemTitle: {
    fontSize: '0.875rem',
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: '1.2rem',
    letterSpacing: 0,
    display: 'box',
    boxOrient: 'vertical',
    lineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal'
  },
  linkText: {
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  channelTitle: {
    fontWeight: theme.typography.fontWeightLight
  },
  menuButton: {
    marginTop: theme.spacing.unit / 2,
    padding: 0,
    opacity: 0,
    '$root:hover &': {
      background: 'none',
      opacity: 0.6,
      '&:hover': {
        opacity: 1
      }
    }
  },
  menuButtonActive: {
    opacity: 1
  }
} );

interface PropsFromState
{
  watched: boolean;
  markVideoWatchedOnOpen: boolean;
}

interface PropsFromDispatch
{
  markVideoAsWatched: ( videoId: string ) => void;
  unmarkVideoAsWatched: ( videoId: string ) => void;
}

interface OwnProps
{
  playlistItem: YoutubePlaylistItem | null | undefined;
  showChannelTitle?: boolean;
  hidePlaylistItem: ( playlistItemId: string ) => void;
}

type Props = PropsFromState & PropsFromDispatch & OwnProps & WithStyles<typeof styles>;

interface State
{
  menuAnchorEl: HTMLElement | null;
}

class PlaylistItemThumbnail extends React.PureComponent<Props, State>
{
  public static defaultProps = {
    showChannelTitle: false
  };

  public readonly state: State = {
    menuAnchorEl: null
  };

  public render()
  {
    const { classes, playlistItem, showChannelTitle, watched } = this.props;
    const { menuAnchorEl } = this.state;

    if( playlistItem )
    {
      const thumbnail = getYoutubePlaylistItemThumbnail( playlistItem.snippet.thumbnails );
      const url = thumbnail ? thumbnail.url : '';

      const videoPublishedAt = moment( playlistItem.contentDetails.videoPublishedAt );

      return (
        <div className={classes.root}>
          <div className={classes.thumbnailContainer}>
            <img
              className={classes.thumbnail}
              src={url}
              alt={playlistItem.snippet.title}
            />
            {watched && (
              <Typography className={classes.watchedIndicator}>
                Watched
              </Typography>
            )}
            <IconButton
              className={classes.thumbnailOverlay}
              component={NoReferrerAnchor}
              onClick={this.onVideoClick}
              onMouseUp={this.onVideoClick}
            >
              <PlayCircleFilledRoundedIcon className={classes.thumbnailOverlayIcon} />
            </IconButton>
          </div>
          <div className={classes.details}>
            <div className={classes.detailsContent}>
              <NoReferrerAnchor
                className={classes.linkText}
                onClick={this.onVideoClick}
                onMouseUp={this.onVideoClick}
              >
                <Typography variant="subtitle1" className={classes.itemTitle}>
                  {playlistItem.snippet.title}
                </Typography>
              </NoReferrerAnchor>
              {showChannelTitle && (
                <NoReferrerAnchor
                  className={classes.linkText}
                  href={`https://www.youtube.com/channel/${playlistItem.snippet.channelId}`}
                >
                  <Typography variant="subtitle2" className={classes.channelTitle}>
                    {playlistItem.snippet.channelTitle}
                  </Typography>
                </NoReferrerAnchor>
              )}
              <Typography variant="caption" component="time" {...{ dateTime: videoPublishedAt.toISOString( true ) }}>
                {videoPublishedAt.fromNow()}
              </Typography>
            </div>
            <IconButton
              className={classNames( {
                [ classes.menuButton ]: true,
                [ classes.menuButtonActive ]: menuAnchorEl !== null
              } )}
              onClick={this.onMenuOpen}
            >
              <MoreVertIcon />
            </IconButton>
            <SimpleMenu
              anchorEl={menuAnchorEl}
              open={menuAnchorEl !== null}
              onClose={this.onMenuClose}
              placement="bottom-end"
            >
              {watched ?
                (
                  <MenuItem onClick={this.onUnmarkAsWatchedClick}>Unmark as Watched</MenuItem>
                ) :
                (
                  <MenuItem onClick={this.onMarkAsWatchedClick}>Mark as Watched</MenuItem>
                )}
              <MenuItem onClick={this.onHideClick}>Hide</MenuItem>
            </SimpleMenu>
          </div>
        </div>
      );
    }
    else
    {
      return (
        <div className={classes.root}>
          <img
            className={classes.thumbnail}
          />
          Unable to retrieve playlist items for playlist
      </div>
      );
    }
  }

  private onVideoClick = ( e: React.MouseEvent ) =>
  {
    e.preventDefault();

    if( !( ( e.button === 0
      && e.type === 'click' )
      || ( e.button === 1
        && e.type === 'mouseup' ) ) )
    {
      return;
    }

    if( !this.props.playlistItem )
    {
      return;
    }

    const videoId = this.props.playlistItem.contentDetails.videoId;

    const newWindow = window.open( `https://www.youtube.com/watch?v=${videoId}` );
    if( newWindow )
    {
      newWindow.opener = null;
    }

    if( this.props.markVideoWatchedOnOpen )
    {
      this.props.markVideoAsWatched( videoId );
    }
  }

  private onMenuOpen = ( e: React.MouseEvent<HTMLElement> ) =>
  {
    this.setState( { menuAnchorEl: e.currentTarget } );
  }

  private onMenuClose = () =>
  {
    this.setState( { menuAnchorEl: null } );
  }

  private onHideClick = () =>
  {
    if( this.props.playlistItem )
    {
      this.props.hidePlaylistItem( this.props.playlistItem.id );
    }

    this.onMenuClose();
  }

  private onUnmarkAsWatchedClick = () =>
  {
    if( this.props.playlistItem )
    {
      this.props.unmarkVideoAsWatched( this.props.playlistItem.contentDetails.videoId );
    }

    this.onMenuClose();
  }

  private onMarkAsWatchedClick = () =>
  {
    if( this.props.playlistItem )
    {
      this.props.markVideoAsWatched( this.props.playlistItem.contentDetails.videoId );
    }

    this.onMenuClose();
  }
}

export default connect<PropsFromState, PropsFromDispatch, OwnProps, RootState>(
  ( state, { playlistItem } ) => ( {
    watched: !!playlistItem && !!state.stored.user.watchedVideos[ playlistItem.contentDetails.videoId ],
    markVideoWatchedOnOpen: state.stored.settings.markVideoWatchedOnOpen,
  } ),
  {
    markVideoAsWatched: thunkToAction( markVideoAsWatched.action ),
    unmarkVideoAsWatched: thunkToAction( unmarkVideoAsWatched.action ),
  }
)( withStyles( styles )( PlaylistItemThumbnail ) );
