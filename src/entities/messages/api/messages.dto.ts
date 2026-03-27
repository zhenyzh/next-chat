import type { User } from "@/entities/user/model/types";
import type { StatusMessage } from "@/entities/messages";

export type MessagesDto = {
  id: number;
  chatId: number | undefined;
  senderId: number | undefined;
  sender: User;
  text: string;
  createdAt: string;
  clientId?: string;
} & StatusMessage;
