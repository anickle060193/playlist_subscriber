import { combineReducers } from 'redux';

import { State as UiState, reducer as uiReducer } from './ui';
import { State as StoredState, reducer as storedReducer } from './stored';
import { State as YoutubeApiState, reducer as youtubeApiReducer } from './youtubeApi';

declare global
{
  interface RootState
  {
    ui: UiState;
    stored: StoredState;
    youtubeApi: YoutubeApiState;
  }
}

export default combineReducers<RootState>( {
  ui: uiReducer,
  stored: storedReducer,
  youtubeApi: youtubeApiReducer
} );
