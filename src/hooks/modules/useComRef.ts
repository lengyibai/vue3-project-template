import { ref } from "vue";

export const useComRef = <T extends abstract new (...args: any) => any>(comp: T) => ref<InstanceType<T>>();
//const formRef = useComRef(ElForm)
