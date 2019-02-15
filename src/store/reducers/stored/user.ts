import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { addItemToStateSet, removeItemFromStateSet } from 'utils';

export interface State
{
  playlistSubscriptions: string[];
  hiddenPlaylistItems: Set<string>;
  watchedVideos: Set<string>;
}

export const initialState: State = {
  playlistSubscriptions: [],
  hiddenPlaylistItems: new Set<string>(),
  watchedVideos: new Set<string>()
};

const createAction = actionCreatorFactory();

export const clearUserData = createAction( 'CLEAR_USER_DATA' );
export const setUserData = createAction<State>( 'SET_USER_DATA' );
export const setPlaylistSubscriptions = createAction<string[]>( 'SET_PLAYLIST_SUBSCRIPTIONS' );
export const hidePlaylistItem = createAction<string>( 'HIDE_PLAYLIST_ITEM' );
export const unhidePlaylistItem = createAction<string>( 'UNHIDE_PLAYLIST_ITEM' );
export const markVideoAsWatched = createAction<string>( 'MARK_VIDEO_AS_WATCHED' );
export const unmarkVideoAsWatched = createAction<string>( 'UNMARK_VIDEO_AS_WATCHED' );

export const reducer = reducerWithInitialState( initialState )
  .case( clearUserData, ( state ) => ( {
    ...initialState
  } ) )
  .case( setUserData, ( state, userData ) => ( {
    ...state,
    ...userData
  } ) )
  .case( setPlaylistSubscriptions, ( state, subscriptions ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) )
  .case( hidePlaylistItem, ( state, playlistItemId ) => ( {
    ...state,
    hiddenPlaylistItems: addItemToStateSet( state.hiddenPlaylistItems, playlistItemId )
  } ) )
  .case( unhidePlaylistItem, ( state, playlistItemId ) => ( {
    ...state,
    hiddenPlaylistItems: removeItemFromStateSet( state.hiddenPlaylistItems, playlistItemId )
  } ) )
  .case( markVideoAsWatched, ( state, videoId ) => ( {
    ...state,
    watchedVideos: addItemToStateSet( state.watchedVideos, videoId )
  } ) )
  .case( unmarkVideoAsWatched, ( state, videoId ) => ( {
    ...state,
    watchedVideos: removeItemFromStateSet( state.watchedVideos, videoId )
  } ) );
