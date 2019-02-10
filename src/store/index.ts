import { Middleware, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import ReduxLogger = require( 'redux-logger' );

import rootReducer from './reducers';

import { migrate } from './migrate';
import { persistChromeSyncStorage } from './persistChromeStorage';

import { Version } from 'utils/user_data';

const middleWares: Middleware[] = [
  thunk
];

if( process.env.NODE_ENV === 'development' )
{
  const { createLogger } = require( 'redux-logger' ) as typeof ReduxLogger; // tslint:disable-line:no-var-requires
  middleWares.push( createLogger( {
    collapsed: true,
    diff: false,
    duration: true
  } ) );
}

const persistConfig: PersistConfig = {
  key: 'user',
  whitelist: [ 'user' ],
  storage: persistChromeSyncStorage,
  stateReconciler: autoMergeLevel2,
  migrate: migrate,
  version: Version.CurrentVersion,
  serialize: false,
  debug: process.env.NODE_ENV === 'development',
};

export const store = createStore(
  persistReducer( persistConfig, rootReducer ),
  applyMiddleware( ...middleWares )
);

export const persistor = persistStore( store );
