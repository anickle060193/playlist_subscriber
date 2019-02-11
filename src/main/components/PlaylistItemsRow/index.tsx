import React = require( 'react' );
import classNames from 'classnames';
import { Theme, createStyles, WithStyles, withStyles, Typography, Fab, Tooltip } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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
  titles: {
    paddingBottom: theme.spacing.unit
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
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  loadMoreFabContainer: {
    alignSelf: 'center',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 2
  },
  hidden: {
    display: 'none'
  }
} );

interface Props extends WithStyles<typeof styles>
{
  playlistId: string;
  playlistVisibleItemCount: number;
  showMorePlaylistItems: ( playlistId: string ) => void;
  hiddenPlaylistItems: { [ playlistItemId: string ]: boolean | undefined };
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
      playlistVisibleItemCount,
      hiddenPlaylistItems,
      playlist, playlistError,
      playlistItems, playlistItemsError
    } = this.props;

    let items = playlistItems && [ ...playlistItems ]
      .sort( compareYoutubePlaylistItems )
      .filter( ( playlistItem ) => !hiddenPlaylistItems[ playlistItem.id ] );

    let error = playlistError && playlistError.message || playlistItemsError && playlistItemsError.message;

    return (
      <div className={classes.root}>
        <span className={classes.titles}>
          {playlist ?
            (
              <>
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
              </>
            ) :
            (
              <Typography variant="h6">
                {playlistId}
              </Typography>
            )}
        </span>

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
              playlistItems={items.slice( 0, playlistVisibleItemCount )}
            />
            <div
              className={classNames( {
                [ classes.loadMoreFabContainer ]: true,
                [ classes.hidden ]: items.length <= playlistVisibleItemCount
              } )}
            >
              <Tooltip
                title="Show More"
                enterDelay={300}
                placement="left"
              >
                <Fab
                  color="default"
                  size="small"
                  onClick={this.onShowMoreClick}
                >
                  <KeyboardArrowRightIcon />
                </Fab>
              </Tooltip>
            </div>
          </div>
        )}
      </div>
    );
  }

  private onShowMoreClick = () =>
  {
    this.props.showMorePlaylistItems( this.props.playlistId );
  }
}

export default withStyles( styles )( PlaylistItemsRow );
