export const socketEvent = {
  join_chat: "join_chat",
  leave_chat: "leave_chat",
  join_chat_success: "join_chat_success",
  leave_chat_success: "leave_chat_success",
  chat_message_new: "chat_message_new",
  typing: "typing",
  stop_typing: "stop_typing",
  user_typing: "user_typing",
  user_stop_typing: "user_stop_typing",
} as const;

export type SocketEvent = (typeof socketEvent)[keyof typeof socketEvent];
