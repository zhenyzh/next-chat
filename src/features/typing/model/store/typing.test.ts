import { useTypingStore } from "./typing.store";

describe("typing.store", () => {
  beforeEach(() => {
    useTypingStore.setState({ typingUsersIds: [] });
  });

  it("Добавление пользователя", () => {
    useTypingStore.getState().actions.addTypingUsers(1);
    expect(useTypingStore.getState().typingUsersIds).toEqual([1]);
  });

  it("Не дублируются пользователи", () => {
    useTypingStore.getState().actions.addTypingUsers(1);
    useTypingStore.getState().actions.addTypingUsers(1);
    expect(useTypingStore.getState().typingUsersIds).toEqual([1]);
  });

  it("Добавление нескольких пользователей", () => {
    useTypingStore.getState().actions.addTypingUsers(1);
    useTypingStore.getState().actions.addTypingUsers(2);
    expect(useTypingStore.getState().typingUsersIds).toEqual([1, 2]);
  });

  it("Удаление пользователя из списка печатающих", () => {
    useTypingStore.setState({ typingUsersIds: [1, 2, 3] });
    useTypingStore.getState().actions.removeTypingUsers(2);
    expect(useTypingStore.getState().typingUsersIds).toEqual([1, 3]);
  });
});
