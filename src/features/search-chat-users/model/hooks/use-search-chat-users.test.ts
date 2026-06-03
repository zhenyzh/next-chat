import { act, renderHook } from "@testing-library/react";
import { useSearchChatUsers } from "./use-search-chat-users";
import {
  removeQueryMock,
  setQueryMock,
} from "@/tests/mock/use-search-query-params-mock";

describe("useSearchChatUsers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockValue = "aaa";

  it("Вводим текст и устанавливаем значение в url", () => {
    const { result } = renderHook(() => useSearchChatUsers());
    act(() => {
      result.current.onChange(mockValue);
    });
    expect(setQueryMock).toHaveBeenCalledWith({
      recipientSearch: mockValue,
    });
    expect(result.current.value).toBe(mockValue);
  });

  it("Сбрасывается поиск при пустой строке", () => {
    const { result } = renderHook(() => useSearchChatUsers());
    act(() => {
      result.current.onChange("");
    });
    expect(result.current.value).toBe("");
    expect(removeQueryMock).toHaveBeenCalledWith(["recipientSearch"]);
    expect(setQueryMock).not.toHaveBeenCalled();
  });

  it("Очищается значение и удаляется query при onReset", () => {
    const { result } = renderHook(() => useSearchChatUsers());
    act(() => {
      result.current.onChange(mockValue);
    });
    act(() => {
      result.current.onReset();
    });
    expect(result.current.value).toBe("");
    expect(removeQueryMock).toHaveBeenCalledWith(["recipientSearch"]);
  });
});
