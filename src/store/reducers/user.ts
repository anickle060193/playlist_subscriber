import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface State
{
  playlistSubscriptions: string[];
  hiddenPlaylistItems: { [ playlistItemId: string ]: boolean | undefined };
}

export const initialState: State = {
  playlistSubscriptions: [],
  hiddenPlaylistItems: {},
};

const createAction = actionCreatorFactory();

export const clearUserData = createAction( 'CLEAR_USER_DATA' );
export const setUserData = createAction<State>( 'SET_USER_DATA' );
export const setPlaylistSubscriptions = createAction<string[]>( 'SET_PLAYLIST_SUBSCRIPTIONS' );
export const setPlaylistItemHidden = createAction<{ playlistItemId: string, hidden: boolean }>( 'SET_PLAYLIST_ITEM_HIDDEN' );

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
  .case( setPlaylistItemHidden, ( state, { playlistItemId, hidden } ) => ( {
    ...state,
    hiddenPlaylistItems: {
      ...state.hiddenPlaylistItems,
      [ playlistItemId ]: hidden
    }
  } ) );
