import { useLoginStore } from "./user.store";
import type { User } from "../types";

describe("user store", () => {
  const mockUser = {
    id: 1,
    name: "Иван Иванов",
    email: "ivan.ivanov@bk.com",
  } as User;

  beforeEach(() => {
    useLoginStore.setState({
      user: {} as User,
    });
  });

  it("Добавление пользователя", () => {
    useLoginStore.getState().actions.setUser(mockUser);
    expect(useLoginStore.getState().user).toEqual(mockUser);
  });

  it("Удаление пользователя", () => {
    useLoginStore.getState().actions.setUser(mockUser);
    useLoginStore.getState().actions.clearUser();
    expect(useLoginStore.getState().user).toEqual({});
  });
});
