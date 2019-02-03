import merge = require( 'webpack-merge' );

import common from './webpack.common';

export default merge( common, {
  mode: 'production',
  devtool: 'source-map'
} );
