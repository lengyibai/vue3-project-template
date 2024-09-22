<script setup lang="ts">
import Navbar from "./components/Navbar/index.vue";

import { $loading } from "@/utils";

defineOptions({
  name: "LayoutPage",
});

/* 路由组件加载结束后触发 */
const onComponentMounted = () => {
  $loading.close();
};
</script>

<template>
  <div class="layout-page">
    <Navbar />

    <div class="page-container">
      <!-- 路由页面 -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" @vue:mounted="onComponentMounted" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="less">
.layout-page {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--theme-color-two);

  .page-container {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
