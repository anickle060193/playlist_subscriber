export function getSyncItem<T>( key: string )
{
  return new Promise<T | undefined>( ( resolve, reject ) =>
  {
    chrome.storage.sync.get( key, ( items ) =>
    {
      if( chrome.runtime.lastError )
      {
        reject( chrome.runtime.lastError );
      }
      else
      {
        resolve( items[ key ] );
      }
    } );
  } );
}

export function setSyncItem<T>( key: string, item: T )
{
  return new Promise<void>( ( resolve, reject ) =>
  {
    chrome.storage.sync.set( { [ key ]: item }, () =>
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

export function clearSync()
{
  return new Promise<void>( ( resolve, reject ) =>
  {
    chrome.storage.sync.clear( () =>
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
