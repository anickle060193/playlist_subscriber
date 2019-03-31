import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

import { storage, StorageKey } from 'common/storage';

export interface State
{
  useDarkTheme: boolean;
  markVideoWatchedOnOpen: boolean;
}

export const initialState: State = {
  useDarkTheme: storage.getDefault( StorageKey.Setting_UseDarkTheme ),
  markVideoWatchedOnOpen: storage.getDefault( StorageKey.Setting_MarkVideoWatchedOnOpen ),
};

const createAction = actionCreatorFactory();
const createAsyncAction = asyncFactory<RootState>( createAction );

export const initializeSettings = createAsyncAction( 'INITIALIZE_SETTINGS', ( params: void, dispatch, getState ) =>
{
  storage.initialize( () =>
  {
    dispatch( updateSettings.action() );
  } );
} );

export const updateSettings = createAsyncAction( 'UPDATE_SETTINGS', ( params: void, dispatch, getState ): State =>
{
  return {
    useDarkTheme: storage.get( StorageKey.Setting_UseDarkTheme ),
    markVideoWatchedOnOpen: storage.get( StorageKey.Setting_MarkVideoWatchedOnOpen ),
  };
} );

export const clearSettingsData = createAsyncAction( 'CLEAR_SETTINGS_DATA', ( params: void, dispatch, getState ) =>
{
  storage.reset( StorageKey.Setting_UseDarkTheme );
  storage.reset( StorageKey.Setting_MarkVideoWatchedOnOpen );
} );

export const setSettingsData = createAsyncAction( 'SET_SETTINGS_DATA', ( params: State, dispatch, getState ) =>
{
  storage.set( StorageKey.Setting_UseDarkTheme, params.useDarkTheme );
  storage.set( StorageKey.Setting_MarkVideoWatchedOnOpen, params.markVideoWatchedOnOpen );
} );

export const setUseDarkTheme = createAsyncAction( 'SET_USE_DARK_THEME', ( useDarkTheme: boolean, dispatch, getState ) =>
{
  storage.set( StorageKey.Setting_UseDarkTheme, useDarkTheme );
} );
export const setMarkVideoWatchedOnOpen = createAsyncAction( 'SET_MARK_VIDEO_WATCHED_ON_OPEN', ( markVideoWatchedOnOpen: boolean, dispatch, getState ) =>
{
  storage.set( StorageKey.Setting_MarkVideoWatchedOnOpen, markVideoWatchedOnOpen );
} );

export const reducer = reducerWithInitialState( initialState )
  .case( updateSettings.async.done, ( state, { result } ) => ( {
    ...state,
    ...result,
  } ) )
  .case( clearSettingsData.async.done, ( state ) => ( {
    ...initialState
  } ) )
  .case( setSettingsData.async.done, ( state, { params: settingsData } ) => ( {
    ...state,
    ...settingsData
  } ) )
  .case( setUseDarkTheme.async.done, ( state, { params: useDarkTheme } ) => ( {
    ...state,
    useDarkTheme: useDarkTheme
  } ) )
  .case( setMarkVideoWatchedOnOpen.async.done, ( state, { params: markVideoWatchedOnOpen } ) => ( {
    ...state,
    markVideoWatchedOnOpen: markVideoWatchedOnOpen
  } ) );
