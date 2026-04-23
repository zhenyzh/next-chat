import type { User } from "@/entities/user/model/types";
import type {
  FileAttach,
  StatusMessage,
} from "@/entities/messages/model/types";

export type ChatUsersDto = {
  createdAt: string;
  lastMessage: string;
  attachments: FileAttach[];
  countUnreadMessage: number;
  typedI: boolean;
} & Omit<User, "email"> &
  StatusMessage;
