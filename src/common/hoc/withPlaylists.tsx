import React from 'react';
import { connect } from 'react-redux';
import { thunkToAction } from 'typescript-fsa-redux-thunk';

import withPlaylistSubscriptions, { WithPlaylistSubscriptionsProps } from './withPlaylistSubscriptions';

import { retrieveYoutubePlaylists, retrieveYoutubePlaylistItems } from 'store/reducers/youtubeApi';

import { YoutubePlaylist, YoutubePlaylistItem } from 'utils/youtube_api_types';
import { MappedResource, mappedResourceNeedsLoad } from 'utils/resource';

interface PropsFromState
{
  youtubePlaylists: MappedResource<YoutubePlaylist>;
  youtubePlaylistItems: MappedResource<YoutubePlaylistItem[]>;
}

interface PropsFromDispatch
{
  retrieveYoutubePlaylists: ( playlistIds: string[] ) => Promise<void>;
  retrieveYoutubePlaylistItems: ( playlistId: string ) => Promise<YoutubePlaylistItem[]>;
}

// tslint:disable-next-line:no-empty-interface
interface OwnProps extends WithPlaylistSubscriptionsProps { }

export interface WithPlaylistsProps extends PropsFromState, PropsFromDispatch, OwnProps { }

export default function withPlaylists( WrappedComponent: React.ComponentType<WithPlaylistsProps>, includePlaylistItems: boolean = false ): React.ComponentType<{}>
{
  class WithPlaylistsComponent extends React.PureComponent<WithPlaylistsProps>
  {
    public componentDidMount()
    {
      this.onUpdate();
    }

    public componentDidUpdate()
    {
      this.onUpdate();
    }

    public render()
    {
      return (
        <WrappedComponent {...this.props} />
      );
    }

    private async onUpdate()
    {
      if( this.props.playlistSubscriptions.length > 0 )
      {
        let promises: Array<Promise<void>> = [];

        if( includePlaylistItems )
        {
          this.props.playlistSubscriptions
            .filter( ( playlistId ) => mappedResourceNeedsLoad( this.props.youtubePlaylistItems, playlistId ) )
            .forEach( ( playlistId ) =>
            {
              promises.push( this.doRetrieveYoutubePlaylistItems( playlistId ) );
            } );
        }

        let playlistsNeedRetrieved = this.props.playlistSubscriptions
          .filter( ( playlistId ) => mappedResourceNeedsLoad( this.props.youtubePlaylists, playlistId ) );
        if( playlistsNeedRetrieved.length > 0 )
        {
          promises.push( this.doRetrieveYoutubePlaylists( playlistsNeedRetrieved ) );
        }

        await Promise.all( promises );
      }
    }

    private async doRetrieveYoutubePlaylists( playlistIds: string[] )
    {
      try
      {
        await this.props.retrieveYoutubePlaylists( playlistIds );
      }
      catch( e )
      {
        console.error( 'Failed to retrieve youtube playlists:', playlistIds, e );
      }
    }

    private async doRetrieveYoutubePlaylistItems( playlistId: string )
    {
      try
      {
        await this.props.retrieveYoutubePlaylistItems( playlistId );
      }
      catch( e )
      {
        console.error( 'Failed to retrieve playlist items for playlist:', playlistId, e );
      }
    }
  }

  return withPlaylistSubscriptions( connect<PropsFromState, PropsFromDispatch, OwnProps, RootState>(
    ( state ) => ( {
      youtubePlaylists: state.youtubeApi.playlists,
      youtubePlaylistItems: state.youtubeApi.playlistItems
    } ),
    {
      retrieveYoutubePlaylists: thunkToAction( retrieveYoutubePlaylists.action ),
      retrieveYoutubePlaylistItems: thunkToAction( retrieveYoutubePlaylistItems.action ),
    }
  )( WithPlaylistsComponent ) );
}
