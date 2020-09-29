import {resolve} from 'path';

export const PUBLIC_PATH = '/';

export const DLL_PATH = resolve(__dirname, '../dll');

export const DLL_ENTRIES = {
  react: [
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'antd',
    '@ant-design/icons',
    'react-router-guards',
    'connected-react-router',
    'react-perfect-scrollbar'
  ],
  redux: ['redux', 'redux-logger', 'redux-thunk'],
  axios: ['axios'],
  nprogress: ['nprogress']
};
