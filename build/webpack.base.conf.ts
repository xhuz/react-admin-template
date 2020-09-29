import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import {resolve} from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: resolve(__dirname, '../src/main.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  // stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|build)/,
        include: [resolve(__dirname, '../src')],
        use: ['thread-loader', 'cache-loader', 'babel-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024,
              name: 'img/[name].[hash:6].[ext]'
            }
          }
        ],
        include: [resolve(__dirname, '../src')],
        exclude: [resolve(__dirname, '../src/icons/svg')]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5 * 1024,
              name: 'fonts/[name].[hash:6].[ext]'
            }
          }
        ],
        include: [resolve(__dirname, '../src')]
      },
      {
        test: /\.svg$/,
        use: [
          'cache-loader',
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              externalConfig: resolve(__dirname, '../src/icons/svgo.yml')
            }
          }
        ],
        include: [resolve(__dirname, '../src/icons/svg')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
      minify: false
    }),
    new webpack.ProgressPlugin()
  ]
};

export default config;
