import { TodosStructure } from "../../types";

interface TodoCardProps {
  todo: TodosStructure;
}

const TodoCard = ({ todo: { name, isDone } }: TodoCardProps): JSX.Element => {
  const isDoneForCheckBox: number = isDone ? 1 : 0;
  return (
    <>
      <header className="todo-header">
        <h2 className="todo-header__title">{name}</h2>
        <button className="todo-header__button">Delete</button>
      </header>
      <label>
        <input type="checkbox" value={isDoneForCheckBox} />
      </label>
    </>
  );
};

export default TodoCard;
