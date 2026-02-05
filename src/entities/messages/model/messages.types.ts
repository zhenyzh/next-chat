export type Message = {
  id: string;
  fromMe: boolean;
  user: {
    id: string;
    fullName: string;
    avatarUrl: string;
    email: string;
  };
  content: MessageContentType;
  date: string;
};

export type MessageContentType = {
  text?: string;
  imageUrl?: string[];
  files?: FileAttachment[];
  stickerId?: string;
};

export type FileAttachment = {
  fileName: string;
  fileUrl: string;
};
