import type { MessagesDto } from "../../dto";
import type { ChatMessageGroup } from "../../model/types";

export function groupMessageByDateSelectors(
  messages: MessagesDto[] | undefined,
  userIdMe: number | undefined,
): ChatMessageGroup[] {
  if (!messages?.length) {
    return [];
  }

  const modifiedMessages = messages.reduce<Record<string, ChatMessageGroup>>(
    (obj, message) => {
      const date = new Date(message.createdAt).toDateString();

      const messageData = {
        id: message.id,
        fromMe: message.senderId === userIdMe,
        chatId: message.chatId,
        sender: message.sender,
        content: { text: message.text },
      };

      if (!obj[date]) {
        obj[date] = {
          data: date,
          messages: [],
        };
      }

      obj[date].messages.push(messageData);

      return obj;
    },
    {},
  );

  return Object.values(modifiedMessages);
}
