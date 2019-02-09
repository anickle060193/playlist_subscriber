import React = require( 'react' );
import moment from 'moment';
import { Theme, createStyles, WithStyles, withStyles, Typography, IconButton } from '@material-ui/core';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

import NoReferrerAnchor from '../NoReferrerAnchor';

import { YoutubePlaylistItem, getYoutubePlaylistItemThumbnail } from 'utils/youtube_api_types';

const THUMBNAIL_WIDTH = 230;
// const THUMBNAIL_HEIGHT = THUMBNAIL_WIDTH * ( 9 / 16 );

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
    width: '100%'
  },
  thumbnailOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    padding: 0
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
  itemTitle: {
    marginTop: theme.spacing.unit,
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
  }
} );

interface Props extends WithStyles<typeof styles>
{
  playlistItem: YoutubePlaylistItem | null | undefined;
  showChannelTitle?: boolean;
}

class PlaylistItemThumbnail extends React.PureComponent<Props>
{
  public static defaultProps: Partial<Props> = {
    showChannelTitle: false
  };

  public render()
  {
    const { classes, playlistItem, showChannelTitle } = this.props;

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
            <IconButton
              className={classes.thumbnailOverlay}
              component={NoReferrerAnchor}
              href={`https://www.youtube.com/watch?v=${playlistItem.snippet.resourceId.videoId}`}
            >
              <PlayCircleFilledRoundedIcon className={classes.thumbnailOverlayIcon} />
            </IconButton>
          </div>
          <NoReferrerAnchor
            className={classes.linkText}
            href={`https://www.youtube.com/watch?v=${playlistItem.snippet.resourceId.videoId}`}
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
}

export default withStyles( styles )( PlaylistItemThumbnail );
