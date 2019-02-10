import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

const DEFAULT_HOME_VISIBLE_ITEM_COUNT = 20;
export const DEFAULT_PLAYLIST_VISIBLE_ITEM_COUNT = 8;

const HOME_VISIBLE_ITEM_COUNT_INCREASE = 10;
const PLAYLIST_VISIBLE_ITEM_COUNT_INCREASE = 8;

export interface State
{
  homeVisibleItemCount: number;
  playlistsVisibleItemCount: { [ playlistId: string ]: number | undefined };
}

const initialState: State = {
  homeVisibleItemCount: DEFAULT_HOME_VISIBLE_ITEM_COUNT,
  playlistsVisibleItemCount: {}
};

const createAction = actionCreatorFactory();

export const showMoreHomeItems = createAction( 'SHOW_MORE_HOME_ITEMS' );
export const showMorePlaylistItems = createAction<string>( 'SHOW_MORE_PLAYLIST_ITEMS' );

export const reducer = reducerWithInitialState( initialState )
  .case( showMoreHomeItems, ( state ) => ( {
    ...state,
    homeVisibleItemCount: state.homeVisibleItemCount + HOME_VISIBLE_ITEM_COUNT_INCREASE
  } ) )
  .case( showMorePlaylistItems, ( state, playlistId ) => ( {
    ...state,
    playlistsVisibleItemCount: {
      ...state.playlistsVisibleItemCount,
      [ playlistId ]: ( state.playlistsVisibleItemCount[ playlistId ] || DEFAULT_PLAYLIST_VISIBLE_ITEM_COUNT ) + PLAYLIST_VISIBLE_ITEM_COUNT_INCREASE
    }
  } ) );
