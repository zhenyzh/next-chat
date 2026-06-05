import { toast } from "react-toastify";

export const warningToast = (message: string) => {
  toast(message, { theme: "dark", type: "warning" });
};
