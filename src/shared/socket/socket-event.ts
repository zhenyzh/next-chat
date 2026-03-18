export const socketEvent = {
  message: "message",
} as const;

export type SocketEvent = (typeof socketEvent)[keyof typeof socketEvent];
