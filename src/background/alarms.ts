import { setBrowserActionNewVideoCount } from 'background/browserAction';

import { storage, StorageKey } from 'common/storage';

import { fetchYoutubePlaylistItems } from 'utils/youtube_api';

const enum Alarm
{
  CheckForNewVideos = 'alarm__check_for_new_videos',
}

async function checkForNewVideos()
{
  console.log( 'Checking for new videos...' );

  let newPlaylistItemCount = 0;

  let lastViewTime = await storage.retrieve( StorageKey.Other__LastViewTime );
  let playlistsSubscriptions = await storage.retrieve( StorageKey.User_PlaylistSubscriptions );

  for( let playlistId of playlistsSubscriptions )
  {
    try
    {
      let playlistItems = await fetchYoutubePlaylistItems( playlistId );
      for( let playlistItem of playlistItems )
      {
        try
        {
          let publishedAt = Date.parse( playlistItem.contentDetails.videoPublishedAt );
          if( publishedAt > lastViewTime )
          {
            newPlaylistItemCount += 1;
          }
        }
        catch( e )
        {
          console.error( 'Failed to parse playlist item "videoPublishedAt": ', playlistItem.contentDetails.videoPublishedAt, e );
        }
      }
    }
    catch( e )
    {
      console.error( 'Failed to retrieve playlist:', playlistId, e );
    }
  }

  setBrowserActionNewVideoCount( newPlaylistItemCount );
}

chrome.alarms.onAlarm.addListener( ( alarm ) =>
{
  if( alarm.name === Alarm.CheckForNewVideos )
  {
    checkForNewVideos();
  }
  else
  {
    console.warn( 'Unknown alarm:', alarm );
  }
} );

chrome.runtime.onInstalled.addListener( () =>
{
  chrome.alarms.create( Alarm.CheckForNewVideos, {
    periodInMinutes: 15,
    when: new Date().getTime() + 5000
  } );
} );

storage.addOnChangeListener( ( items ) =>
{
  if( StorageKey.Other__LastViewTime in items )
  {
    setBrowserActionNewVideoCount( 0 );
  }
} );
