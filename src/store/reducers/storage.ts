import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface State
{
  playlistSubscriptions: Set<string>;
}

const initialState: State = {
  playlistSubscriptions: new Set()
};

const createAction = actionCreatorFactory();

export const setPlaylistSubscriptions = createAction<Set<string>>( 'SET_PLAYLIST_SUBSCRIPTIONS' );

export const reducer = reducerWithInitialState( initialState )
  .case( setPlaylistSubscriptions, ( state, subscriptions ) => ( {
    ...state,
    playlistSubscriptions: subscriptions
  } ) );
