import { $bus } from "..";

export default (config: { text: string; cancel?: () => void; confirm?: () => void }) => {
  $bus.emit("tip", config);
};
