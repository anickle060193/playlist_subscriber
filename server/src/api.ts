import express from 'express';
import status from 'http-status';

const router = express.Router();

router.get( '/', ( _res, req ) =>
{
  req.status( status.OK ).send( 'OK' );
} );

export default router;
