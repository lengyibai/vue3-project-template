import { AxiosResponse, AxiosError } from "axios";

import userStore from "@/stores/modules/user";

/** @description 处理错误 */
const handleError = (err: AxiosError) => {
  if (err.code === "ERR_CANCELED") return "请求已取消";
  if (err.code === "ERR_NETWORK") return "网络错误";

  const $userStore = userStore();

  const code = err.response?.status;

  const messages: Record<string | number, any> = {
    0: () => "网络错误",
    502: () => "服务器同时处理消息过多，请几秒后重试",
    500: () => "服务器故障",
    504: () => "请求超时",
    400: () => "请求参数错误",
    403: () => "请求被拒绝，请联系管理员",
    401: () => "没有访问权限",
    404: () => "请求地址不存在",
    428: () => "验证码无效",
    ERR_NETWORK: () => "网络错误",
    ERR_CANCELED: () => "请求已取消",
  };

  if (code === 424) {
    $userStore.clearToken();
    return "用户凭证已过期";
  }
  const message = handleResponse(err.response) || messages[code || 0]?.();

  return message;
};

/** @description 处理响应 */
const handleResponse = (res?: AxiosResponse) => {
  if (res?.data.code === 1) {
    const tip = res.data.msg;
    return tip;
  }

  return "";
};

export { handleError, handleResponse };
