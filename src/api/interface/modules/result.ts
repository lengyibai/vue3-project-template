/** 请求响应参数 */
export interface ResultData<T> {
  data: T;
  code: string;
  msg: string;
}

/** @description 返回参数 */
export namespace Result {
  /** @description 用户相关 */
  export interface UserInfo {
    name: string;
  }
}
