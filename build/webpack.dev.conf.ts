import * as AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import * as FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import {readdirSync} from 'fs';
import {extname, resolve} from 'path';
import * as webpack from 'webpack';
import merge from 'webpack-merge';
import {DLL_PATH, PUBLIC_PATH} from './constants';
import config from './webpack.base.conf';

const dllFile = readdirSync(DLL_PATH);

const getDll = () => {
  return dllFile
    .filter(item => extname(item) === '.js')
    .map(filename => ({filepath: resolve(DLL_PATH, filename)}));
};

const getManifest = () => {
  return dllFile
    .filter(item => extname(item) === '.json')
    .map(filename => ({
      context: __dirname,
      manifest: resolve(DLL_PATH, filename)
    }));
};

const devConfig: webpack.Configuration = {
  output: {
    path: resolve(__dirname, '../../../dist/admin'),
    filename: 'js/[name].bundle.js',
    publicPath: PUBLIC_PATH
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    port: 4000,
    hot: true,
    quiet: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['thread-loader', 'style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /(variable[s]|module)\.scss$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {implementation: require('sass')}
          }
        ]
      },
      {
        test: /(?!(variable[s]|module))\.scss$/,
        exclude: [/node_modules/, /variables\.scss$/],
        use: [
          'thread-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {implementation: require('sass')}
          }
        ]
      }
    ]
  },
  plugins: [
    ...getManifest().map(item => new webpack.DllReferencePlugin(item)),
    ...getDll().map(item => new AddAssetHtmlPlugin(item)),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running here: http://localhost:4000']
      } as any
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

export default merge(config, devConfig);
