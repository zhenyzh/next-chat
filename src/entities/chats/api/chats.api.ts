import { jsonApiInstance } from "@/shared/api";
import type { ChatOpenDto } from "../dto";

export const chatsApi = {
  baseKey: "chats",
  chatOpen: ({ userIdOther }: { userIdOther: number }) => {
    return jsonApiInstance<ChatOpenDto>("chats/open", {
      method: "POST",
      json: {
        userIdOther,
      },
    });
  },
};
