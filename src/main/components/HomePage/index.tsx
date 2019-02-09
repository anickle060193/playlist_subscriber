import React = require( 'react' );
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

import withPlaylists, { WithPlaylistsProps } from 'common/hoc/withPlaylists';

import PlaylistItemList from '../PlaylistItemList';

import { YoutubePlaylistItem, compareYoutubePlaylistItems } from 'utils/youtube_api_types';

const styles = ( theme: Theme ) => createStyles( {
  root: {
    display: 'flex',
    flexFlow: 'row wrap'
  }
} );

class HomePage extends React.PureComponent<WithPlaylistsProps & WithStyles<typeof styles>>
{
  public render()
  {
    const {
      classes,
      youtubePlaylistItems
    } = this.props;

    let playlistItemsList = Object.values( youtubePlaylistItems.items )
      .filter<YoutubePlaylistItem[]>( ( playlistItems ): playlistItems is YoutubePlaylistItem[] => Array.isArray( playlistItems ) );

    let items = new Array<YoutubePlaylistItem>().concat( ...playlistItemsList ).sort( compareYoutubePlaylistItems );

    return (
      <div className={classes.root}>
        <PlaylistItemList
          playlistItems={items}
          rowMargin={true}
          showChannelTitle={true}
        />
      </div>
    );
  }
}

export default withPlaylists( withStyles( styles )( HomePage ), true );
