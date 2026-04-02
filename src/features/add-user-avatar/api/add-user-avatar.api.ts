import { jsonApiInstance } from "@/shared/api";
import type { AddUserAvatarDto } from "./add-user-avatar.dto";

export const addUserAvatarApi = {
  baseKey: "addUserAvatar",
  sendFile: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return jsonApiInstance<AddUserAvatarDto>("/users/upload", {
      method: "POST",
      json: formData,
    });
  },
};
