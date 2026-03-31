import type { User } from "@/entities/user/model/types";
import type { StatusMessage } from "@/entities/messages";

export type ChatUsers = {
  createdAt: string;
  lastMessage: string;
  countUnreadMessage: number;
  status: StatusMessage;
  typedI: boolean;
} & Omit<User, "email">;
