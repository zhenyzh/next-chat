export const socketEvent = {
  join_chat: "join_chat",
  chat_message_new: "chat_message_new",
  join_chat_success: "join_chat_success",
} as const;

export type SocketEvent = (typeof socketEvent)[keyof typeof socketEvent];
