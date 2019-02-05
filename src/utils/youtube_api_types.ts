export interface YoutubeThumbnail
{
  url: string;
  width: number;
  height: number;
}

export interface YoutubeThumbnails
{
  default?: YoutubeThumbnail;
  medium?: YoutubeThumbnail;
  high?: YoutubeThumbnail;
  standard?: YoutubeThumbnail;
  maxres?: YoutubeThumbnail;
}

export interface YoutubePlaylistSnippet
{
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeThumbnails;
  channelTitle: string;
  localized: {
    title: string;
    description: string;
  };
}

export interface YoutubePlaylist
{
  kind: string;
  etag: string;
  id: string;
  snippet: YoutubePlaylistSnippet;
}

export interface YoutubePlaylistsResponse
{
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubePlaylist[];
}

export interface YoutubePlaylistItemSnippet
{
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeThumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: {
    kind: string;
    videoId: string;
  };
}

export interface YoutubePlaylistItem
{
  kind: string;
  etag: string;
  id: string;
  snippet: YoutubePlaylistItemSnippet;
}

export interface YoutubePlaylistItemsResponse
{
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubePlaylistItem[];
}

export function getYoutubeAvatarThumbnail( thumbnails: YoutubeThumbnails )
{
  let order: Array<keyof YoutubeThumbnails> = [ 'default', 'medium', 'standard', 'high', 'maxres' ];
  for( let size of order )
  {
    const thumbnail = thumbnails[ size ];
    if( thumbnail )
    {
      return thumbnail;
    }
  }
  return null;
}
