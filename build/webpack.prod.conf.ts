import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import {resolve} from 'path';
import * as webpack from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import merge from 'webpack-merge';
import {PUBLIC_PATH} from './constants';
import config from './webpack.base.conf';

const prodConfig: webpack.Configuration = {
  mode: 'production',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].bundle.js',
    publicPath: PUBLIC_PATH
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /(variable[s]|module)\.scss$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
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
        exclude: [/node_modules/, /(variable[s]|module)\.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: {source: false}
    }),
    new OptimizeCssAssetsPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css'
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        chunk: {
          chunks: 'initial',
          test: /node_modules/,
          name: 'vendor',
          minSize: 100 * 1024,
          maxSize: 300 * 1024,
          priority: 10
        },
        common: {
          chunks: 'initial',
          name: 'common',
          minSize: 0,
          minChunks: 2
        }
      }
    }
  }
};

export default merge(config, prodConfig);
