import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [] // Initialize as an empty array
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => { 
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text; // Update the text directly
      }
    },
  },
});

export const { addtodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
