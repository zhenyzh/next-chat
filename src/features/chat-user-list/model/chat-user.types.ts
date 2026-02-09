export type ChatUser = {
  id: string;
  name: string;
  createdAt: string;
  message: string;
  isRead: boolean;
  isOnline: boolean;
  countMessage: number;
  avatarUrl?: string;
};
