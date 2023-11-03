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

export const getAssetsFile = (name: string) => {
  return new URL(`/src/assets/imgs/${name}.png`, import.meta.url).href;
};
