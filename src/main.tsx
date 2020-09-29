import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './App';
import './icons';
import {store} from './store';
import './styles/index.scss';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('app')
);

// // webpack热更新
// if (module.hot) {
//   module.hot.accept();
// }
