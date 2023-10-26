import React from "react";
import "./App.css";
import TopNavBar from "./components/navbars/TopNavBar";
import { Routes, Route } from "react-router-dom";
import ReduxCounter from "./pages/ReduxCounter";
import Callback from "./pages/Callback";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import ShoppingCart from "./pages/ShoppingCart";
import Contextual from "./pages/Contextual";
import { DataProvider } from "./features/context/InceptionContext";

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <TopNavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todolist" element={<TodoList />} />
          <Route path="counter" element={<ReduxCounter />} />
          <Route path="shopping" element={<ShoppingCart />} />
          <Route path="callback/*" element={<Callback />}>
            <Route path=":userId/" element={<Callback />} />
          </Route>
          <Route path="contextual" element={<Contextual />} />
        </Routes>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
