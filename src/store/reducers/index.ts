import { combineReducers } from 'redux';

import { State as YoutubeApiState, reducer as youtubeApiReducer } from './youtubeApi';
import { State as UserState, reducer as userReducer } from './user';

declare global
{
  interface RootState
  {
    youtubeApi: YoutubeApiState;
    user: UserState;
  }
}

export default combineReducers<RootState>( {
  youtubeApi: youtubeApiReducer,
  user: userReducer
} );
