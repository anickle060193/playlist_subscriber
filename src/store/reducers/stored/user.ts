import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface State
{
  playlistSubscriptions: string[];
  hiddenPlaylistItems: Set<string>;
}

export const initialState: State = {
  playlistSubscriptions: [],
  hiddenPlaylistItems: new Set<string>(),
};

const createAction = actionCreatorFactory();

export const clearUserData = createAction( 'CLEAR_USER_DATA' );
export const setUserData = createAction<State>( 'SET_USER_DATA' );
export const setPlaylistSubscriptions = createAction<string[]>( 'SET_PLAYLIST_SUBSCRIPTIONS' );
export const hidePlaylistItem = createAction<string>( 'HIDE_PLAYLIST_ITEM' );
export const unhidePlaylistItem = createAction<string>( 'UNHIDE_PLAYLIST_ITEM' );

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
  .case( hidePlaylistItem, ( state, playlistItemId ) =>
  {
    let hiddenPlaylistItems = new Set( state.hiddenPlaylistItems );
    hiddenPlaylistItems.add( playlistItemId );
    return {
      ...state,
      hiddenPlaylistItems: hiddenPlaylistItems
    };
  } )
  .case( unhidePlaylistItem, ( state, playlistItemId ) =>
  {
    let hiddenPlaylistItems = new Set( state.hiddenPlaylistItems );
    hiddenPlaylistItems.delete( playlistItemId );
    return {
      ...state,
      hiddenPlaylistItems: hiddenPlaylistItems
    };
  } );
