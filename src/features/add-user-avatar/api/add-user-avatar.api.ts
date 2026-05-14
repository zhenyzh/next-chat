import { apiInstance } from "@/shared/api";
import type { AddUserAvatarDto } from "./add-user-avatar.dto";

export const addUserAvatarApi = {
  baseKey: "addUserAvatar",
  sendFile: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return apiInstance<AddUserAvatarDto>("/users/upload", {
      method: "POST",
      data: formData,
    });
  },
};
