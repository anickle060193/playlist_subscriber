import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import
{
  MappedResource,
  Resource,
  retrieveMappedResourceStartedHandler,
  retrieveMappedResourceDoneHandler,
  retrieveMappedResourceFailedHandler,
  retrieveResourceStartedHandler,
  retrieveResourceDoneHandler,
  retrieveResourceFailedHandler
} from 'utils/resource';
import { YoutubePlaylist, YoutubePlaylistItem } from 'utils/youtube_api_types';
import { fetchYoutubePlaylists, fetchYoutubePlaylistItems } from 'utils/youtube_api';

export interface State
{
  playlists: MappedResource<YoutubePlaylist>;
  playlistItems: MappedResource<YoutubePlaylistItem[]>;
  token: Resource<string>;
}

const initialState: State = {
  playlists: {
    items: {},
    loading: {},
    errors: {}
  },
  playlistItems: {
    items: {},
    loading: {},
    errors: {}
  },
  token: {
    item: null,
    loading: false,
    error: null
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

export const retrieveYoutubeAuthToken = createAsyncAction( 'RETRIEVE_YOUTUBE_AUTH_TOKEN', ( interactive: boolean, dispatch, getState ) =>
{
  return new Promise<string>( ( resolve, reject ) =>
  {
    chrome.identity.getAuthToken( {
      interactive: interactive,
      scopes: [ 'https://www.googleapis.com/auth/youtube.readonly' ]
    }, ( token ) =>
      {
        if( chrome.runtime.lastError )
        {
          reject( chrome.runtime.lastError );
        }
        else
        {
          resolve( token );
        }
      } );
  } );
} );

export const clearYoutubeAuthToken = createAsyncAction( 'CLEAR_YOUTUBE_AUTH_TOKEN', ( token: string ) =>
{
  return new Promise<null>( ( resolve, reject ) =>
  {
    chrome.identity.removeCachedAuthToken( { token: token }, () =>
    {
      if( chrome.runtime.lastError )
      {
        reject( chrome.runtime.lastError );
      }
      else
      {
        resolve( null );
      }
    } );
  } );
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
        errors: {
          ...state.playlists.errors
        }
      }
    };

    for( let playlistId of playlistIds )
    {
      if( !state.playlists.items[ playlistId ] )
      {
        newState.playlists.loading[ playlistId ] = true;
        newState.playlists.errors[ playlistId ] = null;
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
      errors: {
        ...state.playlists.errors,
        [ playlistId ]: playlist ? null : new Error( 'Could not find playlist ' + playlistId )
      }
    }
  } ) )
  .case( retrieveYoutubePlaylistItems.async.started, ( state, playlistId ) => ( {
    ...state,
    playlistItems: retrieveMappedResourceStartedHandler( state.playlistItems, playlistId )
  } ) )
  .case( retrieveYoutubePlaylistItems.async.done, ( state, { params: playlistId, result: playlistItems } ) => ( {
    ...state,
    playlistItems: retrieveMappedResourceDoneHandler( state.playlistItems, playlistId, playlistItems )
  } ) )
  .case( retrieveYoutubePlaylistItems.async.failed, ( state, { params: playlistId, error } ) => ( {
    ...state,
    playlistItems: retrieveMappedResourceFailedHandler( state.playlistItems, playlistId, error )
  } ) )
  .case( retrieveYoutubeAuthToken.async.started, ( state ) => ( {
    ...state,
    token: retrieveResourceStartedHandler( state.token )
  } ) )
  .case( retrieveYoutubeAuthToken.async.done, ( state, { result: token } ) => ( {
    ...state,
    token: retrieveResourceDoneHandler( state.token, token )
  } ) )
  .case( retrieveYoutubeAuthToken.async.failed, ( state, { error } ) => ( {
    ...state,
    token: retrieveResourceFailedHandler( state.token, error )
  } ) )
  .case( clearYoutubeAuthToken.async.started, ( state ) => ( {
    ...state,
    token: retrieveResourceStartedHandler( state.token )
  } ) )
  .case( clearYoutubeAuthToken.async.done, ( state, { result: token } ) => ( {
    ...state,
    token: retrieveResourceDoneHandler( state.token, token )
  } ) )
  .case( clearYoutubeAuthToken.async.failed, ( state, { error } ) => ( {
    ...state,
    token: retrieveResourceFailedHandler( state.token, error )
  } ) );
