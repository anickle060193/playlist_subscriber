import { Storage } from 'redux-persist';

import { jsonParseReviver, jsonStringifyReplacer } from 'utils/transformer';

export const persistChromeSyncStorage: Storage = {
  getItem: ( key ) =>
  {
    console.log( 'Persist - Get:', key );

    return new Promise( ( resolve, reject ) =>
    {
      chrome.storage.sync.get( key, ( items ) =>
      {
        if( chrome.runtime.lastError )
        {
          reject( chrome.runtime.lastError );
        }
        else if( !( key in items ) )
        {
          reject( new Error( `Requested item not found: ${key}` ) );
        }
        else
        {
          let value = items[ key ];
          if( typeof value === 'string' )
          {
            try
            {
              value = JSON.parse( value, jsonParseReviver );
            }
            catch( e )
            {
              console.warn( 'Could not parse stored value:', e );
            }
          }

          resolve( value );
        }
      } );
    } );
  },
  setItem: ( key, value ) =>
  {
    console.log( 'Persist - Set:', key, '-', value );

    return new Promise( ( resolve, reject ) =>
    {
      let v = JSON.stringify( value, jsonStringifyReplacer );

      chrome.storage.sync.set( { [ key ]: v }, () =>
      {
        if( chrome.runtime.lastError )
        {
          reject( chrome.runtime.lastError );
        }
        else
        {
          resolve();
        }
      } );
    } );
  },
  removeItem: ( key ) =>
  {
    console.log( 'Persist - Remove:', key );

    return new Promise( ( resolve, reject ) =>
    {
      chrome.storage.sync.remove( key, () =>
      {
        if( chrome.runtime.lastError )
        {
          reject( chrome.runtime.lastError );
        }
        else
        {
          resolve();
        }
      } );
    } );
  }
};
