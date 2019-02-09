import moment from 'moment';

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

export interface YoutubePlaylistItemContentDetails
{
  videoId: string;
  videoPublishedAt: string;
}

export interface YoutubePlaylistItem
{
  kind: string;
  etag: string;
  id: string;
  snippet: YoutubePlaylistItemSnippet;
  contentDetails: YoutubePlaylistItemContentDetails;
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

export function getYoutubeAvatarThumbnail( thumbnails: YoutubeThumbnails ): YoutubeThumbnail | null
{
  return (
    thumbnails.default ||
    thumbnails.medium ||
    thumbnails.standard ||
    thumbnails.high ||
    thumbnails.maxres ||
    null
  );
}

export function getYoutubePlaylistItemThumbnail( thumbnails: YoutubeThumbnails ): YoutubeThumbnail | null
{
  return (
    thumbnails.medium ||
    thumbnails.standard ||
    thumbnails.high ||
    thumbnails.maxres ||
    null
  );
}

export function compareYoutubePlaylistItems( a: YoutubePlaylistItem, b: YoutubePlaylistItem )
{
  return +moment( b.contentDetails.videoPublishedAt ) - +moment( a.contentDetails.videoPublishedAt );
}
