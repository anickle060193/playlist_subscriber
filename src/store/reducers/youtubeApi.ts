import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { MappedResource, mappedResourceRetrieveFailed, mappedResourceRetrieveDone, mappedResourceRetrieveStarted } from 'utils/resource';
import { YoutubePlaylist, YoutubePlaylistItem } from 'utils/youtube_api_types';
import { fetchYoutubePlaylists, fetchYoutubePlaylistItems } from 'utils/youtube_api';

export interface State
{
  playlists: MappedResource<YoutubePlaylist>;
  playlistItems: MappedResource<YoutubePlaylistItem[]>;
}

const initialState: State = {
  playlists: {
    items: {},
    loading: {},
    error: {}
  },
  playlistItems: {
    items: {},
    loading: {},
    error: {}
  }
};

const createAction = actionCreatorFactory();
const createAsyncAction = asyncFactory<RootState>( createAction );

const setYoutubePlaylistResults = createAction<{ playlistId: string, playlist: YoutubePlaylist | null | undefined }>( 'SET_YOUTUBE_PLAYLIST_RESULTS' );

export const retrieveYoutubePlaylists = createAsyncAction( 'RETRIEVE_YOUTUBE_PLAYLISTS', async ( playlistIds: string[], dispatch, getState ) =>
{
  let { youtubeApi: { playlists } } = getState();

  let unretrievedPlaylistIds = playlistIds.filter( ( playlistId ) => !playlists.items[ playlistId ] );

  let youtubePlaylists = await fetchYoutubePlaylists( unretrievedPlaylistIds );
  let youtubePlaylistsMap: { [ playlistId: string ]: YoutubePlaylist | undefined } = {};
  for( let playlist of youtubePlaylists )
  {
    youtubePlaylistsMap[ playlist.id ] = playlist;
  }

  for( let playlistId of playlistIds )
  {
    dispatch( setYoutubePlaylistResults( {
      playlistId: playlistId,
      playlist: youtubePlaylistsMap[ playlistId ] || playlists.items[ playlistId ]
    } ) );
  }
} );

export const retrieveYoutubePlaylistItems = createAsyncAction( 'RETRIEVE_YOUTUBE_PLAYLIST_ITEMS', async ( playlistId: string, dispatch, getState ) =>
{
  let { youtubeApi: { playlistItems } } = getState();

  const result = playlistItems.items[ playlistId ];
  if( result )
  {
    return result;
  }

  return fetchYoutubePlaylistItems( playlistId );
} );

export const reducer = reducerWithInitialState( initialState )
  .case( retrieveYoutubePlaylists.async.started, ( state, playlistIds ) =>
  {
    let newState: State = {
      ...state,
      playlists: {
        items: {
          ...state.playlists.items
        },
        loading: {
          ...state.playlists.loading
        },
        error: {
          ...state.playlists.error
        }
      }
    };

    for( let playlistId of playlistIds )
    {
      if( !state.playlists.items[ playlistId ] )
      {
        newState.playlists.loading[ playlistId ] = true;
        newState.playlists.error[ playlistId ] = null;
      }
    }

    return newState;
  } )
  .case( setYoutubePlaylistResults, ( state, { playlistId, playlist } ) => ( {
    ...state,
    playlists: {
      items: {
        ...state.playlists.items,
        [ playlistId ]: playlist
      },
      loading: {
        ...state.playlists.loading,
        [ playlistId ]: false
      },
      error: {
        ...state.playlists.error,
        [ playlistId ]: playlist ? null : new Error( 'Could not find playlist ' + playlistId )
      }
    }
  } ) )
  .case( retrieveYoutubePlaylistItems.async.started, ( state, playlistId ) => ( {
    ...state,
    playlistItems: mappedResourceRetrieveStarted( state.playlistItems, playlistId )
  } ) )
  .case( retrieveYoutubePlaylistItems.async.done, ( state, { params: playlistId, result: playlistItems } ) => ( {
    ...state,
    playlistItems: mappedResourceRetrieveDone( state.playlistItems, playlistId, playlistItems )
  } ) )
  .case( retrieveYoutubePlaylistItems.async.failed, ( state, { params: playlistId, error } ) => ( {
    ...state,
    playlistItems: mappedResourceRetrieveFailed( state.playlistItems, playlistId, error )
  } ) );
