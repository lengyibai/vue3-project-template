import mitt from "mitt";

type EventData = {
  loading: { text?: string; show: boolean };
  msg: { text: string; type: "DEFAULT" | "SUCCESS" | "WARNING" | "ERROR" };
};

type MittEventMap = {
  [key in keyof EventData]: EventData[key];
};

const $bus = mitt<MittEventMap>();

export { $bus };
