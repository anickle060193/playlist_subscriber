import React from 'react';
import { connect } from 'react-redux';
import { thunkToAction } from 'typescript-fsa-redux-thunk';

import { loadPlaylistSubscriptions, setPlaylistSubscriptions } from 'store/reducers/user';

interface PropsFromState
{
  playlistSubscriptions: Set<string>;
}

interface PropsFromDispatch
{
  loadPlaylistSubscriptions: () => Promise<Set<string>>;
  setPlaylistSubscriptions: ( playlistSubscriptions: Set<string> ) => Promise<void>;
}

export interface WithPlaylistSubscriptionsProps extends PropsFromState, PropsFromDispatch { }

export default function withPlaylistSubscriptions( WrappedComponent: React.ComponentType<WithPlaylistSubscriptionsProps> ): React.ComponentType<{}>
{
  class WithPlaylistsComponent extends React.PureComponent<WithPlaylistSubscriptionsProps>
  {
    public componentDidMount()
    {
      this.props.loadPlaylistSubscriptions();
    }

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
      loadPlaylistSubscriptions: thunkToAction( loadPlaylistSubscriptions.action ),
      setPlaylistSubscriptions: thunkToAction( setPlaylistSubscriptions.action )
    }
  )( WithPlaylistsComponent );
}
