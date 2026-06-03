import { render, screen } from "@testing-library/react";
import { SearchChatUsers } from "./search-chat-users";

it("Рендер поля поиска", () => {
  render(<SearchChatUsers />);
  expect(screen.getByPlaceholderText("Поиск")).toBeInTheDocument();
});
