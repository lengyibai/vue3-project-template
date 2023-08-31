<script setup lang="ts">
interface Props {
  type?: "default" | "primary" | "danger";
  size?: "large" | "small";
  line?: boolean;
  fontSize?: string;
}
withDefaults(defineProps<Props>(), {
  type: "default",
  size: "small",
});
</script>

<template>
  <div
    class="m-button"
    :class="[type, size, line ? 'line' : 'full']"
    :style="{
      'font-size': fontSize,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
