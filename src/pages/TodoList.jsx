import React from "react";
import TodoForm from "../features/todos/TodoForm";
import TodoTable from "../features/todos/TodoTable";

function TodoList() {
  return (
    <>
      <TodoForm />
      <TodoTable />
    </>
  );
}

export default TodoList;
