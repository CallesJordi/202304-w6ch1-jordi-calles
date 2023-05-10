import useApi from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadTodosActionCreator } from "../../store/todos/todosSlice";
import TodoList from "../TodoList/TodoList";
import { useEffect } from "react";

const App = (): JSX.Element => {
  const { getTodos } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const todos = await getTodos();
      dispatch(loadTodosActionCreator(todos));
    })();
  }, [dispatch, getTodos]);

  const todos = useAppSelector((state) => {
    return state.todos.todos;
  });

  return (
    <>
      <h1>ToDos!!</h1>
      <div>
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
