<script setup lang="ts">
import Navbar from "./components/Navbar/index.vue";
import Tabbar from "./components/Tabbar/index.vue";

defineOptions({
  name: "LayoutMain",
});
</script>

<template>
  <div class="layout-main">
    <Navbar />

    <div class="main-container">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
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
