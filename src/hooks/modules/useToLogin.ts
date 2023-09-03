import { ControlStore } from "@/stores/modules/control";
import { UserStore } from "@/stores/modules/user";

const useToLogin = () => {
  const $controlStore = ControlStore();
  const $userStore = UserStore();

  /** @description 是否跳转登录 */
  const toLogin = () => {
    if ($userStore.status) {
      return false;
    } else {
      $controlStore.setLogin(true);
      return true;
    }
  };

  return {
    toLogin,
  };
};

export { useToLogin };
