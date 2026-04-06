import { jsonApiInstance } from "@/shared/api";
import type { ChatOpenDto } from "./chat.dto";

export const chatApi = {
  baseKey: "chat",
  chatOpen: ({ recipientId }: { recipientId: number }) => {
    return jsonApiInstance<ChatOpenDto>("chats/open", {
      method: "POST",
      json: {
        recipientId,
      },
    });
  },
};
