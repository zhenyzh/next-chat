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
  images?: FileAttach[];
  files?: FileAttach[];
  sticker?: string;
};

export type FileAttach = {
  id: string;
  url: string;
  name: string;
  size: number;
  type: FileAttachType;
};

export type FileAttachType = "image" | "file";

export type StatusMessage = {
  isSent: boolean;
  isDelivered: boolean;
  isRead: boolean;
};
