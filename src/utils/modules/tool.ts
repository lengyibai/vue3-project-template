/** @description 节流 */
export const throttleDelay = (() => {
  let timer: NodeJS.Timeout | null;
  return function (fn: () => void, delay: number | undefined) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, delay);
    }
  };
})();

export default {
  /** 节流 */
  throttleDelay,
};
