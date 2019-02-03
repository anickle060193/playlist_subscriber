import path = require( 'path' );
import webpack = require( 'webpack' );
import CleanWebpackPlugin = require( 'clean-webpack-plugin' );
import CopyWebpackPlugin = require( 'copy-webpack-plugin' );

const build = path.resolve( __dirname, './build' );

const config: webpack.Configuration = {
  entry: {
    background: path.resolve( __dirname, 'src', 'background', 'index.ts' ),
    youtube: path.resolve( __dirname, 'src', 'inject', 'youtube', 'index.ts' )
  },
  output: {
    filename: '[name].bundle.js',
    path: build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json', '.css' ],
    alias: {
      background: path.resolve( __dirname, 'src', 'background' ),
      inject: path.resolve( __dirname, 'src', 'inject' )
    }
  },
  plugins: [
    new CleanWebpackPlugin( [ build ] ),
    new CopyWebpackPlugin( [
      {
        from: path.resolve( __dirname, 'src', 'manifest.json' ),
        to: build,
        toType: 'dir',
        transform: ( content ) => ( JSON.stringify( {
          name: process.env.npm_package_displayName,
          description: process.env.npm_package_description,
          version: process.env.npm_package_version,
          ...JSON.parse( content )
        }, null, 2 ) )
      }
    ] )
  ]
};

export default config;
