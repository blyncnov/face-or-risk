// Toastify
import { toast } from "react-hot-toast";

export const BucksToast = (
  message: string,
  errorType: "success" | "error",
  isDark?: boolean
) => {
  // use a random type of notification
  toast(message, {
    icon: errorType === "success" ? "👏" : "❌",
    style: {
      background: isDark ? "#333" : "#FFF1D7",
      color: errorType === "success" ? "#532929" : "#F05152",
    },
  });
};

export default BucksToast;
