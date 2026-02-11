export type Message = {
  chatId: string;
  fromMe: boolean;
  user: {
    id: string;
    fullName: string;
    avatarUrl: string;
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
