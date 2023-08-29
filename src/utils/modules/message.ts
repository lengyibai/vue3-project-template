import { $bus } from "..";

export default (text: string, type: "DEFAULT" | "SUCCESS" | "WARNING" | "ERROR") => {
  $bus.emit("msg", {
    text,
    type,
  });
};
