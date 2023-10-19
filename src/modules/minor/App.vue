<script setup lang="ts">
import { $tip } from "@/utils";

setTimeout(() => {
  $tip({
    text: "你好，有什么我可以帮助你的吗？",
  });
});
</script>

<template>
  <Switch />
  <div class="minor">minor</div>
</template>
