import React = require( 'react' );
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

import PlaylistItemThumbnail from '../PlaylistItemThumbnail';

import { YoutubePlaylistItem, compareYoutubePlaylistItems } from 'utils/youtube_api_types';
import classNames from 'classnames';

const styles = ( theme: Theme ) => createStyles( {
  playlistItem: {
    '&:not( :last-child )': {
      marginRight: theme.spacing.unit * 2
    }
  },
  rowMargin: {
    marginBottom: theme.spacing.unit * 2
  }
} );

interface Props extends WithStyles<typeof styles>
{
  playlistItems: YoutubePlaylistItem[];
  rowMargin?: boolean;
  showChannelTitle?: boolean;
}

class PlaylistItemsRow extends React.PureComponent<Props>
{
  public static defaultProps: Partial<Props> = {
    rowMargin: false,
    showChannelTitle: false
  };

  public render()
  {
    const { classes, playlistItems, rowMargin, showChannelTitle } = this.props;

    let items = [ ...playlistItems ].sort( compareYoutubePlaylistItems );

    return (
      items.map( ( playlistItem ) => (
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
          />
        </div>
      ) )
    );
  }
}

export default withStyles( styles )( PlaylistItemsRow );
