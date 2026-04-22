import type { FileAttach, StatusMessage } from "../model/types";
import type { UserLogin } from "@/entities/user/user-login/model/types";

export type MessagesDto = {
  id: number;
  chatId: number | undefined;
  senderId: number | undefined;
  sender: UserLogin;
  text: string;
  createdAt: string;
  clientId?: string;
  attachments: FileAttach[];
} & StatusMessage;
