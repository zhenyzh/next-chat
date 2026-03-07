export type ChatUser = {
  id: string;
  name: string;
  createdAt: string;
  lastMessage: string;
  isRead: boolean;
  isOnline: boolean;
  countMessage: number;
  avatarUrl?: string;
};
