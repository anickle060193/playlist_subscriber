export function setBrowserActionNewVideoCount( newVideoCount: number )
{
  if( newVideoCount > 0 )
  {
    chrome.browserAction.setBadgeText( {
      text: newVideoCount.toFixed(),
    } );
    chrome.browserAction.setTitle( {
      title: `Playlist Subscriber - ${newVideoCount.toFixed()} New Videos`,
    } );
  }
  else
  {
    chrome.browserAction.setBadgeText( {
      text: '',
    } );
    chrome.browserAction.setTitle( {
      title: 'Playlist Subscriber',
    } );
  }
}
