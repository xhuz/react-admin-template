import 'normalize.css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './App';
import {requireIcon} from './icons';
import {store} from './store';
import './styles/index.scss';

requireIcon(); // 自动加载所有svg icon

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// webpack热更新
if (module.hot) {
  module.hot.accept();
}
