import React = require( 'react' );
import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core';

import withPlaylists, { WithPlaylistsProps } from 'common/hoc/withPlaylists';

import PlaylistItemsRow from '../PlaylistItemsRow';

const styles = ( theme: Theme ) => createStyles( {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    '&:not( :last-child )': {
      borderBottom: '1px solid lightgray',
      marginBottom: theme.spacing.unit
    }
  }
} );

class SubscriptionsPage extends React.PureComponent<WithPlaylistsProps & WithStyles<typeof styles>>
{
  public render()
  {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.props.playlistSubscriptions.map( ( playlistId ) => (
          <div key={playlistId} className={classes.row}>
            <PlaylistItemsRow
              playlistId={playlistId}
              playlist={this.props.youtubePlaylists.items[ playlistId ]}
              playlistLoading={this.props.youtubePlaylists.loading[ playlistId ]}
              playlistError={this.props.youtubePlaylists.errors[ playlistId ]}
              playlistItems={this.props.youtubePlaylistItems.items[ playlistId ]}
              playlistItemsLoading={this.props.youtubePlaylistItems.loading[ playlistId ]}
              playlistItemsError={this.props.youtubePlaylistItems.errors[ playlistId ]}
            />
          </div>
        ) )}
      </div>
    );
  }
}

export default withPlaylists( withStyles( styles )( SubscriptionsPage ), true );
