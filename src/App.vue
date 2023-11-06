<script setup lang="ts">
import { $message, $tip } from "@/utils";

setTimeout(() => {
  $message("你好", "ERROR");

  setTimeout(() => {
    $tip({
      text: "你好，有什么我可以帮助你的吗？",
    });
  }, 1000);
}, 1000);
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <Switch />
</template>
