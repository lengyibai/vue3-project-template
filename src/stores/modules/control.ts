import { defineStore } from "pinia";
import { ref } from "vue";

/** @description  */
const ControlStore = defineStore("control", () => {
  /** 是否显示登录弹窗 */
  const show_login = ref(false);

  /** @description 设置显示登录弹窗 */
  const setLogin = (v: boolean) => {
    show_login.value = v;
  };

  return { show_login, setLogin };
});

export { ControlStore };
