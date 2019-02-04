import { combineReducers } from 'redux';

import { State as YoutubeApiState, reducer as youtubeApiReducer } from './youtubeApi';
import { State as StorageState, reducer as storageReducer } from './storage';

declare global
{
  interface RootState
  {
    youtubeApi: YoutubeApiState;
    storage: StorageState;
  }
}

export default combineReducers<RootState>( {
  youtubeApi: youtubeApiReducer,
  storage: storageReducer
} );
