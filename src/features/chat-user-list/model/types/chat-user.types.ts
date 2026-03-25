export type ChatUser = {
  id: number;
  name: string;
  createdAt: string;
  lastMessage: string;
  isRead: boolean;
  isOnline: boolean;
  countMessage: number;
  avatarUrl?: string;
};
