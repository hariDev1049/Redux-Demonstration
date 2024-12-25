import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  selectedTodo: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo : (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
        dueDate: action.payload.dueDate,
      };
      state.todos.push(newTodo);
    },
    deleteTodo : (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      state.selectedTodo = null;
    },
    updateTodo : (state, action) => {
      state.selectedTodo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;