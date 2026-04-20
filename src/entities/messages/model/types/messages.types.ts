export type Message = {
  id: number;
  chatId: number | undefined;
  fromMe: boolean;
  sender: {
    id: number;
    name: string;
    avatarUrl?: string;
    email: string;
  };
  content: MessageContentType;
  statusMessage: StatusMessage;
  time?: string;
};

export type MessageContentType = {
  text?: string;
  imageUrl?: string[];
  files?: { file: File }[];
  sticker?: string;
};

export type StatusMessage = {
  isSent: boolean;
  isDelivered: boolean;
  isRead: boolean;
};
