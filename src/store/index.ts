import { Middleware, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxLogger = require( 'redux-logger' );

import rootReducer from './reducers';

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

export const store = createStore(
  rootReducer,
  applyMiddleware( ...middleWares )
);
