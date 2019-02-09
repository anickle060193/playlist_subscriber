import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { getSyncItem, setSyncItem } from 'utils/storage';
import { validatePlaylistSubscriptions } from 'utils/validation';

const PLAYLIST_SUBSCRIPTIONS_KEY = 'user::playlistSubscriptions';

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
  let data = await getSyncItem<string[]>( PLAYLIST_SUBSCRIPTIONS_KEY );
  if( typeof data === 'undefined' )
  {
    let { user: { playlistSubscriptions } } = getState();
    return playlistSubscriptions;
  }

  let playlists = validatePlaylistSubscriptions( data );

  return new Set( playlists );
} );

export const setPlaylistSubscriptions = createAsyncAction( 'SET_PLAYLIST_SUBSCRIPTIONS', ( playlistSubscriptions: Set<string> ) =>
{
  return setSyncItem( PLAYLIST_SUBSCRIPTIONS_KEY, Array.from( playlistSubscriptions ) );
} );

export const reducer = reducerWithInitialState( initialState )
  .case( loadPlaylistSubscriptions.async.done, ( state, { result: subscriptions } ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) )
  .case( setPlaylistSubscriptions.async.done, ( state, { params: subscriptions } ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) );
