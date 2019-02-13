import { combineReducers } from 'redux';

import { State as UserState, reducer as userReducer } from './user';
import { State as SettingsState, reducer as settingsReducer } from './settings';

export interface State
{
  user: UserState;
  settings: SettingsState;
}

export const reducer = combineReducers<State>( {
  user: userReducer,
  settings: settingsReducer
} );
