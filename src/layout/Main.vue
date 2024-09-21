<script setup lang="ts">
import Navbar from "./components/Navbar/index.vue";
import Tabbar from "./components/Tabbar/index.vue";

import { $loading } from "@/utils";

defineOptions({
  name: "LayoutMain",
});

/* 路由组件加载结束后触发 */
const onComponentMounted = () => {
  $loading.close();
};
</script>

<template>
  <div class="layout-main">
    <Navbar />

    <div class="main-container">
      <!-- 路由页面 -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" @vue:mounted="onComponentMounted" />
        </transition>
      </router-view>
    </div>

    <Tabbar />
  </div>
</template>

<style scoped lang="less">
.layout-main {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  .main-container {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
