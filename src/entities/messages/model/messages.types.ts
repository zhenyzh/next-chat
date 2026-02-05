export type Message = {
  id: string;
  fromMe: boolean;
  user: {
    id: string;
    fullName: string;
    avatarUrl: string;
    email: string;
  };
  content: MessageContent;
  date: string;
};

export type MessageContent = {
  text?: string;
  imageUrl?: string[];
  files?: FileAttachment[];
  stickerId?: string;
};

export type FileAttachment = {
  fileName: string;
  fileUrl: string;
};
