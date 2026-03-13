export type Message = {
  id: number;
  chatId: number;
  fromMe: boolean;
  sender: {
    id: number;
    name: string;
    avatarUrl?: string;
    email: string;
  };
  content: MessageContentType;
};

export type MessageContentType = {
  text?: string;
  imageUrl?: string[];
  files?: FileAttachment[];
  sticker?: string;
};

export type FileAttachment = {
  fileName: string;
  fileUrl: string;
};
