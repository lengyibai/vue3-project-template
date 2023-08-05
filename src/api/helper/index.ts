import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const user = {
  baseURL: import.meta.env.VITE_API as string,
  timeout: 600000,
};

class RequestUser {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    /** @description 请求拦截器 */
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    /** @description 响应拦截器 */
    this.service.interceptors.response.use(
      async (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        return error;
      }
    );
  }

  //常用请求方法封装
  get<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
    return this.service.get(url, { params, ...config });
  }

  post<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
    return this.service.post(url, params, config);
  }

  put<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
    return this.service.put(url, params, config);
  }

  delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.service.delete(url, { params, ...config });
  }
}

export default new RequestUser(user);
