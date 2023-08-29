<script setup lang="ts">
import { ref, computed } from "vue";

import { useInputCoord } from "@/hooks";

interface Props {
  modelValue?: any;
  placeholder?: string;
  /** 左上角描述 */
  label?: string;
  /** 是否显示为密码输入框 */
  pwd?: boolean;
  /** 纯数字 */
  number?: boolean;
  /** 最大长度 */
  maxLength?: number;
  /** 限制只能输入字母和数字 */
  letterNum?: boolean;
  /** 是否支持输入坐标 */
  coord?: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  blur: [];
  "send-code": [];
  "update:modelValue": [v: any];
}>();

/** 是否处于输入坐标 */
const is_coord = ref(false);
/** 输入的坐标 */
const input_coord = ref<string[]>([]);
/** 是否显示密码 */
const show_pwd = ref(false);
/** 小眼睛 */
const eye = computed(() => (show_pwd.value ? "icon-eye-open" : "icon-eye-close"));

/* 是否显示密码 */
const handleEye = () => {
  show_pwd.value = !show_pwd.value;
};

/* 输入触发 */
const handleInput = (e: Event) => {
  const el = e.target as HTMLInputElement;

  if (props.maxLength) {
    el.value = el.value.slice(0, props.maxLength);
  }

  if (props.number) {
    el.value = el.value.replace(/[^0-9]/g, "");
  }

  if (props.letterNum) {
    el.value = el.value.replace(/[^a-zA-Z0-9\s]/g, "");
  }

  if (props.coord) {
    const { status, coord } = useInputCoord(el.value);
    is_coord.value = status.value;
    input_coord.value = coord.value;
    el.value = coord.value.join("/");
  }

  emit("update:modelValue", el.value);
};
</script>

<template>
  <div class="form-input">
    <div v-if="label" class="label">{{ label }}</div>
    <div class="box">
      <input
        :value="modelValue"
        :type="!show_pwd && pwd ? 'password' : 'text'"
        :placeholder="placeholder"
        @input="handleInput"
        key="1"
      />
      <i v-if="pwd" :class="eye" class="iconfont eye" @click="handleEye" />
    </div>
    <div v-show="is_coord" class="coord">坐标：X: {{ input_coord[0] }} / Y: {{ input_coord[1] }}</div>
  </div>
</template>

<style scoped lang="less">
@import url("./index.less");
</style>
