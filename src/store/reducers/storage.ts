import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { getSyncItem, setSyncItem } from 'utils/storage';

const STORAGE_PLAYLIST_SUBSCRIPTIONS_KEY = 'storage::playlistSubscriptions';

export interface State
{
  playlistSubscriptions: Set<string>;
}

const initialState: State = {
  playlistSubscriptions: new Set()
};

const createAction = actionCreatorFactory();
const createAsyncAction = asyncFactory<RootState>( createAction );

export const loadPlaylistSubscriptions = createAsyncAction( 'LOAD_PLAYLIST_SUBSCRIPTIONS', async ( params, dispatch, getState ) =>
{
  let playlists = await getSyncItem<string[]>( STORAGE_PLAYLIST_SUBSCRIPTIONS_KEY );
  if( typeof playlists === 'undefined' )
  {
    let { storage: { playlistSubscriptions } } = getState();
    return playlistSubscriptions;
  }
  else if( Array.isArray( playlists )
    && playlists.every( ( playlist ) => typeof playlist === 'string' ) )
  {
    return new Set( playlists );
  }
  else
  {
    throw new Error( 'Unexpected playlist subscriptions format: \n' + JSON.stringify( playlists, null, 2 ) );
  }
} );

export const setPlaylistSubscriptions = createAsyncAction( 'SET_PLAYLIST_SUBSCRIPTIONS', ( playlistSubscriptions: Set<string> ) =>
{
  return setSyncItem( STORAGE_PLAYLIST_SUBSCRIPTIONS_KEY, Array.from( playlistSubscriptions ) );
} );

export const reducer = reducerWithInitialState( initialState )
  .case( loadPlaylistSubscriptions.async.done, ( state, { result: subscriptions } ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) )
  .case( setPlaylistSubscriptions.async.started, ( state, subscriptions ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) );
