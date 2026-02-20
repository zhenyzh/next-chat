export type SendMessageStore = SendMessage & { actions: SendMessageActions };

export type SendMessage = {
  text: string;
};

export type SendMessageActions = {
  setText: (text: string) => void;
  appendEmoji: (emoji: string) => void;
};
