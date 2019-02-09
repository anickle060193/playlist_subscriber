import React = require( 'react' );
import classNames from 'classnames';
import { Theme, createStyles, WithStyles, withStyles, Typography } from '@material-ui/core';

import NoReferrerAnchor from '../NoReferrerAnchor';
import PlaylistItemList from '../PlaylistItemList';

import { YoutubePlaylist, YoutubePlaylistItem, compareYoutubePlaylistItems } from 'utils/youtube_api_types';

const styles = ( theme: Theme ) => createStyles( {
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    marginBottom: theme.spacing.unit * 2
  },
  titleLink: {
    display: 'inline-block',
    color: 'inherit',
    textDecoration: 'none'
  },
  playlistTitle: {
  },
  channelSubtitle: {
    marginLeft: theme.spacing.unit
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  }
} );

interface Props extends WithStyles<typeof styles>
{
  playlistId: string;
  playlist: YoutubePlaylist | null | undefined;
  playlistLoading: boolean | undefined;
  playlistError: Error | null | undefined;
  playlistItems: YoutubePlaylistItem[] | null | undefined;
  playlistItemsLoading: boolean | undefined;
  playlistItemsError: Error | null | undefined;
}

class PlaylistItemsRow extends React.PureComponent<Props>
{
  public render()
  {
    const {
      classes,
      playlistId,
      playlist, playlistError,
      playlistItems, playlistItemsError
    } = this.props;

    let items = playlistItems && [ ...playlistItems ].sort( compareYoutubePlaylistItems );

    let error = playlistError && playlistError.message || playlistItemsError && playlistItemsError.message;

    return (
      <div className={classes.root}>
        {playlist ?
          (
            <span>
              <NoReferrerAnchor
                className={classNames( classes.titleLink, classes.playlistTitle )}
                href={`https://www.youtube.com/playlist?list=${playlistId}`}
              >
                <Typography variant="h6">
                  {playlist.snippet.title}
                </Typography>
              </NoReferrerAnchor>
              <NoReferrerAnchor
                className={classNames( classes.titleLink, classes.channelSubtitle )}
                href={`https://www.youtube.com/channel/${playlist.snippet.channelId}`}
              >
                <Typography variant="subtitle1">
                  {playlist.snippet.channelTitle}
                </Typography>
              </NoReferrerAnchor>
            </span>
          ) :
          (
            <Typography variant="h6">
              {playlistId}
            </Typography>
          )}

        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}

        {items && (
          <div
            className={classes.row}
          >
            <PlaylistItemList
              playlistItems={items}
            />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles( styles )( PlaylistItemsRow );
