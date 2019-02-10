import React = require( 'react' );
import { connect } from 'react-redux';
import { Theme, createStyles, withStyles, WithStyles } from '@material-ui/core';

import withPlaylists, { WithPlaylistsProps } from 'common/hoc/withPlaylists';

import PlaylistItemsRow from '../PlaylistItemsRow';

import { showMorePlaylistItems, DEFAULT_PLAYLIST_VISIBLE_ITEM_COUNT } from 'store/reducers/ui/main';

const styles = ( theme: Theme ) => createStyles( {
  root: {
    height: '100%',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 4
  },
  row: {
    '&:not( :last-child )': {
      paddingBottom: theme.spacing.unit,
      borderBottom: '1px solid lightgray',
      marginBottom: theme.spacing.unit * 2
    }
  }
} );

interface PropsFromState
{
  playlistsVisibleItemCount: { [ playlistId: string ]: number | undefined };
}

interface PropsFromDispatch
{
  showMorePlaylistItems: ( playlistId: string ) => void;
}

type OwnProps = WithPlaylistsProps;

type Props = PropsFromState & PropsFromDispatch & OwnProps & WithStyles<typeof styles>;

class SubscriptionsPage extends React.PureComponent<Props>
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
              playlistVisibleItemCount={this.props.playlistsVisibleItemCount[ playlistId ] || DEFAULT_PLAYLIST_VISIBLE_ITEM_COUNT}
              showMorePlaylistItems={this.props.showMorePlaylistItems}
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

export default withPlaylists( withStyles( styles )( connect<PropsFromState, PropsFromDispatch, OwnProps, RootState>(
  ( state ) => ( {
    playlistsVisibleItemCount: state.ui.main.playlistsVisibleItemCount
  } ),
  {
    showMorePlaylistItems: showMorePlaylistItems
  }
)( SubscriptionsPage ) ), true );
