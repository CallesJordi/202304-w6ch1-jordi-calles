import { TodosStructure } from "../../types";
import TodoCard from "../TodoCard/TodoCard";

interface TodoListProps {
  todos: TodosStructure[];
}

const TodoList = ({ todos }: TodoListProps): JSX.Element => {
  return (
    <ul className="todos-list" aria-label="list of todos">
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
