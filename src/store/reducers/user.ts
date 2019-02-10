import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { getSyncItem, setSyncItem, clearSync } from 'utils/storage';
import { validatePlaylistSubscriptions } from 'utils/validation';

const PLAYLIST_SUBSCRIPTIONS_KEY = 'user::playlistSubscriptions';

export interface State
{
  playlistSubscriptions: string[];
}

const initialState: State = {
  playlistSubscriptions: []
};

const createAction = actionCreatorFactory();
const createAsyncAction = asyncFactory<RootState>( createAction );

export const clearUserData = createAsyncAction( 'CLEAR_USER_DATA', () =>
{
  return clearSync();
} );

export const setUserData = createAsyncAction( 'SET_USER_DATA', async ( userData: State, dispatch, getState ) =>
{
  await dispatch( setPlaylistSubscriptions.action( userData.playlistSubscriptions ) );
} );

export const loadPlaylistSubscriptions = createAsyncAction( 'LOAD_PLAYLIST_SUBSCRIPTIONS', async ( params, dispatch, getState ) =>
{
  let data = await getSyncItem<string[]>( PLAYLIST_SUBSCRIPTIONS_KEY );
  if( typeof data === 'undefined' )
  {
    let { user: { playlistSubscriptions } } = getState();
    return playlistSubscriptions;
  }

  let playlists = validatePlaylistSubscriptions( data );

  return playlists;
} );

export const setPlaylistSubscriptions = createAsyncAction( 'SET_PLAYLIST_SUBSCRIPTIONS', ( playlistSubscriptions: string[] ) =>
{
  return setSyncItem( PLAYLIST_SUBSCRIPTIONS_KEY, playlistSubscriptions );
} );

export const reducer = reducerWithInitialState( initialState )
  .case( clearUserData.async.done, ( state ) => ( {
    ...state,
    ...initialState
  } ) )
  .case( loadPlaylistSubscriptions.async.done, ( state, { result: subscriptions } ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) )
  .case( setPlaylistSubscriptions.async.done, ( state, { params: subscriptions } ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) );
