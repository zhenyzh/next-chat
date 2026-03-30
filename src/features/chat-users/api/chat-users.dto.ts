import type { User } from "@/entities/user/model/types";
import type { StatusMessage } from "@/entities/messages";

export type ChatUsersDto = Omit<User, "email"> &
  StatusMessage & {
    createdAt: string;
    lastMessage: string;
    countUnreadMessage: number;
  };
