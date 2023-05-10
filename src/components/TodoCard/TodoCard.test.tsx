import { render, screen } from "@testing-library/react";
import todosMocks from "../../mocks/todosMocks";
import TodoCard from "./TodoCard";

describe("Given a TodoCard component", () => {
  describe("When it receives a todo named run", () => {
    test("Then it should show a todo with a heading 'run'", () => {
      const todo = todosMocks[0];

      const expectedTitle = todo.name;

      render(<TodoCard todo={todo} />);

      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
