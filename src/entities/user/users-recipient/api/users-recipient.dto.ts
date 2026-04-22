import type { User } from "@/entities/user/user/model/types";
import type { StatusMessage } from "@/entities/messages/model/types";

export type UsersRecipientDto = {
  createdAt: string;
  lastMessage: string;
  countUnreadMessage: number;
  typedI: boolean;
} & Omit<User, "email"> &
  StatusMessage;
