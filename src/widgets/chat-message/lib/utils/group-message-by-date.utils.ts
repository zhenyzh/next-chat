import type { MessagesDto } from "../../dto";
import type { ChatMessageGroup } from "../../model/types";

export function groupMessagesByDateUtils(
  messages: MessagesDto[] | undefined,
  userIdMe?: number,
): ChatMessageGroup[] {
  if (!messages?.length) return [];

  const map = new Map<string, ChatMessageGroup>();

  for (const msg of messages) {
    const date = new Date(msg.createdAt).toDateString();

    let group = map.get(date);

    if (!group) {
      group = {
        data: date,
        messages: [],
      };
      map.set(date, group);
    }

    group.messages.push({
      id: msg.id,
      fromMe: msg.senderId === userIdMe,
      chatId: msg.chatId,
      sender: msg.sender,
      content: { text: msg.text },
    });
  }
  return [...map.values()];
}
