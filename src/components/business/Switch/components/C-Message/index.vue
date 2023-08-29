<script setup lang="ts">
import useMessage from "./hooks/useMessage";

import { $bus } from "@/utils";

const { msg, messages } = useMessage();

$bus.on("msg", (data) => {
  msg(data.text, data.type);
});
</script>

<template>
  <transition name="fade">
    <div v-show="messages.length" class="k-message">
      <transition-group name="message">
        <div
          v-for="(item, index) in messages"
          :key="item.id"
          class="message"
          :class="item.type"
          :style="{
            transform: `translateX(-50%) translateY(${index * 100 + index * 25}%)`,
          }"
        >
          <span v-html="item.text"></span>
          <div class="bg"></div>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
