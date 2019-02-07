import { YoutubePlaylist, YoutubePlaylistItem } from './youtube_api_types';
import { validateYoutubePlaylistsResponse, validateYoutubePlaylistItemsResponse } from './validation';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const KEY = atob( 'QUl6YVN5RDFJb2ZoN1JXVThPTTRDUzVQVHdkakJFczA0am9oQzZV' );

function formatUrl( baseUrl: string, params: { [ key: string ]: string | { toString(): string } } )
{
  let url = new URL( baseUrl );
  for( let [ key, value ] of Object.entries( params ) )
  {
    url.searchParams.set( key, value.toString() );
  }
  return url.href;
}

export async function fetchYoutubePlaylists( playlistIds: string[] ): Promise<YoutubePlaylist[]>
{
  let response = await fetch( formatUrl( `${YOUTUBE_API_URL}/playlists`, {
    key: KEY,
    part: 'snippet',
    id: playlistIds.join( ',' ),
    maxResults: 50
  } ) );

  let data = await response.json();

  if( !response.ok )
  {
    throw data;
  }

  let playlistsResponse = validateYoutubePlaylistsResponse( data );

  return playlistsResponse.items;
}

export async function fetchYoutubePlaylistItems( playlistId: string ): Promise<YoutubePlaylistItem[]>
{
  let response = await fetch( formatUrl( `${YOUTUBE_API_URL}/playlistItems`, {
    key: KEY,
    part: 'snippet',
    playlistId: playlistId,
    maxResults: 50
  } ) );

  let data = await response.json();

  if( !response.ok )
  {
    throw data;
  }

  let playlistItemsResponse = validateYoutubePlaylistItemsResponse( data );

  return playlistItemsResponse.items;
}
