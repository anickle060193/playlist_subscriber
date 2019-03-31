import youtubePaginatedResponseValidator from './validators/youtube_paginated_response';
import youtubePlaylistValidator from './validators/youtube_playlist';
import youtubePlaylistItemValidator from './validators/youtube_playlist_item';

import { YoutubePaginatedResponse, YoutubePlaylist, YoutubePlaylistItem } from './youtube_api_types';

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

export function validateYoutubePaginatedResponse( data: unknown )
{
  return validate<YoutubePaginatedResponse<unknown>>( youtubePaginatedResponseValidator as Validator, data );
}

export function validateYoutubePlaylist( data: unknown )
{
  return validate<YoutubePlaylist>( youtubePlaylistValidator as Validator, data );
}

export function validateYoutubePlaylistItem( data: unknown )
{
  return validate<YoutubePlaylistItem>( youtubePlaylistItemValidator as Validator, data );
}
