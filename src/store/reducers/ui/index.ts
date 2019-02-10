import { combineReducers } from 'redux';

import { State as MainState, reducer as mainReducer } from './main';

export interface State
{
  main: MainState;
}

export const reducer = combineReducers<State>( {
  main: mainReducer
} );
