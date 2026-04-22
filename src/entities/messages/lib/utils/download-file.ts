import type { FileAttach } from "../../model/types";
import { patchUrl } from "@/shared/configs";

export async function downloadFile(file: FileAttach) {
  const url = patchUrl(file.url);
  if (!url) return;
  const res = await fetch(url);

  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = objectUrl;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(objectUrl);
}
