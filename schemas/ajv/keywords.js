'use strict';

module.exports = function( ajv )
{
  ajv.addKeyword( 'set', {
    type: 'object',
    inline: function( it, keyword, schema )
    {
      return `data${( it.dataLevel || '' )} instanceof Set && Array.from( data${( it.dataLevel || '' )} ).every( ( d ) => typeof d === '${schema}' )`;
    },
    metaSchema: {
      enum: [ 'object', 'boolean', 'number', 'string' ]
    }
  } );

  return ajv;
};
