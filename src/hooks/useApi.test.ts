import { renderHook } from "@testing-library/react";
import { server } from "../mocks/server";
import useApi from "./useApi";
import todosMocks from "../mocks/todosMocks";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Given a getTodos function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of todos", async () => {
      const expectListTodos = [todosMocks];
      const {
        result: {
          current: { getTodos },
        },
      } = renderHook(() => useApi());

      const todos = await getTodos();

      expect(todos).toStrictEqual(expectListTodos);
    });
  });
});
