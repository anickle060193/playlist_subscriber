const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const KEY = atob( 'QUl6YVN5RDFJb2ZoN1JXVThPTTRDUzVQVHdkakJFczA0am9oQzZV' );

export async function fetchYoutubePlaylists( playlistIds: string[] )
{
  const params = new URLSearchParams( {
    key: KEY,
    part: 'snippet',
    id: playlistIds.join( ',' )
  } );
  let response = await fetch( `${YOUTUBE_API_URL}/playlists`, { body: params } );

  let data = await response.json();

  if( !response.ok )
  {
    throw data;
  }

  return data;
}

export async function fetchYoutubePlaylistVideos( playlistId: string )
{
  const params = new URLSearchParams();
  params.set( 'key', KEY );
  params.set( 'part', 'snippet' );
  params.set( 'playlistId', playlistId );
  let response = await fetch( `${YOUTUBE_API_URL}/playlistItems`, { body: params } );

  let data = await response.json();

  if( !response.ok )
  {
    throw data;
  }

  return data;
}
