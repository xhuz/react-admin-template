import {message} from 'antd';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {GuardFunction} from 'react-router-guards';
import {getUserInfoEffect, resetState, store} from '../store';
import getPageTitle from '../utils/get-page-title';
import {getToken} from '../utils/token';

NProgress.configure({showSpinner: false});

const whiteList = ['/login'];

export const guard: GuardFunction = async (to, _from, next) => {
  const user = store.getState().user;
  document.title = getPageTitle(to.meta.title);
  NProgress.start();
  const token = getToken();
  if (token) {
    if (to.location.pathname === '/login') {
      next.redirect('/dashboard');
      NProgress.done();
    } else {
      if (user.name) {
        next();
        NProgress.done();
      } else {
        try {
          await store.dispatch<any>(getUserInfoEffect());
          next();
          NProgress.done();
        } catch (error) {
          store.dispatch(resetState());
          message.destroy();
          message
            .error(error || 'Has Error')
            .promise.catch(err => console.log(err));
          next.redirect(`/login?redirect=${to.location.pathname}`);
          NProgress.done();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.location.pathname) !== -1) {
      next();
      NProgress.done();
    } else {
      next.redirect(`/login?redirect=${to.location.pathname}`);
      NProgress.done();
    }
  }
};
