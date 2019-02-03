import React = require( 'react' );

interface Props
{
  playlistId: string;
}

export default class PlaylistSubscribeButton extends React.PureComponent<Props>
{
  public render()
  {
    const { playlistId } = this.props;

    return (
      <span>{playlistId}</span>
    );
  }
}
