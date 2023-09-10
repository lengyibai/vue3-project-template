/* Loading防抖 */

import { $bus } from "..";

let loadingTimeout: NodeJS.Timeout | undefined;
let timer: NodeJS.Timeout;
let needLoadingRequestCount = 0;

/** @description 开启loading */
const showRequest = async (text: string) => {
  if (loadingTimeout) clearTimeout(loadingTimeout);

  $bus.emit("loading", {
    show: true,
    text,
  });

  needLoadingRequestCount++;
};

/** @description 关闭loading */
const closeRequset = async () => {
  needLoadingRequestCount--;

  if (needLoadingRequestCount <= 0) {
    loadingTimeout = setTimeout(() => {
      $bus.emit("loading", { show: false });
      loadingTimeout = undefined;
    }, 1000);
  }
};

const showView = async (text: string) => {
  timer = setTimeout(() => {
    $bus.emit("loading", {
      show: true,
      text,
    });
  }, 500);

  needLoadingRequestCount++;
};

/** @description 关闭loading */
const closeView = async () => {
  clearTimeout(timer);

  needLoadingRequestCount--;

  if (needLoadingRequestCount <= 0) {
    $bus.emit("loading", { show: false });
  }
};

export default { showRequest, closeRequset, showView, closeView };
