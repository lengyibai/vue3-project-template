/** @description 请求参数 */
export namespace Request {
  /** @description 用户相关 */
  export namespace User {
    /** @description 注册 */
    export interface Register {
      /** 昵称 */
      nickname: string;
      /** 用户名 */
      username: string;
      /** 密码 */
      password: string;
      /** 手机号 */
      phone: string;
    }
  }
}
