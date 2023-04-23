import React from "react";
import "./todostyles.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./todoSlice";

const TodoTable = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = (todo) => {
    dispatch(updateTodo(todo));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th> <th>Completed</th> <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.completed ? "Yes" : "No"}</td>
            <td>
              <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
              <button
                onClick={() =>
                  handleUpdateTodo({
                    ...todo,
                    completed: !todo.completed,
                  })
                }
              >
                {todo.completed ? "Uncomplete" : "Complete"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
