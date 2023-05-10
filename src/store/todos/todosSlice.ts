import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStructure } from "../../types";

export interface TodosState {
  todos: TodosStructure[];
}

const initialTodosState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodosState,
  reducers: {
    loadTodos: (currentTodos, action: PayloadAction<TodosStructure[]>) => ({
      ...currentTodos,
      todos: [...action.payload],
    }),
  },
});

export const { loadTodos: loadTodosActionCreator } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
