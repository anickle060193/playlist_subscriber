import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { MappedResource } from 'utils/resource';
import { YoutubePlaylist, YoutubePlaylistItem } from 'utils/youtube_api';

export interface State
{
  playlists: MappedResource<YoutubePlaylist>;
  playlistVideos: MappedResource<YoutubePlaylistItem[]>;
}

const initialState: State = {
  playlists: {
    items: {},
    loading: {},
    error: {}
  },
  playlistVideos: {
    items: {},
    loading: {},
    error: {}
  }
};

export const reducer = reducerWithInitialState( initialState );
