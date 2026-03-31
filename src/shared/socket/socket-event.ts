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
  user_online_connect: "user_online_connect",
  user_online: "user_online",
  user_offline: "user_offline",
  get_online_users: "get_online_users",
  online_users: "online_users",
  message_delivered: "message_delivered",
  message_read: "message_read",
  users_with_chats_update: "users_with_chats_update",
} as const;

export type SocketEvent = (typeof socketEvent)[keyof typeof socketEvent];
