import { defineStore } from "pinia";
import { ref } from "vue";

/** @description  */
const counter = defineStore("counter", () => {
  const count = ref(0);

  return {
    count,
  };
});

export default counter;
