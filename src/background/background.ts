chrome.runtime.onInstalled.addListener( ( details ) =>
{
  const manifest = chrome.runtime.getManifest();

  if( details.reason === 'install' )
  {
    console.log( 'Installing', manifest.version );
  }
  else if( details.reason === 'update' )
  {
    console.log( 'Updating from', details.previousVersion, 'to', manifest.version );
  }
  else
  {
    console.log( 'Unknown install reason:', details.reason, 'Version:', manifest.version );
  }
} );
