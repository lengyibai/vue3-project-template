<script setup lang="ts">
import { ref } from "vue";

interface Props {
  modelValue: string;
  /** 输入框类型 */
  type?: "number" | "text";
  /** 最大长度 */
  maxLength?: number;
  /** 是否为纯数字 */
  digital?: boolean;
  /** 是否只允许输入数字和字母 */
  letterNumber?: boolean;
  /** 是否为整数 */
  integer?: boolean;
}
const $props = withDefaults(defineProps<Props>(), {
  type: "text",
});

const $emit = defineEmits<{
  "update:modelValue": [v: string];
}>();

const input_value = ref("");

const handleInput = (e: Event) => {
  const event = e as InputEvent;
  const el = e.target as HTMLInputElement;
  const v = event.data as string;
  const value = el.value as string;

  if (v === "" && value === "") {
    el.value = "0";
    setTimeout(() => {
      el.value = "";
    });
  }

  if ($props.maxLength) {
    el.value = value.slice(0, $props.maxLength);
  }

  if ($props.digital && ["-", "e", "+"].includes(v)) {
    el.value = input_value.value;
  }

  if ($props.letterNumber && /[^a-zA-Z0-9\s]/g.test(v)) {
    el.value = input_value.value;
  }

  if ($props.integer && v === ".") {
    el.value = input_value.value;
  }

  input_value.value = el.value;
  $emit("update:modelValue", el.value);
};
</script>

<template>
  <div class="form-input">
    <input :type="type" :value="modelValue" @input="handleInput" />
  </div>
</template>
