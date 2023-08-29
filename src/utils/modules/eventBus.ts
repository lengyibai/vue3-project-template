import mitt from "mitt";

type EventData = {
  loading: { text?: string; show: boolean };
  tip: { text: string; cancel?: () => void; confirm?: () => void };
  msg: { text: string; type: "DEFAULT" | "SUCCESS" | "WARNING" | "ERROR" };
};

type MittEventMap = {
  [key in keyof EventData]: EventData[key];
};

const emitter = mitt<MittEventMap>();
export default emitter;
