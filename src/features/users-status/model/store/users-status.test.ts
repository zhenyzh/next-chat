import { useUsersStatusStore } from "./users-status.store";

describe("users-status.store", () => {
  beforeEach(() => {
    useUsersStatusStore.setState({ usersStatus: [] });
  });

  const mockId = 1;

  it("Добавление онлайн пользователя", () => {
    useUsersStatusStore.getState().actions.setOnlineUser(mockId);
    expect(useUsersStatusStore.getState().usersStatus).toEqual([mockId]);
  });

  it("Не записываются повторяющиеся пользователи", () => {
    useUsersStatusStore.getState().actions.setOnlineUser(mockId);
    useUsersStatusStore.getState().actions.setOnlineUser(mockId);
    expect(useUsersStatusStore.getState().usersStatus).toEqual([mockId]);
  });

  it("Пользователь удаляется после выхода из приложения", () => {
    useUsersStatusStore.setState({ usersStatus: [1, 2, 3] });
    useUsersStatusStore.getState().actions.setOfflineUser(2);
    expect(useUsersStatusStore.getState().usersStatus).toEqual([1, 3]);
  });
});
