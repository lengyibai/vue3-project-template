import { ToastType, allowMultipleToast } from "vant";
import { showToast } from "vant";

allowMultipleToast();
const Toast = (text: string, type: ToastType) => {
  showToast({
    type: type,
    message: text,
    duration: 2000,
  });
};

export default Toast;
