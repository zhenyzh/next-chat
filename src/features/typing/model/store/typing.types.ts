export type TypingStore = Typing & { actions: TypingActions };

export type Typing = {
  typingUsersIds: number[];
};

export type TypingActions = {
  addTypingUsers: (id: number) => void;
  removeTypingUsers: (id: number) => void;
};
