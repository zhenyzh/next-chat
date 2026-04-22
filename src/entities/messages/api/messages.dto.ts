import type { FileAttach, StatusMessage } from "../model/types";
import type { User } from "@/entities/user/user/model/types";

export type MessagesDto = {
  id: number;
  chatId: number | undefined;
  senderId: number | undefined;
  sender: User;
  text: string;
  createdAt: string;
  clientId?: string;
  attachments: FileAttach[];
} & StatusMessage;
