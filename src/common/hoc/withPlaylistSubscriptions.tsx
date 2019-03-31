import React from 'react';
import { connect } from 'react-redux';

import { setPlaylistSubscriptions } from 'store/reducers/stored/user';
import { thunkToAction } from 'typescript-fsa-redux-thunk';

interface PropsFromState
{
  playlistSubscriptions: string[];
}

interface PropsFromDispatch
{
  setPlaylistSubscriptions: ( playlistSubscriptions: string[] ) => void;
}

export interface WithPlaylistSubscriptionsProps extends PropsFromState, PropsFromDispatch { }

export default function withPlaylistSubscriptions<P = {}>( WrappedComponent: React.ComponentType<WithPlaylistSubscriptionsProps & P> ): React.ComponentType<P>
{
  class WithPlaylistsComponent extends React.PureComponent<WithPlaylistSubscriptionsProps & P>
  {
    public render()
    {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return connect<PropsFromState, PropsFromDispatch, P, RootState>(
    ( state ) => ( {
      playlistSubscriptions: state.stored.user.playlistSubscriptions
    } ),
    {
      setPlaylistSubscriptions: thunkToAction( setPlaylistSubscriptions.action ),
    }
    // @ts-ignore
  )( WithPlaylistsComponent );
}
