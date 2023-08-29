import { $bus } from "@/utils";

let loadingTimeout: NodeJS.Timeout | null;
let needLoadingRequestCount = 0;
let timer: NodeJS.Timeout | undefined;

/** @description 开启loading */
const show = async (text: string) => {
  timer = setTimeout(() => {
    if (loadingTimeout) clearTimeout(loadingTimeout);

    $bus.emit("loading", {
      show: true,
      text: "正在" + text,
    });
  }, 50);

  needLoadingRequestCount++;
};

/** @description 关闭loading */
const close = async () => {
  clearTimeout(timer);

  needLoadingRequestCount--;

  if (needLoadingRequestCount <= 0) {
    loadingTimeout = setTimeout(() => {
      $bus.emit("loading", { show: false });
      loadingTimeout = null;
    }, 1000);
  }
};

export default { show, close };
