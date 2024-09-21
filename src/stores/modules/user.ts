import { defineStore } from "pinia";
import { ref } from "vue";

/** @description 用户信息 */
const UserStore = defineStore("user", () => {
  const ExposeData = {
    status: ref(false),
  };

  const ExposeMethod = {
    clearToken() {},
  };

  return {
    ...ExposeData,
    ...ExposeMethod,
  };
});

export { UserStore };
