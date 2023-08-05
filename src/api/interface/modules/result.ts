/** @description 返回参数 */
export namespace Result {
  // * 请求响应参数
  interface Self<T = any> {
    data: T;
    code: string;
    msg: string;
  }

  /** @description 用户相关 */
  export namespace UserInfo {
    /** @description 注册返回结果 */
    export type Register = Self<{
      code: number;
      data: any;
      msg: string;
    }>;
  }
}
