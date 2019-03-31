import React from 'react';
import { connect } from 'react-redux';
import { thunkToAction } from 'typescript-fsa-redux-thunk';

import { initializeSettings } from 'store/reducers/stored/settings';
import { initializeUserData } from 'store/reducers/stored/user';

interface PropsFromDispatch
{
  initializeSettings: () => void;
  initializeUserData: () => void;
}

type Props = PropsFromDispatch;

class StoreInitializer extends React.Component<Props>
{
  public componentDidMount()
  {
    this.props.initializeSettings();
    this.props.initializeUserData();
  }

  public render()
  {
    return this.props.children;
  }
}

export default connect<{}, PropsFromDispatch, {}, RootState>(
  ( state ) => ( {} ),
  {
    initializeSettings: thunkToAction( initializeSettings.action ),
    initializeUserData: thunkToAction( initializeUserData.action ),
  }
)( StoreInitializer );
