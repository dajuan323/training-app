import React from "react";
import "./App.css";
import TopNavBar from "./components/navbars/TopNavBar";
import { Routes, Route } from "react-router-dom";
import ReduxCounter from "./pages/ReduxCounter";
import Callback from "./pages/Callback";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="counter" element={<ReduxCounter />} />
        <Route path="shopping" element={<ShoppingCart />} />
        <Route path="callback/*" element={<Callback />}>
          <Route path=":userId/" element={<Callback />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
