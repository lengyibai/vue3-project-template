// import { showLoadingToast, allowMultipleToast } from "vant";
// import { ref } from "vue";

// allowMultipleToast();

// let loadingStatus: any;
// const loadings = ref<any[]>([]);

// /** @description 显示 */
// const show = () => {
//   loadingStatus = showLoadingToast({
//     message: "加载中...",
//     forbidClick: true,
//     duration: 0,
//     overlay: true,
//   });
//   loadings.value.push(loadingStatus);
// };

// /** @description 关闭 */
// const close = () => {
//   loadings.value[0]?.close();
//   loadings.value.shift();
// };

// const loading = {
//   show,
//   close,
// };

// export default loading;
