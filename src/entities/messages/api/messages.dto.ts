import type { FileAttach, StatusMessage } from "../model/types";
import type { User } from "@/entities/user/model/types";

export type MessagesDto = {
  id: number;
  chatId: number | undefined;
  senderId: number | undefined;
  sender: User;
  createdAt: string;
  text?: string;
  audio?: FileAttach;
  clientId?: string;
  attachments?: FileAttach[];
} & StatusMessage;
