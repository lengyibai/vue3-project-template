/** @description 消息提醒 */
export interface MsgText {
  /** 唯一值 */
  id: number;
  /** 提示内容 */
  text: string;
  /** 提示类型 */
  type: "DEFAULT" | "SUCCESS" | "WARNING" | "ERROR";
}
