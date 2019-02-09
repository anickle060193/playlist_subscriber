import React = require( 'react' );

import withPlaylists, { WithPlaylistsProps } from 'common/hoc/withPlaylists';
import PlaylistItemsRow from '../PlaylistItemsRow';

class SubscriptionsPage extends React.PureComponent<WithPlaylistsProps>
{
  public render()
  {
    return (
      <div>
        {Array.from( this.props.playlistSubscriptions ).map( ( playlistId ) => (
          <PlaylistItemsRow
            key={playlistId}
            playlistId={playlistId}
            playlist={this.props.youtubePlaylists.items[ playlistId ]}
            playlistLoading={this.props.youtubePlaylists.loading[ playlistId ]}
            playlistError={this.props.youtubePlaylists.error[ playlistId ]}
            playlistItems={this.props.youtubePlaylistItems.items[ playlistId ]}
            playlistItemsLoading={this.props.youtubePlaylistItems.loading[ playlistId ]}
            playlistItemsError={this.props.youtubePlaylistItems.error[ playlistId ]}
          />
        ) )}
      </div>
    );
  }
}

export default withPlaylists( SubscriptionsPage, true );
