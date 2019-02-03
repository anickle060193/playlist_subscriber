import path = require( 'path' );
import webpack = require( 'webpack' );
import CleanWebpackPlugin = require( 'clean-webpack-plugin' );

const build = path.resolve( __dirname, './build' );

const config: webpack.Configuration = {
  entry: path.resolve( __dirname, 'src', 'index.ts' ),
  output: {
    filename: '[name].bundle.js',
    path: build
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.ts', '.json' ]
  },
  plugins: [
    new CleanWebpackPlugin( [ build ] )
  ]
};

export default config;
