import path = require( 'path' );
import fs = require( 'fs' );
import child_process = require( 'child_process' );
import glob from 'glob';

const schemasDir = path.resolve( __dirname, 'schemas' );
const schemas = glob.sync( path.resolve( schemasDir, '*.json' ) );

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

for( let schema of schemas )
{
  const { name } = path.parse( schema );
  console.log( 'Compiling schema:', name );

  const validatorFilename = path.resolve( validatorsDir, name + '.js' );
  const command = `yarn run ajv compile -s "${schema}" -r ./schemas/*.json -o "${validatorFilename}" --all-errors`;
  const { stdout, stderr, error } = child_process.spawnSync( command, { shell: true, encoding: 'utf8' } );
  if( stdout )
  {
    console.log( stdout );
  }
  if( stderr )
  {
    console.error( stderr );
  }
  if( error )
  {
    console.error( error );
  }
}
