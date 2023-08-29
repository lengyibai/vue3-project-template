<script setup lang="ts">
import { ref } from "vue";

import { $bus } from "@/utils";

const show = ref(false);
const text = ref();

$bus.on("loading", (v) => {
  show.value = v.show;
  text.value = v.text;
});
</script>

<template>
  <transition name="fade">
    <div v-if="show" class="c-loading">
      <div class="loading-box">
        <div class="loader-item"></div>
        <div class="loader-item"></div>
        <div class="loader-item"></div>
      </div>
      <span v-show="text" class="text">{{ text }}</span>
    </div>
  </transition>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
