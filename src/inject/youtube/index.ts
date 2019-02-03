import ReactDOM = require( 'react-dom' );
import React = require( 'react' );

import PlaylistSubscribeButtons, { PlaylistEntry } from './PlaylistSubscribeButtons';

import { doc } from 'inject/utils';

const root = document.createElement( 'div' );

function updatePlaylistSubscribeButtons()
{
  let playlists: PlaylistEntry[] = [];

  for( let playlistRow of Array.from( document.querySelectorAll( 'ytd-shelf-renderer' ) ) )
  {
    if( !( playlistRow instanceof HTMLElement ) )
    {
      continue;
    }

    let headerLink = playlistRow.querySelector( '#title-text > a' );
    if( !( headerLink instanceof HTMLAnchorElement ) )
    {
      continue;
    }

    let headerLinkUrl = new URL( headerLink.href );
    let view = headerLinkUrl.searchParams.get( 'view' );
    let shelfId = headerLinkUrl.searchParams.get( 'shelf_id' );

    if( !view || !shelfId )
    {
      continue;
    }

    for( let playlistContainer of Array.from( playlistRow.querySelectorAll( 'ytd-grid-playlist-renderer' ) ) )
    {
      if( !( playlistContainer instanceof HTMLElement ) )
      {
        continue;
      }

      let playlistLink = playlistContainer.querySelector( 'a[href*="/playlist"]' );
      if( !( playlistLink instanceof HTMLAnchorElement ) )
      {
        continue;
      }

      let playlistUrl = new URL( playlistLink.href );
      let playlistId = playlistUrl.searchParams.get( 'list' );

      if( !playlistId )
      {
        continue;
      }

      playlists.push( {
        playlistContainer: playlistContainer,
        playlistId: playlistId,
        playlistKey: `${view}_${shelfId}_${playlistId}`
      } );
    }
  }

  if( root.parentElement !== document.body )
  {
    document.body.append( root );
  }

  ReactDOM.render(
    React.createElement( PlaylistSubscribeButtons, { playlists } ),
    root
  );
}

doc.on( 'change', () =>
{
  updatePlaylistSubscribeButtons();
} );
