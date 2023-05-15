import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/post/postSlice";
import usersReducer from "../features/users/usersSlice";
import todoReducer from "../features/todos/todoSlice";
import cartReducer from "../features/shopping/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    todos: todoReducer,
    cart: cartReducer,
  },
});
