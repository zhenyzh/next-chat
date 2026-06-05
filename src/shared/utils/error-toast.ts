import { toast } from "react-toastify";

export const errorToast = (message: string, error?: unknown) => {
  toast(message, { theme: "dark", type: "error" });

  if (error) {
    console.error(`${message}\n`, error);
  }
};
