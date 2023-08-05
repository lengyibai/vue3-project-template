import mitt from "mitt";

type EventData = {};

type MittEventMap = {
  [key in keyof EventData]: EventData[key];
};

const emitter = mitt<MittEventMap>();
export default emitter;
