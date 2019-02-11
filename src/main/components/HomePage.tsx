import React = require( 'react' );
import { connect } from 'react-redux';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';

import withPlaylists, { WithPlaylistsProps } from 'common/hoc/withPlaylists';

import PlaylistItemList from 'main/components/PlaylistItemList';

import { showMoreHomeItems } from 'store/reducers/ui/main';

import { YoutubePlaylistItem, compareYoutubePlaylistItems } from 'utils/youtube_api_types';

const styles = ( theme: Theme ) => createStyles( {
  root: {
    height: '100%',
    padding: theme.spacing.unit * 4,
    overflowY: 'auto',
    display: 'flex',
    flexFlow: 'row wrap'
  }
} );

interface PropsFromState
{
  homeVisibleItemCount: number;
  hiddenPlaylistItems: { [ playlistItemId: string ]: boolean | undefined };
}

interface PropsFromDispatch
{
  showMoreHomeItems: () => void;
}

type OwnProps = WithPlaylistsProps;

type Props = PropsFromState & PropsFromDispatch & OwnProps & WithStyles<typeof styles>;

class HomePage extends React.PureComponent<Props>
{
  public render()
  {
    const {
      classes,
      homeVisibleItemCount
    } = this.props;

    let playlistItemsList = this.getPlaylistSubscriptionItems()
      .sort( compareYoutubePlaylistItems )
      .slice( 0, homeVisibleItemCount );

    return (
      <div
        className={classes.root}
        onScroll={this.onScroll}
      >
        <PlaylistItemList
          playlistItems={playlistItemsList}
          rowMargin={true}
          showChannelTitle={true}
        />
      </div>
    );
  }

  private getPlaylistSubscriptionItems()
  {
    let playlistItemsList = this.props.playlistSubscriptions
      .map( ( playlistId ) => this.props.youtubePlaylistItems.items[ playlistId ] )
      .filter<YoutubePlaylistItem[]>( ( playlistItems ): playlistItems is YoutubePlaylistItem[] => Array.isArray( playlistItems ) );

    return new Array<YoutubePlaylistItem>()
      .concat( ...playlistItemsList )
      .filter( ( playlistItem ) => !this.props.hiddenPlaylistItems[ playlistItem.id ] );
  }

  private onScroll = ( e: React.UIEvent<HTMLElement> ) =>
  {
    if( e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.clientHeight
      && this.props.homeVisibleItemCount < this.getPlaylistSubscriptionItems().length )
    {
      this.props.showMoreHomeItems();
    }
  }
}

export default withPlaylists( withStyles( styles )( connect<PropsFromState, PropsFromDispatch, OwnProps, RootState>(
  ( state ) => ( {
    homeVisibleItemCount: state.ui.main.homeVisibleItemCount,
    hiddenPlaylistItems: state.user.hiddenPlaylistItems,
  } ),
  {
    showMoreHomeItems,
  }
)( HomePage ) ), true );
