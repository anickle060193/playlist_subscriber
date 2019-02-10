import React from 'react';
import { connect } from 'react-redux';

import { setPlaylistSubscriptions } from 'store/reducers/user';

interface PropsFromState
{
  playlistSubscriptions: string[];
}

interface PropsFromDispatch
{
  setPlaylistSubscriptions: ( playlistSubscriptions: string[] ) => void;
}

export interface WithPlaylistSubscriptionsProps extends PropsFromState, PropsFromDispatch { }

export default function withPlaylistSubscriptions( WrappedComponent: React.ComponentType<WithPlaylistSubscriptionsProps> ): React.ComponentType<{}>
{
  class WithPlaylistsComponent extends React.PureComponent<WithPlaylistSubscriptionsProps>
  {
    public render()
    {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return connect<PropsFromState, PropsFromDispatch, {}, RootState>(
    ( state ) => ( {
      playlistSubscriptions: state.user.playlistSubscriptions
    } ),
    {
      setPlaylistSubscriptions
    }
  )( WithPlaylistsComponent );
}
