export function readFile( file: File )
{
  return new Promise<string>( ( resolve, reject ) =>
  {
    const reader = new FileReader();

    reader.addEventListener( 'load', ( e ) =>
    {
      if( typeof reader.result !== 'string' )
      {
        reject( new Error( `Result is not a string: "${reader.result}"` ) );
      }
      else
      {
        resolve( reader.result );
      }
    } );

    reader.addEventListener( 'error', ( e ) =>
    {
      reject( reader.error );
    } );

    reader.readAsText( file, 'utf-8' );
  } );
}
