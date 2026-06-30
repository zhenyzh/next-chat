import type { ChatMessageGroup } from "../../model/types";
import { messageGroup } from "../selectors";
import type { MessagesDto } from "@/entities/messages/api";
import { formatDate_yyyy_MM_dd } from "@/shared/utils";

export function groupMessagesByDate(
  messages: MessagesDto[] | undefined,
  userIdMe?: number,
): ChatMessageGroup[] {
  if (!messages?.length) return [];

  const map = new Map<string, ChatMessageGroup>();

  for (const msg of messages) {
    if (!msg) continue;

    const message = messageGroup(msg, userIdMe);
    const date = formatDate_yyyy_MM_dd(msg.createdAt);
    let group = map.get(date);

    if (!group) {
      group = {
        date,
        messages: [],
      };
      map.set(date, group);
    }

    group.messages.push(message);
  }
  return [...map.values()];
}
