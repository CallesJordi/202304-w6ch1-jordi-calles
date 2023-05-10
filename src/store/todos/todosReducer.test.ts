import { TodosState, loadTodosActionCreator, todosReducer } from "./todosSlice";

describe("Given a todosSlice reducer", () => {
  describe("When it receives an empty array and a payload action with two todos", () => {
    test("Then it should show an array with two todos", () => {
      const currentTodosState: TodosState = { todos: [] };

      const expectedTodosState = {
        todos: [
          {
            id: 1,
            name: "run",
            isDone: true,
          },
          {
            id: 2,
            name: "pee",
            isDone: false,
          },
        ],
      };

      const newTodosState: TodosState = todosReducer(
        currentTodosState,
        loadTodosActionCreator(expectedTodosState.todos)
      );

      expect(newTodosState).toStrictEqual(expectedTodosState);
    });
  });
});
