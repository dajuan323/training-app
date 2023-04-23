import React from "react";
function TodoItem(props) {
  const deleteTodo = () => {
    props.onCheck(props.id);
  };
  return (
    <div className="todo">
      <input type="checkbox"></input>
      <label>{props.text}</label>
      <button onClick={deleteTodo}>❌</button>
    </div>
  );
}

export default TodoItem;
