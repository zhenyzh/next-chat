import { render, screen } from "@testing-library/react";
import { SearchChatUsers } from "./search-chat-users";

test("Рендер поля поиска", () => {
  render(<SearchChatUsers />);
  expect(screen.getByPlaceholderText("Поиск")).toBeInTheDocument();
});
