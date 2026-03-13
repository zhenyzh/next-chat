export type MessagesDto = {
  id: number;
  chatId: number;
  senderId: number;
  sender: SenderMessagesDto;
  text: string;
  createdAt: string;
};

export type SenderMessagesDto = {
  id: number;
  email: string;
  name: string;
};
