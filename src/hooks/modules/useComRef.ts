import { ref } from "vue";

export const useComRef = <T extends abstract new (...args: any) => any>() => ref<InstanceType<T>>();
//const formRef = useComRef<typeof ElForm>
