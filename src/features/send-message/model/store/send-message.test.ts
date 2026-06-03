import { useSendMessageStore } from "./send-message.store";

describe("send-message.store", () => {
  beforeEach(() => {
    useSendMessageStore.setState({ message: "" });
  });

  const mockMessage = "text";
  const mockSmile = "🙂";

  it("Добавление сообщения", () => {
    useSendMessageStore.getState().actions.setText(mockMessage);
    expect(useSendMessageStore.getState().message).toBe(mockMessage);
  });

  it("Добавление смайлика", () => {
    useSendMessageStore.getState().actions.appendEmoji(mockSmile);
    expect(useSendMessageStore.getState().message).toBe(mockSmile);
  });

  it("Очистка сообщения", () => {
    useSendMessageStore.setState({ message: mockMessage + mockSmile });
    useSendMessageStore.getState().actions.clearMessage();
    expect(useSendMessageStore.getState().message).toBe("");
  });
});
