import {message} from 'antd';
import Axios, {AxiosRequestConfig} from 'axios';
import {ENV} from '../environment';
import {store} from '../store';
import {getToken} from './token';

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
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  async response => {
    const res = response.data;

    if (res.statusCode === 200 || res.statusCode === 201) {
      return response;
    } else {
      await message.error(res.message || 'Error', 5);
      return Promise.reject(new Error(res.message || 'Error'));
    }
  },
  async error => {
    await message.error(
      error.response?.data?.message || error.message || 'Error',
      5
    );
    return Promise.reject(error);
  }
);

interface HttpRequest {
  getUri(config?: AxiosRequestConfig): string;
  request<T = any>(config: AxiosRequestConfig): Promise<T>;
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
}

// 拦截器中不建议直接提升response，为了类型安全二次封装一下 https://github.com/axios/axios/issues/1510
export const request: HttpRequest = {
  getUri: (config?: AxiosRequestConfig) => service.getUri(config),
  request: (config: AxiosRequestConfig) =>
    service.request(config).then(res => res.data.data),
  get: (url: string, config?: AxiosRequestConfig) =>
    service.get(url, config).then(res => res.data.data),
  delete: (url: string, config?: AxiosRequestConfig) =>
    service.delete(url, config).then(res => res.data.data),

  head: (url: string, config?: AxiosRequestConfig) =>
    service.head(url, config).then(res => res.data.data),

  options: (url: string, config?: AxiosRequestConfig) =>
    service.options(url, config).then(res => res.data.data),

  post: (url: string, data?: any, config?: AxiosRequestConfig) =>
    service.post(url, data, config).then(res => res.data.data),

  put: (url: string, data?: any, config?: AxiosRequestConfig) =>
    service.put(url, data, config).then(res => res.data.data),

  patch: (url: string, data?: any, config?: AxiosRequestConfig) =>
    service.patch(url, data, config).then(res => res.data.data)
};
