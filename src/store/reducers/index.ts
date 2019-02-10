import { combineReducers } from 'redux';

import { State as UiState, reducer as uiReducer } from './ui';
import { State as UserState, reducer as userReducer } from './user';
import { State as YoutubeApiState, reducer as youtubeApiReducer } from './youtubeApi';

declare global
{
  interface RootState
  {
    ui: UiState;
    user: UserState;
    youtubeApi: YoutubeApiState;
  }
}

export default combineReducers<RootState>( {
  ui: uiReducer,
  user: userReducer,
  youtubeApi: youtubeApiReducer
} );
