const enum ContextMenu
{
  ReloadExtension = 'reload_extension'
}

chrome.contextMenus.onClicked.addListener( ( info ) =>
{
  console.log( 'Context menu clicked:', info.menuItemId );

  if( info.menuItemId === ContextMenu.ReloadExtension )
  {
    chrome.runtime.reload();
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
} );
