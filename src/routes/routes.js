import React from "react";
import { Route } from "react-router-dom";
import TodoList from "../pages/TodoList";
import PostsList from "../features/post/PostsList";
import Counter from "../features/counter/Counter";
import Callback from "../pages/Callback";
function AppRoutes() {
  return (
    <>
      <Route path="todolist" element={TodoList} />
      <Route path="posts" element={PostsList} />
      <Route path="counter" element={Counter} />
      <Route path="callback" element={Callback} />
    </>
  );
}

export default AppRoutes;
