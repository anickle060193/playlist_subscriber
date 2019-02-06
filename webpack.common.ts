import path = require( 'path' );
import webpack = require( 'webpack' );
import CleanWebpackPlugin = require( 'clean-webpack-plugin' );
import CopyWebpackPlugin = require( 'copy-webpack-plugin' );
import HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const build = path.resolve( __dirname, './build' );

const config: webpack.Configuration = {
  entry: {
    background: path.resolve( __dirname, 'src', 'background', 'index.ts' ),
    popup: path.resolve( __dirname, 'src', 'popup', 'index.tsx' ),
    main: path.resolve( __dirname, 'src', 'main', 'index.tsx' ),
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
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            fallback: 'file-loader'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.woff', '.woff2' ],
    alias: {
      background: path.resolve( __dirname, 'src', 'background' ),
      common: path.resolve( __dirname, 'src', 'common' ),
      popup: path.resolve( __dirname, 'src', 'popup' ),
      main: path.resolve( __dirname, 'src', 'main' ),
      store: path.resolve( __dirname, 'src', 'store' ),
      utils: path.resolve( __dirname, 'src', 'utils' ),
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
    ] ),
    new HtmlWebpackPlugin( {
      filename: 'popup.html',
      template: path.resolve( __dirname, 'src', 'popup', 'index.html' ),
      chunks: [ 'popup' ]
    } ),
    new HtmlWebpackPlugin( {
      filename: 'main.html',
      template: path.resolve( __dirname, 'src', 'main', 'index.html' ),
      chunks: [ 'main' ]
    } )
  ]
};

export default config;
