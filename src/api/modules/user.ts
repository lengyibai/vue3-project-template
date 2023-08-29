import http from "@/api/helper";
import { API_URL } from "@/api/config";
import type { Result } from "@/api/interface";

/** @description 密码登录 */
export const loginPwd = () => {
  return http.post<Result.UserInfo>(API_URL.Chat.MSG);
};
