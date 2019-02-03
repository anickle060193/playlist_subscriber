import React = require( 'react' );
import ReactDOM = require( 'react-dom' );

import PlaylistSubscribeButton from './PlaylistSubscribeButton';

export interface PlaylistEntry
{
  playlistContainer: HTMLElement;
  playlistId: string;
  playlistKey: string;
}

interface Props
{
  playlists: PlaylistEntry[];
}

export default class PlaylistSubscribeButtons extends React.PureComponent<Props>
{
  public render()
  {
    const { playlists } = this.props;

    return playlists.map( ( { playlistContainer, playlistId, playlistKey } ) => (
      ReactDOM.createPortal(
        <PlaylistSubscribeButton playlistId={playlistId} />,
        playlistContainer,
        playlistKey
      )
    ) );
  }
}
