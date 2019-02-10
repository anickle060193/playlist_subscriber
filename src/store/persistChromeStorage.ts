import { Storage } from 'redux-persist';

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
          resolve( items[ key ] );
        }
      } );
    } );
  },
  setItem: ( key, value ) =>
  {
    console.log( 'Persist - Set:', key, '-', value );

    return new Promise( ( resolve, reject ) =>
    {
      chrome.storage.sync.set( { [ key ]: value }, () =>
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
