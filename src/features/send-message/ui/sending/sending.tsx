import { SendHorizontal } from "lucide-react";

export function Sending() {
  return (
    <SendHorizontal
      onClick={() => alert("иконка send ")}
      style={{ cursor: "pointer" }}
    />
  );
}
