import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface State
{
  useDarkTheme: boolean;
}

export const initialState: State = {
  useDarkTheme: false
};

const createAction = actionCreatorFactory();

export const clearSettingsData = createAction( 'CLEAR_SETTINGS_DATA' );
export const setSettingsData = createAction<State>( 'SET_SETTINGS_DATA' );

export const setUseDarkTheme = createAction<boolean>( 'SET_USE_DARK_THEME' );

export const reducer = reducerWithInitialState( initialState )
  .case( clearSettingsData, ( state ) => ( {
    ...initialState
  } ) )
  .case( setSettingsData, ( state, settingsData ) => ( {
    ...state,
    ...settingsData
  } ) )
  .case( setUseDarkTheme, ( state, useDarkTheme ) => ( {
    ...state,
    useDarkTheme: useDarkTheme
  } ) );
