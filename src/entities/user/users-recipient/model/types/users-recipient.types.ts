import type { User } from "@/entities/user/user/model/types";
import type { StatusMessage } from "@/entities/messages/model/types";

export type UsersRecipient = {
  createdAt: string;
  lastMessage: string;
  countUnreadMessage: number;
  status: StatusMessage;
  typedI: boolean;
} & Omit<User, "email">;
