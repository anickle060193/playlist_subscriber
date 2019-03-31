export const enum StorageKey
{
  Setting_UseDarkTheme = 'setting__use_dark_theme',
  Setting_MarkVideoWatchedOnOpen = 'setting__mark_video_watched_on_open',

  User_PlaylistSubscriptions = 'user__playlist_subscriptions',
  User_HiddenPlaylistItems = 'user__hidden_playlist_items',
  User_WatchedVideos = 'user__watched_videos',

  Other__LastViewTime = 'other__last_view_time',
}

interface StorageType
{
  [ StorageKey.Setting_UseDarkTheme ]: boolean;
  [ StorageKey.Setting_MarkVideoWatchedOnOpen ]: boolean;

  [ StorageKey.User_PlaylistSubscriptions ]: string[];
  [ StorageKey.User_HiddenPlaylistItems ]: { [ playlistItemId: string ]: boolean | undefined };
  [ StorageKey.User_WatchedVideos ]: { [ videoId: string ]: boolean | undefined };

  [ StorageKey.Other__LastViewTime ]: number;
}

const DEFAULT_STORAGE: StorageType = {
  [ StorageKey.Setting_UseDarkTheme ]: true,
  [ StorageKey.Setting_MarkVideoWatchedOnOpen ]: false,

  [ StorageKey.User_PlaylistSubscriptions ]: [],
  [ StorageKey.User_HiddenPlaylistItems ]: {},
  [ StorageKey.User_WatchedVideos ]: {},

  [ StorageKey.Other__LastViewTime ]: 0,
};

class Storage
{
  private cache: StorageType = {
    ...DEFAULT_STORAGE
  };

  private initializingPromise: Promise<void> | null = null;

  public initialize( onChange?: () => void ): Promise<void>
  {
    if( this.initializingPromise === null )
    {
      this.initializingPromise = new Promise( ( resolve, reject ) =>
      {
        chrome.storage.sync.get( DEFAULT_STORAGE, ( items ) =>
        {
          if( chrome.runtime.lastError )
          {
            console.error( 'Failed to retrieve storage:', chrome.runtime.lastError );
            return reject( chrome.runtime.lastError );
          }

          this.cache = {
            ...this.cache,
            ...items
          };

          resolve();
        } );
      } );

      chrome.storage.onChanged.addListener( ( items ) =>
      {
        for( let key of Object.keys( items ) as StorageKey[] )
        {
          let { oldValue, newValue } = items[ key ];

          if( key in this.cache )
          {
            console.log( 'Storage Changed -', key, ':', oldValue, '->', newValue );
            this.cache[ key ] = newValue;
          }
          else
          {
            console.log( 'Unknown Storage Changed -', key, ':', oldValue, '->', newValue );
          }
        }
      } );
    }

    if( onChange )
    {
      this.initializingPromise.then( onChange );
      chrome.storage.onChanged.addListener( onChange );
    }

    return this.initializingPromise;
  }

  public addOnChangeListener( callback: ( changes: { [ key: string ]: chrome.storage.StorageChange; }, areaName: string ) => void )
  {
    chrome.storage.onChanged.addListener( callback );
  }

  public removeOnChangeListener( callback: ( changes: { [ key: string ]: chrome.storage.StorageChange; }, areaName: string ) => void )
  {
    chrome.storage.onChanged.removeListener( callback );
  }

  public get<K extends StorageKey>( key: K ): StorageType[ K ]
  {
    return this.getFrom( this.cache, key );
  }

  public retrieve<K extends StorageKey>( key: K ): Promise<StorageType[ K ]>
  {
    return new Promise<StorageType[ K ]>( ( resolve, reject ) =>
    {
      chrome.storage.sync.get( { [ key ]: DEFAULT_STORAGE[ key ] }, ( items ) =>
      {
        if( chrome.runtime.lastError )
        {
          return reject( chrome.runtime.lastError );
        }

        resolve( this.getFrom( items as StorageType, key ) );
      } );
    } );
  }

  public getDefault<K extends StorageKey>( key: K ): StorageType[ K ]
  {
    return DEFAULT_STORAGE[ key ];
  }

  public set<K extends StorageKey>( key: K, value: StorageType[ K ] )
  {
    if( typeof value !== typeof DEFAULT_STORAGE[ key ] )
    {
      console.error( 'Invalid type -', key, ':', value );
      return;
    }

    this.cache[ key ] = value;
    chrome.storage.sync.set( { [ key ]: value }, () =>
    {
      if( chrome.runtime.lastError )
      {
        console.error( 'Failed to save storage item:', key, chrome.runtime.lastError );
      }
    } );
  }

  public reset( key: StorageKey )
  {
    this.cache[ key ] = DEFAULT_STORAGE[ key ];
    chrome.storage.sync.set( { [ key ]: DEFAULT_STORAGE[ key ] }, () =>
    {
      if( chrome.runtime.lastError )
      {
        console.error( 'Failed to reset storage item:', chrome.runtime.lastError );
      }
    } );
  }

  private getFrom<K extends StorageKey>( store: StorageType, key: K ): StorageType[ K ]
  {
    const value = store[ key ];
    const defaultValue = DEFAULT_STORAGE[ key ];
    if( typeof value !== typeof defaultValue )
    {
      console.warn( 'Stored storage item type is invalid -', key, ':', value );
      return defaultValue;
    }
    else
    {
      return value;
    }
  }
}

export const storage = new Storage();
