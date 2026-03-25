import { jsonApiInstance } from "@/shared/api";
import type { ChatOpenDto } from "./chat.dto";

export const chatApi = {
  baseKey: "chat",
  chatOpen: ({ userIdOther }: { userIdOther: number }) => {
    return jsonApiInstance<ChatOpenDto>("chats/open", {
      method: "POST",
      json: {
        userIdOther,
      },
    });
  },
};
