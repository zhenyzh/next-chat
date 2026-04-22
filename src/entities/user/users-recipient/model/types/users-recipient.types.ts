import type { UserLogin } from "@/entities/user/user-login/model/types";
import type { StatusMessage } from "@/entities/messages/model/types";

export type UsersRecipient = {
  createdAt: string;
  lastMessage: string;
  countUnreadMessage: number;
  status: StatusMessage;
  typedI: boolean;
} & Omit<UserLogin, "email">;
