import { defineStore } from "pinia";
import { ref } from "vue";

/** @description 用户信息 */
const UserStore = defineStore("user", () => {
  /** 是否登录 */
  const status = ref(false);
  /** 用户信息 */
  const user_info = ref<Global.User.Info>();

  /** @description 获取用户信息 */
  const getUserInfo = async () => {};

  /** @description 自动登录 */
  const autoLogin = () => {
    const token = localStorage.getItem("user_token");
    if (token) {
      getUserInfo();
    }
  };

  /** @description 退出登录 */
  const clearToken = () => {
    localStorage.removeItem("user_token");
    user_info.value = undefined;
    status.value = false;
  };

  return {
    /** 是否登录 */
    status,
    /** 用户信息 */
    user_info,
    getUserInfo,
    autoLogin,
    clearToken,
  };
});

export { UserStore };
