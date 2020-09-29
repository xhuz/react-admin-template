import {join} from 'path';
import * as webpack from 'webpack';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import {DLL_ENTRIES, DLL_PATH} from './constants';

const dllConfig: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  entry: DLL_ENTRIES,
  output: {
    path: DLL_PATH,
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: join(DLL_PATH, 'manifest-[name].json'),
      name: '[name]_library',
      context: __dirname
    })
  ]
};

export default dllConfig;
