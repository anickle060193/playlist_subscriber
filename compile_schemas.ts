import path = require( 'path' );
import fs = require( 'fs' );
import child_process = require( 'child_process' );

const USED_SCHEMAS = [
  'youtube_paginated_response',
  'youtube_playlist',
  'youtube_playlist_item',
];

const schemasDir = path.resolve( __dirname, 'schemas' );

const validatorsDir = path.resolve( __dirname, 'src', 'utils', 'validators' );

if( !fs.existsSync( validatorsDir ) )
{
  console.log( 'Creating validators directory' );
  fs.mkdirSync( validatorsDir );
}
else
{
  console.log( 'Clearing validators directory' );
  for( let file of fs.readdirSync( validatorsDir ) )
  {
    console.log( 'Deleting old validator:', file );
    fs.unlinkSync( path.resolve( validatorsDir, file ) );
  }
}

for( let schema of USED_SCHEMAS )
{
  console.log( 'Compiling schema:', schema );
  let schemaFilename = path.resolve( schemasDir, schema );
  const validatorFilename = path.resolve( validatorsDir, schema + '.js' );
  const command = [
    'yarn run ajv compile',
    '-s', `"${schemaFilename}"`,
    '-r', './schemas/*.json',
    '-o', `"${validatorFilename}"`,
    '--all-errors', '--verbose',
  ];
  const { stdout, stderr, error } = child_process.spawnSync( command.join( ' ' ), { shell: true, encoding: 'utf8' } );
  if( stdout )
  {
    console.log( stdout );
  }
  if( stderr )
  {
    throw new Error( stderr );
  }
  if( error )
  {
    throw error;
  }
}
