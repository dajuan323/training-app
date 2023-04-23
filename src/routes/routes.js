import React from "react";
import { Route, Routes } from "react-router-dom";
import Todos from "../features/todos/TodoForm";
import PostsList from "../features/post/PostsList";
import Counter from "../features/counter/Counter";

function AppRoutes() {
  return (
    <Routes>
      <Route path="todos" element={Todos} />
      <Route path="posts" element={PostsList} />
      <Route path="counter" element={Counter} />
    </Routes>
  );
}

export default AppRoutes;
