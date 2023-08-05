import http from "@/api/helper";
import { API_URL } from "@/api/config";
import type { Result, Request } from "@/api/interface";

/** @description 密码登录 */
const loginPwd = () => {
  return http.post(API_URL.Chat.MSG);
};

export default {
  loginPwd,
};
