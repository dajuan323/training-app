import React from "react";
import "./App.css";
import TopNavBar from "./components/navbars/TopNavBar";
// import { Route } from "react-router-dom";
// import Home from "./pages/Home";

// import AppRoutes from "./routes/routes";
import TodoForm from "./features/todos/TodoForm";
import TodoTable from "./features/todos/TodoTable";

function App() {
  return (
    <React.Fragment>
      <TopNavBar />
      <TodoForm />
      <TodoTable />
    </React.Fragment>
  );
}

export default App;
