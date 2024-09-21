import { $bus } from "./eventBus";

const $message = (text: string, type: "DEFAULT" | "SUCCESS" | "WARNING" | "ERROR") => {
  $bus.emit("msg", {
    text,
    type,
  });
};

export { $message };
