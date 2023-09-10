import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

import { ResultData } from "../interface/modules/result";

import { handleError, handleResponse } from "./error_msg";
import { ignore } from "./ignore";
import { getLoadingText } from "./loading_text";

import { $loading, $message } from "@/utils";

const user = {
  baseURL: import.meta.env.VITE_API as string,
  timeout: 30000,
};

class RequestUser {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);

    /** @description 请求拦截器 */
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        //过滤不需要开启全屏loading的接口
        if (!ignore.includes(config.url!)) $loading.showRequest(getLoadingText(config.url!));

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    /** @description 响应拦截器 */
    this.service.interceptors.response.use(
      async (response: AxiosResponse) => {
        const url = response.config.url!;
        const err_msg = handleResponse(response);

        //过滤不需要开启全屏loading和通过弹窗提示错误的接口
        if (!ignore.includes(url)) {
          if (err_msg) {
            $message(err_msg, "ERROR");
            return Promise.reject(err_msg);
          }
          $loading.closeRequset();
        }

        return response;
      },
      async (error: AxiosError) => {
        const err_msg = handleError(error);
        const url = error.config!.url!;

        //过滤不需要关闭全屏loading和通过弹窗提示错误的接口
        if (!ignore.includes(url)) {
          if (err_msg) $message(err_msg, "ERROR");
          $loading.closeRequset();
        }

        return Promise.reject(err_msg);
      }
    );
  }

  get<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.get(url, { params, ...config });
  }

  post<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.post(url, params, config);
  }

  put<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.put(url, params, config);
  }

  delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ...config });
  }
}

export default new RequestUser(user);
