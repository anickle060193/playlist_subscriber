import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { storage, StorageKey } from 'common/storage';

export interface State
{
  playlistSubscriptions: string[];
  hiddenPlaylistItems: { [ playlistItemId: string ]: boolean | undefined };
  watchedVideos: { [ videoId: string ]: boolean | undefined };
}

export const initialState: State = {
  playlistSubscriptions: storage.getDefault( StorageKey.User_PlaylistSubscriptions ),
  hiddenPlaylistItems: storage.getDefault( StorageKey.User_HiddenPlaylistItems ),
  watchedVideos: storage.getDefault( StorageKey.User_WatchedVideos ),
};

const createAction = actionCreatorFactory();
const createAsyncAction = asyncFactory<RootState>( createAction );

export const initializeUserData = createAsyncAction( 'INITIALIZE_USER_DATA', ( params: void, dispatch, getState ) =>
{
  storage.initialize( () =>
  {
    dispatch( updateUserData.action() );
  } );
} );

export const updateUserData = createAsyncAction( 'UPDATE_USER_DATA', ( params: void, dispatch, getState ): State =>
{
  return {
    playlistSubscriptions: storage.get( StorageKey.User_PlaylistSubscriptions ),
    hiddenPlaylistItems: storage.get( StorageKey.User_HiddenPlaylistItems ),
    watchedVideos: storage.get( StorageKey.User_WatchedVideos ),
  };
} );

export const clearUserData = createAsyncAction( 'CLEAR_USER_DATA', ( params: void, dispatch, getState ) =>
{
  storage.reset( StorageKey.User_PlaylistSubscriptions );
  storage.reset( StorageKey.User_HiddenPlaylistItems );
  storage.reset( StorageKey.User_WatchedVideos );
} );

export const setUserData = createAsyncAction( 'SET_USER_DATA', ( params: State, dispatch, getState ) =>
{
  storage.set( StorageKey.User_PlaylistSubscriptions, params.playlistSubscriptions );
  storage.set( StorageKey.User_HiddenPlaylistItems, params.hiddenPlaylistItems );
  storage.set( StorageKey.User_WatchedVideos, params.watchedVideos );
} );

export const setPlaylistSubscriptions = createAsyncAction( 'SET_PLAYLIST_SUBSCRIPTIONS', ( playlistSubscriptions: string[], dispatch, getState ) =>
{
  storage.set( StorageKey.User_PlaylistSubscriptions, playlistSubscriptions );
} );

export const hidePlaylistItem = createAsyncAction( 'HIDE_PLAYLIST_ITEM', ( playlistItemId: string, dispatch, getState ) =>
{
  let hiddenPlaylistItems: State[ 'hiddenPlaylistItems' ] = {
    ...storage.get( StorageKey.User_HiddenPlaylistItems ),
    [ playlistItemId ]: true,
  };
  storage.set( StorageKey.User_HiddenPlaylistItems, hiddenPlaylistItems );
  return hiddenPlaylistItems;
} );
export const unhidePlaylistItem = createAsyncAction( 'UNHIDE_PLAYLIST_ITEM', ( playlistItemId: string, dispatch, getState ) =>
{
  let hiddenPlaylistItems: State[ 'hiddenPlaylistItems' ] = {
    ...storage.get( StorageKey.User_HiddenPlaylistItems ),
    [ playlistItemId ]: false,
  };
  storage.set( StorageKey.User_HiddenPlaylistItems, hiddenPlaylistItems );
  return hiddenPlaylistItems;
} );
export const markVideoAsWatched = createAsyncAction( 'MARK_VIDEO_AS_WATCHED', ( videoId: string, dispatch, getState ) =>
{
  let watchedVideos: State[ 'watchedVideos' ] = {
    ...storage.get( StorageKey.User_WatchedVideos ),
    [ videoId ]: true,
  };
  storage.set( StorageKey.User_WatchedVideos, watchedVideos );
  return watchedVideos;
} );
export const unmarkVideoAsWatched = createAsyncAction( 'UNMARK_VIDEO_AS_WATCHED', ( videoId: string, dispatch, getState ) =>
{
  let watchedVideos: State[ 'watchedVideos' ] = {
    ...storage.get( StorageKey.User_WatchedVideos ),
    [ videoId ]: false,
  };
  storage.set( StorageKey.User_WatchedVideos, watchedVideos );
  return watchedVideos;
} );

export const reducer = reducerWithInitialState( initialState )
  .case( updateUserData.async.done, ( state, { result } ) => ( {
    ...state,
    ...result,
  } ) )
  .case( clearUserData.async.done, ( state ) => ( {
    ...initialState
  } ) )
  .case( setUserData.async.done, ( state, { params: userData } ) => ( {
    ...state,
    ...userData
  } ) )
  .case( setPlaylistSubscriptions.async.done, ( state, { params: subscriptions } ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) )
  .cases( [ hidePlaylistItem.async.done, unhidePlaylistItem.async.done ], ( state, { result: hiddenPlaylistItems } ) => ( {
    ...state,
    hiddenPlaylistItems: hiddenPlaylistItems,
  } ) )
  .cases( [ markVideoAsWatched.async.done, unmarkVideoAsWatched.async.done ], ( state, { result: watchedVideos } ) => ( {
    ...state,
    watchedVideos: watchedVideos,
  } ) );
