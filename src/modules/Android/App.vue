<script setup lang="ts">
import { $message } from "@/utils";

setTimeout(() => {
  $message("你好", "ERROR");
}, 3000);
</script>

<template>
  <div class="main">main</div>
  <Switch />
</template>
