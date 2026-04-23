import type { User } from "@/entities/user/model/types";
import type {
  FileAttach,
  StatusMessage,
} from "@/entities/messages/model/types";

export type ChatUsers = {
  createdAt: string;
  lastMessage: string;
  attachments: FileAttach[];
  countUnreadMessage: number;
  status: StatusMessage;
  typedI: boolean;
} & Omit<User, "email">;
