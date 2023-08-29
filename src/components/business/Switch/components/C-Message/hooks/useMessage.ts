import { reactive } from "vue";
import dayjs from "dayjs";

import type { MsgText } from "../interface";

export default () => {
  const messages = reactive<MsgText[]>([]); //消息队列

  const msg = (text = "未设置提示", type: "DEFAULT" | "SUCCESS" | "WARNING" | "ERROR") => {
    const text_length = text.split("").length / 5; //获取文字长度
    const time = text_length > 3 ? text_length : text_length + 1; //通过文字长度，设置显示时长

    //延迟提醒，避免与点击操作同时播放
    setTimeout(() => {
      //创建消息内容
      const msgText: MsgText = {
        id: dayjs().valueOf(),
        text,
        type,
      };

      //将消息内容添加进消息队列
      messages.unshift(msgText);
      setTimeout(() => {
        messages.pop();
      }, time * 1000);
    });
  };

  return {
    /** 消息队列 */
    messages,
    msg,
  };
};
