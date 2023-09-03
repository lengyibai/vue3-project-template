import { ref } from "vue";

export default () => {
  const show_tip = ref(false);
  const tip_data = ref<{
    text: string;
    cancel?: () => void;
    confirm?: () => void;
  }>();

  const close = () => {
    show_tip.value = false;
  };

  const confirm = () => {
    tip_data.value!.confirm && tip_data.value!.confirm();
    close();
  };

  const cancel = () => {
    tip_data.value!.cancel && tip_data.value!.cancel();
    close();
  };

  return { show_tip, tip_data, confirm, cancel };
};
