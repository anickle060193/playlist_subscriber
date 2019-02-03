import express from 'express';
import status from 'http-status';

import api from './api';

const app = express();

const PORT = 3000;

app.use( express.urlencoded() );
app.use( express.json() );

app.get( '/', ( _req, res ) =>
{
  res.status( status.OK ).send( 'OK' );
} );

app.use( '/api', api );

app.listen( PORT, () =>
{
  console.log( 'App listening on port:', PORT );
} );
