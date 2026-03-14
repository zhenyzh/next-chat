import type { User } from "@/entities/user/model/types";

export type MessagesDto = {
  id: number;
  chatId: number;
  senderId: number;
  sender: User;
  text: string;
  createdAt: string;
};
