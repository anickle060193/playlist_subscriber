import React = require( 'react' );

import withPlaylists, { WithPlaylistsProps } from 'common/hoc/withPlaylists';

class SubscriptionsPage extends React.PureComponent<WithPlaylistsProps>
{
  public render()
  {
    return (
      <div>
        Playlist Subscriptions: {this.props.playlistSubscriptions.size}
        <ul>
          {Array.from( this.props.playlistSubscriptions ).map( ( playlistId ) =>
          {
            const playlist = this.props.youtubePlaylists.items[ playlistId ];
            const playlistLoading = this.props.youtubePlaylists.loading[ playlistId ];
            const playlistError = this.props.youtubePlaylists.error[ playlistId ];
            const playlistItems = this.props.youtubePlaylistItems.items[ playlistId ];
            const playlistItemsLoading = this.props.youtubePlaylistItems.loading[ playlistId ];
            const playlistItemsError = this.props.youtubePlaylistItems.error[ playlistId ];

            return (
              <li key={playlistId}>
                {playlist ? playlist.snippet.title : playlistId}
                {playlistLoading && 'Playlist loading...'}
                {playlistError && (
                  <pre>
                    {JSON.stringify( playlistError, null, 2 )}
                  </pre>
                )}
                {playlistItemsLoading && 'Playlist items loading...'}
                {playlistItemsError && (
                  <pre>
                    {JSON.stringify( playlistItemsError, null, 2 )}
                  </pre>
                )}
                {playlistItems && (
                  <ul>
                    {playlistItems.map( ( playlistItem ) => (
                      <li key={playlistItem.id}>
                        {playlistItem.snippet.title}
                      </li>
                    ) )}
                  </ul>
                )}
              </li>
            );
          } )}
        </ul>
      </div>
    );
  }
}

export default withPlaylists( SubscriptionsPage, true );
