import {message} from 'antd';
import Axios from 'axios';
import {ENV} from '../environment';
import {store} from '../store';
import {getToken} from './token';

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}

  export interface AxiosInstance {
    (config: AxiosRequestConfig): AxiosPromise;
    (url: string, config?: AxiosRequestConfig): AxiosPromise;
    defaults: AxiosRequestConfig;
    interceptors: {
      request: AxiosInterceptorManager<AxiosRequestConfig>;
      response: AxiosInterceptorManager<AxiosResponse>;
    };
    request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    delete(url: string, config?: AxiosRequestConfig): AxiosPromise;
    head(url: string, config?: AxiosRequestConfig): AxiosPromise;
    post<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): AxiosPromise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): AxiosPromise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: AxiosRequestConfig
    ): AxiosPromise<T>;
  }
}

const service = Axios.create({
  baseURL: ENV.REACT_BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000
});

service.interceptors.request.use(
  config => {
    if (store.getState().user.token) {
      config.headers['Authorization'] = 'Bearer ' + getToken();
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.statusCode !== 200 || res.statusCode !== 201) {
      return res.data;
    } else {
      message.error(res.message || 'Error', 5);
      return Promise.reject(new Error(res.message || 'Error'));
    }
  },
  error => {
    console.log('err' + error);
    message.error(error.response?.data?.message || error.message || 'Error', 5);
    return Promise.reject(error);
  }
);

export const request = service;
