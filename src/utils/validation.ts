import playlistSubscriptionsValidator from './validators/playlist_subscriptions';

interface Validator
{
  ( data: unknown ): boolean;
  errors: Array<{ dataPath: string, message: string }> | null;
}

function validate<T>( validator: Validator, data: unknown ): T
{
  if( validator( data ) )
  {
    return data as T;
  }
  else if( validator.errors )
  {
    throw new Error( validator.errors.map( ( { dataPath, message } ) => `data${dataPath} ${message}` ).join( ',\n' ) );
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
