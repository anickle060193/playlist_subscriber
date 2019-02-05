import playlistSubscriptionsValidator from './validators/playlist_subscriptions';
import youtubePlaylistsResponseValidator from './validators/youtube_playlists_response';
import youtubePlaylistItemsResponseValidator from './validators/youtube_playlist_items_response';

import { YoutubePlaylistsResponse, YoutubePlaylistItemsResponse } from './youtube_api_types';

interface ValidatorError
{
  keyword: string;
  dataPath: string;
  schemaPath: string;
  params: {
    missingProperty: string;
  };
  message: string;
  schema: {};
  parentSchema: {};
  data: {};
}

interface Validator
{
  ( data: unknown ): boolean;
  errors: ValidatorError[] | null;
}

function validate<T>( validator: Validator, value: unknown ): T
{
  if( validator( value ) )
  {
    return value as T;
  }
  else if( validator.errors )
  {
    throw new Error( validator.errors.map( ( { dataPath, message, schema, data } ) => `data${dataPath} ${message}\nSchema:\n${JSON.stringify( schema, null, 2 )}\nData:\n${JSON.stringify( data, null, 2 )}` ).join( ',\n' ) );
  }
  else
  {
    throw new Error( 'Unexpected data format' );
  }
}

export function validatePlaylistSubscriptions( data: unknown )
{
  return validate<string[]>( playlistSubscriptionsValidator as Validator, data );
}

export function validateYoutubePlaylistsResponse( data: unknown )
{
  return validate<YoutubePlaylistsResponse>( youtubePlaylistsResponseValidator as Validator, data );
}

export function validateYoutubePlaylistItemsResponse( data: unknown )
{
  return validate<YoutubePlaylistItemsResponse>( youtubePlaylistItemsResponseValidator as Validator, data );
}
