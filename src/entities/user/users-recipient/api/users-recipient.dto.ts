import type { UserLogin } from "@/entities/user/user-login/model/types";
import type { StatusMessage } from "@/entities/messages/model/types";

export type UsersRecipientDto = {
  createdAt: string;
  lastMessage: string;
  countUnreadMessage: number;
  typedI: boolean;
} & Omit<UserLogin, "email"> &
  StatusMessage;
