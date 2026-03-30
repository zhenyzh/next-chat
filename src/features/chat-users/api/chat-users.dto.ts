import type { User } from "@/entities/user/model/types";
import type { StatusMessage } from "@/entities/messages";

export type ChatUsersDto = {
  createdAt: string;
  lastMessage: string;
  countUnreadMessage: number;
} & Omit<User, "email"> &
  StatusMessage;
