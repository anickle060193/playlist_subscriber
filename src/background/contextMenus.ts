const enum ContextMenu
{
  ReloadExtension = 'reload_extension',
  OpenMain = 'open_main',
}

chrome.contextMenus.onClicked.addListener( ( info ) =>
{
  console.log( 'Context menu clicked:', info.menuItemId );

  if( info.menuItemId === ContextMenu.ReloadExtension )
  {
    chrome.runtime.reload();
  }
  else if( info.menuItemId === ContextMenu.OpenMain )
  {
    window.open( chrome.extension.getURL( './main.html' ) );
  }
} );

chrome.runtime.onInstalled.addListener( () =>
{
  console.log( 'Creating context menus...' );

  if( process.env.NODE_ENV === 'development' )
  {
    chrome.contextMenus.create( {
      id: ContextMenu.ReloadExtension,
      title: 'Reload Extension',
      contexts: [ 'browser_action' ]
    }, () =>
      {
        if( chrome.runtime.lastError )
        {
          console.error( 'Failed to create "Reload Extension" context menu:', chrome.runtime.lastError );
        }
        else
        {
          console.log( 'Succesfully created "Reload Extension" context menu' );
        }
      } );
  }

  chrome.contextMenus.create( {
    id: ContextMenu.OpenMain,
    title: 'Open Playlist Subscriber',
    contexts: [ 'browser_action' ],
  }, () =>
    {
      if( chrome.runtime.lastError )
      {
        console.error( 'Failed to create "Open Playlist Subscriber" context menu:', chrome.runtime.lastError );
      }
      else
      {
        console.log( 'Succesfully created "Open Playlist Subscriber" context menu' );
      }
    } );
} );
