<script setup lang="ts">
import Navbar from "./components/Navbar/index.vue";

defineOptions({
  name: "LayoutPage",
});
</script>

<template>
  <div class="layout-page">
    <Navbar />

    <div class="page-container">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
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

  .page-container {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
