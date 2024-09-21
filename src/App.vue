<script setup lang="ts">
import { Control } from "./components/business";
import { $loading } from "./utils";

/* 路由组件加载结束后触发 */
const onComponentMounted = () => {
  $loading.close();
};
</script>

<template>
  <!-- 路由页面 -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" @vue:mounted="onComponentMounted" />
    </transition>
  </router-view>

  <!-- 全局开关 -->
  <Control />
</template>
