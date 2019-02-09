import { YoutubePlaylist, YoutubePlaylistItem } from './youtube_api_types';
import { validateYoutubePaginatedResponse, validateYoutubePlaylist, validateYoutubePlaylistItem } from './validation';

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

  try
  {
    let playlistsResponse = validateYoutubePaginatedResponse( data );

    let playlists = playlistsResponse.items
      .map( ( playlistData ) =>
      {
        try
        {
          return validateYoutubePlaylist( playlistData );
        }
        catch( e )
        {
          console.error( 'Unexpected Youtube playlist format:', e );
        }

        return null;
      } )
      .filter( ( playlist ): playlist is YoutubePlaylist => !!playlist );

    return playlists;
  }
  catch( e )
  {
    console.error( 'Unexpected Youtube playlists response format:', e );

    throw new Error( 'Unable to retrieve playlists' );
  }
}

export async function fetchYoutubePlaylistItems( playlistId: string ): Promise<YoutubePlaylistItem[]>
{
  let response = await fetch( formatUrl( `${YOUTUBE_API_URL}/playlistItems`, {
    key: KEY,
    part: 'snippet,contentDetails',
    playlistId: playlistId,
    maxResults: 50
  } ) );

  let data = await response.json();

  if( !response.ok )
  {
    throw data;
  }

  try
  {
    let playlistItemsResponse = validateYoutubePaginatedResponse( data );

    let playlistItems = playlistItemsResponse.items
      .map( ( playlistItemData ) =>
      {
        try
        {
          return validateYoutubePlaylistItem( playlistItemData );
        }
        catch( e )
        {
          console.error( 'Unexpected Youtube playlist item format:', e );
        }

        return null;
      } )
      .filter( ( playlistItem ): playlistItem is YoutubePlaylistItem => !!playlistItem );

    return playlistItems;
  }
  catch( e )
  {
    console.error( 'Unexpected Youtube playlist items response format:', e );

    throw new Error( 'Unable to retrieve playlist items' );
  }
}
