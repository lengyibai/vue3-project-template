<script setup lang="ts">
import { ref } from "vue";

import { $bus } from "@/utils";

/** 显示loading */
const show = ref(false);
/** loading描述 */
const text = ref("");

$bus.on("loading", (v) => {
  show.value = v.show;

  if (v.text) {
    text.value = v.text;
  }
});
</script>

<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="show" class="k-loading">loading</div>
    </transition>
  </teleport>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
