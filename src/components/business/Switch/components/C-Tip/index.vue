<script setup lang="ts">
import useTip from "./hooks/useTip"; //消息弹窗

import { $bus } from "@/utils";

const { show_tip, tip_data, cancel, confirm } = useTip();

$bus.on("tip", (v) => {
  tip_data.value = v;
  show_tip.value = true;
});
</script>

<template>
  <transition name="fade">
    <div v-if="show_tip" class="c-dialog">
      <div class="global_dialog">
        <span class="title">提示</span>
        <div class="content">{{ tip_data?.text }}</div>
        <div class="btns">
          <m-button v-if="tip_data!.cancel" style="margin-right: 3rem" @click="cancel">取消</m-button>
          <m-button type="primary" @click="confirm">确定</m-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
