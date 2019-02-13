// tslint:disable-next-line:no-any
export function jsonStringifyReplacer( key: string, value: any )
{
  if( value instanceof Set )
  {
    return {
      __set: Array.from( value )
    };
  }

  return value;
}

// tslint:disable-next-line:no-any
export function jsonParseReviver( this: any, key: string, value: any )
{
  if( typeof value === 'object' )
  {
    let keys = Object.keys( value );
    if( keys.length === 1
      && keys[ 0 ] === '__set' )
    {
      return new Set( value.__set );
    }
  }

  return value;
}
