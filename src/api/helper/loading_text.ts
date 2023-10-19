import { API_URL } from "../config";

/** loading文字 */
const loading_text = [[API_URL.Chat.MSG, "正在发送消息"]];

/** @description 通过接口地址获取loading文字 */
export const getLoadingText = (url: string) => {
  const data = loading_text.find((item) => url.includes(item[0]));
  return (data && data[1]) || "加载中...";
};
