import type { User } from "@/entities/user/model/types";

export type MessagesDto = {
  id: number;
  chatId: number | undefined;
  senderId: number | undefined;
  sender: User;
  text: string;
  createdAt: string;
  isDelivered: boolean;
  isRead: boolean;
  isSent: boolean;
  clientId?: string;
};
